(function(){
var U="https://qdkuzejjpxsqlelkxymh.supabase.co/rest/v1/contact_submissions",K="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFka3V6ZWpqcHhzcWxlbGt4eW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwODI4ODEsImV4cCI6MjA5ODY1ODg4MX0.aH8SOokLbQsq5r9jRcsCnoUyu9AvjknORUEKFhJoue8";
var nav=document.getElementById("nav");
function sc(){nav.classList.toggle("scrolled",window.scrollY>8)}sc();window.addEventListener("scroll",sc,{passive:true});
var b=document.getElementById("burger"),m=document.getElementById("mnav");
b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",String(o))});
var rv=document.querySelectorAll(".rv");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
 rv.forEach(function(e){io.observe(e)});
}else rv.forEach(function(e){e.classList.add("in")});
var y=document.querySelector("[data-year]");if(y)y.textContent=new Date().getFullYear();
document.querySelectorAll("[data-kx-form]").forEach(function(f){
 f.addEventListener("submit",function(ev){
  ev.preventDefault();
  var st=f.querySelector("[data-form-status]"),btn=f.querySelector("button[type=submit]");
  function say(t,c){if(st){st.textContent=t;st.style.color=c;st.classList.remove("hidden")}}
  var ok=true;f.querySelectorAll("[required]").forEach(function(i){if(!i.value.trim())ok=false});
  if(!ok){say("Please fill in all required fields.","#f87171");return}
  var p={form_type:f.dataset.kxForm||"general"};
  f.querySelectorAll("input,textarea,select").forEach(function(i){
   if(!i.id)return;var k=i.id.replace(/^[a-z]+-/,"");if(k==="msg")k="message";p[k]=i.value});
  var label=btn?btn.textContent:"";
  if(btn){btn.disabled=true;btn.textContent="Sending…"}
  fetch(U,{method:"POST",headers:{"Content-Type":"application/json",apikey:K,Authorization:"Bearer "+K,Prefer:"return=minimal"},body:JSON.stringify(p)})
  .then(function(r){if(!r.ok)throw 0;say("Thanks — that's in the queue. We reply within a day or two.","#6ee7b7");f.reset()})
  .catch(function(){say("Something went wrong — please email hello@kingxtech.name.ng instead.","#f87171")})
  .then(function(){if(btn){btn.disabled=false;btn.textContent=label}});
 });
});
})();
