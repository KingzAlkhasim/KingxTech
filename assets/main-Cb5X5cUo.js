(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://auth.kingxtech.name.ng`,t=[{href:`/#products`,label:`Products`,match:``},{href:`/services`,label:`Services`,match:`services`},{href:`/projects`,label:`Projects`,match:`projects`},{href:`/about`,label:`About`,match:`about`},{href:`/blog`,label:`Blog`,match:`blog`},{href:`/contact`,label:`Contact`,match:`contact`}];function n(){let e=location.pathname.split(`/`).pop();return e===``?``:e}function r(){let r=document.getElementById(`site-nav-mount`);if(!r)return;let i=n();r.innerHTML=`
    <nav id="site-nav">
      <div class="container nav-inner">
        <a href="/" class="nav-logo">
          <img src="/img/logo.svg" alt="KingxTech" width="30" height="30">
          <span>Kingx<span class="text-gradient">Tech</span></span>
        </a>
        <div class="nav-links">${t.map(e=>`<a href="${e.href}" class="${e.match===i?`active`:``}">${e.label}</a>`).join(``)}</div>
        <div class="nav-cta">
          <a href="${e}" class="btn btn-ghost" style="padding:9px 16px;font-size:13px;">Sign in</a>
          <a href="${e}" class="btn btn-primary" style="padding:9px 18px;font-size:13px;">Get started</a>
        </div>
        <button id="menu-btn" class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle menu">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 3H15M1 8H15M1 13H15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div id="mobile-nav" class="mobile-nav" hidden>
        ${t.map(e=>`<a href="${e.href}">${e.label}</a>`).join(``)}
        <a href="${e}" class="btn btn-primary btn-block" style="margin-top:14px;">Get started</a>
      </div>
    </nav>`;let a=document.getElementById(`site-nav`),o=()=>a.classList.toggle(`scrolled`,window.scrollY>8);o(),window.addEventListener(`scroll`,o,{passive:!0});let s=document.getElementById(`menu-btn`),c=document.getElementById(`mobile-nav`);s.addEventListener(`click`,()=>{let e=c.hasAttribute(`hidden`);e?c.removeAttribute(`hidden`):c.setAttribute(`hidden`,``),s.setAttribute(`aria-expanded`,String(e))})}function i(){let e=document.getElementById(`site-footer-mount`);if(!e)return;e.innerHTML=`
    <footer>
      <div class="container" style="padding-block:64px;">
        <div style="display:grid; grid-template-columns: repeat(2,1fr); gap:40px;" class="footer-grid">
          <div style="grid-column: span 2;" class="footer-brand">
            <a href="/" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
              <img src="/img/logo.svg" alt="KingxTech" width="30" height="30">
              <span style="font-family:var(--font-display);font-weight:600;font-size:16.5px;">Kingx<span class="text-gradient">Tech</span></span>
            </a>
            <p style="font-size:14px;color:var(--kx-mist);line-height:1.7;max-width:320px;">An AI and developer-tools ecosystem — building the assistant, the editor, and the infrastructure teams build on next.</p>
            <div style="display:flex;gap:10px;margin-top:24px;">
              <a href="https://instagram.com/kingxtechhq" aria-label="Instagram" class="social-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 5 5 .06 1.3.07 1.6.07 4.8s0 3.5-.07 4.8c-.15 3.3-1.7 4.8-5 5-1.3.06-1.6.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-5-5C2 15.5 2 15.2 2 12s0-3.5.07-4.8c.15-3.3 1.7-4.8 5-5C8.4 2.2 8.7 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.07-2.4.1-3.5 1.2-3.6 3.6C3.5 8.5 3.5 8.8 3.5 12s0 3.5.07 4.8c.1 2.4 1.2 3.5 3.6 3.6C8.5 20.5 8.8 20.5 12 20.5s3.5 0 4.8-.07c2.4-.1 3.5-1.2 3.6-3.6.07-1.3.07-1.6.07-4.8s0-3.5-.07-4.8c-.1-2.4-1.2-3.5-3.6-3.6C15.5 4 15.2 4 12 4zm0 3.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 1.8a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm4.8-2.1a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/></svg></a>
              <a href="https://x.com/kingxtechhq" aria-label="X (Twitter)" class="social-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.7L4.4 22H1.3l8.1-9.3L1 2h7l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4H5.3l12.4 16z"/></svg></a>
              <a href="https://github.com/kingxtech" aria-label="GitHub" class="social-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2A11 11 0 0 1 12 5.8c1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg></a>
              <a href="https://discord.gg/GKkk8a79fz" aria-label="Discord" class="social-btn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.4A19.7 19.7 0 0 0 15.6 3l-.3.5a14 14 0 0 1 4.1 1.6 15.6 15.6 0 0 0-13.8 0A14 14 0 0 1 9.7 3.5L9.4 3a19.7 19.7 0 0 0-4.7 1.4C1.9 8.6 1.1 12.6 1.4 16.6a19.8 19.8 0 0 0 5.9 2.9l.9-1.4a12.9 12.9 0 0 1-2-1c.2-.1.3-.2.5-.3a14.2 14.2 0 0 0 12.6 0l.5.3a12.9 12.9 0 0 1-2 1l.9 1.4a19.7 19.7 0 0 0 5.9-2.9c.4-4.6-.7-8.6-3.3-12.2zM8.8 14.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.9.9 1.8 2c0 1.1-.8 2-1.8 2zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.9.9 1.8 2c0 1.1-.8 2-1.8 2z"/></svg></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="/#products">K-XpertAI</a></li>
              <li><a href="/#products">SynthCode IDE</a></li>
              <li><a href="/services">KX Cloud</a></li>
              <li><a href="/services">API services</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog">Changelog</a></li>
              <li><a href="/contact">Support</a></li>
              <li><a href="/services">Pricing</a></li>
              <li><a href="/about">Careers</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy policy</a></li>
              <li><a href="/terms">Terms of service</a></li>
              <li><a href="mailto:hello@kingxtech.name.ng">hello@kingxtech.name.ng</a></li>
            </ul>
          </div>
        </div>

        <div style="margin-top:56px;padding-top:32px;border-top:1px solid var(--kx-line);display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:space-between;font-family:var(--font-mono);font-size:12px;color:var(--kx-mist-dim);" class="footer-bottom">
          <p>© <span data-year></span> KingxTech, Inc. All rights reserved.</p>
          <p>Designed &amp; built for a future full of agents.</p>
        </div>
      </div>
    </footer>`;let t=e.querySelector(`[data-year]`);t&&(t.textContent=new Date().getFullYear())}function a(){let e=document.querySelectorAll(`.reveal`);if(!e.length)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.forEach(e=>e.classList.add(`in-view`));return}let t=new IntersectionObserver(e=>{e.forEach((e,n)=>{if(e.isIntersecting){let r=Math.min(n*60,240);setTimeout(()=>e.target.classList.add(`in-view`),r),t.unobserve(e.target)}})},{threshold:.12,rootMargin:`0px 0px -60px 0px`});e.forEach(e=>t.observe(e))}function o(){document.querySelectorAll(`.faq-item`).forEach(e=>{let t=e.querySelector(`.faq-q`),n=e.querySelector(`.faq-a`);if(!t||!n)return;t.setAttribute(`aria-expanded`,`false`);let r=r=>{e.setAttribute(`data-open`,String(r)),t.setAttribute(`aria-expanded`,String(r)),n.style.maxHeight=r?n.scrollHeight+`px`:`0px`};t.addEventListener(`click`,()=>{let t=e.getAttribute(`data-open`)===`true`;e.closest(`.faq-list`)?.querySelectorAll(`.faq-item`).forEach(t=>{if(t!==e){t.setAttribute(`data-open`,`false`),t.querySelector(`.faq-q`)?.setAttribute(`aria-expanded`,`false`);let e=t.querySelector(`.faq-a`);e&&(e.style.maxHeight=`0px`)}}),r(!t)}),t.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t.click())})})}function s(){const u=`https://qdkuzejjpxsqlelkxymh.supabase.co/rest/v1/contact_submissions`,k=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFka3V6ZWpqcHhzcWxlbGt4eW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwODI4ODEsImV4cCI6MjA5ODY1ODg4MX0.aH8SOokLbQsq5r9jRcsCnoUyu9AvjknORUEKFhJoue8`;document.querySelectorAll(`[data-kx-form]`).forEach(e=>{e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.querySelector(`[data-form-status]`),r=e.querySelectorAll(`[required]`),i=!0;if(r.forEach(e=>{e.value.trim()||(i=!1)}),!i){n&&(n.textContent=`Please fill in all required fields.`,n.style.color=`#F87171`,n.classList.remove(`hidden`));return}let a=e.querySelector(`button[type="submit"]`);a&&(a.disabled=!0,a.textContent=`Sending…`);let p={form_type:e.dataset.kxForm||`general`};e.querySelectorAll(`input,textarea,select`).forEach(f=>{if(!f.id)return;let key=f.id.replace(/^[a-z]+-/,``);key===`msg`&&(key=`message`),p[key]=f.value});try{let res=await fetch(u,{method:`POST`,headers:{"Content-Type":"application/json","apikey":k,"Authorization":`Bearer ${k}`,"Prefer":"return=minimal"},body:JSON.stringify(p)});if(!res.ok)throw new Error(`bad status`);n&&(n.textContent=`Thanks — that's in the queue. We reply within a day or two.`,n.style.color=`#6EE7B7`,n.classList.remove(`hidden`)),e.reset()}catch(err){n&&(n.textContent=`Something went wrong — please email hello@kingxtech.name.ng instead.`,n.style.color=`#F87171`,n.classList.remove(`hidden`))}finally{a&&(a.disabled=!1,a.textContent=e.dataset.submitLabel||`Send message`)}})})}function c(){document.querySelectorAll(`.circuit-divider`).forEach((e,t)=>{let n=1280,r=`kxPulseGradient-${t}`;e.innerHTML=`
      <svg viewBox="0 0 ${n} 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="${r}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#D946C6"/>
            <stop offset="50%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#00A3FF"/>
          </linearGradient>
        </defs>
        <path class="circuit-path" d="M0,32 H420 L460,12 H820 L860,32 H${n}"/>
        <path class="circuit-pulse" style="stroke:url(#${r})" d="M0,32 H420 L460,12 H820 L860,32 H${n}"/>
        <circle class="circuit-node" cx="460" cy="12" r="4"/>
        <circle class="circuit-node" cx="860" cy="32" r="4"/>
      </svg>`})}function l(){let e=document.getElementById(`kx-progress`);e||(e=document.createElement(`div`),e.id=`kx-progress`,document.body.appendChild(e));let t=()=>{let t=document.documentElement,n=t.scrollTop,r=t.scrollHeight-t.clientHeight;e.style.width=r>0?`${n/r*100}%`:`0%`};t(),window.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t)}function u(){window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||document.querySelectorAll(`.hero`).forEach(e=>{if(e.querySelector(`.kx-nodes`))return;let t=document.createElement(`div`);t.className=`kx-nodes`;let n=[`var(--kx-blue)`,`var(--kx-purple)`,`var(--kx-pink)`],r=window.innerWidth<768?8:16;for(let e=0;e<r;e++){let r=document.createElement(`span`);r.className=`kx-node`,r.style.left=`${Math.random()*100}%`,r.style.top=`${Math.random()*100}%`,r.style.color=n[e%n.length],r.style.background=n[e%n.length],r.style.animationDelay=`${Math.random()*8}s`,r.style.animationDuration=`${10+Math.random()*10}s`,t.appendChild(r)}e.prepend(t)})}function d(){window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||window.matchMedia(`(hover: none)`).matches||document.querySelectorAll(`.hero, .section`).forEach(e=>{let t=e.querySelectorAll(`.kx-glow`);t.length&&e.addEventListener(`mousemove`,n=>{let r=e.getBoundingClientRect(),i=(n.clientX-r.left)/r.width-.5,a=(n.clientY-r.top)/r.height-.5;t.forEach((e,t)=>{let n=18+t*6;e.style.transform=`translate(${i*n}px, ${a*n}px)`})})})}function f(){window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||window.matchMedia(`(hover: none)`).matches||document.querySelectorAll(`.card:not(.no-tilt)`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.transform=`perspective(700px) rotateX(${i*-6}deg) rotateY(${r*6}deg) translateY(-3px)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=``})})}function p(){window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||window.matchMedia(`(hover: none)`).matches||document.querySelectorAll(`.btn-glow, .btn-primary`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,i=t.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.22}px, ${i*.35}px)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=``})})}function m(){a(),o(),s(),c(),l(),u(),d(),f(),p()}r(),i(),m();
