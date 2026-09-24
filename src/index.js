const COUNTY_DATA = {
  "Mombasa":["Changamwe","Jomvu","Kisauni","Likoni","Mvita","Nyali"],
  "Kwale":["Kinango","Lunga Lunga","Matuga","Msambweni"],
  "Kilifi":["Ganze","Kaloleni","Kilifi North","Kilifi South","Magarini","Malindi","Rabai"],
  "Tana River":["Bura","Galole","Garsen"],
  "Lamu":["Lamu East","Lamu West"],
  "Taita-Taveta":["Mwatate","Taveta","Voi","Wundanyi"],
  "Garissa":["Balambala","Dadaab","Fafi","Garissa Township","Hulugho","Ijara","Lagdera"],
  "Wajir":["Eldas","Tarbaj","Wajir East","Wajir North","Wajir South","Wajir West"],
  "Mandera":["Banissa","Lafey","Mandera East","Mandera North","Mandera South","Mandera West"],
  "Marsabit":["Laisamis","Moyale","North Horr","Saku"],
  "Isiolo":["Garbatulla","Isiolo North","Isiolo South"],
  "Meru":["Buuri","Igembe Central","Igembe North","Igembe South","Imenti Central","Imenti North","Imenti South","Tigania East","Tigania West"],
  "Tharaka-Nithi":["Chuka","Igambang'ombe","Maara","Muthambi","Tharaka"],
  "Embu":["Manyatta","Mbeere North","Mbeere South","Runyenjes"],
  "Kitui":["Kitui Central","Kitui East","Kitui Rural","Kitui South","Kitui West","Mwingi Central","Mwingi North","Mwingi West"],
  "Machakos":["Athi River","Kangundo","Kathiani","Machakos Town","Masinga","Matungulu","Mwala","Yatta"],
  "Makueni":["Kaiti","Kibwezi East","Kibwezi West","Kilome","Makueni","Mbooni"],
  "Nyandarua":["Kinangop","Kipipiri","Ndaragwa","Ol Joro Orok","Ol Kalou"],
  "Nyeri":["Kieni","Mathira","Mukurweini","Nyeri Town","Othaya","Tetu"],
  "Kirinyaga":["Gichugu","Kirinyaga Central","Kirinyaga East","Kirinyaga West","Mwea"],
  "Murang'a":["Gatanga","Kahuro","Kandara","Kangema","Kigumo","Kiharu","Maragwa","Mathioya"],
  "Kiambu":["Gatundu North","Gatundu South","Githunguri","Juja","Kabete","Kiambaa","Kiambu","Kikuyu","Lari","Limuru","Ruiru","Thika"],
  "Turkana":["Loima","Turkana Central","Turkana East","Turkana North","Turkana South","Turkana West"],
  "West Pokot":["Kacheliba","Kapenguria","Pokot South","Sigor"],
  "Samburu":["Samburu East","Samburu North","Samburu West"],
  "Trans Nzoia":["Cherangany","Endebess","Kiminini","Kwanza","Saboti"],
  "Uasin Gishu":["Ainabkoi","Kapseret","Kesses","Moiben","Soy","Turbo"],
  "Elgeyo-Marakwet":["Keiyo North","Keiyo South","Marakwet East","Marakwet West"],
  "Nandi":["Aldai","Chesumei","Emgwen","Mosop","Nandi Hills","Tinderet"],
  "Baringo":["Baringo Central","Baringo North","Baringo South","Eldama Ravine","Mogotio","Tiaty"],
  "Laikipia":["Laikipia East","Laikipia North","Laikipia West","Nyahururu"],
  "Nakuru":["Bahati","Gilgil","Kuresoi North","Kuresoi South","Molo","Naivasha","Nakuru East","Nakuru North","Nakuru West","Njoro","Rongai","Subukia"],
  "Narok":["Narok East","Narok North","Narok South","Narok West","Trans Mara East","Trans Mara West"],
  "Kajiado":["Kajiado Central","Kajiado East","Kajiado North","Kajiado South","Kajiado West"],
  "Kericho":["Ainamoi","Belgut","Bureti","Kipkelion East","Kipkelion West","Soin/Sigowet"],
  "Bomet":["Bomet Central","Bomet East","Chepalungu","Konoin","Sotik"],
  "Kakamega":["Butere","Ikolomani","Khwisero","Likuyani","Lugari","Lurambi","Malava","Matungu","Mumias East","Mumias West","Navakholo","Shinyalu"],
  "Vihiga":["Emuhaya","Hamisi","Luanda","Sabatia","Vihiga"],
  "Bungoma":["Bumula","Kabuchai","Kanduyi","Kimilili","Mt Elgon","Sirisia","Tongaren","Webuye East","Webuye West"],
  "Busia":["Bunyala","Butula","Nambale","Matayos","Samia","Teso North","Teso South"],
  "Siaya":["Alego Usonga","Bondo","Gem","Rarieda","Ugenya","Ugunja"],
  "Kisumu":["Kisumu Central","Kisumu East","Kisumu West","Muhoroni","Nyakach","Nyando","Seme"],
  "Homa Bay":["Homa Bay Town","Kabondo Kasipul","Karachuonyo","Kasipul","Mbita","Ndhiwa","Rangwe","Suba"],
  "Migori":["Awendo","Kuria East","Kuria West","Mabera","Ntimaru","Rongo","Suna East","Suna West","Uriri"],
  "Kisii":["Bobasi","Bomachoge Borabu","Bomachoge Chache","Bonchari","Kitutu Chache North","Kitutu Chache South","Nyaribari Chache","Nyaribari Masaba","South Mugirango"],
  "Nyamira":["Borabu","Manga","Masaba North","Nyamira North","Nyamira South"],
  "Nairobi":["Dagoretti North","Dagoretti South","Embakasi Central","Embakasi East","Embakasi North","Embakasi South","Embakasi West","Kamukunji","Kasarani","Kibra","Langata","Makadara","Mathare","Roysambu","Ruaraka","Starehe","Westlands"]
};
const HEADERS={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization"};
function json(d,s=200){return new Response(JSON.stringify(d),{status:s,headers:HEADERS})}
function clean(v,m=200){return String(v??"").trim().slice(0,m)}
async function readJSON(r){try{return await r.json()}catch{return{}}}
function normalizePhone(p){let s=String(p??"").replace(/[^0-9+]/g,"");if(s.startsWith("+"))s=s.slice(1);if(s.startsWith("0"))s="254"+s.slice(1);return s}
function validCoordinates(lat,lng){return Number.isFinite(lat)&&Number.isFinite(lng)&&lat>=-90&&lat<=90&&lng>=-180&&lng<=180}
function haversine(lat1,lon1,lat2,lon2){const R=6371;const dLat=(lat2-lat1)*Math.PI/180;const dLon=(lon2-lon1)*Math.PI/180;const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}
function page(){
return new Response(`<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>GODIA PRIME</title><style>
:root{--green:#0f7a3a;--orange:#ff8c00;--dark:#111827;--gray:#6b7280;--light:#f9fafb;--border:#e5e7eb;--white:#fff}
*{box-sizing:border-box;margin:0;padding:0}body{font-family:sans-serif;background:var(--light);color:var(--dark)}
.topbar{position:sticky;top:0;z-index:50;background:var(--white);border-bottom:1px solid var(--border);padding:10px 12px;display:flex;justify-content:space-between}
.logo{font-weight:900;color:var(--green)}.logo span{color:var(--orange)}
.btn{padding:9px 13px;border-radius:10px;font-weight:800;font-size:12px;border:none;cursor:pointer}
.btn-green{background:var(--green);color:#fff}.btn-outline{background:#fff;border:1px solid var(--border)}
.hero{background:linear-gradient(135deg,#0f7a3a,#0a5a2b);color:#fff;padding:20px 12px}
.search-wrap{display:flex;gap:6px;background:#fff;padding:5px;border-radius:12px;margin-top:12px}
.search-wrap input{flex:1;border:none;outline:none;padding:10px}.search-wrap button{background:var(--green);color:#fff;border:none;padding:10px 14px;border-radius:10px;font-weight:900}
.container{max-width:900px;margin:0 auto;padding:0 12px 90px}
.counties{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}
.c-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:11px;cursor:pointer}
.biz{margin-top:10px}.b-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:11px;margin-top:8px}
.b-card b{font-size:14px}.meta{font-size:11px;color:var(--gray);margin:4px 0}
.actions{display:flex;gap:6px;margin-top:8px}.actions a{flex:1;text-align:center;padding:8px;border-radius:8px;font-weight:800;font-size:11px;text-decoration:none}
.call{background:var(--green);color:#fff}.wa{background:#25D366;color:#fff}.dir{background:#fff;border:1px solid var(--border)}
.bottom{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid var(--border);display:flex;padding:6px}
.bn{flex:1;text-align:center;font-size:10px;font-weight:800;color:var(--gray);cursor:pointer}.bn.active{color:var(--green)}
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100;display:none;align-items:flex-end;justify-content:center;padding:10px}
.modal-bg.open{display:flex}.modal{background:#fff;width:100%;max-width:500px;border-radius:16px 16px 10px 10px;max-height:92vh;overflow:auto}
.m-head{position:sticky;top:0;background:#fff;padding:12px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;font-weight:900}
.m-body{padding:12px;display:grid;gap:10px}.field label{font-size:11px;font-weight:800;display:block;margin-bottom:3px}
.field input,.field select,.field textarea{width:100%;padding:10px;border:1px solid var(--border);border-radius:9px;font-size:13px}
.toast{position:fixed;left:12px;right:12px;bottom:70px;background:#111;color:#fff;padding:12px;border-radius:10px;display:none;z-index:200}.toast.show{display:block}
.subs{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin:10px 0}
.subs button{background:#fff;border:1px solid var(--border);padding:9px;border-radius:10px;font-weight:800;font-size:12px;text-align:left;cursor:pointer}
</style></head><body>
<div class="topbar"><div class="logo">GODIA <span>PRIME</span></div><div><button class="btn btn-outline" onclick="openAcc()">Account</button> <button class="btn btn-green" onclick="openBiz()">+ Biashara</button></div></div>
<div class="hero"><h2 style="font-weight:900;line-height:1.1">BIASHARA ZINAUNGANISHWA.<br>FURSA ZINASONGEZWA.</h2><p style="font-size:12px;opacity:.9;margin-top:6px">47 Counties • GPS Near Me • WhatsApp</p><div class="search-wrap"><input id="q" placeholder="Search business..."/><button onclick="doSearch()">Search</button></div><div style="display:flex;gap:8px;margin-top:10px;font-size:11px;font-weight:700"><span style="background:rgba(255,255,255,.18);padding:5px 8px;border-radius:8px;cursor:pointer" onclick="useMyLocation()">📍 Use My Location</span><span style="background:rgba(255,255,255,.18);padding:5px 8px;border-radius:8px;cursor:pointer" onclick="showHome()">🏠 All Counties</span></div></div>
<div class="container">
<div id="bread" style="font-size:11px;margin:10px 0;color:var(--green);font-weight:800"></div>
<div id="countiesSec"><div style="display:flex;justify-content:space-between;margin-top:10px"><b>Chagua County</b><small id="cCount" style="color:var(--gray)"></small></div><div id="counties" class="counties"></div></div>
<div id="subSec" style="display:none"><div style="display:flex;justify-content:space-between;margin-top:10px"><b id="selCounty"></b><small onclick="showHome()" style="color:var(--green);cursor:pointer;font-weight:800">← Back</small></div><div id="subGrid" class="subs"></div><div style="margin-top:12px"><b>Businesses</b> <small id="bizCount"></small></div><div id="bizList" class="biz"></div></div>
<div id="searchSec" style="display:none"><div style="display:flex;justify-content:space-between;margin-top:10px"><b>Search Results</b><small onclick="showHome()" style="color:var(--green);cursor:pointer;font-weight:800">Clear</small></div><div id="searchList" class="biz"></div></div>
<div id="nearSec" style="display:none"><div style="display:flex;justify-content:space-between;margin-top:10px"><b>Nearby (50KM)</b><small id="nearStat"></small></div><div id="nearList" class="biz"></div></div>
</div>
<div class="bottom"><div class="bn active" onclick="showHome()">🏠<br>Home</div><div class="bn" onclick="useMyLocation()">📍<br>Near Me</div><div class="bn" onclick="openBiz()">➕<br>Add</div><div class="bn" onclick="openAcc()">👤<br>Account</div></div>
<div id="bizModal" class="modal-bg"><div class="modal"><div class="m-head"><span>Sajili Biashara</span><span onclick="closeBiz()" style="cursor:pointer">✕</span></div><div class="m-body">
<div class="field"><label>Business Name *</label><input id="b_name" placeholder="e.g. Migori Hardware"/></div>
<div class="field"><label>Phone *</label><input id="b_phone" placeholder="07..."/></div>
<div class="field"><label>County *</label><select id="b_county" onchange="fillSub()"></select></div>
<div class="field"><label>Sub-County *</label><select id="b_sub"></select></div>
<div class="field"><label>Service</label><input id="b_service" placeholder="Hardware, Saloon..."/></div>
<div class="field"><label>Description</label><textarea id="b_desc"></textarea></div>
<div class="field"><label>GPS (optional)</label><div style="display:flex;gap:6px"><input id="b_lat" placeholder="Lat"/><input id="b_lng" placeholder="Lng"/></div><button class="btn btn-outline" style="margin-top:6px;width:100%" onclick="getLocForForm()">📍 Use My Current Location</button></div>
<button class="btn btn-green" style="width:100%;padding:12px" onclick="submitBiz()">Submit</button>
</div></div></div>
<div id="accModal" class="modal-bg"><div class="modal"><div class="m-head"><span>Request Account</span><span onclick="closeAcc()" style="cursor:pointer">✕</span></div><div class="m-body">
<div class="field"><label>Name *</label><input id="a_name"/></div>
<div class="field"><label>Phone *</label><input id="a_phone"/></div>
<div class="field"><label>Role *</label><select id="a_role"><option value="business_owner">Business Owner</option><option value="customer">Customer</option><option value="supplier">Supplier</option><option value="agent">Agent</option></select></div>
<button class="btn btn-green" style="width:100%" onclick="submitAcc()">Request</button>
</div></div></div>
<div id="toast" class="toast"></div>
<script>
const COUNTY_DATA_INNER = COUNTY_DATA;
let curCounty=null,curSub=null,curPos=null;
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function showHome(){document.getElementById('countiesSec').style.display='block';document.getElementById('subSec').style.display='none';document.getElementById('searchSec').style.display='none';document.getElementById('nearSec').style.display='none';document.getElementById('bread').textContent='Home > All Counties';renderCounties()}
function renderCounties(){const g=document.getElementById('counties');document.getElementById('cCount').textContent=Object.keys(COUNTY_DATA_INNER).length+' counties';g.innerHTML=Object.keys(COUNTY_DATA_INNER).sort().map(c=>\`<div class="c-card" onclick="openCounty('\${c}')"><b>\${c}</b><br><small>\${COUNTY_DATA_INNER[c].length} sub-counties</small></div>\`).join('');const bc=document.getElementById('b_county');if(bc&&bc.options.length===0){bc.innerHTML='<option value="">Chagua County</option>'+Object.keys(COUNTY_DATA_INNER).sort().map(c=>\`<option value="\${c}">\${c}</option>\`).join('')}}
function fillSub(){const c=document.getElementById('b_county').value;const s=document.getElementById('b_sub');if(!c||!COUNTY_DATA_INNER[c]){s.innerHTML='<option value="">Chagua Sub-County</option>';return}s.innerHTML='<option value="">Chagua Sub-County</option>'+COUNTY_DATA_INNER[c].map(sc=>\`<option value="\${sc}">\${sc}</option>\`).join('')}
async function openCounty(county){curCounty=county;curSub=null;document.getElementById('countiesSec').style.display='none';document.getElementById('searchSec').style.display='none';document.getElementById('nearSec').style.display='none';document.getElementById('subSec').style.display='block';document.getElementById('selCounty').textContent=county;document.getElementById('bread').textContent='Home > '+county;const sg=document.getElementById('subGrid');sg.innerHTML=COUNTY_DATA_INNER[county].map(sc=>\`<button onclick="openSub('\${sc}')">\${sc}</button>\`).join('');await loadBiz()}
async function openSub(sc){curSub=sc;document.getElementById('bread').textContent='Home > '+curCounty+' > '+sc;await loadBiz()}
async function loadBiz(){const list=document.getElementById('bizList');list.innerHTML='<div style="padding:20px;text-align:center;color:#6b7280">Loading...</div>';try{let url='/api/businesses?status=approved';if(curCounty)url+='&county='+encodeURIComponent(curCounty);if(curSub)url+='&subcounty='+encodeURIComponent(curSub);const r=await fetch(url);const j=await r.json();const arr=j.data||[];document.getElementById('bizCount').textContent='('+arr.length+')';if(arr.length===0){list.innerHTML='<div style="background:#fff;border:1px dashed #e5e7eb;border-radius:12px;padding:20px;text-align:center;color:#6b7280"><b>No approved businesses yet</b><br><small>In '+curCounty+(curSub?' > '+curSub:'')+'. Be first!</small></div>';return}list.innerHTML=arr.map(b=>card(b)).join('')}catch(e){list.innerHTML='Error: '+e.message}}
function card(b){const phone=b.phone||b.owner_phone||'';const name=b.name||b.business_name||'Business';const lat=b.latitude,lng=b.longitude;let dist='';if(curPos&&lat&&lng){const d=haversine(curPos.lat,curPos.lng,lat,lng);dist=' • '+d.toFixed(1)+'km'}return \`<div class="b-card"><div style="display:flex;justify-content:space-between"><b>\${name}</b><span style="font-size:10px;background:#e6f4ec;color:#0a5a2b;padding:2px 6px;border-radius:10px;font-weight:800">\${b.status}</span></div><div class="meta">\${b.county||''} \${b.subcounty?'• '+b.subcounty:''} \${b.service?'• '+b.service:''}\${dist}</div><div class="meta">\${b.description||''}</div><div class="actions">\${phone?\`<a class="call" href="tel:\${phone}">📞 Call</a><a class="wa" href="https://wa.me/\${phone.replace(/[^0-9]/g,'')}">💬 WhatsApp</a>\`:''}\${lat&&lng?\`<a class="dir" href="https://www.google.com/maps?q=\${lat},\${lng}" target="_blank">📍 Direction</a>\`:''}</div></div>\`}
async function doSearch(){const q=document.getElementById('q').value.trim();if(!q){toast('Type search');return}document.getElementById('countiesSec').style.display='none';document.getElementById('subSec').style.display='none';document.getElementById('nearSec').style.display='none';document.getElementById('searchSec').style.display='block';const list=document.getElementById('searchList');list.innerHTML='Loading...';try{const r=await fetch('/api/search?q='+encodeURIComponent(q));const j=await r.json();const arr=j.data||[];if(arr.length===0){list.innerHTML='<div style="background:#fff;border:1px dashed #e5e7eb;padding:20px;border-radius:12px;text-align:center">No results for '+q+'</div>';return}list.innerHTML=arr.map(b=>card(b)).join('')}catch(e){list.innerHTML='Error: '+e.message}}
async function useMyLocation(){if(!navigator.geolocation){toast('GPS not supported');return}toast('Getting location...');navigator.geolocation.getCurrentPosition(async pos=>{curPos={lat:pos.coords.latitude,lng:pos.coords.longitude};document.getElementById('countiesSec').style.display='none';document.getElementById('subSec').style.display='none';document.getElementById('searchSec').style.display='none';document.getElementById('nearSec').style.display='block';document.getElementById('bread').textContent='Near Me • '+curPos.lat.toFixed(4)+', '+curPos.lng.toFixed(4);const list=document.getElementById('nearList');list.innerHTML='Loading nearby...';document.getElementById('nearStat').textContent='searching 50km...';try{const r=await fetch('/api/businesses/nearby?lat='+curPos.lat+'&lng='+curPos.lng+'&radius=50');const j=await r.json();const arr=j.data||[];document.getElementById('nearStat').textContent=arr.length+' found';if(arr.length===0){list.innerHTML='<div style="background:#fff;border:1px dashed #e5e7eb;padding:20px;border-radius:12px;text-align:center">No businesses within 50km.</div>';return}list.innerHTML=arr.map(b=>card(b)).join('')}catch(e){list.innerHTML='Error: '+e.message}},err=>{toast('GPS failed: '+err.message)},{enableHighAccuracy:true,timeout:10000})}
function getLocForForm(){if(!navigator.geolocation){toast('No GPS');return}toast('Getting GPS...');navigator.geolocation.getCurrentPosition(p=>{document.getElementById('b_lat').value=p.coords.latitude;document.getElementById('b_lng').value=p.coords.longitude;toast('Location captured!')},e=>toast('GPS error: '+e.message))}
function openBiz(){document.getElementById('bizModal').classList.add('open');renderCounties()} function closeBiz(){document.getElementById('bizModal').classList.remove('open')}
function openAcc(){document.getElementById('accModal').classList.add('open')} function closeAcc(){document.getElementById('accModal').classList.remove('open')}
async function submitBiz(){const name=document.getElementById('b_name').value.trim();const phone=document.getElementById('b_phone').value.trim();const county=document.getElementById('b_county').value;const sub=document.getElementById('b_sub').value;const service=document.getElementById('b_service').value.trim();const desc=document.getElementById('b_desc').value.trim();const lat=parseFloat(document.getElementById('b_lat').value);const lng=parseFloat(document.getElementById('b_lng').value);if(!name||!phone||!county||!sub){toast('Fill name, phone, county, subcounty *');return}try{const r=await fetch('/api/businesses',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({business_name:name,owner_phone:phone,county,subcounty:sub,service,description:desc,latitude:Number.isFinite(lat)?lat:null,longitude:Number.isFinite(lng)?lng:null})});const j=await r.json();if(!r.ok) throw new Error(j.error||'Failed');toast('✅ Submitted! pending_approval');closeBiz()}catch(e){toast('Error: '+e.message)}}
async function submitAcc(){const name=document.getElementById('a_name').value.trim();const phone=document.getElementById('a_phone').value.trim();const role=document.getElementById('a_role').value;if(!name||!phone){toast('Fill name & phone');return}try{const r=await fetch('/api/account-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,phone,role})});const j=await r.json();if(!r.ok) throw new Error(j.error||'Failed');toast('✅ Request sent - pending');closeAcc()}catch(e){toast('Error: '+e.message)}}
renderCounties(); showHome();
</script></body></html>`,{headers:{"Content-Type":"text/html; charset=utf-8"}});
}
export default {
  async fetch(request, env, ctx){
    const url = new URL(request.url);
    const method = request.method.toUpperCase();
    if(method==="OPTIONS") return new Response(null,{status:204,headers:HEADERS});
    if(url.pathname==="/api/health"){return json({ok:true, time:new Date().toISOString(), db:!!env.DB, counties:Object.keys(COUNTY_DATA).length});}
    if(url.pathname==="/api/counties"){return json({counties:COUNTY_DATA, total:Object.keys(COUNTY_DATA).length});}
    if(url.pathname==="/api/businesses" && method==="GET"){
      try{
        const county=clean(url.searchParams.get("county"),100);
        const subcounty=clean(url.searchParams.get("subcounty"),100);
        const service=clean(url.searchParams.get("service"),100);
        const status=clean(url.searchParams.get("status")||"approved",30);
        const limit=Math.min(parseInt(url.searchParams.get("limit")||"100"),200);
        let sql=`SELECT id, business_name AS name, business_name, owner_phone AS phone, owner_phone, county, subcounty, service, description, latitude, longitude, status, created_at, updated_at FROM businesses WHERE 1=1`;
        const params=[];
        if(status){sql+=` AND status=?`;params.push(status);}
        if(county){sql+=` AND county=?`;params.push(county);}
        if(subcounty){sql+=` AND subcounty=?`;params.push(subcounty);}
        if(service){sql+=` AND service LIKE ?`;params.push(`%${service}%`);}
        sql+=` ORDER BY created_at DESC LIMIT ?`;params.push(limit);
        const res=await env.DB.prepare(sql).bind(...params).all();
        return json({data:res.results||[], count:(res.results||[]).length});
      }catch(e){return json({error:e.message},500);}
    }
    if(url.pathname==="/api/businesses" && method==="POST"){
      try{
        const body=await readJSON(request);
        const business_name=clean(body.business_name||body.name,150);
        const owner_phone=normalizePhone(body.owner_phone||body.phone||"");
        const county=clean(body.county,100);
        const subcounty=clean(body.subcounty,100);
        const service=clean(body.service,100);
        const description=clean(body.description,500);
        let latitude=body.latitude!=null?Number(body.latitude):null;
        let longitude=body.longitude!=null?Number(body.longitude):null;
        if(latitude!==null && longitude!==null){if(!validCoordinates(latitude,longitude)){latitude=null;longitude=null;}}else{latitude=null;longitude=null;}
        if(!business_name||!owner_phone||!county||!subcounty){return json({error:"business_name, owner_phone, county, subcounty required"},400);}
        if(!COUNTY_DATA[county]) return json({error:"Invalid county"},400);
        if(!COUNTY_DATA[county].includes(subcounty)) return json({error:"Invalid subcounty for county"},400);
        const id=crypto.randomUUID();
        const now=new Date().toISOString();
        await env.DB.prepare(`INSERT INTO businesses (id, owner_phone, business_name, county, subcounty, service, description, latitude, longitude, status, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`).bind(id,owner_phone,business_name,county,subcounty,service||null,description||null,latitude,longitude,'pending_approval',now,now).run();
        return json({ok:true,id,status:'pending_approval',message:'Business submitted for approval'});
      }catch(e){return json({error:e.message},500);}
    }
    if(url.pathname==="/api/search" && method==="GET"){
      try{
        const q=clean(url.searchParams.get("q")||"",100);
        if(!q) return json({data:[]});
        const like=`%${q}%`;
        const res=await env.DB.prepare(`SELECT id, business_name AS name, business_name, owner_phone AS phone, owner_phone, county, subcounty, service, description, latitude, longitude, status, created_at FROM businesses WHERE status='approved' AND (business_name LIKE ? OR service LIKE ? OR description LIKE ? OR county LIKE ? OR subcounty LIKE ?) ORDER BY created_at DESC LIMIT 100`).bind(like,like,like,like,like).all();
        return json({data:res.results||[], query:q});
      }catch(e){return json({error:e.message},500);}
    }
    if(url.pathname==="/api/businesses/nearby" && method==="GET"){
      try{
        const lat=Number(url.searchParams.get("lat"));
        const lng=Number(url.searchParams.get("lng"));
        const radius=Number(url.searchParams.get("radius")||"50");
        if(!validCoordinates(lat,lng)) return json({error:"Invalid lat/lng"},400);
        const res=await env.DB.prepare(`SELECT id, business_name AS name, business_name, owner_phone AS phone, owner_phone, county, subcounty, service, description, latitude, longitude, status FROM businesses WHERE status='approved' AND latitude IS NOT NULL AND longitude IS NOT NULL`).all();
        const all=res.results||[];
        const filtered=all.map(b=>{
          if(b.latitude==null||b.longitude==null) return null;
          const d=haversine(lat,lng,b.latitude,b.longitude);
          return {...b,distance_km:Number(d.toFixed(2))};
        }).filter(b=>b&&b.distance_km<=radius).sort((a,b)=>a.distance_km-b.distance_km).slice(0,100);
        return json({data:filtered, center:{lat,lng}, radius_km:radius, count:filtered.length});
      }catch(e){return json({error:e.message},500);}
    }
    if(url.pathname==="/api/account-request" && method==="POST"){
      try{
        const body=await readJSON(request);
        const name=clean(body.name,100);
        const phone=normalizePhone(body.phone||"");
        const role=clean(body.role||"business_owner",50);
        if(!name||!phone) return json({error:"name and phone required"},400);
        const now=new Date().toISOString();
        await env.DB.prepare(`INSERT INTO account_requests (name, phone, role, status, created_at) VALUES (?,?,?,?,?)`).bind(name,phone,role,'pending',now).run();
        return json({ok:true,status:'pending'});
      }catch(e){return json({error:e.message},500);}
    }
    if(url.pathname==="/api/admin/approve" && method==="POST"){
      try{
        const body=await readJSON(request);
        const id=clean(body.id,100);
        if(!id) return json({error:"id required"},400);
        await env.DB.prepare(`UPDATE businesses SET status='approved', updated_at=? WHERE id=?`).bind(new Date().toISOString(),id).run();
        return json({ok:true});
      }catch(e){return json({error:e.message},500);}
    }
    if(method==="GET"){return page();}
    return json({error:"Not found"},404);
  }
};
