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

const HEADERS = {
  "Content-Type":"application/json; charset=utf-8",
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Methods":"GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers":"Content-Type, Authorization"
};

function json(data, status=200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: HEADERS
  });
}

function clean(value, max=200) {
  return String(value ?? "").trim().slice(0,max);
}

async function readJSON(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function page() {
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>GODIA PRIME SOLUTIONS</title>

<meta name="description"
content="GODIA PRIME SOLUTIONS - Connecting businesses, customers, suppliers and opportunities across Kenya.">

<style>

:root{
--navy:#071a33;
--navy2:#0c2749;
--gold:#ffd700;
--gold2:#f5c400;
--white:#fff;
--muted:#b9c4d2;
--green:#00c853;
--danger:#ff5252;
--card:#102c4d;
}

*{
box-sizing:border-box;
margin:0;
padding:0;
}

body{
font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
background:var(--navy);
color:white;
overflow-x:hidden;
}

button,input,select{
font:inherit;
}

button{
cursor:pointer;
}

a{
color:inherit;
}

.topbar{
position:sticky;
top:0;
z-index:1000;
background:rgba(7,26,51,.96);
backdrop-filter:blur(12px);
border-bottom:1px solid rgba(255,215,0,.2);
padding:12px 16px;
}

.nav{
max-width:1200px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
gap:15px;
}

.brand{
font-weight:900;
color:var(--gold);
letter-spacing:1px;
font-size:1.05rem;
}

.nav-actions{
display:flex;
gap:8px;
}

.small-btn{
border:1px solid rgba(255,215,0,.5);
background:transparent;
color:var(--gold);
padding:8px 12px;
border-radius:20px;
}

.hero{
min-height:75vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
padding:60px 18px;
background:
radial-gradient(circle at top,#173e69 0,#0a1e39 45%,#071a33 100%);
}

.hero-inner{
max-width:850px;
}

.logo{
width:100px;
height:100px;
margin:auto;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background:var(--gold);
color:var(--navy);
font-size:2rem;
font-weight:1000;
box-shadow:0 0 40px rgba(255,215,0,.25);
}

.logo-title{
font-size:clamp(2rem,7vw,4rem);
font-weight:1000;
color:var(--gold);
letter-spacing:2px;
margin-top:15px;
}

.tagline{
color:#fff;
font-weight:700;
letter-spacing:1px;
margin:10px 0;
}

.hero p{
color:#ccd6e3;
line-height:1.6;
}

.search{
margin:28px auto 15px;
max-width:720px;
display:flex;
background:white;
padding:6px;
border-radius:40px;
}

.search input{
flex:1;
border:0;
outline:0;
padding:13px 18px;
border-radius:30px;
min-width:0;
}

.search button{
background:var(--gold);
border:0;
border-radius:30px;
padding:0 20px;
font-weight:900;
color:var(--navy);
}

.btns{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:10px;
margin-top:18px;
}

.btn{
border:0;
border-radius:30px;
padding:13px 20px;
font-weight:800;
text-decoration:none;
display:inline-block;
}

.primary{
background:var(--gold);
color:var(--navy);
}

.secondary{
background:transparent;
border:1px solid var(--gold);
color:var(--gold);
}

.green{
background:var(--green);
color:white;
}

.section{
max-width:1200px;
margin:auto;
padding:45px 18px;
}

.section h2{
text-align:center;
color:var(--gold);
font-size:1.8rem;
margin-bottom:25px;
}

.quick-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(135px,1fr));
gap:12px;
}

.quick{
background:var(--card);
border:1px solid rgba(255,255,255,.08);
padding:18px 10px;
border-radius:16px;
text-align:center;
transition:.2s;
}

.quick:hover{
transform:translateY(-3px);
border-color:var(--gold);
}

.quick-icon{
font-size:2rem;
display:block;
margin-bottom:8px;
}

.quick strong{
font-size:.9rem;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
gap:12px;
}

.county{
background:white;
color:var(--navy);
padding:15px 10px;
border-radius:12px;
text-align:center;
font-weight:800;
cursor:pointer;
}

.county:hover{
background:var(--gold);
}

.services{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
gap:16px;
}

.service{
background:var(--card);
padding:22px;
border-radius:16px;
border-left:4px solid var(--gold);
}

.service h3{
margin-bottom:8px;
color:var(--gold);
}

.service p{
color:var(--muted);
line-height:1.5;
}

.panel{
background:var(--card);
padding:20px;
border-radius:16px;
margin-top:15px;
}

.business-card{
background:#123353;
border-radius:15px;
padding:18px;
margin:12px 0;
border:1px solid rgba(255,255,255,.07);
}

.business-card h3{
color:var(--gold);
margin-bottom:8px;
}

.business-card p{
color:#cbd6e2;
margin:5px 0;
}

.actions{
display:flex;
gap:8px;
flex-wrap:wrap;
margin-top:12px;
}

.form-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:12px;
}

