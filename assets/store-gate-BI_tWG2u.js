/* empty css              */import{jt as e}from"./main-D1smWpVf.js";var t={quest:`M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v6a2.5 2.5 0 0 1-2.5 2.5h-3.2l-1.6-2.2a2 2 0 0 0-3.4 0L8.7 17H5.5A2.5 2.5 0 0 1 3 14.5z`,"app-store":`M8 2.5h8A1.5 1.5 0 0 1 17.5 4v16a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20V4A1.5 1.5 0 0 1 8 2.5zM10.5 18.5h3`,"google-play":`M6 3.5v17l14-8.5z`},n={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},r=e=>e.replace(/[&<>"']/g,e=>n[e]);function i(e){return e!==null&&/^https:\/\//.test(e)?e:null}function a(e){let n=i(e.url),a=`<svg class="st-badge__icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="${t[e.id]}"/></svg>`,o=`<span class="st-badge__text"><span class="st-badge__kicker">${r(n?e.kicker:`Coming soon`)}</span><span class="st-badge__name">${r(e.name)}</span></span>`;return n?`<a class="st-badge st-badge--${e.id}" data-store="${e.id}" href="${r(n)}" target="_blank" rel="noopener">${a}${o}</a>`:`<span class="st-badge st-badge--${e.id} is-soon" data-store="${e.id}">${a}${o}</span>`}var o=[{id:`quest`,name:`Meta Quest`,kicker:`Get it on`,url:null},{id:`app-store`,name:`App Store`,kicker:`Download on the`,url:null},{id:`google-play`,name:`Google Play`,kicker:`Get it on`,url:null}];function s(e){return o.find(t=>t.id===e)}function c(t,n=`not-owned`){let r=s(`quest`),i=n===`unverified`,o=e(t.location?.search??``),c=t.createElement(`main`);return c.className=`ds-site ds-store-gate`,c.setAttribute(`aria-labelledby`,`ds-store-gate-title`),c.innerHTML=`
    <div class="ds-store-gate__card">
      <p class="ds-store-gate__logo" aria-hidden="true">DRONE SIM</p>
      ${i?`<h1 class="ds-store-gate__title" id="ds-store-gate-title">Couldn’t confirm your purchase</h1>
      <p class="ds-store-gate__text">The Meta Horizon Store didn’t answer. Connect to the internet and try again — after one successful check the app also starts offline.</p>
      <div class="ds-store-gate__actions">
        <button type="button" class="ds-store-gate__play" data-gate="retry">Try again</button>
        <a class="ds-store-gate__play ds-store-gate__play--ghost" href="${o}" data-gate="play">Play free on the web</a>
      </div>`:`<h1 class="ds-store-gate__title" id="ds-store-gate-title">Drone Sim VR is available on the Meta&nbsp;Horizon&nbsp;Store</h1>
      <p class="ds-store-gate__text">This page is the Quest app. Install it from the store to fly in VR, or play the free flat-screen version in your browser.</p>
      <div class="ds-store-gate__actions">
        <a class="ds-store-gate__play" href="${o}" data-gate="play">Play free on the web</a>
        ${a(r)}
      </div>`}
    </div>`,t.body.append(c),c.querySelector(`[data-gate="retry"]`)?.addEventListener(`click`,()=>t.location.reload()),c.querySelector(i?`[data-gate="retry"]`:`[data-gate="play"]`)?.focus({preventScroll:!0}),c}export{c as showStoreGate};
