!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function o(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var n=document.querySelector(".switch-checkbox"),i=document.querySelector("body"),r=document.querySelector(".theme__dark"),c=document.querySelector(".theme__light");n.addEventListener("click",(function(){i.classList.toggle("darkMode"),r.classList.toggle("opacityForDark"),c.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(i.classList.add("darkMode"),n.checked=!0)}catch(e){}}();document.querySelector(".list-news");var l,u=document.querySelector(".js-menu-container"),d=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),s=document.querySelector(".theme"),f=document.querySelector(".search-field__btn"),m=(document.querySelector(".news-loader__container.container"),{});Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,w="object"==typeof self&&self&&self.Object===Object&&self,S=h||w||Function("return this")(),E=Object.prototype.toString,L=Math.max,T=Math.min,j=function(){return S.Date.now()};function k(t){var o=void 0===t?"undefined":e(m)(t);return!!t&&("object"==o||"function"==o)}function q(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(m)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==E.call(t)}(t))return NaN;if(k(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=k(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=p.test(t);return n||g.test(t)?b(t.slice(2),n?2:8):y.test(t)?NaN:+t}l=function(e,t,o){var n,i,r,c,l,u,d=0,a=!1,s=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var o=n,r=i;return n=i=void 0,d=t,c=e.apply(r,o)}function v(e){return d=e,l=setTimeout(p,t),a?m(e):c}function y(e){var o=e-u;return void 0===u||o>=t||o<0||s&&e-d>=r}function p(){var e=j();if(y(e))return g(e);l=setTimeout(p,function(e){var o=t-(e-u);return s?T(o,r-(e-d)):o}(e))}function g(e){return l=void 0,f&&n?m(e):(n=i=void 0,c)}function b(){var e=j(),o=y(e);if(n=arguments,i=this,u=e,o){if(void 0===l)return v(u);if(s)return l=setTimeout(p,t),m(u)}return void 0===l&&(l=setTimeout(p,t)),c}return t=q(t)||0,k(o)&&(a=!!o.leading,r=(s="maxWait"in o)?L(q(o.maxWait)||0,t):r,f="trailing"in o?!!o.trailing:f),b.cancel=function(){void 0!==l&&clearTimeout(l),d=0,n=u=i=l=void 0},b.flush=function(){return void 0===l?c:g(j())},b};var x={};o(x,"disableBodyScroll",(function(){return R})),o(x,"clearAllBodyScrollLocks",(function(){return Y})),o(x,"enableBodyScroll",(function(){return C}));var _=!1;if("undefined"!=typeof window){var A={get passive(){_=!0}};window.addEventListener("testPassive",null,A),window.removeEventListener("testPassive",null,A)}var B="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),I=[],O=!1,M=-1,P=void 0,D=void 0,F=void 0,W=function(e){return I.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},H=function(e){var t=e||window.event;return!!W(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},N=function(){void 0!==F&&(document.body.style.paddingRight=F,F=void 0),void 0!==P&&(document.body.style.overflow=P,P=void 0)},$=function(){if(void 0!==D){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=D.position,document.body.style.top=D.top,document.body.style.left=D.left,window.scrollTo(t,e),D=void 0}},R=function(e,t){if(e){if(!I.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};I=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(I),[o]),B?window.requestAnimationFrame((function(){if(void 0===D){D={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===F){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);F=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===P&&(P=document.body.style.overflow,document.body.style.overflow="hidden")}(t),B&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(M=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-M;!W(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?H(e):e.stopPropagation())}(t,e)},O||(document.addEventListener("touchmove",H,_?{passive:!1}:void 0),O=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Y=function(){B&&(I.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),O&&(document.removeEventListener("touchmove",H,_?{passive:!1}:void 0),O=!1),M=-1),B?$():N(),I=[]},C=function(e){e?(I=I.filter((function(t){return t.targetElement!==e})),B&&(e.ontouchstart=null,e.ontouchmove=null,O&&0===I.length&&(document.removeEventListener("touchmove",H,_?{passive:!1}:void 0),O=!1)),B?$():N()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},G=function(){var t="true"===d.getAttribute("aria-expanded")||!1;if(d.setAttribute("aria-expanded",!t),u.classList.toggle("open-menu"),s.classList.contains("mobile"))s.classList.remove("mobile");else if(!s.classList.contains("mobile")){e(l)((function(){s.classList.add("mobile")}),250)()}x[t?"enableBodyScroll":"disableBodyScroll"](document.body)};d.addEventListener("click",G),a.addEventListener("click",G),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(u.classList.remove("open-menu"),d.setAttribute("aria-expanded",!1),x.enableBodyScroll(document.body))})),window.innerWidth<768&&f.setAttribute("type","button")}();
//# sourceMappingURL=index.29a02229.js.map