input,select{
width:100%;
padding:13px;
border-radius:10px;
border:1px solid rgba(255,255,255,.15);
background:#071a33;
color:white;
outline:none;
}

input:focus,select:focus{
border-color:var(--gold);
}

.notice{
padding:14px;
border-radius:12px;
background:rgba(255,215,0,.08);
border:1px solid rgba(255,215,0,.2);
color:#f4e8a4;
margin:12px 0;
}

.stats{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
gap:12px;
}

.stat{
background:var(--card);
padding:20px;
border-radius:15px;
text-align:center;
}

.stat b{
display:block;
font-size:2rem;
color:var(--gold);
}

.modal{
position:fixed;
inset:0;
background:rgba(0,0,0,.75);
z-index:2000;
display:none;
align-items:center;
justify-content:center;
padding:18px;
}

.modal-box{
width:min(650px,100%);
max-height:90vh;
overflow:auto;
background:var(--navy2);
border-radius:20px;
padding:22px;
}

.close{
float:right;
background:none;
border:0;
color:white;
font-size:1.5rem;
}

.hidden{
display:none!important;
}

.footer{
padding:40px 18px;
background:#030d1b;
text-align:center;
color:#9eabb9;
line-height:1.8;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
background:rgba(3,13,27,.97);
border-top:1px solid rgba(255,215,0,.15);
z-index:1500;
display:grid;
grid-template-columns:repeat(5,1fr);
padding:7px 4px;
}

.bottom-nav button{
background:none;
border:0;
color:#aab5c2;
font-size:.7rem;
}

.bottom-nav span{
display:block;
font-size:1.2rem;
}

.bottom-nav button.active{
color:var(--gold);
}

@media(min-width:800px){
.bottom-nav{
display:none;
}
body{
padding-bottom:0;
}
}

@media(max-width:799px){
body{
padding-bottom:65px;
}
}

.toast{
position:fixed;
bottom:85px;
left:50%;
transform:translateX(-50%);
background:#111;
color:white;
padding:12px 18px;
border-radius:25px;
display:none;
z-index:3000;
}

</style>
</head>

<body>

<header class="topbar">
<div class="nav">

<div class="brand">GODIA PRIME SOLUTIONS</div>

<div class="nav-actions">
<button class="small-btn" onclick="toggleTheme()">☀️/🌙</button>
<button class="small-btn" onclick="openModal('accountModal')">👤 Account</button>
</div>

</div>
</header>

<main id="home">

<section class="hero">

<div class="hero-inner">

<div class="logo">GP</div>

<div class="logo-title">GODIA PRIME</div>

<div class="tagline">
SOLUTIONS
</div>

<h1>BIASHARA ZINAUNGANISHWA. FURSA ZINASONGEZWA.</h1>

<p style="margin-top:12px">
Connect with businesses, customers, suppliers, services and opportunities across Kenya.
</p>

<div class="search">
<input id="searchInput"
placeholder="Search business, product, supplier or service..."
onkeydown="if(event.key==='Enter')searchEverything()">

<button onclick="searchEverything()">Search</button>
</div>

<div class="btns">

<button class="btn green" onclick="getLocation()">
📍 Businesses Near Me
</button>

<a class="btn primary" href="tel:0703183586">
📞 Call Us
</a>

