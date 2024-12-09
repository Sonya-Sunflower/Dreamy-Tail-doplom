import{c as a,d as o,f as n}from"./script-Df4MtpFW.js";class i{cardHolder;patsArr;constructor(e){this.cardHolder=document.querySelector(e),this.patsArr=[],this.init()}init(){this.conectDB()}async conectDB(){try{const e=a(o,"pats");(await n(e)).forEach(s=>{const r=s.data();this.patsArr.push({id:s.id,img:r.img||"",imgWebP:r.imgWebP,name:r.name||"No Name",shortInfo:r.shortInfo||"",view:r.view||"",owner:r.owner||""})}),this.renderPat(this.patsArr)}catch(e){console.error(e)}}renderPat(e){this.cardHolder.innerHTML="",e.forEach(t=>{if(!t.owner){const s=`
          <a href="one-pet.html?id=${t.id}" class="list__item pet ${t.id}">
            <div class="pet__info">
              <div class="pet__viev">${t.view}</div>

              <div class="pet__img">
                <picture>
                  <source srcset=${t.imgWebP} type="image/webp" />
                  <img src="${t.img}" alt="cat" />
                </picture>
              </div>

              <p class="pet__name">${t.name}</p>
              <p class="pet__short-info">${t.shortInfo}</p>
            </div>

            <button class="pet__page btn gradient">Переглянути</button>
          </a>
        `;this.cardHolder.insertAdjacentHTML("beforeend",s)}})}}document.addEventListener("DOMContentLoaded",async()=>{new i(".list")});
