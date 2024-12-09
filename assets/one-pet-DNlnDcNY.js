import{f as c,c as d,d as n,h as o,u as r,i as h}from"./script-Df4MtpFW.js";class p{btn;petId;uid;constructor(){this.btn=document.querySelector(".info__buy");const t=new URLSearchParams(window.location.search);this.petId=t.get("id")||"",this.uid=this.getCookie("UID"),this.init()}init(){this.btn&&this.btn.addEventListener("click",()=>{this.uid?this.fetchUsers().then(t=>{t?this.addPatToUser(this.petId,t.id).then(()=>{window.location.href="/Dreamy-Tail-doplom/cabinet-user.html"}):window.location.href="/Dreamy-Tail-doplom/registration.html"}):window.location.href="/Dreamy-Tail-doplom/registration.html"})}getCookie(t){const s=`; ${document.cookie}`.split(`; ${t}=`);if(s.length===2)return s.pop()?.split(";").shift()}async fetchUsers(){const t=await c(d(n,"users")),e=[];return t.forEach(i=>{e.push({id:i.id,uid:i.data().uid,role:i.data().role})}),e.find(i=>i.uid===this.uid)}async addPatToUser(t,e){try{const s=o(n,"users",e);await r(s,{myPet:h(t)});const i=o(n,"pats",t);await r(i,{owner:e})}catch(s){console.error(s)}}}class u{cardHolder;patsArr;pet;petId;constructor(t){this.cardHolder=document.querySelector(t),this.patsArr=[],this.pet=[];const e=new URLSearchParams(window.location.search);this.petId=e.get("id")||"",this.init()}init(){this.conectDB()}async conectDB(){try{const t=d(n,"pats");(await c(t)).forEach(i=>{const a=i.data();this.patsArr.push({id:i.id||"",img:a.img||"",imgWebP:a.imgWebP,name:a.name||"No Name",fullInfo:a.fullInfo||"",view:a.view||"",breed:a.breed||"",age:a.age||""})});const s=this.patsArr.find(i=>i.id===this.petId);s&&this.pet.push(s),this.renderPat(this.pet)}catch(t){console.error(t)}}renderPat(t){this.cardHolder.innerHTML="",t.forEach(e=>{const s=`
            <div class="pet-info__img">
                <picture>
                    <source srcset=${e.imgWebP} type="image/webp" />
                    <img src="${e.img}" alt="pet" />
                </picture>            
            </div>
            <div class="pet-info__info info">
                <h2 class="info__view subtitle">${e.view}</h2>
                <h3 class="info__name title">${e.name}</h3>

                <div class="info__breed-and-age">
                    <p class="info__breed">Порода: <span>${e.breed}</span></p>
                    <p class="info__age">Вік: <span>${e.age}</span></p>
                </div>

                <p class="info__full">${e.fullInfo}</p>

                <button class="info__buy btn gradient">Взяти під опікунство</button>
            </div>
      `;this.cardHolder.insertAdjacentHTML("beforeend",s)}),new p}}document.addEventListener("DOMContentLoaded",async()=>{new u(".pet-info__content")});