<button class="btn secondary" onclick="scrollToId('quick')">
Explore
</button>

</div>

<p id="locationStatus" style="margin-top:12px"></p>

</div>
</section>

<section class="section" id="quick">

<h2>What Are You Looking For?</h2>

<div class="quick-grid">

<div class="quick" onclick="openFeature('buy')">
<span class="quick-icon">🛒</span>
<strong>BUY</strong>
</div>

<div class="quick" onclick="openFeature('shop')">
<span class="quick-icon">🏪</span>
<strong>SHOP</strong>
</div>

<div class="quick" onclick="openFeature('supply')">
<span class="quick-icon">📦</span>
<strong>SUPPLY</strong>
</div>

<div class="quick" onclick="openFeature('delivery')">
<span class="quick-icon">🚚</span>
<strong>DELIVERY</strong>
</div>

<div class="quick" onclick="openFeature('services')">
<span class="quick-icon">💼</span>
<strong>SERVICES</strong>
</div>

<div class="quick" onclick="openFeature('business')">
<span class="quick-icon">🤝</span>
<strong>BUSINESS</strong>
</div>

<div class="quick" onclick="openFeature('near')">
<span class="quick-icon">📍</span>
<strong>NEAR ME</strong>
</div>

<div class="quick" onclick="openModal('addBusinessModal')">
<span class="quick-icon">➕</span>
<strong>LIST BUSINESS</strong>
</div>

</div>
</section>

<section class="section">

<h2>Business Tools</h2>

<div class="quick-grid">

<div class="quick" onclick="openModal('myBusinessModal')">
<span class="quick-icon">💼</span>
<strong>My Business</strong>
</div>

<div class="quick" onclick="showMessage('Inventory module ready for connection.')">
<span class="quick-icon">📦</span>
<strong>Inventory</strong>
</div>

<div class="quick" onclick="showMessage('POS module ready for connection.')">
<span class="quick-icon">💰</span>
<strong>Sales / POS</strong>
</div>

<div class="quick" onclick="showMessage('Credit and debt management module ready.')">
<span class="quick-icon">📒</span>
<strong>Credit / Debts</strong>
</div>

<div class="quick" onclick="showMessage('Order tracking module ready.')">
<span class="quick-icon">📋</span>
<strong>Orders</strong>
</div>

<div class="quick" onclick="showMessage('Delivery module ready.')">
<span class="quick-icon">🚚</span>
<strong>Delivery</strong>
</div>

<div class="quick" onclick="showMessage('Business analytics module ready.')">
<span class="quick-icon">📊</span>
<strong>Business Summary</strong>
</div>

<div class="quick" onclick="openModal('accountModal')">
<span class="quick-icon">👤</span>
<strong>Account</strong>
</div>

</div>

</section>

<section class="section">

<h2>🇰🇪 All 47 Counties</h2>

<div class="notice">
Tap a county to explore its sub-counties and available businesses.
</div>

<div id="countyList" class="grid">
Loading counties...
</div>

</section>

<section class="section">

<h2>💼 Our Services</h2>

<div class="services">

<div class="service">
<h3>Business Registration</h3>
<p>Business name and company registration support.</p>
</div>

<div class="service">
<h3>KRA & Tax Services</h3>
<p>PIN, compliance, filing, TCC and tax support.</p>
</div>

<div class="service">
<h3>Digital Solutions</h3>
<p>Websites, business systems, branding and digital tools.</p>
</div>

<div class="service">
<h3>Marketplace</h3>
<p>Connect buyers, sellers, suppliers and distributors.</p>
</div>

<div class="service">
<h3>Business Growth</h3>
<p>Business planning, market linkage and growth support.</p>
</div>

<div class="service">
<h3>Delivery</h3>
<p>Connect customers with delivery and logistics services.</p>
</div>

</div>

</section>

<section class="section">

<h2>⭐ Featured Businesses</h2>

<div id="featuredBusinesses">
<div class="panel">
Businesses will appear here as approved listings become available.
</div>
</div>

</section>

</main>

<section id="countyPage" class="section hidden">

<button class="btn secondary" onclick="showHome()">
← All Counties
</button>

