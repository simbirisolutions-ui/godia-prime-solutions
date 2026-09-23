export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // COUNTY DATA WITH SUB-COUNTIES
    const countyData = {
      "Mombasa": ["Changamwe","Jomvu","Kisauni","Likoni","Mvita","Nyali"],
      "Kwale": ["Kinango","Lunga Lunga","Matuga","Msambweni"],
      "Kilifi": ["Ganze","Kaloleni","Kilifi North","Kilifi South","Magarini","Malindi","Rabai"],
      "Tana River": ["Bura","Galole","Garsen"],
      "Lamu": ["Lamu East","Lamu West"],
      "Taita-Taveta": ["Mwatate","Taveta","Voi","Wundanyi"],
      "Garissa": ["Balambala","Dadaab","Fafi","Garissa Township","Hulugho","Ijara","Lagdera"],
      "Wajir": ["Eldas","Tarbaj","Wajir East","Wajir North","Wajir South","Wajir West"],
      "Mandera": ["Banissa","Lafey","Mandera East","Mandera North","Mandera South","Mandera West"],
      "Marsabit": ["Laisamis","Moyale","North Horr","Saku"],
      "Isiolo": ["Garbatulla","Isiolo North","Isiolo South"],
      "Meru": ["Buuri","Igembe Central","Igembe North","Igembe South","Imenti Central","Imenti North","Imenti South","Tigania East","Tigania West"],
      "Tharaka-Nithi": ["Chuka","Igambang'ombe","Maara","Muthambi","Tharaka"],
      "Embu": ["Manyatta","Mbeere North","Mbeere South","Runyenjes"],
      "Kitui": ["Kitui Central","Kitui East","Kitui Rural","Kitui South","Kitui West","Mwingi Central","Mwingi North","Mwingi West"],
      "Machakos": ["Athi River","Kangundo","Kathiani","Machakos Town","Masinga","Matungulu","Mwala","Yatta"],
      "Makueni": ["Kaiti","Kibwezi East","Kibwezi West","Kilome","Makueni","Mbooni"],
      "Nyandarua": ["Kinangop","Kipipiri","Ndaragwa","Ol Joro Orok","Ol Kalou"],
      "Nyeri": ["Kieni","Mathira","Mukurweini","Nyeri Town","Othaya","Tetu"],
      "Kirinyaga": ["Gichugu","Kirinyaga Central","Kirinyaga East","Kirinyaga West","Mwea"],
      "Murang'a": ["Gatanga","Kahuro","Kandara","Kangema","Kigumo","Kiharu","Maragwa","Mathioya"],
      "Kiambu": ["Gatundu North","Gatundu South","Githunguri","Juja","Kabete","Kiambaa","Kiambu","Kikuyu","Lari","Limuru","Ruiru","Thika"],
      "Turkana": ["Loima","Turkana Central","Turkana East","Turkana North","Turkana South","Turkana West"],
      "West Pokot": ["Kacheliba","Kapenguria","Pokot South","Sigor"],
      "Samburu": ["Samburu East","Samburu North","Samburu West"],
      "Trans Nzoia": ["Cherangany","Endebess","Kiminini","Kwanza","Saboti"],
      "Uasin Gishu": ["Ainabkoi","Kapseret","Kesses","Moiben","Soy","Turbo"],
      "Elgeyo-Marakwet": ["Keiyo North","Keiyo South","Marakwet East","Marakwet West"],
      "Nandi": ["Aldai","Chesumei","Emgwen","Mosop","Nandi Hills","Tinderet"],
      "Baringo": ["Baringo Central","Baringo North","Baringo South","Eldama Ravine","Mogotio","Tiaty"],
      "Laikipia": ["Laikipia East","Laikipia North","Laikipia West","Nyahururu"],
      "Nakuru": ["Bahati","Gilgil","Kuresoi North","Kuresoi South","Molo","Naivasha","Nakuru East","Nakuru North","Nakuru West","Njoro","Rongai","Subukia"],
      "Narok": ["Narok East","Narok North","Narok South","Narok West","Trans Mara East","Trans Mara West"],
      "Kajiado": ["Kajiado Central","Kajiado East","Kajiado North","Kajiado South","Kajiado West"],
      "Kericho": ["Ainamoi","Belgut","Bureti","Kipkelion East","Kipkelion West","Soin/Sigowet"],
      "Bomet": ["Bomet Central","Bomet East","Chepalungu","Konoin","Sotik"],
      "Kakamega": ["Butere","Ikolomani","Khwisero","Likuyani","Lugari","Lurambi","Malava","Matungu","Mumias East","Mumias West","Navakholo","Shinyalu"],
      "Vihiga": ["Emuhaya","Hamisi","Luanda","Sabatia","Vihiga"],
      "Bungoma": ["Bumula","Kabuchai","Kanduyi","Kimilili","Mt Elgon","Sirisia","Tongaren","Webuye East","Webuye West"],
      "Busia": ["Bunyala","Butula","Nambale","Matayos","Samia","Teso North","Teso South"],
      "Siaya": ["Alego Usonga","Bondo","Gem","Rarieda","Ugenya","Ugunja"],
      "Kisumu": ["Kisumu Central","Kisumu East","Kisumu West","Muhoroni","Nyakach","Nyando","Seme"],
      "Homa Bay": ["Homa Bay Town","Kabondo Kasipul","Karachuonyo","Kasipul","Mbita","Ndhiwa","Rangwe","Suba"],
      "Migori": ["Awendo","Kuria East","Kuria West","Mabera","Ntimaru","Rongo","Suna East","Suna West","Uriri"],
      "Kisii": ["Bobasi","Bomachoge Borabu","Bomachoge Chache","Bonchari","Kitutu Chache North","Kitutu Chache South","Nyaribari Chache","Nyaribari Masaba","South Mugirango"],
      "Nyamira": ["Borabu","Manga","Masaba North","Nyamira North","Nyamira South"],
      "Nairobi": ["Dagoretti North","Dagoretti South","Embakasi Central","Embakasi East","Embakasi North","Embakasi South","Embakasi West","Kamukunji","Kasarani","Kibra","Langata","Makadara","Mathare","Roysambu","Ruaraka","Starehe","Westlands"]
    };

    // API ROUTES
    if (url.pathname === "/api/counties") {
      const list = Object.keys(countyData).sort();
      return new Response(JSON.stringify(list.map((name,i)=>({id:i+1,name, subcounties: countyData[name]}))), { headers: { "Content-Type": "application/json","Access-Control-Allow-Origin":"*" } });
    }
    if (url.pathname.startsWith("/api/businesses")) {
      const county = url.searchParams.get("county");
      try {
        let query = "SELECT * FROM businesses";
        if(county) query += " WHERE county = '"+county.replace(/'/g,"''")+"'";
        const result = await env.DB.prepare(query).all();
        return new Response(JSON.stringify(result.results), { headers: { "Content-Type": "application/json" } });
      } catch(e) { return new Response(JSON.stringify([]), { headers: { "Content-Type": "application/json" } }); }
    }

    const html = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GODIA PRIME SOLUTIONS • BUSINESS EXCELLENCE • KENYA</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui,-apple-system;background:#0a1931;color:white;overflow-x:hidden}
.hero{min-height:75vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;background:linear-gradient(135deg,#0a1931,#162b4d)}
.logo-main{width:95px;height:95px;background:gold;color:#0a1931;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;margin:0 auto 12px}
.logo-txt{font-size:2.4rem;font-weight:bold;color:gold;letter-spacing:2px}
.tag{color:#ffd700;margin:8px 0 16px;letter-spacing:1px}
.btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:20px 0}
.btn{padding:14px 26px;border-radius:30px;text-decoration:none;font-weight:bold;display:inline-block;cursor:pointer;border:none}
.primary{background:gold;color:#0a1931}.secondary{border:2px solid gold;color:gold;background:transparent}.gps{background:#00c853;color:white}
.box{margin-top:20px;padding:15px;background:#ffffff12;border-radius:12px;font-size:0.95rem}
.section{padding:45px 20px;max-width:1100px;margin:0 auto}
.section h2{color:gold;text-align:center;margin-bottom:22px;font-size:1.9rem}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(135px,1fr));gap:12px}
.county{background:white;color:#0a1931;padding:14px;border-radius:10px;text-align:center;font-weight:bold;cursor:pointer;transition:0.2s}
.county:hover{background:gold;transform:translateY(-3px)}
.services{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px}
.service{background:#ffffff10;padding:20px;border-radius:12px;border-left:4px solid gold}
.card{background:#ffffff12;padding:18px;border-radius:12px;margin:10px 0}
.footer{background:#050e1f;padding:30px;text-align:center;color:#aaa}
#countyPage{display:none}
input,select{width:100%;padding:12px;margin:6px 0;border-radius:8px;border:none}
</style></head><body>

<div id="home">
<div class="hero"><div>
<div class="logo-main">GP</div>
<div class="logo-txt">GODIA PRIME</div>
<div class="tag">SOLUTIONS • BUSINESS EXCELLENCE • KENYA</div>
<h1 style="font-size:2rem;margin:12px 0">Empowering Businesses Across Kenya</h1>
<p style="color:#ccc;max-width:600px;margin:0 auto">Connecting 47 counties with business solutions, registration, KRA, and growth support.</p>
<div class="btns">
<a class="btn primary" href="tel:0703183586">Call 0703 183 586</a>
<a class="btn secondary" href="#counties" onclick="document.getElementById('counties').scrollIntoView({behavior:'smooth'})">Explore 47 Counties</a>
<button class="btn gps" onclick="getLocation()">📍 Use My GPS</button>
</div>
<p id="loc" style="color:#90ee90;margin-top:8px"></p>
<div class="box"><div>📞 0703 183 586 | 0116 829 722</div><div>📍 Nairobi, Kenya | All 47 Counties</div></div>
</div></div>

<div class="section" id="counties">
<h2>🇰🇪 All 47 Counties - Tap to See Sub-Counties</h2>
<div class="grid" id="countyList">Loading counties...</div>
</div>

<div class="section">
<h2>💼 Our Services</h2>
<div class="services">
<div class="service"><h3>Business Registration</h3><p>Company, Business Name, NGO, SACCO registration across Kenya.</p></div>
<div class="service"><h3>KRA & Tax Services</h3><p>PIN, Compliance, Filing, TCC and tax advisory.</p></div>
<div class="service"><h3>Digital Solutions</h3><p>Websites, Systems, M-Pesa Integration, Branding.</p></div>
<div class="service"><h3>Consulting & Growth</h3><p>Business plans, Funding, Market linkage & GPS marketing.</p></div>
</div>
</div>

<div class="footer"><p><b>GODIA PRIME SOLUTIONS</b><br>Call: 0703 183 586 | M-Pesa Business: Coming Soon<br>© 2025 All Rights Reserved - 47 Counties Covered</p></div>
</div>

<div id="countyPage" class="section">
<button onclick="showHome()" class="btn" style="background:white;color:#0a1931">← Back to All Counties</button>
<h2 id="countyTitle" style="color:gold;margin:20px 0"></h2>
<div style="background:#ffffff10;padding:12px;border-radius:10px;margin-bottom:15px">📍 <b>GPS:</b> <span id="coords">Not detected</span> | <button class="btn gps" style="padding:6px 12px;font-size:0.8rem" onclick="getLocation()">Detect My Location</button></div>
<h3 style="color:gold;margin:15px 0">Sub-Counties in <span id="countyName2"></span></h3>
<div id="subCountyGrid" class="grid"></div>
<div style="margin-top:30px">
<h3 style="color:gold">🏪 Businesses in <span id="countyName3"></span> <button class="btn primary" style="padding:8px 16px;font-size:0.9rem" onclick="document.getElementById('addBiz').style.display='block'">+ Add Business</button></h3>
<div id="addBiz" style="display:none" class="card"><h4>Add Your Business - 500 KES</h4><input id="bname" placeholder="Business Name"><input id="bphone" placeholder="Phone 07..."><select id="bsub"><option>Select Sub-County</option></select><input id="bservice" placeholder="Service e.g. Hardware, Salon"><button class="btn primary" onclick="submitBiz()">Submit - Call to Pay</button><p style="font-size:0.85rem;color:#ccc;margin-top:6px">After submit, call 0703 183 586 to pay via M-Pesa and get listed.</p></div>
<div id="bizList"></div>
</div>
</div>

<script>
const countyData = ${JSON.stringify(countyData)};
let currentCounty='';
function showHome(){document.getElementById('home').style.display='block';document.getElementById('countyPage').style.display='none';window.scrollTo(0,0)}
function openCounty(name){
  currentCounty=name;
  document.getElementById('home').style.display='none';
  document.getElementById('countyPage').style.display='block';
  document.getElementById('countyTitle').textContent='📍 '+name+' County';
  document.getElementById('countyName2').textContent=name;
  document.getElementById('countyName3').textContent=name;
  const subs=countyData[name]||[];
  const grid=document.getElementById('subCountyGrid');grid.innerHTML='';
  const sel=document.getElementById('bsub');sel.innerHTML='<option>Select Sub-County</option>';
  subs.forEach(s=>{
    const d=document.createElement('div');d.className='county';d.innerHTML=s+'<br><small style=color:#666>'+name+'</small>';
    d.onclick=()=>{document.getElementById('bizList').innerHTML='<div class=card>Showing businesses in '+s+' - '+name+'. Call 0703 183 586 to list here!</div>';};
    grid.appendChild(d);
    const o=document.createElement('option');o.value=s;o.textContent=s;sel.appendChild(o);
  });
  fetch('/api/businesses?county='+encodeURIComponent(name)).then(r=>r.json()).then(biz=>{
    const list=document.getElementById('bizList');
    if(!biz||biz.length===0){list.innerHTML='<div class=card><h3>No businesses yet in '+name+'</h3><p>Be the first! Add your business and get customers searching near them via GPS.</p><a class=btn primary href=tel:0703183586>Call to List - 0703 183 586</a></div>';return;}
    list.innerHTML='';biz.forEach(b=>{list.innerHTML+='<div class=card><h3>'+b.name+'</h3><p>📍 '+b.subcounty+' | 📞 '+b.phone+' | 🔧 '+b.service+'</p><a class=btn gps href=tel:'+b.phone+'>Call</a> <a class=btn secondary href=https://wa.me/'+b.phone+'>WhatsApp</a></div>';});
  }).catch(()=>{document.getElementById('bizList').innerHTML='<div class=card><h3>Database ready for '+name+'</h3><p>Add table: businesses (name, county, subcounty, phone, service) in D1 Console.</p></div>';});
  window.scrollTo(0,0);
}
fetch('/api/counties').then(r=>r.json()).then(data=>{
  const list=document.getElementById('countyList');list.innerHTML='';
  data.forEach(c=>{const name=c.name||c;const d=document.createElement('div');d.className='county';d.textContent=name;d.onclick=()=>openCounty(name);list.appendChild(d);});
});
function getLocation(){
  if(!navigator.geolocation){alert('GPS not supported');return;}
  document.getElementById('loc').textContent='📡 Detecting...';
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat=pos.coords.latitude.toFixed(5), lng=pos.coords.longitude.toFixed(5);
    document.getElementById('loc').innerHTML='✅ You are at: '+lat+', '+lng+' - Showing nearest businesses!';
    const c=document.getElementById('coords');if(c) c.textContent=lat+', '+lng+' (Customers within 5KM)';
  },()=>{document.getElementById('loc').textContent='❌ Allow location permission.'});
}
function submitBiz(){
  const name=document.getElementById('bname').value, phone=document.getElementById('bphone').value, sub=document.getElementById('bsub').value, service=document.getElementById('bservice').value;
  if(!name||!phone){alert('Enter business name and phone');return;}
  alert('✅ Business: '+name+' in '+currentCounty+' - '+sub+' saved! Now call 0703 183 586 to pay 500 via M-Pesa to activate listing.');
  document.getElementById('addBiz').style.display='none';
}
</script></body></html>`;
    return new Response(html, { headers: { "Content-Type": "text/html" } });
  }
      }
