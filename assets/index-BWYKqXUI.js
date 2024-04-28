const __vite__fileDeps=["assets/About-DRaXh6Jc.js","assets/vendor-DgDacMBR.js","assets/@fortawesome/react-fontawesome-Cyawhvr6.js","assets/@fortawesome/free-brands-svg-icons-D5ZL7G3x.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as v,a as S,N as k,O,c as E,R,b as L}from"./vendor-DgDacMBR.js";import{F as p}from"./@fortawesome/react-fontawesome-Cyawhvr6.js";import{f as P,a as C,b as T}from"./@fortawesome/free-brands-svg-icons-D5ZL7G3x.js";(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const F="modulepreload",I=function(l){return"/sakura_omakase/"+l},j={},y=function(x,o,r){let t=Promise.resolve();if(o&&o.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));t=Promise.all(o.map(n=>{if(n=I(n),n in j)return;j[n]=!0;const c=n.endsWith(".css"),N=c?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const d=s[m];if(d.href===n&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${N}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":F,c||(i.as="script",i.crossOrigin=""),i.href=n,f&&i.setAttribute("nonce",f),document.head.appendChild(i),c)return new Promise((m,d)=>{i.addEventListener("load",m),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${n}`)))})}))}return t.then(()=>x()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};var g={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=v,A=Symbol.for("react.element"),D=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,$=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function _(l,x,o){var r,t={},s=null,a=null;o!==void 0&&(s=""+o),x.key!==void 0&&(s=""+x.key),x.ref!==void 0&&(a=x.ref);for(r in x)W.call(x,r)&&!z.hasOwnProperty(r)&&(t[r]=x[r]);if(l&&l.defaultProps)for(r in x=l.defaultProps,x)t[r]===void 0&&(t[r]=x[r]);return{$$typeof:A,type:l,key:s,ref:a,props:t,_owner:$.current}}h.Fragment=D;h.jsx=_;h.jsxs=_;g.exports=h;var e=g.exports,u={},w=S;u.createRoot=w.createRoot,u.hydrateRoot=w.hydrateRoot;const J=()=>e.jsx("div",{children:"Footer"}),U="/sakura_omakase/assets/sakura_omakase_logo_wht-CcFN2Jel.svg",X=[{id:"home",title:"Home",link:"/"},{id:"about",title:"About",link:"/about"},{id:"menu",title:"Menu",link:"/menu"},{id:"reservations",title:"Reservations",link:"/reservations"},{id:"contact",title:"Contact",link:"/contact"}],q=()=>e.jsxs("nav",{className:"md:w-[10%] sm:w-[17%] xs:w-[120px] w-[100px] h-full fixed flex flex-col justify-between items-center bg-black",children:[e.jsx("div",{className:"w-5/6 my-2",children:e.jsx("img",{src:U,alt:"Sakura Omakase",width:"320",height:"360"})}),e.jsx("div",{className:"mt-2",children:e.jsx("ul",{className:"list-none flex flex-col",children:X.map(l=>e.jsx(k,{to:l.link,className:({isActive:x})=>[`font-fira_sans font-medium uppercase
                  cursor-pointer text-[13px] xl:text-[17px] xxl:text-[20px] xxxl:text-[25px] text-secondary p-2 sm:p-3
                  hover:text-slate-300`,x?"border border-white cursor-auto hover:text-white":""].join(" "),children:l.title},l.id))})}),e.jsxs("div",{className:"flex mb-4 xl:mb-5 xxl:mb-6 xxxl:mb-7 gap-3 xxxl:gap-4",children:[e.jsx("a",{href:"https://www.instagram.com/",className:"text-white hover:text-slate-300",children:e.jsx(p,{icon:P,className:"w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"})}),e.jsx("a",{href:"https://twitter.com/",className:"text-white hover:text-slate-300",children:e.jsx(p,{icon:C,className:"w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"})}),e.jsx("a",{href:"https://www.yelp.com/",className:"text-white hover:text-slate-300",children:e.jsx(p,{icon:T,className:"w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"})})]})]}),M=()=>e.jsxs("div",{className:"flex h-full",children:[e.jsx(q,{}),e.jsx("div",{className:"md:ml-[10%] sm:ml-[17%] xs:ml-[120px] ml-[100px]",children:e.jsxs("div",{className:"flex flex-col justify-center items-center text-black my-[80px] md:my-[110px] xl:my-[200px] mx-3 sm:mx-10",children:[e.jsx(O,{}),e.jsx(J,{})]})})]}),V=()=>e.jsx("section",{className:"flex flex-col md:flex-row md:my-6 justify-center items-center",children:e.jsxs("section",{className:"my-3 mx-4",children:[e.jsx("h1",{className:"text-[48px] xs:text-[50px] sm:text-[64px] lg:text-[76px] xl:text-[90px] font-semibold font-fira_sans leading-[62.2px] xs:leading-[70.4px] sm:leading-[88.6px] lg:leading-[100.8px]",children:"Experience the Essence of Japan"}),e.jsx("h3",{className:"leading-[4.5rem] opacity-25 font-semibold font-fira_sans text-[32px] xs:text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[72px] m-auto",children:"Sakura Omakase"}),e.jsx("div",{className:"my-5 sm:my-8 xl:my-10",children:e.jsx(k,{to:"/menu",className:`font-fira_sans font-medium uppercase bg-black
          cursor-pointer text-[17px] xl:text-[21px] xxl:text-[25px] xxxl:text-[30px] 
          text-secondary py-4 px-12 xl:py-5 xl:px-14`,children:"Menu"},"menu")})]})}),b=()=>e.jsxs("section",{className:"flex flex-col md:flex-row md:my-6 justify-center items-center",children:[e.jsxs("section",{className:"md:basis-1/2 my-3 mx-4 text-left font-fira_sans md:text-lg lg:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:[e.jsx("h3",{className:"font-semibold text-[48px] xs:text-[50px] sm:text-[64px] lg:text-[76px] text-center",children:"Contact Us"}),e.jsxs("p",{className:"mt-5 md:mt-8",children:[e.jsx("span",{className:"font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:"Thank you"}),"  for considering Sakura Omakase for your dining experience. We look forward to welcoming you to our restaurant and assisting you with any inquiries you may have."]}),e.jsxs("p",{className:"mt-3 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:["123 Fake Street",e.jsx("br",{}),"Toronto, ON M2N 3R7"]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:"Email:"}),"  toronto@sakura_omakase.com",e.jsx("br",{}),e.jsx("span",{className:"font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:"Phone:"}),"  (416) 123-1234",e.jsx("br",{})]}),e.jsxs("table",{className:"mt-3 w-full ss:w-[50%] md:w-[66%]",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,children:e.jsx("span",{className:"mb-2 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:"Hours of Operation:"})})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Monday:"}),e.jsx("td",{children:"CLOSED"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tuesday:"}),e.jsx("td",{children:"5:00pm - 11:00pm"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Wednesday:"}),e.jsx("td",{children:"5:00pm - 11:00pm"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Thursday:"}),e.jsx("td",{children:"5:00pm - 11:00pm"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Friday:"}),e.jsx("td",{children:"5:00pm - 12:00am"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Saturday:"}),e.jsx("td",{children:"5:00pm - 12:00am"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sunday:"}),e.jsx("td",{children:"5:00pm - 12:00am"})]})]})]}),e.jsxs("p",{className:"mt-3",children:["We appreciate your interest in ",e.jsx("span",{className:"font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:"Sakura Omakase"}),"  and look forward to serving you soon!"]})]}),e.jsxs("section",{className:"md:basis-1/2 my-3 w-full",children:[e.jsx("iframe",{className:"w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] xxl:h-[650px] xxxl:h-[700px] xxxxl:h-[800px]",src:"https://www.openstreetmap.org/export/embed.html?bbox=-79.36692684888841%2C43.64823175734573%2C-79.36392813920975%2C43.65076059585416&layer=mapnik"}),e.jsx("br",{}),e.jsx("small",{children:e.jsx("a",{href:"https://www.openstreetmap.org/#map=19/43.64950/-79.36543&layers=N",children:"View Larger Map"})})]})]}),H=Object.freeze(Object.defineProperty({__proto__:null,Contact:b},Symbol.toStringTag,{value:"Module"})),Q="/sakura_omakase/assets/omakase_480x281-B1lbWc8p.webp",Y="/sakura_omakase/assets/omakase_620x364-JQjT72oh.webp",Z="/sakura_omakase/assets/omakase_768x450-BZEbXbt1.webp",K="/sakura_omakase/assets/omakase_1060x622-B-e2IZSx.webp",G="/sakura_omakase/assets/omakase_1200x704-BDh2FUyp.webp",ee="/sakura_omakase/assets/omakase_1700x997-I95QhhkX.webp",te="/sakura_omakase/assets/omakase_2000x1173-BAFXR1ej.webp",se="/sakura_omakase/assets/omakase_2400x1407-DEl9TvEh.webp",xe="/sakura_omakase/assets/omakase_3504x2055-BzreTcEz.webp",ae=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"m-auto max-w-max",children:[e.jsxs("h1",{className:"text-[64px] xs:text-[72px] sm:text-[92px] lg:text-[108px] font-semibold font-fira_sans text-left leading-[62.2px] xs:leading-[70.4px] sm:leading-[88.6px] lg:leading-[100.8px]",children:["Indulge",e.jsx("br",{}),"in",e.jsx("br",{}),"Tradition"]}),e.jsx("h3",{className:"leading-[4.5rem] opacity-25 font-semibold font-fira_sans text-[36px] xs:text-[48px] sm:text-[60px] lg:text-[72px] m-auto",children:"Sakura Omakase"})]}),e.jsx("section",{className:"my-4",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:xe,media:"(min-width: 2400px)"}),e.jsx("source",{srcSet:se,media:"(min-width: 2000px)"}),e.jsx("source",{srcSet:te,media:"(min-width: 1700px)"}),e.jsx("source",{srcSet:ee,media:"(min-width: 1200px)"}),e.jsx("source",{srcSet:G,media:"(min-width: 1060px)"}),e.jsx("source",{srcSet:K,media:"(min-width: 768px)"}),e.jsx("source",{srcSet:Z,media:"(min-width: 620px)"}),e.jsx("source",{srcSet:Y,media:"(min-width: 480px)"}),e.jsx("img",{src:Q,alt:"Omakase Background",className:"rounded-sm",width:"3504",height:"2055"})]})})]}),le="/sakura_omakase/assets/restaurant_view-XLNXxDxR.webp",re=()=>e.jsxs("section",{className:"flex flex-col md:flex-row md:my-6 justify-center items-center",children:[e.jsxs("section",{className:"md:basis-1/2 my-3 mx-4",children:[e.jsxs("p",{className:"font-fira_sans text-left text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:[e.jsx("span",{className:"font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl",children:"Welcome to Sakura Omakase"}),", where tradition meets innovation in every dish. From delicate sashimi to meticulously crafted nigiri sushi, each bite is a symphony of taste and texture."]}),e.jsxs("p",{className:"mt-2 font-fira_sans text-left text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl",children:["Join us for an ",e.jsx("span",{className:"font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl",children:"unforgettable dining experience"})," that celebrates the artistry and elegance of Japanese cuisine. Indulge in the essence of omakase at Sakura Omakase today."]})]}),e.jsx("section",{className:"md:basis-1/2 my-3",children:e.jsx("img",{src:le,alt:"Restaurant View",className:"object-cover w-full h-full",loading:"lazy"})})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),e.jsx(re,{}),e.jsx(V,{}),e.jsx(b,{})]}),oe=()=>e.jsx("div",{children:"404"}),ie=E([{path:"/",element:e.jsx(M,{}),children:[{index:!0,element:e.jsx(ne,{})},{path:"about",async lazy(){const{About:l}=await y(()=>import("./About-DRaXh6Jc.js"),__vite__mapDeps([0,1,2,3]));return{Component:l}}},{path:"contact",async lazy(){const{Contact:l}=await y(()=>Promise.resolve().then(()=>H),void 0);return{Component:l}}}]},{path:"*",element:e.jsx(oe,{})}],{basename:"/sakura_omakase/"});u.createRoot(document.getElementById("root")).render(e.jsx(R.StrictMode,{children:e.jsx(L,{router:ie})}));export{e as j};