<h2 id="countyTitle" style="margin-top:20px"></h2>

<div class="panel">

<h3 style="color:var(--gold)">
Sub-Counties
</h3>

<div id="subCountyGrid" class="grid" style="margin-top:15px"></div>

</div>

<div class="panel">

<h3 style="color:var(--gold)">
🏪 Businesses
</h3>

<div class="form-grid" style="margin-top:15px">

<select id="subFilter" onchange="loadBusinesses(currentCounty,this.value)">
<option value="">All Sub-Counties</option>
</select>

<select id="serviceFilter" onchange="loadBusinesses(currentCounty,document.getElementById('subFilter').value,this.value)">
<option value="">All Services</option>
<option>Hardware</option>
<option>Shop</option>
<option>Salon</option>
<option>Restaurant</option>
<option>Transport</option>
<option>Technology</option>
<option>Construction</option>
<option>Wholesale</option>
<option>Retail</option>
<option>Other</option>
</select>

</div>

<div id="businessList" style="margin-top:15px">
Loading...
</div>

</div>

</section>

<footer class="footer">

<b style="color:var(--gold)">
GODIA PRIME SOLUTIONS
</b>

<br>

BIASHARA ZINAUNGANISHWA. FURSA ZINASONGEZWA.

<br><br>

📞 0703 183 586

<br>

📍 Kenya • All 47 Counties

<br><br>

© 2026 GODIA PRIME SOLUTIONS

</footer>

<nav class="bottom-nav">

<button onclick="scrollToId('home')" class="active">
<span>🏠</span>HOME
</button>

<button onclick="scrollToId('quick')">
<span>📦</span>SUPPLY
</button>

<button onclick="openFeature('buy')">
<span>🛒</span>SELL
</button>

<button onclick="openFeature('orders')">
<span>📋</span>ORDERS
</button>

<button onclick="openModal('accountModal')">
<span>👤</span>ACCOUNT
</button>

</nav>

<div class="toast" id="toast"></div>

<!-- ADD BUSINESS -->

<div class="modal" id="addBusinessModal">

<div class="modal-box">

<button class="close" onclick="closeModal('addBusinessModal')">×</button>

<h2 style="color:var(--gold)">
➕ Register Your Business
</h2>

<p style="color:#bbc7d4;margin:10px 0 20px">
Submit your business information for listing.
</p>

<div class="form-grid">

<div>
<label>Business Name</label>
<input id="bizName" placeholder="Business name">
</div>

<div>
<label>Phone</label>
<input id="bizPhone" placeholder="07XXXXXXXX">
</div>

<div>
<label>County</label>
<select id="bizCounty" onchange="populateBusinessSubs()">
<option value="">Select County</option>
</select>
</div>

<div>
<label>Sub-County</label>
<select id="bizSubcounty">
<option value="">Select Sub-County</option>
</select>
</div>

<div>
<label>Service</label>
<select id="bizService">
<option value="">Select Service</option>
<option>Hardware</option>
<option>Shop</option>
<option>Salon</option>
<option>Restaurant</option>
<option>Transport</option>
<option>Technology</option>
<option>Construction</option>
<option>Wholesale</option>
<option>Retail</option>
<option>Other</option>
</select>
</div>

<div>
<label>Business Description</label>
<input id="bizDescription" placeholder="Describe your business">
</div>

</div>

<div class="notice">
Listing fee/payment activation can be connected to the real M-Pesa integration later. This form does not falsely mark a payment as completed.
</div>

<button class="btn primary" onclick="submitBusiness()">
Submit Business
</button>

</div>
</div>

<!-- ACCOUNT -->

<div class="modal" id="accountModal">

<div class="modal-box">

<button class="close" onclick="closeModal('accountModal')">×</button>

<h2 style="color:var(--gold)">👤 Account</h2>

<div class="notice">
Customer, supplier, employee, rider and business-owner accounts can be connected here.
</div>

<div class="form-grid">

<input id="accountName" placeholder="Your name">

<input id="accountPhone" placeholder="Phone number">

