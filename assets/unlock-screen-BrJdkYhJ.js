/* empty css               */import{a as e,i as t,n,r,t as i}from"./main-CY7Ze4Ie.js";var a=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function o(o,s){o.querySelector(`.ds-unlock`)?.remove();let c=o.createElement(`main`);c.className=`ds-site ds-unlock`,c.setAttribute(`role`,`dialog`),c.setAttribute(`aria-modal`,`true`),c.setAttribute(`aria-labelledby`,`ds-unlock-title`),c.innerHTML=`
    <div class="ds-unlock__card">
      <p class="ds-unlock__logo" aria-hidden="true">DRONE SIM</p>
      <h1 class="ds-unlock__title" id="ds-unlock-title">${a(r(s.reason))}</h1>
      <ul class="ds-unlock__perks">${i.map(e=>`<li>${a(e)}</li>`).join(``)}</ul>
      <p class="ds-unlock__text">${a(n)}. One-time purchase on your Meta account.</p>
      <div class="ds-ui ds-unlock__actions">
        <button type="button" class="ds-btn rc-cta ds-unlock__btn" data-unlock="buy"><span>${a(e(s.price))}</span></button>
        <button type="button" class="ds-btn ds-unlock__btn" data-unlock="restore"><span>Restore purchases</span></button>
        ${s.vr?`<button type="button" class="ds-btn ds-unlock__btn" data-unlock="vr"><span>Back to VR</span></button>`:``}
        <button type="button" class="ds-btn ds-unlock__btn" data-unlock="close"><span>Not now</span></button>
      </div>
      <p class="ds-unlock__status" data-unlock="status" role="status" aria-live="polite"></p>
    </div>`,o.body.append(c);let l=e=>c.querySelector(`[data-unlock="${e}"]`),u=l(`buy`),d=l(`restore`),f=l(`status`);f.textContent=s.note??``;let p=!0,m=s.price,h=!1,g=!1,_=()=>{g||(g=!0,c.remove(),s.onClose(h))},v=e=>{u.disabled=e,d.disabled=e},y=e=>{if(v(!1),p=!1,f.textContent=t(e),e!==`ok`&&e!==`owned`)return;h=!0,c.querySelector(`#ds-unlock-title`).textContent=`Full game unlocked`,u.hidden=!0,d.hidden=!0;let n=l(`close`)?.querySelector(`span`);n&&(n.textContent=`Continue`),(l(`vr`)??l(`close`))?.focus({preventScroll:!0})};return u.addEventListener(`click`,()=>{v(!0),p=!1,f.textContent=`Opening the store…`,s.buy().then(y,()=>y(`error`))}),d.addEventListener(`click`,()=>{v(!0),p=!1,f.textContent=`Checking your purchases…`,s.restore().then(y,()=>y(`error`))}),l(`vr`)?.addEventListener(`click`,()=>{s.enterVr(),_()}),l(`close`)?.addEventListener(`click`,_),u.focus({preventScroll:!0}),{el:c,setPrice(t){m=t;let n=u.querySelector(`span`);n&&(n.textContent=e(m))},setNote(e){p&&!g&&(f.textContent=e)},close:_}}export{o as showUnlockScreen};
