(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const f=`<main class="hero-shell" aria-label="Supriya Srivatsa home">
  <!--div class="hero-gridline hero-gridline-v-left"></div>
  <div class="hero-gridline hero-gridline-v-right"></div>
  <div class="hero-gridline hero-gridline-h-top"></div>
  <div class="hero-gridline hero-gridline-h-bottom"></div>-->

  <section class="hero-content">
    <p class="hero-kicker">Hi! I'm</p>
    <h1 class="hero-name">SUPRIYA<br/>SRIVATSA</h1>
    <br/>
    <p class="hero-copy">
      I'm building <a href="https://theslowweb.net/" target="_blank" rel="noopener noreferrer">The Slow Web</a>, slowly.<br/>
      I write at the <a href="https://musingmosaic.substack.com/" target="_blank" rel="noopener noreferrer">Musing Mosaic</a> and <a href="https://lemonandcinnamon.substack.com/" target="_blank" rel="noopener noreferrer">Lemon and Cinnamon</a>.<br/>
      Software engineer at ____, I speak at tech conferences on niche and intriguing topics. <br/>
      I'm an avid reader, fond of travel, solitude and meditative arts.
    </p>
  </section>

  <figure class="hero-image-wrap">
    <img src="/public/assets/supriya_srivatsa_image.jpg" alt="Supriya Srivatsa by the sea" class="hero-image" />
  </figure>
</main>
`,h=`<main class="content">
  <h1>Bookshelf</h1>
  <p>A curated list of reading recommendations is coming soon.</p>
  <p><a href="/">Back to home</a></p>
</main>
`,m=`<main class="content">
  <h1>Page not found</h1>
  <p>Try <a href="/">home</a> or <a href="/bookshelf">bookshelf</a>.</p>
</main>
`,i={HOME:"/",BOOKSHELF:"/bookshelf"},c=document.querySelector("#app");window.addEventListener("popstate",d);document.addEventListener("click",g);d();function l(e){return e.replace(/\/+$/,"")||i.HOME}function u(){return l(window.location.pathname)}function p(e){const n=l(e);n!==u()&&(window.history.pushState({},"",n),d())}function g(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const n=e.target.closest("a[href]");if(!n||n.hasAttribute("download")||n.target&&n.target!=="_self")return;const a=new URL(n.href,window.location.origin);if(a.origin!==window.location.origin)return;const o=l(a.pathname);o!==i.HOME&&o!==i.BOOKSHELF||(e.preventDefault(),p(o))}function d(){const e=u(),n=e===i.HOME;if(document.body.classList.toggle("route-home",n),document.body.classList.toggle("route-bookshelf",e===i.BOOKSHELF),n){c.innerHTML=f;return}if(e===i.BOOKSHELF){c.innerHTML=h;return}c.innerHTML=m}
