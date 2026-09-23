export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>GODIA PRIME SOLUTIONS</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui;background:#0a0e1a;color:white;overflow:hidden}
#splash{position:fixed;inset:0;background:radial-gradient(circle at center,#1a237e,#0a0e1a);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .8s}
#splash.hide{opacity:0;pointer-events:none}
.gp{width:120px;height:120px;border:3px solid #ffd700;border-radius:30px;display:flex;align-items:center;justify-content:center;font-size:50px;font-weight:900;color:#ffd700;background:linear-gradient(135deg,rgba(255,215,0,.2),rgba(255,111,0,.2));box-shadow:0 0 30px rgba(255,215,0,.4);animation:glow 2s infinite}
@keyframes glow{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
.float-icons{position:relative;width:200px;height:60px;margin-top:15px}
.float-icons span{position:absolute;font-size:28px;animation:float 3s infinite}
.float-icons span:nth-child(1){left:0;animation-delay:0s}
.float-icons span:nth-child(2){left:40px;animation-delay:.3s}
.float-icons span:nth-child(3){left:85px;animation-delay:.6s}
.float-icons span:nth-child(4){left:130px;animation-delay:.9s}
.float-icons span:nth-child(5){left:170px;animation-delay:1.2s}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
.load{margin-top:10px;color:#ffd700;font-weight:900;letter-spacing:3px}
.bar{width:220px;height:5px;background:rgba(255,215,0,.2);border-radius:10px;margin-top:18px;overflow:hidden}
.bar-in{height:100%;background:linear-gradient(90deg,#ffd700,#ff6f00);width:0%;animation:load 3s forwards}
@keyframes load{to{width:100%}}
#intro{position:fixed;inset:0;background:linear-gradient(135deg,#0a0e1a,#1a237e);z-index:9998;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .8s}
#intro.show{opacity:1;pointer-events:all}
.ad{text-align:center;padding:25px;animation:up .8s ease}
@keyframes up{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}
.ad h2{font-size:2.1rem;color:#ffd700;margin-bottom:12px}
.ad p{color:#ccc;max-width:500px;margin:0 auto 15px;line-height:1.6}
.ad-icon{font-size:60px;margin-bottom:12px;animation:bounce 1s infinite}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;background:linear-gradient(135deg,#0a0e1a 0%,#1a237e 100%)}
.logo-main{width:95px;height:95px;border:2px solid #ffd700;border-radius:22px;display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:900;color:#ffd700;background:rgba(255,215,0,.1);margin-bottom:12px}
.logo-txt{font-size:2.4rem;font-weight:900;background:linear-gradient(90deg,#ffd700,#ff6f00);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.tag{font-size:1rem;color:#ffd700;letter-spacing:2px;margin-bottom:18px}
.btns{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.btn{padding:15px 28px;border-radius:30px;text-decoration:none;font-weight:900}
.primary{background:linear-gradient(90deg,#ffd700,#ff6f00);color:#000}
.secondary{border:2px solid #25D366;color:#25D366;background:rgba(37,211,102,.1)}
.box{margin-top:22px;padding:15px 20px;border:1px solid rgba(255,215,0,.3);border-radius:14px;background:rgba(255,215,0,.05)}
.box div{margin:4px 0;color:#ffd700;font-weight:bold}
</style>
</head>
<body>
<div id="splash">
<div class="gp">GP</div>
<div class="float-icons"><span>👑</span><span>💼</span><span>📈</span><span>💰</span><span>🚀</span></div>
<div class="load">GODIA PRIME</div>
<div style="color:#ffcc66;margin-top:6px">✨ Business Excellence ✨</div>
<div class="bar"><div class="bar-in"></div></div>
</div>
<div id="intro"><div class="ad" id="adBox"></div></div>
<div class="hero">
<div class="logo-main">GP</div>
<div class="logo-txt">GODIA PRIME</div>
<div class="tag">SOLUTIONS • BUSINESS EXCELLENCE • KENYA</div>
<h1 style="font-size:2.1rem;margin:12px 0">Empowering Businesses Across Kenya</h1>
<p style="color:#ccc;max-width:600px;line-height:1.6;margin-bottom:22px">Professional business solutions, consultancy, and growth strategies for SMEs.</p>
<div class="btns">
<a class="btn primary" href="tel:+254703183586">📞 Call 0703 183 586</a>
<a class="btn secondary" href="https://wa.me/254703183586">💬 WhatsApp Us</a>
</div>
<div class="box">
<div>📞 0703 183 586 | 0116 829 281</div>
<div>📍 Nairobi, Kenya</div>
</div>
<p style="margin-top:22px;font-size:.8rem;opacity:.6">🚀 LIVE • CEO Godia</p>
</div>
<script>
const splash=document.getElementById('splash');
const intro=document.getElementById('intro');
const adBox=document.getElementById('adBox');
const ads=[
{icon:'👑', t:'GODIA PRIME SOLUTIONS', d:'Your Official Partner for Business Excellence in Kenya'},
{icon:'💼', t:'Business Consultancy', d:'Expert advice to grow your SME to enterprise level'},
{icon:'📈', t:'Growth Strategies', d:'We turn small hustles into big profitable businesses'},
{icon:'💻', t:'Digital & Enterprise Solutions', d:'Modern websites, business systems & automation for growth'},
{icon:'💰', t:'Financial & Payment Tools', d:'M-Pesa integration, Till Numbers & Business Tools'}
];
let i=0;
setTimeout(()=>{splash.classList.add('hide');intro.classList.add('show');show();},3200);
function show(){
if(i>=ads.length){intro.style.opacity='0';setTimeout(()=>{intro.style.display='none';document.body.style.overflow='auto';},700);return;}
const a=ads[i];
adBox.innerHTML='<div class="ad-icon">'+a.icon+'</div><h2>'+a.t+'</h2><p>'+a.d+'</p><div style="color:#ffd700;margin-top:12px">'+(i+1)+' / '+ads.length+'</div>';
adBox.style.animation='none';void adBox.offsetWidth;adBox.style.animation='up .8s ease';
i++;setTimeout(show,2100);
}
</script>
</body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
}
