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
