!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";!function(){var t=document.querySelector(".work-time"),e=document.querySelector(".break-time"),n=document.querySelector(".status"),o=document.querySelector(".minute"),r=document.querySelector(".seconds"),c=25,u=5,a=!1,l=void 0,i=void 0;document.querySelector(".set-time").addEventListener("click",function(n){var r=n.target.classList.contains("work-minus"),l=n.target.classList.contains("work-plus"),i=n.target.classList.contains("break-minus"),s=n.target.classList.contains("break-plus");r&&!a&&c>1?(c--,t.textContent=c,o.textContent=c):l&&!a?(c++,t.textContent=c,o.textContent=c):i&&!a&&u>1?(u--,e.textContent=u):s&&!a&&(u++,e.textContent=u)}),document.querySelector(".play-button").addEventListener("click",function(){a||"Work"!==n.textContent?a||"Break"!==n.textContent||d(o.textContent,r.textContent):s(o.textContent,r.textContent),a=!0}),document.querySelector(".pause-button").addEventListener("click",function(){clearInterval(l),clearInterval(i),a=!1}),document.querySelector(".reset-button").addEventListener("click",function(){clearInterval(l),clearInterval(i),o.textContent=c,r.textContent="00",t.textContent=c,e.textContent=u,a=!1});var s=function(t,c){var u=t,a=c,i=document.querySelector(".break-audio");l=setInterval(function(){n.style.color="#f43a3a",n.textContent="Work",a<=0?(a=59,r.textContent=a):(a--,r.textContent=a<10?"0"+a:a),59===a&&(u--,o.textContent=u),"0"===o.textContent&&"00"===r.textContent&&(clearInterval(l),i.play(),d(e.textContent,r.textContent))},100)},d=function(e,c){var u=e,a=c,l=document.querySelector(".work-audio");i=setInterval(function(){n.style.color="#0daa32",n.textContent="Break",a<=0?(a=59,r.textContent=a):(a--,r.textContent=a<10?"0"+a:a),59===a&&(u--,o.textContent=u),"0"===o.textContent&&"00"===r.textContent&&(clearInterval(i),l.play(),s(t.textContent,r.textContent))},100)}}()}]);
//# sourceMappingURL=bundle.js.map