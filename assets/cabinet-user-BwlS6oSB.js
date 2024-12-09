import{f as i,c,d as r,h as p,u as g,j as v}from"./script-Df4MtpFW.js";import{T as _,M as P,E as b}from"./tabs-B9kuZmwq.js";import{J as E}from"./just-validate.es-C73wyOde.js";import{I as f}from"./inputmask-CsGDK5Eu.js";import"./pop-up-Cl5BhUHu.js";class C{myPetContent;uid;currentUser;constructor(e){this.myPetContent=document.querySelector(e),this.uid=this.getCookie("UID"),this.init()}init(){this.fetchUsers().then(()=>{this.getPets()})}getCookie(e){const s=`; ${document.cookie}`.split(`; ${e}=`);if(s.length===2)return s.pop()?.split(";").shift()}async fetchUsers(){const e=await i(c(r,"users")),t=[];e.forEach(n=>{t.push({uid:n.data().uid,myPet:n.data().myPet,id:n.id})});const s=t.find(n=>n.uid===this.uid);this.currentUser=s}async getPets(){try{const e=c(r,"pats"),t=await i(e),s=[];t.forEach(o=>{const a=o.data();s.push({id:o.id,img:a.img||"",imgWebP:a.imgWebP,name:a.name||"No Name",shortInfo:a.shortInfo||"",view:a.view||"",owner:a.owner||!1})});const n=s.filter(o=>this.currentUser.myPet.includes(o.id));this.renderPat(n).then(()=>{this.addEventListener()})}catch(e){console.error(e)}}async renderPat(e){this.myPetContent.innerHTML="",e.forEach(t=>{if(t.owner){const s=`
          <a class="list__item pet ${t.id}">
            <div class="pet__info">
              <div class="pet__viev">${t.view}</div>
  
              <div class="pet__img">
                <picture>
                  <source srcset="${t.imgWebP}" type="image/webp" />
                  <img src="${t.img}" alt="cat" />
                </picture>
              </div>
  
              <p class="pet__name">${t.name}</p>
              <p class="pet__short-info">${t.shortInfo}</p>
            </div>
  
            <button class="pet__page btn gradient" data-id="${t.id}">Відмовитись</button>
          </a>
        `;this.myPetContent.insertAdjacentHTML("beforeend",s)}})}async removePet(e){if(!this.currentUser||!this.uid){console.error("User not authenticated or user data not loaded.");return}try{const t=p(r,"users",this.currentUser.id),s=this.currentUser.myPet.filter(a=>a!==e);await g(t,{myPet:s}),this.currentUser.myPet=s;const n=p(r,"pats",e);await g(n,{owner:!1});const o=this.myPetContent.querySelector(`.list__item.pet.${e}`);o&&o.remove()}catch(t){console.error("Error removing pet:",t)}}addEventListener(){const e=this.myPetContent.querySelectorAll(".pet__page");if(e.length===0){console.error("No buttons found with class .pet__page");return}e.forEach(t=>{t.addEventListener("click",s=>{const n=s.target.getAttribute("data-id");n&&this.removePet(n)})})}}class ${popUpElement;backdropElement;formElement;validator;onFormSubmitCallback=null;constructor(){if(this.popUpElement=document.querySelector(".pop-up-pay"),this.backdropElement=document.querySelector(".pop-up__backdrop"),this.formElement=document.querySelector("#form-pay"),!this.popUpElement){console.error("Pop-up element not found");return}if(!this.backdropElement){console.error("Backdrop element not found");return}if(!this.formElement){console.error("Form element not found");return}this.init()}init(){this.applyMasks(),this.initializeValidation(),this.addEventListeners()}applyMasks(){f({mask:"9999 9999 9999 9999",placeholder:" "}).mask(this.formElement.querySelector("#card-numb")),f({mask:"99/99",placeholder:" "}).mask(this.formElement.querySelector("#date")),f({mask:"999",placeholder:""}).mask(this.formElement.querySelector("#cvv"))}initializeValidation(){this.validator=new E(this.formElement),this.validator.addField("#card-numb",[{rule:"required",errorMessage:"Введіть номер картки"}]).addField("#date",[{rule:"required",errorMessage:"Введіть термін дії картки"}]).addField("#cvv",[{rule:"required",errorMessage:"Введіть CVV"}]).addField("#name",[{rule:"required",errorMessage:"Введіть ІМ'Я власника"},{rule:"customRegexp",value:/^[a-zA-Z]+$/,errorMessage:"Введіть ІМ'Я літерами"},{rule:"minLength",value:2,errorMessage:"Мінімальна кількість літер 2"}]).onSuccess(e=>{e.preventDefault(),this.onFormSubmit()})}addEventListeners(){this.backdropElement&&this.backdropElement.addEventListener("click",()=>this.closePopup())}openPopup(){this.popUpElement.classList.add("active")}closePopup(){this.popUpElement.classList.remove("active"),this.formElement.reset(),this.validator.refresh()}onFormSubmit(){this.onFormSubmitCallback&&this.onFormSubmitCallback(),this.closePopup()}}class w{myPetContent;uid;currentUser;constructor(e){this.myPetContent=document.querySelector(e),this.uid=this.getCookie("UID"),this.init()}init(){this.fetchUsers().then(()=>{this.getPetsNeed()})}getCookie(e){const s=`; ${document.cookie}`.split(`; ${e}=`);if(s.length===2)return s.pop()?.split(";").shift()}async fetchUsers(){const e=await i(c(r,"users")),t=[];e.forEach(n=>{t.push({uid:n.data().uid,myPet:n.data().myPet,id:n.id})});const s=t.find(n=>n.uid===this.uid);this.currentUser=s}async getPetsNeed(){try{const e=c(r,"pats"),t=await i(e),s=[];for(const o of t.docs){const a=o.data(),d=c(r,`pats/${o.id}/need`),h=await i(d),u=[];h.forEach(l=>{u.push({id:l.id,...l.data()})}),s.push({id:o.id,name:a.name||"No Name",owner:a.owner||!1,needs:u})}const n=s.filter(o=>this.currentUser.myPet.includes(o.id));this.renderPatNeed(n)}catch(e){console.error(e)}}renderPatNeed(e){this.myPetContent.innerHTML="",e.forEach(t=>{if(t.owner){const s=t.needs.map(a=>`<li class="pet-need__list-item">${a.item}: <span>${a.cost} грн</span></li>`).join(""),n=t.needs.reduce((a,d)=>a+d.cost,0),o=`
          <div class="pay-for-pet__one-pet pet-need ${t.id}">
            <h3 class="pet-need__name title">${t.name}</h3>
  
            <ul class="pet-need__list">
              ${s}
            </ul>
  
            <div class="pet-need__pay">
              <p class="pet-need__summ">Всього: <span>${n} грн</span></p>
              <button class="pet-need__pay-btn btn gradient" data-pet-id="${t.id}">Сплатити</button>
            </div>
          </div>
        `;this.myPetContent.insertAdjacentHTML("beforeend",o)}}),this.addPayButtonListeners()}addPayButtonListeners(){this.myPetContent.querySelectorAll(".pet-need__pay-btn").forEach(t=>{t.addEventListener("click",s=>{const n=s.target.dataset.petId;this.onPayButtonClick(n)})})}onPayButtonClick(e){const t=new $;t.openPopup(),t.onFormSubmit=async()=>{await this.removePaidNeeds(e),t.closePopup(),location.reload(),this.init()}}async removePaidNeeds(e){const t=c(r,`pats/${e}/need`),s=await i(t);for(const n of s.docs){const o=p(r,`pats/${e}/need/${n.id}`);await v(o)}}}class k{myMassagesContent;uid;constructor(e){this.myMassagesContent=document.querySelector(e),this.uid=this.getCookie("UID"),this.init()}init(){this.getMassages().then(()=>{})}getCookie(e){const s=`; ${document.cookie}`.split(`; ${e}=`);if(s.length===2)return s.pop()?.split(";").shift()}async getMassages(){try{const e=c(r,"users"),t=await i(e),s=[];for(const a of t.docs){const d=a.data(),h=c(r,`users/${a.id}/massages`),u=await i(h),l=[];u.forEach(y=>{l.push({id:y.id,...y.data()})}),s.push({id:a.id,uid:d.uid||"",massages:l})}const n=s.find(a=>a.uid===this.uid),o=[];n?.massages.forEach(a=>{o.push(a)}),this.renderMassages(o,n?.id)}catch(e){console.error(e)}}async renderMassages(e,t){this.myMassagesContent.innerHTML="",e.forEach(s=>{const n=`
            <div class="massages__one-massage massage ${s.id}">
                <div class="massage__content">
                <h2 class="massage__who-send subtitle">${s.whoSend}</h2>
                <h3 class="massage__topic title">${s.topic}</h3>
                <p class="massage__text text">${s.text}</p>
                </div>
                <button class="massage__remove btn gradient" data-id="${s.id}" data-user-id="${t}">Видалити</button>
            </div>
          `;this.myMassagesContent.insertAdjacentHTML("beforeend",n)}),this.addDeleteListeners()}addDeleteListeners(){this.myMassagesContent.querySelectorAll(".massage__remove").forEach(t=>{t.addEventListener("click",s=>{const n=s.target,o=n.getAttribute("data-id"),a=n.getAttribute("data-user-id");o&&a&&this.deleteMassage(a,o)})})}async deleteMassage(e,t){try{if(!this.uid){console.error("User UID is not defined.");return}const s=p(r,`users/${e}/massages/${t}`);await v(s);const n=this.myMassagesContent.querySelector(`.massage.${t}`);n&&n.remove()}catch(s){console.error("Error deleting massage:",s)}}}document.addEventListener("DOMContentLoaded",async()=>{new _(".tabs__nav-btn",".tabs__item"),new P,new C(".list"),new b("#form-edit"),new w(".pay-for-pet__content"),new k(".massages")});