<select id="accountRole">
<option>Customer</option>
<option>Business Owner</option>
<option>Supplier</option>
<option>Distributor</option>
<option>Rider</option>
<option>Employee</option>
</select>

</div>

<br>

<button class="btn primary" onclick="createAccountRequest()">
Continue
</button>

</div>
</div>

<!-- MY BUSINESS -->

<div class="modal" id="myBusinessModal">

<div class="modal-box">

<button class="close" onclick="closeModal('myBusinessModal')">×</button>

<h2 style="color:var(--gold)">💼 My Business</h2>

<div class="quick-grid">

<div class="quick" onclick="showMessage('Inventory module ready.')">
📦<br>Inventory
</div>

<div class="quick" onclick="showMessage('POS module ready.')">
💰<br>Sales / POS
</div>

<div class="quick" onclick="showMessage('Credit module ready.')">
📒<br>Credit
</div>

<div class="quick" onclick="showMessage('Orders module ready.')">
📋<br>Orders
</div>

<div class="quick" onclick="showMessage('Analytics module ready.')">
📊<br>Reports
</div>

<div class="quick" onclick="showMessage('Business settings ready.')">
⚙️<br>Settings
</div>

</div>

</div>
</div>

<script>

const COUNTY_DATA = ${JSON.stringify(COUNTY_DATA)};

let currentCounty="";
let userLat=null;
let userLng=null;

function $(id){
return document.getElementById(id);
}

function scrollToId(id){
const el=$(id);
if(el) el.scrollIntoView({behavior:"smooth"});
}

function showMessage(message){
showToast(message);
}

function showToast(message){
const t=$("toast");
t.textContent=message;
t.style.display="block";

setTimeout(()=>{
t.style.display="none";
},3000);
}

function openModal(id){
$(id).style.display="flex";
}

function closeModal(id){
$(id).style.display="none";
}

function showHome(){
$("home").classList.remove("hidden");
$("countyPage").classList.add("hidden");
window.scrollTo({top:0,behavior:"smooth"});
}

function openCounty(name){

currentCounty=name;

$("home").classList.add("hidden");
$("countyPage").classList.remove("hidden");

$("countyTitle").textContent="📍 "+name+" County";

const subs=COUNTY_DATA[name]||[];

$("subCountyGrid").innerHTML="";
$("subFilter").innerHTML='<option value="">All Sub-Counties</option>';

subs.forEach(sub=>{

const div=document.createElement("div");

div.className="county";

div.textContent=sub;

div.onclick=()=>{
$("subFilter").value=sub;
loadBusinesses(name,sub);
};

$("subCountyGrid").appendChild(div);

const option=document.createElement("option");
option.value=sub;
option.textContent=sub;

$("subFilter").appendChild(option);

});

loadBusinesses(name);

window.scrollTo({top:0,behavior:"smooth"});

}

async function loadBusinesses(county,subcounty="",service=""){

const box=$("businessList");

box.innerHTML='<div class="panel">Loading businesses...</div>';

try{

let url="/api/businesses?county="+encodeURIComponent(county);

if(subcounty){
url+="&subcounty="+encodeURIComponent(subcounty);
}

if(service){
url+="&service="+encodeURIComponent(service);
}

const response=await fetch(url);

const businesses=await response.json();

if(!businesses.length){

box.innerHTML=
'<div class="panel">'+
'<h3>No approved businesses yet</h3>'+
'<p style="color:#bbc7d4;margin-top:8px">'+
'Be among the first businesses to register here.'+
'</p>'+
'</div>';

return;
}

box.innerHTML="";

businesses.forEach(b=>{

const card=document.createElement("div");

card.className="business-card";

const title=document.createElement("h3");
title.textContent=b.name||"Business";

const location=document.createElement("p");
location.textContent="📍 "+(b.subcounty||"")+" • "+(b.county||"");

const service=document.createElement("p");
service.textContent="🔧 "+(b.service||"Business");

const phone=document.createElement("p");
phone.textContent="📞 "+(b.phone||"");

const actions=document.createElement("div");
actions.className="actions";

if(b.phone){

const call=document.createElement("a");
call.className="btn green";
call.href="tel:"+b.phone;
call.textContent="Call";
actions.appendChild(call);

const wa=document.createElement("a");
wa.className="btn secondary";
wa.href="https://wa.me/"+normalizePhone(b.phone);
wa.target="_blank";
wa.textContent="WhatsApp";
actions.appendChild(wa);

}

card.append(title,location,service,phone,actions);

box.appendChild(card);

});

}catch(error){

box.innerHTML=
'<div class="panel">'+
'Businesses are temporarily unavailable.'+
'</div>';

}

}

