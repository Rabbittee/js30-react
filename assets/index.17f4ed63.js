import{r as c,R as e,N as d,u as f,L as E,a as h,H as g,b as y,c as i}from"./vendor.40c86eb2.js";const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};v();var b="/js30-react/assets/logo.ecc203fb.svg";function k(){const[s,r]=c.exports.useState(0);return e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement("img",{src:b,className:"App-logo",alt:"logo"}),e.createElement("p",null,"Hello Vite + React!"),e.createElement("p",null,e.createElement("button",{type:"button",onClick:()=>r(o=>o+1)},"count is: ",s)),e.createElement("p",null,"Edit ",e.createElement("code",null,"App.jsx")," and save to test HMR updates."),e.createElement("p",null,e.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",e.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}const _="modulepreload",u={},A="/js30-react/",L=function(r,o){return!o||o.length===0?r():Promise.all(o.map(l=>{if(l=`${A}${l}`,l in u)return;u[l]=!0;const t=l.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":_,t||(a.as="script",a.crossOrigin=""),a.href=l,document.head.appendChild(a),t)return new Promise((m,p)=>{a.addEventListener("load",m),a.addEventListener("error",p)})})).then(()=>r())};class N extends c.exports.Component{constructor(r){super(r);this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?e.createElement(d,{to:"/404",replace:!0}):this.props.children}}function R(s){switch(s){case"../components/day01/Cola/Cola.jsx":return L(()=>import("./Cola.ca8842eb.js"),["assets/Cola.ca8842eb.js","assets/vendor.40c86eb2.js"]);default:return new Promise(function(r,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function j(){const{day:s,name:r}=f(),o=r.charAt(0).toUpperCase()+r.slice(1),l=c.exports.lazy(()=>R(`../components/${s}/${o}/${o}.jsx`));return e.createElement(N,null,e.createElement(c.exports.Suspense,{fallback:e.createElement("div",null,"Loading...")},e.createElement(l,null)))}function x(){return e.createElement("div",null,e.createElement("h2",null,"Nothing to see here!"),e.createElement("p",null,e.createElement(E,{to:"/"},"Go to the home page")))}h.render(e.createElement(e.StrictMode,null,e.createElement(g,null,e.createElement(y,null,e.createElement(i,{path:"/",element:e.createElement(k,null)}),e.createElement(i,{path:"/404",element:e.createElement(x,null)}),e.createElement(i,{path:":day/:name",element:e.createElement(j,null)})))),document.getElementById("root"));