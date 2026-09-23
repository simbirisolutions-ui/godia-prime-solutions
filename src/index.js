const json = (data, status=200, headers={}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {"content-type":"application/json; charset=utf-8", ...headers}
  });

const id = (prefix="id") => `${prefix}_${crypto.randomUUID()}`;
const now = () => new Date().toISOString();

function corsHeaders(origin) {
  const allowed = origin || "*";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Vary": "Origin"
  };
}

function cleanPhone(v) {
  if (!v) return null;
  const s = String(v).trim().replace(/[^\d+]/g, "");
  if (s.startsWith("07") || s.startsWith("01")) return "+254" + s.slice(1);
  if (s.startsWith("254")) return "+" + s;
  return s;
}

function required(body, fields) {
  for (const f of fields) {
    if (body[f] === undefined || body[f] === null || String(body[f]).trim() === "")
      throw new Error(`Missing field: ${f}`);
  }
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R=6371, p=Math.PI/180;
  const a=Math.sin((lat2-lat1)*p/2)**2 +
    Math.cos(lat1*p)*Math.cos(lat2*p)*Math.sin((lon2-lon1)*p/2)**2;
  return 2*R*Math.asin(Math.sqrt(a));
}

async function handle(request, env) {
  const url = new URL(request.url);
  const method = request.method;
  const path = url.pathname;

  if (method === "OPTIONS")
    return new Response(null,{headers:corsHeaders(request.headers.get("Origin"))});

  try {
    if (path === "/api/health")
      return json({ok:true, app:env.APP_NAME || "GODIA PRIME", time:now()});

    if (path === "/api/location/counties" && method === "GET") {
      return json(await env.DB.prepare(
        "SELECT id,name,latitude,longitude FROM counties ORDER BY name"
      ).all());
    }

    const mSub = path.match(/^\/api\/location\/counties\/([^/]+)\/sub-counties$/);
    if (mSub && method === "GET") {
      return json(await env.DB.prepare(
        "SELECT id,name,latitude,longitude FROM sub_counties WHERE county_id=? ORDER BY name"
      ).bind(mSub[1]).all());
    }

    const mWard = path.match(/^\/api\/location\/sub-counties\/([^/]+)\/wards$/);
    if (mWard && method === "GET") {
      return json(await env.DB.prepare(
        "SELECT id,name,latitude,longitude FROM wards WHERE sub_county_id=? ORDER BY name"
      ).bind(mWard[1]).all());
    }

    if (path === "/api/categories" && method === "GET")
      return json(await env.DB.prepare("SELECT * FROM categories ORDER BY name").all());

    if (path === "/api/subcategories" && method === "GET") {
      const categoryId=url.searchParams.get("category_id");
      if (!categoryId) return json({error:"category_id required"},400);
      return json(await env.DB.prepare(
        "SELECT * FROM subcategories WHERE category_id=? ORDER BY name"
      ).bind(categoryId).all());
    }

    if (path === "/api/commodity-types" && method === "GET") {
      const subcategoryId=url.searchParams.get("subcategory_id");
      if (!subcategoryId) return json({error:"subcategory_id required"},400);
      return json(await env.DB.prepare(
        "SELECT * FROM commodity_types WHERE subcategory_id=? ORDER BY name"
      ).bind(subcategoryId).all());
    }

    if (path === "/api/brands" && method === "GET")
      return json(await env.DB.prepare("SELECT * FROM brands ORDER BY name").all());

    if (path === "/api/brands" && method === "POST") {
      const b=await request.json(); required(b,["name"]);
      const brand={id:id("brand"),name:String(b.name).trim(),created_at:now()};
      await env.DB.prepare("INSERT INTO brands(id,name,created_at) VALUES(?,?,?)")
        .bind(brand.id,brand.name,brand.created_at).run();
      return json(brand,201);
    }

    if (path === "/api/customers" && method === "POST") {
      const b=await request.json();
      required(b,["full_name","phone"]);
      const c={
        id:id("cus"), user_id:b.user_id||null, full_name:String(b.full_name).trim(),
        phone:cleanPhone(b.phone), whatsapp_number:cleanPhone(b.whatsapp_number)||cleanPhone(b.phone),
        email:b.email||null, county_id:b.county_id||null, sub_county_id:b.sub_county_id||null,
        ward_id:b.ward_id||null, area:b.area||null, address:b.address||null,
        latitude:b.latitude===""||b.latitude==null?null:Number(b.latitude),
        longitude:b.longitude===""||b.longitude==null?null:Number(b.longitude),
        delivery_instructions:b.delivery_instructions||null, created_at:now(), updated_at:now()
      };
      await env.DB.prepare(`INSERT INTO customers
        (id,user_id,full_name,phone,whatsapp_number,email,county_id,sub_county_id,ward_id,area,address,latitude,longitude,delivery_instructions,created_at,updated_at)
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(
        c.id,c.user_id,c.full_name,c.phone,c.whatsapp_number,c.email,c.county_id,c.sub_county_id,c.ward_id,
        c.area,c.address,c.latitude,c.longitude,c.delivery_instructions,c.created_at,c.updated_at
      ).run();
      return json(c,201);
    }

    if (path === "/api/businesses" && method === "POST") {
      const b=await request.json(); required(b,["owner_user_id","business_name","business_type"]);
      const x={id:id("biz"),...b};
      await env.DB.prepare(`INSERT INTO businesses
        (id,owner_user_id,business_name,business_type,county_id,sub_county_id,ward_id,area,address,latitude,longitude,delivery_available,delivery_radius_km,verification_status)
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(
        x.id,x.owner_user_id,x.business_name,x.business_type,x.county_id||null,x.sub_county_id||null,x.ward_id||null,
        x.area||null,x.address||null,x.latitude==null?null:Number(x.latitude),x.longitude==null?null:Number(x.longitude),
        x.delivery_available?1:0,x.delivery_radius_km==null?null:Number(x.delivery_radius_km),"pending"
      ).run();
      return json(x,201);
    }

    if (path === "/api/products" && method === "POST") {
      const b=await request.json();
      required(b,["supplier_business_id","commodity_type_id","product_name","price_kes"]);
      const p={
        id:id("prd"), supplier_business_id:b.supplier_business_id, commodity_type_id:b.commodity_type_id,
        brand_id:b.brand_id||null, product_name:String(b.product_name).trim(), variant:b.variant||null,
        size_value:b.size_value==null?null:Number(b.size_value), size_unit:b.size_unit||null,
        packaging:b.packaging||null, quantity_per_pack:b.quantity_per_pack==null?null:Number(b.quantity_per_pack),
        selling_unit:b.selling_unit||null, price_kes:Number(b.price_kes), minimum_order:Number(b.minimum_order||1),
        stock_quantity:Number(b.stock_quantity||0), image_key:null, batch_number:b.batch_number||null,
        manufacturing_date:b.manufacturing_date||null, expiry_date:b.expiry_date||null, tax_status:b.tax_status||null,
        status:"active", created_at:now(), updated_at:now()
      };
      await env.DB.prepare(`INSERT INTO products
        (id,supplier_business_id,commodity_type_id,brand_id,product_name,variant,size_value,size_unit,packaging,quantity_per_pack,selling_unit,price_kes,minimum_order,stock_quantity,image_key,batch_number,manufacturing_date,expiry_date,tax_status,status,created_at,updated_at)
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(
        p.id,p.supplier_business_id,p.commodity_type_id,p.brand_id,p.product_name,p.variant,p.size_value,p.size_unit,
        p.packaging,p.quantity_per_pack,p.selling_unit,p.price_kes,p.minimum_order,p.stock_quantity,p.image_key,p.batch_number,
        p.manufacturing_date,p.expiry_date,p.tax_status,p.status,p.created_at,p.updated_at
      ).run();
      return json(p,201);
    }

    if (path === "/api/products" && method === "GET") {
      const commodity=url.searchParams.get("commodity_type_id");
      const rows=commodity
        ? await env.DB.prepare(`SELECT p.*,b.business_name,b.latitude,b.longitude
          FROM products p JOIN businesses b ON b.id=p.supplier_business_id
          WHERE p.commodity_type_id=? AND p.status='active' AND b.verification_status='verified' ORDER BY p.updated_at DESC`).bind(commodity).all()
        : await env.DB.prepare(`SELECT p.*,b.business_name,b.latitude,b.longitude
          FROM products p JOIN businesses b ON b.id=p.supplier_business_id
          WHERE p.status='active' AND b.verification_status='verified' ORDER BY p.updated_at DESC`).all();
      return json(rows);
    }

    const productImage=path.match(/^\/api\/products\/([^/]+)\/image$/);
    if (productImage && method === "POST") {
      if (!env.PRODUCT_IMAGES) return json({error:"R2 binding not configured"},503);
      const productId=productImage[1], contentType=request.headers.get("content-type")||"application/octet-stream";
      if (!contentType.startsWith("image/")) return json({error:"Only image uploads are accepted"},415);
      const key=`products/${productId}/${crypto.randomUUID()}`;
      await env.PRODUCT_IMAGES.put(key,request.body,{httpMetadata:{contentType}});
      await env.DB.prepare("UPDATE products SET image_key=?,updated_at=? WHERE id=?").bind(key,now(),productId).run();
      return json({ok:true,key});
    }

    const imageGet=path.match(/^\/api\/product-images\/(.+)$/);
    if (imageGet && method === "GET") {
      if (!env.PRODUCT_IMAGES) return new Response("R2 not configured",{status:503});
      const obj=await env.PRODUCT_IMAGES.get(imageGet[1]);
      if (!obj) return new Response("Not found",{status:404});
      return new Response(obj.body,{headers:{
        "Content-Type":obj.httpMetadata?.contentType||"application/octet-stream",
        "Cache-Control":"public, max-age=31536000, immutable"
      }});
    }

    if (path === "/api/orders" && method === "POST") {
      const b=await request.json();
      required(b,["customer_id","supplier_business_id","items"]);
      if (!Array.isArray(b.items)||!b.items.length) return json({error:"items required"},400);
      let subtotal=0, items=[];
      for (const item of b.items) {
        required(item,["product_id","quantity"]);
        const p=await env.DB.prepare(`SELECT id,product_name,price_kes,stock_quantity,minimum_order,status
          FROM products WHERE id=?`).bind(item.product_id).first();
        if (!p || p.status!=="active") throw new Error("Product is unavailable");
        const q=Number(item.quantity);
        if (!(q>0) || q<p.minimum_order) throw new Error(`Invalid quantity for ${p.product_name}`);
        if (q>p.stock_quantity) throw new Error(`Insufficient stock for ${p.product_name}`);
        const line=Math.round(p.price_kes*q);
        subtotal+=line;
        items.push({id:id("item"),product_id:p.id,product_name_snapshot:p.product_name,price_kes_snapshot:p.price_kes,quantity:q,line_total_kes:line});
      }
      const deliveryFee=Number(b.delivery_fee_kes||0);
      const order={id:id("ord"),customer_id:b.customer_id,supplier_business_id:b.supplier_business_id,
        status:"pending",payment_status:"unpaid",subtotal_kes:subtotal,delivery_fee_kes:deliveryFee,total_kes:subtotal+deliveryFee,
        delivery_county_id:b.delivery_county_id||null,delivery_sub_county_id:b.delivery_sub_county_id||null,
        delivery_ward_id:b.delivery_ward_id||null,delivery_area:b.delivery_area||null,delivery_address:b.delivery_address||null,
        delivery_latitude:b.delivery_latitude==null?null:Number(b.delivery_latitude),
        delivery_longitude:b.delivery_longitude==null?null:Number(b.delivery_longitude),
        receipt_key:null,created_at:now(),updated_at:now()};
      const stmts=[
        env.DB.prepare(`INSERT INTO orders
          (id,customer_id,supplier_business_id,status,payment_status,subtotal_kes,delivery_fee_kes,total_kes,delivery_county_id,delivery_sub_county_id,delivery_ward_id,delivery_area,delivery_address,delivery_latitude,delivery_longitude,receipt_key,created_at,updated_at)
          VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(
          order.id,order.customer_id,order.supplier_business_id,order.status,order.payment_status,order.subtotal_kes,order.delivery_fee_kes,order.total_kes,
          order.delivery_county_id,order.delivery_sub_county_id,order.delivery_ward_id,order.delivery_area,order.delivery_address,order.delivery_latitude,order.delivery_longitude,
          order.receipt_key,order.created_at,order.updated_at),
        ...items.map(i=>env.DB.prepare(`INSERT INTO order_items
          (id,order_id,product_id,product_name_snapshot,price_kes_snapshot,quantity,line_total_kes)
          VALUES(?,?,?,?,?,?,?)`).bind(i.id,order.id,i.product_id,i.product_name_snapshot,i.price_kes_snapshot,i.quantity,i.line_total_kes)),
        ...items.map(i=>env.DB.prepare("UPDATE products SET stock_quantity=stock_quantity-?,updated_at=? WHERE id=?").bind(i.quantity,now(),i.product_id))
      ];
      await env.DB.batch(stmts);
      return json({order,items},201);
    }

    if (path === "/api/orders" && method === "GET") {
      const customerId=url.searchParams.get("customer_id");
      const supplierId=url.searchParams.get("supplier_business_id");
      let q="SELECT * FROM orders WHERE 1=1", args=[];
      if(customerId){q+=" AND customer_id=?";args.push(customerId)}
      if(supplierId){q+=" AND supplier_business_id=?";args.push(supplierId)}
      q+=" ORDER BY created_at DESC LIMIT 100";
      return json(await env.DB.prepare(q).bind(...args).all());
    }

    const orderOne=path.match(/^\/api\/orders\/([^/]+)$/);
    if(orderOne && method==="GET") {
      const order=await env.DB.prepare("SELECT * FROM orders WHERE id=?").bind(orderOne[1]).first();
      if(!order) return json({error:"Order not found"},404);
      const items=await env.DB.prepare("SELECT * FROM order_items WHERE order_id=?").bind(order.id).all();
      const customer=await env.DB.prepare("SELECT full_name,phone,whatsapp_number,email,area,address FROM customers WHERE id=?").bind(order.customer_id).first();
      return json({order,items,customer});
    }

    return json({error:"Route not found"},404);
  } catch (e) {
    return json({error:e.message || "Server error"},400);
  }
}

export default {
  async fetch(request, env, ctx) {
    const response = await handle(request,env,ctx);
    const h=new Headers(response.headers);
    const origin=request.headers.get("Origin");
    Object.entries(corsHeaders(origin)).forEach(([k,v])=>h.set(k,v));
    return new Response(response.body,{status:response.status,headers:h});
  }
};