function normalizePhone(phone){

let p=String(phone).replace(/[^0-9]/g,"");

if(p.startsWith("0")){
p="254"+p.substring(1);
}

return p;

}

function populateCountySelect(){

const select=$("bizCounty");

Object.keys(COUNTY_DATA)
.sort()
.forEach(county=>{

const option=document.createElement("option");

option.value=county;
option.textContent=county;

select.appendChild(option);

});

}

function populateBusinessSubs(){

const county=$("bizCounty").value;

const select=$("bizSubcounty");

select.innerHTML='<option value="">Select Sub-County</option>';

(COUNTY_DATA[county]||[]).forEach(sub=>{

const option=document.createElement("option");

option.value=sub;
option.textContent=sub;

select.appendChild(option);

});

}

async function submitBusiness(){

const data={

name:$("bizName").value.trim(),

phone:$("bizPhone").value.trim(),

county:$("bizCounty").value,

subcounty:$("bizSubcounty").value,

service:$("bizService").value,

description:$("bizDescription").value.trim()

};

if(!data.name||!data.phone||!data.county||!data.subcounty){

showToast("Please complete the required fields.");

return;

}

try{

const response=await fetch("/api/businesses",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result=await response.json();

if(!response.ok){

showToast(result.error||"Could not submit business.");

return;

}

showToast("Business submitted successfully.");

closeModal("addBusinessModal");

$("bizName").value="";
$("bizPhone").value="";
$("bizDescription").value="";

}catch(error){

showToast("Connection error. Please try again.");

}

}

async function createAccountRequest(){

const data={

name:$("accountName").value.trim(),

phone:$("accountPhone").value.trim(),

role:$("accountRole").value

};

if(!data.name||!data.phone){

showToast("Enter your name and phone.");

return;

}

try{

const response=await fetch("/api/account-request",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result=await response.json();

if(response.ok){

showToast("Account request received.");

closeModal("accountModal");

}else{

showToast(result.error||"Could not submit.");

}

}catch{

showToast("Connection error.");

}

}

function getLocation(){

if(!navigator.geolocation){

showToast("GPS is not supported by this device.");

return;

}

$("locationStatus").textContent="📡 Detecting your location...";

navigator.geolocation.getCurrentPosition(

position=>{

userLat=position.coords.latitude;
userLng=position.coords.longitude;

$("locationStatus").textContent=
"✅ Location detected. Searching for nearby businesses...";

searchNearby();

},

error=>{

$("locationStatus").textContent=
"❌ Please allow location permission to search near you.";

}

);

}

async function searchNearby(){

if(userLat===null||userLng===null){

getLocation();

return;

}

try{

const response=await fetch(
"/api/businesses/nearby?lat="+
encodeURIComponent(userLat)+
"&lng="+
encodeURIComponent(userLng)
);

const businesses=await response.json();

$("home").classList.add("hidden");
$("countyPage").classList.remove("hidden");

$("countyTitle").textContent="📍 Businesses Near You";

$("subCountyGrid").innerHTML="";

$("businessList").innerHTML="";

if(!businesses.length){

$("businessList").innerHTML=
'<div class="panel">No businesses with location data were found nearby.</div>';

}else{

businesses.forEach(b=>{

const card=document.createElement("div");
card.className="business-card";

const h=document.createElement("h3");
h.textContent=b.name;

const p=document.createElement("p");
p.textContent="📍 "+b.county+" • "+b.subcounty;

const s=document.createElement("p");
s.textContent="🔧 "+b.service;

const d=document.createElement("p");
d.textContent="📏 "+Number(b.distance_km).toFixed(2)+" KM away";

card.append(h,p,s,d);

if(b.phone){

const a=document.createElement("a");
a.className="btn green";
a.href="tel:"+b.phone;
a.textContent="Call";

card.appendChild(a);

}

$("businessList").appendChild(card);

});

}

window.scrollTo({top:0,behavior:"smooth"});

}catch{

showToast("Nearby search is temporarily unavailable.");

}

}

async function searchEverything(){

const query=$("searchInput").value.trim();

if(!query){

showToast("Type something to search.");

return;

}

$("home").classList.add("hidden");
$("countyPage").classList.remove("hidden");

$("countyTitle").textContent="🔎 Search Results";

$("subCountyGrid").innerHTML="";

$("businessList").innerHTML=
'<div class="panel">Searching...</div>';

try{

const response=await fetch(
"/api/search?q="+encodeURIComponent(query)
);

const businesses=await response.json();

$("businessList").innerHTML="";

if(!businesses.length){

$("businessList").innerHTML=
'<div class="panel">No matching businesses found.</div>';

return;

}

businesses.forEach(b=>{

const card=document.createElement("div");
card.className="business-card";

const h=document.createElement("h3");
h.textContent=b.name;

const p=document.createElement("p");
p.textContent="📍 "+b.county+" • "+b.subcounty;

const s=document.createElement("p");
s.textContent="🔧 "+b.service;

card.append(h,p,s);

if(b.phone){

const a=document.createElement("a");
a.className="btn green";
a.href="tel:"+b.phone;
a.textContent="Call";

card.appendChild(a);

}

$("businessList").appendChild(card);

});

}catch{

$("businessList").innerHTML=
'<div class="panel">Search unavailable.</div>';

}

}

function openFeature(feature){

const messages={

buy:"🛒 BUY — Product marketplace module ready for connection.",

shop:"🏪 SHOP — Find shops and businesses across Kenya.",

supply:"📦 SUPPLY — Supplier and wholesale network module.",

delivery:"🚚 DELIVERY — Delivery and rider network module.",

services:"💼 SERVICES — Find professional and business services.",

business:"🤝 BUSINESS — Business networking and market linkage.",

near:"📍 NEAR ME — Use GPS to find nearby businesses.",

orders:"📋 ORDERS — Order tracking module ready."

};

if(feature==="near"){

getLocation();
return;

}

showToast(messages[feature]||"Feature ready.");

}

function toggleTheme(){

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

document.body.style.background="#f4f7fb";
document.body.style.color="#071a33";

}else{

document.body.style.background="";
document.body.style.color="";

}

}

populateCountySelect();

</script>

</body>
</html>`;
}

export default {

async fetch(request, env, ctx) {

if(request.method==="OPTIONS"){
return new Response(null,{
status:204,
headers:HEADERS
});
}

const url=new URL(request.url);

try{

/* =========================
   COUNTY API
========================= */

if(url.pathname==="/api/counties"){

const counties=Object.keys(COUNTY_DATA)
.sort()
.map((name,index)=>({

id:index+1,
name,
subcounties:COUNTY_DATA[name]

}));

return json(counties);

}

/* =========================
   BUSINESS LIST
========================= */

if(url.pathname==="/api/businesses" && request.method==="GET"){

const county=clean(url.searchParams.get("county"));
const subcounty=clean(url.searchParams.get("subcounty"));
const service=clean(url.searchParams.get("service"));

let sql=`
SELECT id,name,county,subcounty,phone,service,description,
latitude,longitude,status,created_at
FROM businesses
WHERE status='approved'
`;

const params=[];

if(county){

sql+=" AND county = ?";
params.push(county);

}

if(subcounty){

sql+=" AND subcounty = ?";
params.push(subcounty);

}

if(service){

sql+=" AND service = ?";
params.push(service);

}

sql+=" ORDER BY created_at DESC LIMIT 100";

const result=await env.DB
.prepare(sql)
.bind(...params)
.all();

return json(result.results||[]);

}

/* =========================
   ADD BUSINESS
========================= */

if(url.pathname==="/api/businesses" && request.method==="POST"){

const body=await readJSON(request);

const name=clean(body.name,150);
const phone=clean(body.phone,30);
const county=clean(body.county,80);
const subcounty=clean(body.subcounty,100);
const service=clean(body.service,100);
const description=clean(body.description,500);

if(!name||!phone||!county||!subcounty){

return json({
error:"Business name, phone, county and sub-county are required."
},400);

}

if(!COUNTY_DATA[county]||
!COUNTY_DATA[county].includes(subcounty)){

return json({
error:"Invalid county or sub-county."
},400);

}

const result=await env.DB.prepare(`
INSERT INTO businesses
(name,phone,county,subcounty,service,description,status)
VALUES(?,?,?,?,?,?,?)
`)
.bind(
name,
phone,
county,
subcounty,
service,
description,
"pending"
)
.run();

return json({

success:true,
id:result.meta?.last_row_id||null,
message:"Business submitted for approval."

},201);

}

/* =========================
   SEARCH
========================= */

if(url.pathname==="/api/search" && request.method==="GET"){

const q=clean(url.searchParams.get("q"),100);

if(!q){
return json([]);
}

const like="%"+q+"%";

const result=await env.DB.prepare(`
SELECT id,name,county,subcounty,phone,service,description
FROM businesses
WHERE status='approved'
AND (
name LIKE ?
OR county LIKE ?
OR subcounty LIKE ?
OR service LIKE ?
OR description LIKE ?
)
ORDER BY created_at DESC
LIMIT 100
`)
.bind(like,like,like,like,like)
.all();

return json(result.results||[]);

}

/* =========================
   NEARBY BUSINESSES
========================= */

if(url.pathname==="/api/businesses/nearby" &&
request.method==="GET"){

const lat=Number(url.searchParams.get("lat"));
const lng=Number(url.searchParams.get("lng"));

if(!Number.isFinite(lat)||!Number.isFinite(lng)){

return json({
error:"Valid latitude and longitude are required."
},400);

}

const result=await env.DB.prepare(`
SELECT id,name,county,subcounty,phone,service,
description,latitude,longitude
FROM businesses
WHERE status='approved'
AND latitude IS NOT NULL
AND longitude IS NOT NULL
LIMIT 500
`).all();

const businesses=(result.results||[])
.map(b=>{

const distance=haversine(
lat,
lng,
Number(b.latitude),
Number(b.longitude)
);

return {
...b,
distance_km:distance
};

})
.filter(b=>b.distance_km<=50)
.sort((a,b)=>a.distance_km-b.distance_km)
.slice(0,50);

return json(businesses);

}

/* =========================
   ACCOUNT REQUEST
========================= */

if(url.pathname==="/api/account-request" &&
request.method==="POST"){

const body=await readJSON(request);

const name=clean(body.name,120);
const phone=clean(body.phone,30);
const role=clean(body.role,50);

if(!name||!phone){

return json({
error:"Name and phone are required."
},400);

}

await env.DB.prepare(`
INSERT INTO account_requests
(name,phone,role,status)
VALUES(?,?,?,?)
`)
.bind(name,phone,role,"pending")
.run();

return json({
success:true,
message:"Account request received."
},201);

}

/* =========================
   HEALTH CHECK
========================= */

if(url.pathname==="/api/health"){

return json({
success:true,
service:"GODIA PRIME SOLUTIONS",
database:!!env.DB,
time:new Date().toISOString()
});

}

/* =========================
   WEBSITE
========================= */

return new Response(page(),{
headers:{
"Content-Type":"text/html; charset=utf-8",
"Cache-Control":"no-cache"
}
});

}catch(error){

return json({
error:"Server error",
message:error?.message||"Unknown error"
},500);

}

}

};

function haversine(lat1,lon1,lat2,lon2){

const R=6371;

const dLat=(lat2-lat1)*Math.PI/180;
const dLon=(lon2-lon1)*Math.PI/180;

const a=
Math.sin(dLat/2)**2+
Math.cos(lat1*Math.PI/180)*
Math.cos(lat2*Math.PI/180)*
Math.sin(dLon/2)**2;

return R*2*Math.atan2(
Math.sqrt(a),
Math.sqrt(1-a)
);

             }
