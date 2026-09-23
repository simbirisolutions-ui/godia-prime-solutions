PRAGMA foreign_keys=ON;

CREATE TABLE IF NOT EXISTS counties (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  latitude REAL,
  longitude REAL
);

CREATE TABLE IF NOT EXISTS sub_counties (
  id TEXT PRIMARY KEY,
  county_id TEXT NOT NULL REFERENCES counties(id),
  name TEXT NOT NULL,
  latitude REAL,
  longitude REAL,
  UNIQUE(county_id,name)
);

CREATE TABLE IF NOT EXISTS wards (
  id TEXT PRIMARY KEY,
  sub_county_id TEXT NOT NULL REFERENCES sub_counties(id),
  name TEXT NOT NULL,
  latitude REAL,
  longitude REAL,
  UNIQUE(sub_county_id,name)
);

CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS subcategories (
  id TEXT PRIMARY KEY,
  category_id TEXT NOT NULL REFERENCES categories(id),
  name TEXT NOT NULL,
  UNIQUE(category_id,name)
);

CREATE TABLE IF NOT EXISTS commodity_types (
  id TEXT PRIMARY KEY,
  subcategory_id TEXT NOT NULL REFERENCES subcategories(id),
  name TEXT NOT NULL,
  UNIQUE(subcategory_id,name)
);

CREATE TABLE IF NOT EXISTS brands (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  whatsapp_number TEXT,
  role TEXT NOT NULL CHECK(role IN ('buyer','supplier','admin')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS businesses (
  id TEXT PRIMARY KEY,
  owner_user_id TEXT NOT NULL REFERENCES users(id),
  business_name TEXT NOT NULL,
  business_type TEXT NOT NULL,
  county_id TEXT REFERENCES counties(id),
  sub_county_id TEXT REFERENCES sub_counties(id),
  ward_id TEXT REFERENCES wards(id),
  area TEXT,
  address TEXT,
  latitude REAL,
  longitude REAL,
  delivery_available INTEGER NOT NULL DEFAULT 0,
  delivery_radius_km REAL,
  verification_status TEXT NOT NULL DEFAULT 'pending'
    CHECK(verification_status IN ('pending','verified','rejected')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  supplier_business_id TEXT NOT NULL REFERENCES businesses(id),
  commodity_type_id TEXT NOT NULL REFERENCES commodity_types(id),
  brand_id TEXT REFERENCES brands(id),
  product_name TEXT NOT NULL,
  variant TEXT,
  size_value REAL,
  size_unit TEXT,
  packaging TEXT,
  quantity_per_pack REAL,
  selling_unit TEXT,
  price_kes INTEGER NOT NULL CHECK(price_kes >= 0),
  minimum_order REAL NOT NULL DEFAULT 1 CHECK(minimum_order > 0),
  stock_quantity REAL NOT NULL DEFAULT 0 CHECK(stock_quantity >= 0),
  image_key TEXT,
  batch_number TEXT,
  manufacturing_date TEXT,
  expiry_date TEXT,
  tax_status TEXT,
  status TEXT NOT NULL DEFAULT 'active'
    CHECK(status IN ('active','paused','out_of_stock','removed')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customers (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp_number TEXT,
  email TEXT,
  county_id TEXT REFERENCES counties(id),
  sub_county_id TEXT REFERENCES sub_counties(id),
  ward_id TEXT REFERENCES wards(id),
  area TEXT,
  address TEXT,
  latitude REAL,
  longitude REAL,
  delivery_instructions TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_id TEXT NOT NULL REFERENCES customers(id),
  supplier_business_id TEXT NOT NULL REFERENCES businesses(id),
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK(status IN ('pending','confirmed','processing','ready','out_for_delivery','delivered','cancelled')),
  payment_status TEXT NOT NULL DEFAULT 'unpaid'
    CHECK(payment_status IN ('unpaid','pending','paid','failed','refunded')),
  subtotal_kes INTEGER NOT NULL DEFAULT 0,
  delivery_fee_kes INTEGER NOT NULL DEFAULT 0,
  total_kes INTEGER NOT NULL DEFAULT 0,
  delivery_county_id TEXT REFERENCES counties(id),
  delivery_sub_county_id TEXT REFERENCES sub_counties(id),
  delivery_ward_id TEXT REFERENCES wards(id),
  delivery_area TEXT,
  delivery_address TEXT,
  delivery_latitude REAL,
  delivery_longitude REAL,
  receipt_key TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL REFERENCES products(id),
  product_name_snapshot TEXT NOT NULL,
  price_kes_snapshot INTEGER NOT NULL,
  quantity REAL NOT NULL CHECK(quantity > 0),
  line_total_kes INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  actor_user_id TEXT REFERENCES users(id),
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  metadata_json TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_sub_counties_county ON sub_counties(county_id);
CREATE INDEX IF NOT EXISTS idx_wards_subcounty ON wards(sub_county_id);
CREATE INDEX IF NOT EXISTS idx_products_commodity ON products(commodity_type_id);
CREATE INDEX IF NOT EXISTS idx_products_supplier ON products(supplier_business_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_supplier ON orders(supplier_business_id);
