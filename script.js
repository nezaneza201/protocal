const wa="250786035962";
document.getElementById("inquiry").addEventListener("submit",function(e){e.preventDefault();const v=id=>document.getElementById(id).value.trim();const text="Hello JB Protocol! I'd like to plan an event.\n\nName: "+v("name")+"\nEvent: "+(v("event")||"Not specified")+"\nDate: "+(v("date")||"Not specified")+"\nGuests: "+(v("guests")||"Not specified")+"\nVenue: "+(v("venue")||"Not specified")+"\nMessage: "+(v("message")||"Not specified");window.open("https://wa.me/"+wa+"?text="+encodeURIComponent(text),"_blank")});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const glow=document.querySelector(".cursor-glow");if(glow)window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.querySelectorAll(".magnetic").forEach(el=>{el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();el.style.transform="translate("+((e.clientX-r.left-r.width/2)*.08)+"px,"+((e.clientY-r.top-r.height/2)*.08)+"px)"});el.addEventListener("pointerleave",()=>el.style.transform="")});
const style=document.createElement("style");style.textContent=`
.cursor-glow{position:fixed;z-index:60;width:220px;height:220px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#c9b48a12,transparent 65%);transform:translate(-50%,-50%)}
.magnetic{transition:transform .2s ease}
.moments{background:#0a0e18}
.visual-grid{display:grid;grid-template-columns:1.2fr .8fr;grid-template-rows:240px 240px;gap:14px}
.visual-card{position:relative;overflow:hidden;border:1px solid rgba(245,241,231,.13);background:linear-gradient(135deg,#121b30,#080b14);padding:28px;display:flex;flex-direction:column;justify-content:flex-end;transition:transform .5s,border-color .3s}
.visual-card:nth-child(2){background:linear-gradient(135deg,#171a25,#0a101d)}.visual-card:nth-child(3){background:linear-gradient(135deg,#101d28,#090c15)}.visual-card:nth-child(4){background:linear-gradient(135deg,#1b1920,#090b14)}
.visual-card:before{content:"";position:absolute;width:280px;height:280px;right:-80px;top:-90px;border-radius:50%;background:radial-gradient(circle,#c9b48a55,transparent 68%);transition:transform .7s}
.visual-card:hover{transform:translateY(-5px);border-color:#c9b48a55}.visual-card:hover:before{transform:scale(1.2)}
.visual-card span,.visual-card strong{position:relative;z-index:1}.visual-card span{font-size:9px;color:#c9b48a;letter-spacing:.22em;margin-bottom:10px}.visual-card strong{font-family:Manrope;font-size:clamp(1.5rem,3vw,3rem);line-height:.9;letter-spacing:-.05em}.visual-card:nth-child(1){grid-row:span 2}
.floating-wa{display:none}
@media(max-width:860px){.visual-grid{grid-template-columns:1fr;grid-template-rows:280px 200px 200px 200px}.visual-card:nth-child(1){grid-row:auto}.floating-wa{display:grid;position:fixed;z-index:30;right:18px;bottom:18px;width:54px;height:54px;border-radius:50%;place-items:center;background:#c9b48a;color:#080b14;text-decoration:none;font-size:11px;font-weight:900;box-shadow:0 12px 30px #0008}}
`;document.head.appendChild(style);
