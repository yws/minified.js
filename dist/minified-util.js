if(/^u/.test(typeof define)){var aa={};this.define=function(a,b){aa[a]=b()},this.require=function(a){return aa[a]}}module.f=function(){function a(a){return a.substr(0,3)}function b(a){return a!=ib?""+a:""}function c(a){return"string"==typeof a}function d(a){return!!a&&"object"==typeof a}function e(a){return"number"==typeof a}function f(a){return d(a)&&!!a.getDay}function g(a){return a===jb||a===kb}function h(a){var b=typeof a;return"object"==b?!(!a||!a.getDay):"string"==b||"number"==b||g(a)}function i(a){return a}function j(a){return a+1}function k(a,c,d){return b(a).replace(c,d!=ib?d:"")}function l(a){return k(a,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function m(a){return k(a,/^\s+|\s+$/g)}function n(a,b){for(var c in a)a.hasOwnProperty(c)&&b.call(a,c,a[c]);return a}function o(a,b){if(a)for(var c=0;c<a.length;c++)b.call(a,a[c],c);return a}function p(a,b){var c=[],d=db(b)?b:function(a){return b!=a};return o(a,function(b,e){d.call(a,b,e)&&c.push(b)}),c}function q(a,b,c){var d=[];return a(b,function(a,e){eb(a=c.call(b,a,e))?o(a,function(a){d.push(a)}):a!=ib&&d.push(a)}),d}function r(a,b){return q(o,a,b)}function s(a){var b=0;return n(a,function(){b++}),b}function t(a){var b=[];return n(a,function(a){b.push(a)}),b}function u(a,b){var c=[];return o(a,function(d,e){c.push(b.call(a,d,e))}),c}function v(a,b){if(eb(a)){var c=gb(b);return K(gb(a).sub(0,c.length),c)}return b!=ib&&a.substr(0,b.length)==b}function w(a,b){if(eb(a)){var c=gb(b);return gb(a).sub(-c.length).e(c)||!c.length}return b!=ib&&a.substr(a.length-b.length)==b}function x(a){var b=a.length;return u(a,function(){return a[--b]})}function y(a,b,c){if(!a)return[];var d=C(a,b,0),e=C(a,c,a.length);return p(a,function(a,b){return b>=d&&e>b})}function z(a,b){var c={};return o(a,function(a){c[a]=b}),c}function A(a,b,c){return n(a,function(a,d){b[a]!=ib&&c||(b[a]=d)}),b}function B(a){return db(a)?a:function(b,c){return a===b?c:void 0}}function C(a,b,c){return b==ib?c:0>b?a.length+b:b}function D(a,b,c,d){b=B(b),d=C(a,d,a.length);for(var e=C(a,c,0);d>e;e++)if((c=b.call(a,a[e],e))!=ib)return c}function E(a,b,c,d){b=B(b),d=C(a,d,-1);for(var e=C(a,c,a.length-1);e>d;e--)if((c=b.call(a,a[e],e))!=ib)return c}function F(a){return u(a,i)}function G(a){return function(){return new fb(M(a,arguments))}}function H(a){var b={};return p(a,function(a){return b[a]?kb:b[a]=1})}function I(a,b){var c=z(b,1);return p(a,function(a){var b=c[a];return c[a]=0,b})}function J(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return jb;return kb}function K(a,b){var c,d=db(a)?a():a,e=db(b)?b():b;return d==e?jb:d==ib||e==ib?kb:h(d)||h(e)?f(d)&&f(e)&&+d==+e:eb(d)?d.length!=e.length?kb:!D(d,function(a,b){return K(a,e[b])?void 0:jb}):eb(e)?kb:(c=t(d),c.length!=s(e)?kb:!D(c,function(a){return K(d[a],e[a])?void 0:jb}))}function L(a,b,c){return a.apply(c&&b,u(c||b,i))}function M(a,b,c){return u(a,function(a){return db(a)?L(a,b,c):hb})}function N(a,b,c,d){return function(){return L(a,b,r([c,arguments,d],i))}}function O(a,b){for(var c=0>b?"-":"",d=(c?-b:b).toFixed(0);d.length<a;)d="0"+d;return c+d}function P(a,b,c){return b!=ib&&a?60*parseInt(a[b])+parseInt(a[b+1])+c.getTimezoneOffset():0}function Q(a){for(var b="",c=a.length-1;c>=0;c--)b+=a.charAt(c);return b}function R(a,b,c){var d,e=0,f=c?b:Q(b);return a=(c?a:Q(a)).replace(/./g,function(a){return"0"==a?(d=kb,f[e++]||"0"):"#"==a?(d=jb,f[e++]||""):f[e]==ib&&d?"":a}),c?a:Q(a)}function S(a,b){if(1==arguments.length)return S(ib,a);if(/^\?/.test(a)){if(""==m(b))return ib;a=a.substr(1)}var c=/(^|[^0#.,])(,|[0#.]*,[0#]+|[0#]+\.[0#]+\.[0#.,]*)($|[^0#.,])/.test(a)?",":".",c=parseFloat(k(k(k(b,","==c?/\./g:/,/g),c,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(c)?hb:c}function T(a){return new Date(+a)}function U(a,b,c){return a["set"+b].call(a,a["get"+b].call(a)+c),a}function V(a,b,c){return 3>arguments.length?V(new Date,a,b):U(T(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function W(a,b,c){var d=+b,e=+c,f=e-d;if(0>f)return-W(a,c,b);if(b={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5}[a])return f/b;for(b=a.charAt(0).toUpperCase()+a.substr(1),a=Math.floor(f/{fullYear:31536e6,month:2628e6,date:864e5}[a]-2),d=U(new Date(d),b,a),f=a;1.2*a+4>f;f++)if(+U(d,b,1)>e)return f}function X(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function Y(a){return k(a,/[\x00-\x1f'"\u2028\u2029]/g,X)}function Z(a,b){for(var c,d=0,e=[];c=b.exec(a);)e.push(a.substring(d,c.index)),d=c.index+c[0].length;return e.push(a.substr(d)),e}function $(a,b){function c(a,c){var d=[];return e.call(c||a,a,function(a,b){eb(a)?o(a,function(a,c){b.call(a,a,c)}):n(a,function(a,c){b.call(c,a,c)})},b||i,function(){L(d.push,d,arguments)},gb),d.join("")}if(tb[a])return tb[a];var d="with(_.isObject(obj)?obj:{}){"+u(Z(a,/{{|}}}?/g),function(a,b){var c,d=m(a),e=k(d,/^{/),d=d==e?"esc(":"";return b%2?(c=/^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(e))?"each("+(""==m(c[4])?"this":c[4])+", function("+c[2]+"){":(c=/^if\b(.*)/.exec(e))?"if("+c[1]+"){":(c=/^else\b\s*(if\b(.*))?/.exec(e))?"}else "+(c[1]?"if("+c[2]+")":"")+"{":(c=/^\/(if)?/.exec(e))?c[1]?"}\n":"});\n":(c=/^(var\s.*)/.exec(e))?c[1]+";":(c=/^#(.*)/.exec(e))?c[1]:(c=/(.*)::\s*(.*)/.exec(e))?"print("+d+'_.formatValue("'+Y(c[2])+'",'+(""==m(c[1])?"this":c[1])+(d&&")")+"));\n":"print("+d+(""==m(e)?"this":e)+(d&&")")+");\n":""!=a?'print("'+Y(a)+'");\n':void 0}).join("")+"}",e=Function("obj","each","esc","print","_",d);return ub.push(c)>sb&&delete tb[ub.shift()],tb[a]=c}function _(a){return k(a,/[<>'"&]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}function ab(a){return function(b,c){return new fb(a(this,b,c))}}function bb(a){return function(b,c){return a(this,b,c)}}function cb(a){return function(b,c,d){return new fb(a(b,c,d))}}function db(a){return"function"==typeof a}function eb(a){return!(!a||a.length==ib||c(a)||a&&a.nodeType||db(a))}function fb(a,b){var c,d,e,f,g,h;for(d=a.length,e=0,f=0;d>f;f++)if(g=a[f],b&&eb(g))for(h=0,c=g.length;c>h;h++)this[e++]=g[h];else this[e++]=g;this.length=e,this._=jb}function gb(){return new fb(arguments,jb)}var hb,ib=null,jb=!0,kb=!1,lb=Z("January,February,March,April,May,June,July,August,September,October,November,December",/,/g),mb=u(lb,a),nb=Z("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",/,/g),ob=u(nb,a),pb=["am","pm"],qb={y:["FullYear",i],Y:["FullYear",function(a){return a%100}],M:["Month",j],n:["Month",mb],N:["Month",lb],d:["Date",i],m:["Minutes",i],H:["Hours",i],h:["Hours",function(a){return a%12||12}],k:["Hours",j],K:["Hours",function(a){return a%12}],s:["Seconds",i],S:["Milliseconds",i],a:["Hours",function(a,b){return(b||pb)[12>a?0:1]}],w:["Day",ob],W:["Day",nb],z:["TimezoneOffset",function(a,b,c){return c?c:(b=a>0?a:-a,(0>a?"+":"-")+O(2,Math.floor(b/60))+O(2,b%60))}]},rb={y:0,Y:[0,-2e3],M:[1,1],n:[1,mb],N:[1,lb],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,pb]},sb=99,tb={},ub=[];return A({only:function(a){return p(this,function(b,c){return c==a})},each:bb(o),filter:ab(p),collect:ab(r),map:ab(u),toObject:bb(z),equals:bb(K),sub:ab(y),reverse:ab(x),find:bb(D),findLast:bb(E),startsWith:bb(v),endsWith:bb(w),contains:bb(J),call:ab(M),array:bb(F),unite:bb(G),uniq:ab(H),intersection:ab(I),join:function(a){return u(this,i).join(a)},reduce:function(a,b){return o(this,function(c,d){b=a.call(this,b,c,d)}),b},sort:function(a){return new fb(u(this,i).sort(a))}},fb.prototype),A({filter:cb(p),collect:cb(r),map:cb(u),sub:cb(y),reverse:cb(x),each:o,toObject:z,find:D,findLast:E,contains:J,startsWith:v,endsWith:w,equals:K,call:cb(M),array:F,unite:G,uniq:cb(H),intersection:cb(I),keys:cb(t),values:cb(function(a,b){var c=[];return b?o(b,function(b){c.push(a[b])}):n(a,function(a,b){c.push(b)}),c}),copyObj:A,extend:function(a){for(var b=0;b<arguments.length;b++)n(arguments[b],function(b,c){c!=hb&&(a[b]=c)});return a},range:function(a,b){for(var c=[],d=b==ib?a:b,e=b!=ib?a:0;d>e;e++)c.push(e);return new fb(c)},bind:N,partial:function(a,b,c){return N(a,this,b,c)},eachObj:n,mapObj:function(a,b){var c={};return n(a,function(d,e){c[d]=b.call(a,d,e)}),c},filterObj:function(a,b){var c={};return n(a,function(d,e){b.call(a,d,e)&&(c[d]=e)}),c},isList:eb,isFunction:db,isObject:d,isNumber:e,isBool:g,isDate:f,isValue:h,isString:c,toString:b,dateClone:T,dateAdd:V,dateDiff:W,dateMidnight:function(a){return a=a||new Date,new Date(a.getFullYear(),a.getMonth(),a.getDate())},pad:O,formatValue:function(a,d){if(a=k(a,/^\?/),f(d)){var g,h,i=a,j=d;return(h=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(a))&&(g=h[1],j=V(d,"minutes",P(h,2,d)),i=h[4]),k(i,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(a,b,d,e){return(b=qb[b])&&(a=j["get"+b[0]].call(j),e=e&&e.split(","),a=eb(b[1])?(e||b[1])[a]:b[1](a,e,g),a==ib||c(a)||(a=O(d.length+1,a))),a})}return D(a.split(/\s*\|\s*/),function(a){var c,f;if(c=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){if(a=d,f=parseFloat(c[3]),(isNaN(f)||!e(a))&&(a=a==ib?"null":b(a),f=c[3]),c[1]){if(!c[2]&&a==f||"<"==c[1]&&a>f||">"==c[1]&&f>a)return ib}else if(a!=f)return ib;c=c[4]}else c=a;return e(d)?c.replace(/[0#](.*[0#])?/,function(a){var b,c=/^([^.]+)(\.)([^.]+)$/.exec(a)||/^([^,]+)(,)([^,]+)$/.exec(a),e=0>d?"-":"",f=/(\d+)(\.(\d+))?/.exec((e?-d:d).toFixed(c?c[3].length:0));return a=c?c[1]:a,b=c?R(c[3],k(f[3],/0+$/),jb):"",(e?"-":"")+("#"==a?f[1]:R(a,f[1]))+(b.length?c[2]:"")+b}):c})},parseDate:function(a,b){var c,d,e,f,g,h,i,j,k,n,o={},p=1;if(/^\?/.test(a)){if(""==m(b))return ib;a=a.substr(1)}if((e=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))&&(c=e,a=e[3]),!(e=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,e){return/[dmhkyhs]/i.test(b)?(o[p++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(d=p,p+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(o[p++]=[b,e&&e.split(",")],"([a-zA-Z�῿]+)"):/w/i.test(b)?"[a-zA-Z�῿]+":/\s/.test(b)?"\\s+":l(a)})).exec(b)))return hb;for(f=[0,0,0,0,0,0,0],g=1;p>g;g++)if(h=e[g],i=o[g],eb(i)){if(j=i[0],k=rb[j],n=k[0],i=D(i[1]||k[1],function(a,b){return v(h.toLowerCase(),a.toLowerCase())?b:ib}),i==ib)return hb;f[n]="a"==j?f[n]+12*i:i}else i&&(j=parseInt(h),k=rb[i],eb(k)?f[k[0]]+=j-k[1]:f[k]+=j);return f=new Date(f[0],f[1],f[2],f[3],f[4],f[5],f[6]),V(f,"minutes",-P(c,1,f)-P(e,d,f))},parseNumber:S,trim:m,isEmpty:function(a,b){return a==ib||!a.length||b&&/^\s*$/.test(a)},escapeRegExp:l,escapeHtml:_,format:function(a,b,c){return $(a,c)(b)},template:$,formatHtml:function(a,b){return $(a,_)(b)}},gb),gb.b=fb,gb.c=gb}();