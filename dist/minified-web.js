/^u/.test(typeof define)&&function(a){this.define=function(b,c){a[b]=c()},this.require=function(b){return a[b]}}({}),define("minified",function(){function a(a){return a!=C?""+a:""}function b(a){return"string"==typeof a}function c(a){return a&&a.nodeType}function d(a){return a}function e(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function f(a,b){var c=[];return i(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function g(a,b,c){var d=[];return a(b,function(a,e){i(c.call(b,a,e),function(a){d.push(a)})}),d}function h(b,c,d){return a(b).replace(c,d||"")}function i(a,b){if(k(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=C&&b(a,0);return a}function j(a){return"function"==typeof a&&!a.item}function k(a){return a&&a.length!=C&&!b(a)&&!c(a)&&!j(a)&&a!==F}function l(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):D}}function m(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function n(a,b){setTimeout(a,b||0)}function o(a){return parseFloat(h(a,/^[^\d-]+/))}function p(a){return a.Mid=a.Mid||++H}function q(a,b){var d,e=[],f={};return i(a,function(a){i(b(a),function(a){c(a)&&!f[d=p(a)]&&(e.push(a),f[d]=D)})}),e}function r(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:C},c=a.get(b);return a.set(b),b=a.get("$height",D),a.set(c),b}function s(a){a()}function t(a){I?I.push(a):n(a)}function u(a){return g(i,a,function(a){return b(a)?a:k(a)?u(a):c(a)?(a=a.cloneNode(D),a.id="",a):C})}function v(a,b,c){return j(a)?t(a):new A(w(a,b,c))}function w(a,c,d){function e(a){return k(a)?g(i,a,e):a}function h(a){return f(g(i,a,e),function(a){for(;a=a.parentNode;)if(a==c[0]||d)return a==c[0]})}return c?1!=(c=w(c)).length?q(c,function(b){return w(a,b,d)}):b(a)?d?h(c[0].querySelectorAll(a)):c[0].querySelectorAll(a):h(a):b(a)?G.querySelectorAll(a):g(i,a,e)}function x(a,d){var e,f,g={},h=g;return j(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||b(a)&&(h=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(e=l(h[1],"nodeName"),f=l(h[2],"className"),function(a){return 1==c(a)&&e(a)&&f(a)}):d?function(b){return v(a,d).find(b)!=C}:(v(a).each(function(a){g[p(a)]=D}),function(a){return g[p(a)]})}function y(a){var b=x(a);return function(a){return b(a)?C:D}}function z(){function a(a,e){b==C&&(b=a,c=e,n(function(){i(d,s)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,j(d)?(f=d.apply(B,c),f&&j(f.then)?f.then(function(a){g(D,[a])},function(a){g(E,[a])}):g(D,[f])):g(b,c)}catch(h){g(E,[h])}}var g=z();return b!=C?n(f):d.push(f),g};return a.error=function(a){return e(0,a)},a}function A(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var B,C=null,D=!0,E=!1,F=this,G=document,H=1,I=/^[ic]/.test(G.readyState)?C:[],J=[],K=F.requestAnimationFrame||function(a){n(a,33)};return e({each:function(a){return i(this,a)},filter:function(a){return new A(f(this,a))},collect:function(a){return new A(g(i,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=j(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=C)return c},remove:function(){i(this,function(a){a.parentNode.removeChild(a)})},text:function(){return g(i,this,function(a){return a.textContent}).join("")},trav:function(a,b,c){var d="number"==typeof b,e=x(d?C:b),f=d?b:c;return new A(q(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},select:function(a,b){return v(a,this,b)},is:function(a){return!this.find(y(a))},only:function(a){return this.filter(x(a))},not:function(a){return this.filter(y(a))},get:function(a,c){var d,f,g,j=this,l=j[0];return l?b(a)?(f=h(h(h(a,/^\$float$/,"cssFloat"),/^%/,"data-"),/^[$@]+/),d="$"==a?l.className:"$$"==a?l.getAttribute("style"):"$$fade"==a||"$$slide"==a?"hidden"==l.style.visibility||"none"==l.style.display?0:"$$fade"==a?isNaN(d=o(l.style.opacity))?1:d:j.get("$height"):/^\$[^$]/.test(a)?F.getComputedStyle(l,C).getPropertyValue(h(f,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^[@%]/.test(a)?l.getAttribute(f):l[f],c?o(d):d):(g={},(k(a)?i:e)(a,function(a){g[a]=j.get(a,c)}),g):void 0},set:function(a,c){function d(a,b,c){c!=C?a.setAttribute(b,c):a.removeAttribute(b)}var f,g=this;return c!==B?"$$fade"==a||"$$slide"==a?g.set({$visibility:0<(f=o(c))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:f}:{$height:/px/.test(c)?c:function(a,b,c){return f*(f&&r(v(c)))+"px"},$overflow:"hidden"}):i(g,function(b,e){var f=h(h(h(a,/^\$float$/,"cssFloat"),/^%/,"data-"),/^[@$]+/),g=b.className||"",k=/^\$/.test(a)?b.style:b,l=j(c)?c(v(b).get(a),e,b):c;"$"==a?l!=C&&(i(l.split(/\s+/),function(a){var b=h(a,/^[+-]/),c=g;g=h(g,RegExp("(^|\\s)"+b+"(?=$|\\s)","i")),(/^\+/.test(a)||b==a&&c==g)&&(g+=" "+b)}),b.className=h(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?d(b,"style",l):"$$scrollX"==a?b.scroll(l,b.scrollY):"$$scrollY"==a?b.scroll(b.scrollX,l):/^[@%]/.test(a)?d(k,f,l):k[f]=l}):b(a)||j(a)?g.set("$",a):e(a,function(a,b){g.set(a,b)}),g},add:function(a,b){return this.each(function(d,e){var f;!function g(a){k(a)?i(a,g):j(a)?g(a(d,e)):a!=C&&(a=c(a)?a:G.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),f=a)}(e&&!j(a)?u(a):a)})},fill:function(a){return this.each(function(a){v(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new A(u(this))},animate:function(a,b,c){var d,f=this,g=[],h=z(),k=0;return h.stop=function(){return h(E),d(),k},b=b||500,i(f,function(b,d){var f,h=v(b),i={};e(f=h.get(a),function(c,e){var f=a[c];i[c]=j(f)?f(e,d,b):"$$slide"==c?a[c]*r(h)+"px":f}),g.push(h.dial(f,i,c))}),d=v.loop(function(a){a>=b||0>a?(k=b,d(),h(D,[f])):k=a,i(g,function(a){a(k/b)})}),h},dial:function(b,c,d){function f(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(h(a,/[^\d,]+/g).split(",")[b])}var g=this,i=j(d)?d:function(a,b,c){return a+c*(b-a)*(d+(1-d)*c*(3-2*c))};return d=d||0,function(d){e(b,function(b,e){var j=c[b],k=0;g.set(b,0>=d?e:d>=1?j:/^#|rgb\(/.test(j)?"rgb("+Math.round(i(f(e,k),f(j,k++),d))+","+Math.round(i(f(e,k),f(j,k++),d))+","+Math.round(i(f(e,k),f(j,k++),d))+")":h(j,/-?[\d.]+/,a(i(o(e),o(j),d))))})}},toggle:function(a,b,c,d){var e,f,g=this,i=E,j=/\b(?=\w)/g;return b?g.set(a)&&function(h){h!==i&&(f=(i=h===D||h===E?h:!i)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=C}):g.set(f)&&B)}:g.toggle(h(a,j,"-"),h(a,j,"+"))},values:function(b){var c=b||{};return this.each(function(b){var e=b.name,f=a(b.value);if(/form/i.test(b.tagName))for(e=0;e<b.elements.length;e++)v(b.elements[e]).values(c);else!e||/kbox|dio/i.test(b.type)&&!b.checked||(c[e]=c[e]==C?f:g(i,[c[e],f],d))}),c},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(c,d,e,f,g){return j(d)?this.on(C,c,d,e,f):b(f)?this.on(c,d,e,C,f):this.each(function(b,j){i(c?w(c,b):b,function(b){i(a(d).split(/\s/),function(a){function c(a,b,c){return i==a&&!d(b,c)}function d(a,c){var d,h,i=!g,l=g?c||a.target:b;if(g)for(h=x(g,b);l&&l!=b&&!i;)h(l)?i=D:l=l.parentNode;return i&&(d=(!e.apply(v(l),f||[a,j])||""==k)&&"|"!=k)&&!c&&(a.preventDefault(),a.stopPropagation()),!d}var i=h(a,/[?|]/),k=h(a,/[^?|]/g);(b.M=b.M||[]).push(c),(e.M=e.M||[]).push(function(){b.removeEventListener(i,d,E),m(b.M,c)}),b.addEventListener(i,d,E)})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||v(g).trav("parentNode",c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(C,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[D]).on(a,"|blur",b,[E]):this.onFocus(C,a)},onChange:function(a,b){return b?this.each(function(c,d){function e(e,f){v(c).on(a,e,function(){b.call(this,c[f],d)})}/kbox|dio/i.test(c.type)?e("|click","checked"):e("|input","value")}):this.onChange(C,a)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)i(e.M,function(e){d=d||e(a,b,c)}),e=e.parentNode})}},function(a,b){A.prototype[a]=b}),e({request:function(d,f,h,j){j=j||{};var k,l=0,m=z(),n=h!=C&&!c(h)&&!b(h);try{k=new XMLHttpRequest,n&&(h=g(e,h,function(a,b){return g(i,b,function(b){return encodeURIComponent(a)+(b!=C?"="+encodeURIComponent(b):"")})}).join("&")),h==C||/post/i.test(d)||(f+="?"+h,h=C),k.open(d,f,D,j.user,j.pass),n&&/post/i.test(d)&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e(j.headers,function(a,b){k.setRequestHeader(a,b)}),e(j.xhr,function(a,b){k[a]=b}),k.onreadystatechange=function(){4!=k.readyState||l++||(200==k.status?m(D,[k.responseText,k.responseXML]):m(E,[k.status,k.statusText,k.responseText]))},k.send(h)}catch(o){l||m(E,[0,C,a(o)])}return m},toJSON:JSON.stringify,parseJSON:JSON.parse,ready:t,loop:function(a){var b={b:a,c:+new Date,a:function(){m(J,b)}};return 2>J.push(b)&&function c(){i(J,function(a){a.b(Math.max(0,+new Date-a.c),a.a)}).length&&K(c)}(),b.a},off:function(a){i(a.M,s),a.M=C}},function(a,b){v[a]=b}),G.addEventListener("DOMContentLoaded",function(){i(I,s),I=C},E),{$:v,$$:function(a){return w(a)[0]},EE:function(a,b,c){return a=v(G.createElement(a)),k(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:A}});