/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";var e,t={461:function(e,t,n){function i(e,t){let n=!1;return function(){n||(n=!0,setTimeout((()=>{e.apply(this,arguments),n=!1}),t))}}const a=()=>{const e=document.querySelector(".js-toggle-menu");if(!e)return;const t=document.querySelector(".menu"),n=document.querySelectorAll(".menu__text"),a=document.querySelector("body"),s=document.querySelector(".menu__item-contact"),l=()=>{e.classList.remove("active"),a.classList.toggle("menu-active"),t.classList.remove("menu--open"),n.forEach((e=>{e.classList.toggle("menu__text-active")}))};e.addEventListener("click",(function(){e.classList.contains("active")?l():(e.classList.add("active"),a.classList.toggle("menu-active"),t.classList.add("menu--open"),n.forEach((e=>{e.classList.toggle("menu__text-active")})))})),s.addEventListener("click",(()=>{l()}));const r=i((()=>{window.matchMedia("(min-width: 1200px)").matches&&document.body.classList.contains("menu-active")&&l()}),200);window.addEventListener("resize",r)},s=()=>{const e=document.querySelectorAll("[data-tabs]");e.length&&(document.querySelectorAll("[data-tabs-content] > [data-tab-content]").forEach((e=>{e.classList.contains("is-active")||e.classList.add("visually-hidden")})),e.forEach((e=>{const t=e.getAttribute("data-tabs");e.addEventListener("click",(e=>{const n=e.target;if(!n.hasAttribute("data-tab"))return;const i=n,a=i.getAttribute("data-tab"),s=document.querySelectorAll(`[data-tabs-content="${t}"] > [data-tab-content]`),l=document.querySelector(`[data-tabs-content="${t}"] > [data-tab-content="${a}"]`),r=document.querySelector(`[data-tabs-content="${t}"] > [data-tab-content].is-active`),o=document.querySelector(`[data-tabs=${t}] > button.is-active`),c=document.querySelectorAll(`[data-tabs=${t}] > button`);s.forEach((e=>{e.classList.add("visually-hidden"),e.classList.remove("is-active")})),r.classList.remove("is-active"),o.classList.remove("is-active"),c.forEach((e=>e.classList.remove("is-active"))),l.classList.add("is-active"),l.classList.remove("visually-hidden"),i.classList.add("is-active")}))})))},l=()=>{const e=document.querySelectorAll("[data-collapse-target]");e.length&&e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.dataset.collapseTarget,n=document.querySelectorAll(`[data-collapse-target="${t}"]`);document.querySelector(`[data-collapse-content="${t}"]`).classList.toggle("active"),n.forEach((e=>e.classList.toggle("active")))}))}))},r=e=>{e.forEach((e=>{if(function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,a=t.top<=n&&t.top+t.height>=0,s=t.left<=i&&t.left+t.width>=0;return a&&s}(e)){if(e.classList.contains("no-animate"))return;const t=e.dataset.scrollspy;e.classList.add("animate__animated"),e.classList.add(t)}}))},o=function(){const e=document.querySelectorAll("[data-scrollspy]");e.length&&(r(e),document.addEventListener("scroll",i((()=>{r(e)}),100)))},c=function(){const e=document.querySelector(".video__file");e&&(e.setAttribute("src","video/video.mp4"),e.play(),e.addEventListener("playing",(function(){}),!1))},d=()=>{const e=document.querySelectorAll(".js-file-input");0!==e.length&&e.forEach((e=>{const t=e.querySelector('input[type="file"]'),n=e.querySelector(".input-file__placeholder"),i=e.querySelector(".input-file__name");t&&t.addEventListener("change",(()=>{const e=Array.from(t.files);e.length?(n.classList.add("hidden"),i.classList.remove("hidden")):(n.classList.remove("hidden"),i.classList.add("hidden")),i.textContent=0===e.length?"":1===e.length?e[0].name:`${e.length} files selected`}))}))};var u=n(236),f=n(889);const b=function(){new u.A(".slider",{modules:[f.Vx,f.dK],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:"true",type:"bullets",bulletElement:"button"}})},p=function(){new u.A(".js-swiper-services",{modules:[f.dK,f._R],effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:"true",type:"bullets",bulletElement:"button"},breakpoints:{1200:{enabled:!1}}})},m=function(){new u.A(".our-services__slider",{modules:[f.Vx],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},g=function(){new u.A(".slider-teams",{modules:[f.Vx],slidesPerView:1.5,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2.5},800:{slidesPerView:3.5},1024:{slidesPerView:4.5},1200:{slidesPerView:5.5},1300:{slidesPerView:6.5},1600:{slidesPerView:7.5}}})};var h=n(244);!function(e,t,n){let i=null,a=null,s="",l=null,r=0;function o(e){e=e||"select:not(.fsb-ignore)",t.querySelectorAll(e).forEach(c)}function c(e,n){if(e.nextElementSibling&&e.nextElementSibling.classList.contains("fsb-select"))return;const i=e.children,a=e.parentNode,s=t.createElement("span"),l=t.createElement("span"),o=t.createElement("button"),c=t.createElement("span"),d=t.createElement("span"),b=r++;e.classList.add("fsb-original-select"),l.id=`fsb_${b}_label`,l.className="fsb-label",l.textContent=u(e,a),o.id=`fsb_${b}_button`,o.className="fsb-button",o.innerHTML="&nbsp;",o.setAttribute("type","button"),o.setAttribute("aria-disabled",e.disabled),o.setAttribute("aria-haspopup","listbox"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-labelledby",`fsb_${b}_label fsb_${b}_button`),c.className="fsb-list",c.setAttribute("role","listbox"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-labelledby",`fsb_${b}_label`);for(let e=0,t=i.length;e<t;e++){const{item:t,selected:a,itemLabel:s}=f(i[e],n);c.appendChild(t),a&&(o.innerHTML=s)}if(s.className="fsb-select",s.appendChild(l),s.appendChild(o),s.appendChild(c),s.appendChild(d),e.style.display="none",e.nextSibling?a.insertBefore(s,e.nextSibling):a.appendChild(s),c.firstElementChild){const e=t.createElement("span");e.style.width=`${c.firstElementChild.offsetWidth}px`,d.className="fsb-resize",d.appendChild(e)}}function d(e,n){const i=e.children,a=e.parentNode,s=e.nextElementSibling;if(!s||!s.classList.contains("fsb-select"))return;const l=s.firstElementChild,r=l.nextElementSibling,o=r.nextElementSibling,c=o.nextElementSibling,d=t.createDocumentFragment();l.textContent=u(e,a),r.setAttribute("aria-disabled",e.disabled);for(let e=0,t=i.length;e<t;e++){const{item:t,selected:a,itemLabel:s}=f(i[e],n);d.appendChild(t),a&&(r.innerHTML=s)}for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(d),o.firstElementChild&&(c.firstElementChild.style.width=`${o.firstElementChild.offsetWidth}px`)}function u(e,n){const i=e.id;let a;if("LABEL"===n.nodeName?a=n:void 0!==i&&(a=t.querySelector(`label[for="${i}"]`)),a){const t=[].filter.call(a.childNodes,(e=>3===e.nodeType)).map((e=>e.textContent.replace(/\s+/g," ").trim())).filter((e=>""!==e))[0];if(t)return a.onclick=t=>{e.nextElementSibling.querySelector("button").click(),t.preventDefault(),t.stopImmediatePropagation()},t}return""}function f(e,n){const i=t.createElement("span"),a=e.selected,s=function(e,t){if("function"==typeof t)return t(e);const n=e.text,i=e.getAttribute("data-icon");let a=""!==n?n:"&nbsp;";return a=`<span>${a}</span>`,null!==i&&(a=`<svg aria-hidden="true"><use href="${i}"></use></svg> ${a}`),a}(e,n);return i.className="fsb-option",i.innerHTML=s,i.setAttribute("role","option"),i.setAttribute("tabindex","-1"),i.setAttribute("aria-selected",a),e.disabled&&i.setAttribute("aria-disabled",e.disabled),{item:i,selected:a,itemLabel:s}}function b(e){const n=e.getBoundingClientRect(),s=e.nextElementSibling;let l=s.querySelector('[aria-selected="true"]');l||(l=s.firstElementChild),e.parentNode.className="fsb-select",e.setAttribute("aria-expanded","true"),l.focus(),i=e,a=l,n.y+n.height+s.offsetHeight>t.documentElement.clientHeight&&(e.parentNode.className="fsb-select fsb-top")}function p(e){const n=t.querySelector('.fsb-button[aria-expanded="true"]');n&&(n.setAttribute("aria-expanded","false"),e&&n.focus(),s="",l=null),i=null,a=null}function m(e){const t=e.parentNode,n=t.previousElementSibling,i=[].indexOf.call(t.children,e),a=t.querySelector('[aria-selected="true"]'),s=t.parentNode.previousElementSibling;a&&a.setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true"),n.innerHTML=e.innerHTML,s.selectedIndex=i,s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0}))}function g(e){const t=function(e,t){const n=[].map.call(e.children,(e=>e.textContent.trim().toLowerCase())),i=h(n,t)[0];if(i)return e.children[n.indexOf(i)];if(function(e){const t=e.split("");return t.every((e=>e===t[0]))}(t)){const i=h(n,t[0]),a=i[(t.length-1)%i.length];return e.children[n.indexOf(a)]}return null}(e,s);t&&t.focus()}function h(e,t){return e.filter((e=>0===e.indexOf(t.toLowerCase())))}function v(t){const{key:n,altKey:i,ctrlKey:a,metaKey:r}=t;return!(1!==n.length||i||a||r||(l&&e.clearTimeout(l),l=e.setTimeout((()=>{s=""}),500),s+=n,0))}function y(e,t){if(!e)return;if(!e.getAttribute("aria-disabled"))return a=e,e.focus();const n=Array.from(e.parentNode.children),i=n.indexOf(e);if("next"===t){for(let e=i+1,t=n.length;e<t;e++)if(!n[e].getAttribute("aria-disabled"))return a=n[e],n[e].focus()}else for(let e=i-1;e>=0;e--)if(!n[e].getAttribute("aria-disabled"))return a=n[e],n[e].focus()}function E(e,t,n,i){const a=Element.prototype.matches||Element.prototype.msMatchesSelector;"string"==typeof n?e.addEventListener(t,(e=>{a.call(e.target,n)&&i.call(e.target,e)})):(i=n,e.addEventListener(t,i))}function L(e,n){n=void 0!==n?n:[],"loading"!==t.readyState?e(...n):t.addEventListener("DOMContentLoaded",(()=>{e(...n)}))}E(t,"click",".fsb-button",(e=>{const t=i===e.target;p(),t||b(e.target),e.preventDefault(),e.stopImmediatePropagation()})),E(t,"keydown",".fsb-button",(e=>{const t=e.target,n=t.nextElementSibling;let i=!0;switch(e.key){case"ArrowUp":case"ArrowDown":case"Enter":case" ":b(t);break;default:v(e)?(b(t),g(n)):i=!1}i&&e.preventDefault()})),E(t.documentElement,"mousemove",'.fsb-option:not([aria-disabled="true"])',(e=>{e.target.focus(),a=e.target})),E(t,"click",".fsb-option",(e=>{const t=e.target;t.getAttribute("aria-disabled")?(e.stopImmediatePropagation(),a.focus()):(m(t),p(!0))})),E(t,"keydown",".fsb-option",(e=>{const t=e.target,n=t.parentNode;let i=!0;switch(e.key){case"ArrowUp":case"ArrowLeft":y(t.previousElementSibling,"prev");break;case"ArrowDown":case"ArrowRight":y(t.nextElementSibling,"next");break;case"Home":y(n.firstElementChild,"next");break;case"End":y(n.lastElementChild,"prev");break;case"PageUp":case"PageDown":break;case"Tab":m(t),p(),i=!1;break;case"Enter":case" ":m(t);case"Escape":p(!0);break;default:v(e)?g(n):i=!1}i&&e.preventDefault()})),E(t,"click",(e=>{p()})),e.FancySelect=(()=>{function e(){L(o)}return e.init=o,e.replace=c,e.update=d,e})(),n&&L(o)}(window,document,"undefined"==typeof FancySelectAutoInitialize||FancySelectAutoInitialize),window.addEventListener("load",(()=>{a(),s(),l(),o(),c(),d(),b(),p(),m(),g(),(0,h.Ay)("[data-template]",{content(e){const t=e.getAttribute("data-template"),n=document.getElementById(t);return n?n.innerHTML:null},allowHTML:!0,arrow:!0}),document.querySelector("body").classList.add("page-loaded")}),!1)}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.m=t,e=[],i.O=function(t,n,a,s){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],s=e[d][2];for(var r=!0,o=0;o<n.length;o++)(!1&s||l>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(r=!1,s<l&&(l=s));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={792:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,l=n[0],r=n[1],o=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(o)var d=o(i)}for(t&&t(n);c<l.length;c++)s=l[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},n=self.webpackChunkninelines_template=self.webpackChunkninelines_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=i.O(void 0,[121],(function(){return i(461)}));a=i.O(a)}();