!function(){var n="rRseEfaqQtTdwWczxvgASDFGZXCVkoiOjpuPhynbmlYUIHJKLBNM",e="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅁㄴㅇㄹㅎㅋㅌㅊㅍㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣㅛㅕㅑㅗㅓㅏㅣㅠㅜㅡ",i="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",f="ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",o="ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ",d=44032,t=function(n){for(var e={},i=0;i<n.length;++i)e[n[i]]=i;return e}(n),r=function(n){for(var e={},i=0;i<n.length;++i)e[n[i]]=i;return e}(e),x={"ㄱㅅ":"ㄳ","ㄴㅈ":"ㄵ","ㄴㅎ":"ㄶ","ㄹㄱ":"ㄺ","ㄹㅁ":"ㄻ","ㄹㅂ":"ㄼ","ㄹㅅ":"ㄽ","ㄹㅌ":"ㄾ","ㄹㅍ":"ㄿ","ㄹㅎ":"ㅀ","ㅂㅅ":"ㅄ"},O={"ㅗㅏ":"ㅘ","ㅗㅐ":"ㅙ","ㅗㅣ":"ㅚ","ㅜㅓ":"ㅝ","ㅜㅔ":"ㅞ","ㅜㅣ":"ㅟ","ㅡㅣ":"ㅢ"},u=function(n){return r[n]>=28};function a(n){var e=n||{};return this._allowDoubleConsonant=void 0!==e.allowDoubleConsonant&&e.allowDoubleConsonant,this}a.prototype.config=function(n){var e=n||{};this._allowDoubleConsonant=void 0!==e.allowDoubleConsonant&&e.allowDoubleConsonant},a.prototype.VERSION="1.1.1",a.prototype.en2ko=function(n,d){var r=d||{},a=void 0!==r.allowDoubleConsonant?r.allowDoubleConsonant:this._allowDoubleConsonant,l=this,p=[0,1,1,2,2,2,3,3,4,4,5],s=[[1,1,2,2],[3,1,4,4],[1,1,5,2],[3,1,4,-1],[6,1,7,2],[1,1,2,2],[9,1,4,4],[9,1,2,2],[1,1,4,4],[10,1,4,4],[1,1,4,4]],h=function(n){return n[n.length-1]},c=function(n){var d=[];if(n.forEach(function(n,i){var f=e[n];0!==i&&u(h(d)[0])===u(f)||d.push([]),h(d).push(f)}),1===(d=d.map(function(n){var e=n.join("");return x[e]||O[e]||e})).length)return d[0];var t=[i,f,o],r=d.map(function(n,e){return t[e].indexOf(n)});return r.length<3&&r.push(-1),l.한글생성.apply(l,r)};return function(){for(var i,f,o=n.length,d=-1,r=[],l=0,h=[],v=function(){h.length>0&&r.push(c(h)),h=[]},w=0;w<o;++w){var y=n[w],g=t[y];if(void 0===g)l=0,v(),r.push(y);else{var C=(void 0,void 0,i=(e[d]||"")+e[g],f=u(e[d]),u(e[g])?f?O[i]?2:3:2:f?-1==="ㄸㅃㅉ".indexOf(e[g])?0:1:(1!==l||a)&&x[i]?0:1),b=s[l][C];h.push(g);var m=h.length-p[b];m&&r.push(c(h.splice(0,m))),l=b,d=g}}return v(),r.join("")}()},a.prototype.ko2en=function(e){var i="";if(""===e||void 0===e)return i;for(var f=[-1,-1,-1,-1,-1],o=0;o<e.length;o++){var t=e[o],r=t.charCodeAt();r>=d&&r<=55203||r>=12593&&r<=12643?f=this.한글분리(t):(i+=t,f=[-1,-1,-1,-1,-1]);for(var x=0;x<f.length;x++)-1!==f[x]&&(i+=n[f[x]])}return i},a.prototype.한글생성=function(n,e,i){return String.fromCharCode(44032+588*n+28*e+i+1)},a.prototype.한글분리=function(n){var t=n.charCodeAt();if(t>=d&&t<=55203){var r=Math.floor((t-d)/588),x=Math.floor((t-d-588*r)/28),O=t-d-588*r-28*x-1,u=x,a=-1,l=O,p=-1;return x==f.indexOf("ㅘ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅏ")):x==f.indexOf("ㅙ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅐ")):x==f.indexOf("ㅚ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅣ")):x==f.indexOf("ㅝ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅓ")):x==f.indexOf("ㅞ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅔ")):x==f.indexOf("ㅟ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅣ")):x==f.indexOf("ㅢ")&&(u=e.indexOf("ㅡ"),a=e.indexOf("ㅣ")),O==o.indexOf("ㄳ")?(l=e.indexOf("ㄱ"),p=e.indexOf("ㅅ")):O==o.indexOf("ㄵ")?(l=e.indexOf("ㄴ"),p=e.indexOf("ㅈ")):O==o.indexOf("ㄶ")?(l=e.indexOf("ㄴ"),p=e.indexOf("ㅎ")):O==o.indexOf("ㄺ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㄱ")):O==o.indexOf("ㄻ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅁ")):O==o.indexOf("ㄼ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅂ")):O==o.indexOf("ㄽ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅅ")):O==o.indexOf("ㄾ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅌ")):O==o.indexOf("ㄿ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅍ")):O==o.indexOf("ㅀ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅎ")):O==o.indexOf("ㅄ")&&(l=e.indexOf("ㅂ"),p=e.indexOf("ㅅ")),-1===a&&(u=e.indexOf(f[x])),-1===p&&(l=e.indexOf(o[O])),[r,u,a,l,p]}if(t>=12593&&t<=12643){if(i.indexOf(n)>-1)return[r=e.indexOf(n),-1,-1,-1,-1];if(f.indexOf(n)>-1){u=x=f.indexOf(n),a=-1;return x==f.indexOf("ㅘ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅏ")):x==f.indexOf("ㅙ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅐ")):x==f.indexOf("ㅚ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅣ")):x==f.indexOf("ㅝ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅓ")):x==f.indexOf("ㅞ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅔ")):x==f.indexOf("ㅟ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅣ")):x==f.indexOf("ㅢ")&&(u=e.indexOf("ㅡ"),a=e.indexOf("ㅣ")),-1===a&&(u=e.indexOf(f[x])),[-1,u,a,-1,-1]}}return[-1,-1,-1,-1,-1]},a.prototype.is한글=function(n){if(n.length>1)throw new Error("한 글자가 아닙니다.");return/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(n)},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=a),exports.Inko=a),"function"==typeof define&&define.amd&&define([],function(){return a}),"undefined"!=typeof importScripts&&(inko=new a,self.Inko=a),"object"==typeof window&&"object"==typeof window.document&&(window.Inko=a,window.inko=new a)}();
//# sourceMappingURL=inko.min.js.map
