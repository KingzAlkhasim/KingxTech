/* Plays the hero build sequence once. Without JavaScript, or with reduced motion, the finished state is shown. */
(function(){
var bw=document.getElementById("bw");if(!bw)return;
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var text=document.getElementById("bw-text"),caret=document.getElementById("bw-caret"),
 log=document.querySelectorAll("#bw-log div"),site=document.getElementById("bw-site");
var full=text.textContent,i=0;
bw.classList.add("pre");text.textContent="";caret.hidden=false;
function type(){
 if(i<full.length){text.textContent=full.slice(0,++i);setTimeout(type,i%12===0?90:26);return}
 caret.hidden=true;
 var n=0;
 (function step(){
  if(n<log.length){log[n].style.opacity=1;log[n].style.transform="none";n++;setTimeout(step,520);return}
  site.style.opacity=1;site.style.transform="none";
 })();
}
setTimeout(type,700);
})();

(function(){
 if(window.matchMedia("(prefers-reduced-motion:reduce)").matches){
  document.querySelectorAll("[data-r]").forEach(function(e){e.classList.add("is-in")});return}
 var els=document.querySelectorAll("[data-r]");
 if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-in");io.unobserve(e.target)}})},{threshold:.15,rootMargin:"0px 0px -6% 0px"});
  els.forEach(function(e){io.observe(e)});
 }else els.forEach(function(e){e.classList.add("is-in")});
 var root=document.documentElement,prog=document.getElementById("prog"),tick=false;
 function upd(){tick=false;var y=window.scrollY||0,h=root.scrollHeight-innerHeight;
  if(y<1400)root.style.setProperty("--py",y);
  if(prog&&h>0)prog.style.transform="scaleX("+Math.min(1,y/h)+")"}
 addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
})();
