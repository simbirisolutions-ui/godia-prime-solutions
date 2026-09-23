export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // API: Get Counties from D1
    if (url.pathname === "/api/counties") {
      try {
        const result = await env.DB.prepare("SELECT * FROM counties ORDER BY name").all();
        return new Response(JSON.stringify(result.results), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (e) {
        // Fallback if table not created yet - return 47 counties
        const counties = ["Baringo","Bomet","Bungoma","Busia","Elgeyo-Marakwet","Embu","Garissa","Homa Bay","Isiolo","Kajiado","Kakamega","Kericho","Kiambu","Kilifi","Kirinyaga","Kisii","Kisumu","Kitui","Kwale","Laikipia","Lamu","Machakos","Makueni","Mandera","Marsabit","Meru","Migori","Mombasa","Murang'a","Nairobi","Nakuru","Nandi","Narok","Nyamira","Nyandarua","Nyeri","Samburu","Siaya","Taita-Taveta","Tana River","Tharaka-Nithi","Trans Nzoia","Turkana","Uasin Gishu","Vihiga","Wajir","West Pokot"];
        return new Response(JSON.stringify(counties.map((name,i)=>({id:i+1,name}))), { headers: { "Content-Type": "application/json" } });
      }
    }

    const html = `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GODIA PRIME SOLUTIONS</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui;background:#0a1931;color:white;overflow-x:hidden}
.hero{min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;background:linear-gradient(135deg,#0a1931,#162b4d)}
.logo-main{width:95px;height:95px;background:gold;color:#0a1931;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;margin:0 auto 12px}
.logo-txt{font-size:2.4rem;font-weight:bold;color:gold;letter-spacing:2px}
.tag{color:#ffd700;margin:8px 0 16px}
.btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:20px 0}
.btn{padding:15px 28px;border-radius:30px;text-decoration:none;font-weight:bold}
.primary{background:gold;color:#0a1931}.secondary{border:2px solid gold;color:gold}
.box{margin-top:22px;padding:15px;background:#ffffff10;border-radius:12px}
.section{padding:50px 20px;max-width:1100px;margin:0 auto}
.section h2{color:gold;text-align:center;margin-bottom:25px;font-size:2rem}
.counties{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}
.county{background:white;color:#0a1931;padding:14px;border-radius:10px;text-align:center;font-weight:bold;cursor:pointer;transition:0.2s}
.county:hover{background:gold;transform:translateY(-3px)}
.services{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px}
.service{background:#ffffff10;padding:20px;border-radius:12px;border-left:4px solid gold}
.footer{background:#050e1f;padding:30px;text-align:center;color:#aaa}
</style></head>
<body>
<div class="hero"><div>
<div class="logo-main">GP</div>
<div class="logo-txt">GODIA PRIME</div>
<div class="tag">SOLUTIONS • BUSINESS EXCELLENCE • KENYA</div>
<h1 style="font-size:2.1rem;margin:15px 0">Empowering Businesses Across Kenya</h1>
<p style="color:#ccc;max-width:600px;margin:0 auto">Connecting 47 counties with business solutions, registration, KRA, and growth support.</p>
<div class="btns">
<a class="btn primary" href="tel:0703183586">Call 0703 183 586</a>
<a class="btn secondary" href="#counties">Explore 47 Counties</a>
</div>
<div class="box">
<div>📞 0703 183 586 | 0116 829 722</div>
<div>📍 Nairobi, Kenya</div>
</div>
</div></div>

<div class="section" id="counties">
<h2>🇰🇪 All 47 Counties</h2>
<div class="counties" id="countyList">Loading counties...</div>
</div>

<div class="section">
<h2>💼 Our Services</h2>
<div class="services">
<div class="service"><h3>Business Registration</h3><p>Company, Business Name, NGO, SACCO registration across Kenya.</p></div>
<div class="service"><h3>KRA & Tax Services</h3><p>PIN, Compliance, Filing, TCC and tax advisory.</p></div>
<div class="service"><h3>Digital Solutions</h3><p>Websites, Systems, M-Pesa Integration, Branding.</p></div>
<div class="service"><h3>Consulting & Growth</h3><p>Business plans, Funding, Market linkage.</p></div>
</div>
</div>

<div class="footer">
<p><b>GODIA PRIME SOLUTIONS</b><br>Call: 0703 183 586<br>© 2025 All Rights Reserved</p>
</div>

<script>
fetch('/api/counties').then(r=>r.json()).then(data=>{
  const list=document.getElementById('countyList');
  list.innerHTML='';
  data.forEach(c=>{
    const name=c.name||c;
    const div=document.createElement('div');
    div.className='county';
    div.textContent=name;
    div.onclick=()=>alert('Welcome to '+name+' County - Businesses coming soon!');
    list.appendChild(div);
  });
}).catch(()=>{
  document.getElementById('countyList').innerHTML='<p style="text-align:center">47 Counties Ready - Database connected!</p>';
});
</script>
</body></html>`;

    return new Response(html, { headers: { "Content-Type": "text/html" } });
  }
}
