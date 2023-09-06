//>>built
define("xstyle/core/load-imports",[],function(){function r(f,a){if(!a||0<a.indexOf(":")||"/"==a.charAt(0))return a;var g;for(a=((f||location.toString()).replace(/[^\/]*$/,"")+a).replace(/\/\.\//g,"/");g!=a;)g=a,a=a.replace(/\/[^\/]+\/\.\.\//g,"/");return a}function k(){if("undefined"!==typeof XMLHttpRequest)k=function(){return new XMLHttpRequest};else for(var f=k=function(){throw Error("getXhr(): XMLHttpRequest not available");};0<(void 0).length&&k===f;)(function(a){try{new ActiveXObject(a),k=function(){return new ActiveXObject(a)}}catch(g){}})((void 0).shift());
return k()}function t(f,a,g){var d=k();d.open("GET",f,!0);d.onreadystatechange=function(){4===d.readyState&&(400>d.status?a(d.responseText):g(Error("fetchText() failed. status: "+d.statusText)))};d.send(null)}var n={};return function(f,a){function g(){--q||(d(p),a&&a(p))}function d(b){for(var a="",f=!b.disabled&&(b.imports||b.rules||b.cssRules),c=0;c<f.length;c++){var g=f[c];g.href&&(a+=d(g.styleSheet||g))}return b.source=a+b.localSource}function k(b,a){a=r(a,b.correctHref||b.href);b.addRule||(b.addRule=
function(a,b,c){return this.insertRule(a+"{"+b+"}",0<=c?c:this.cssRules.length)});b.deleteRule||(b.deleteRule=b.removeRule);var d=a&&n[a];if(d){var c;if(d!=b){var m=b.parentStyleSheet,e=d.ownerElement;(e.compareDocumentPosition?2!=e.compareDocumentPosition(f):e.sourceIndex<=f.sourceIndex)?c=b:(c=d,d=n[a]=b);c.addRule=function(a,b,c){d.addRule(a,b,-1<c?c:-1)};c.deleteRule=function(a){d.deleteRule(a)};var l=c.ownerNode||!m&&c.owningElement;if(l)l.parentNode.removeChild(l);else if(c.disabled=!0,"cssText"in
c)c.cssText="";else if(l=c.ownerRule)try{for(var m=l.parentStyleSheet,h=m.cssRules,e=0;e<h.length;e++)if(h[e]==l){m.deleteRule(e);break}return!0}catch(u){console.log(u)}}}if(c!=b){if(a){if(/no-xstyle$/.test(a)){b.localSource="";return}n[a]=b;b.ownerElement=f;q++;t(a,function(a){b.localSource=a;g()},function(){b.localSource="";g()})}else b.localSource=f.innerHTML;c=b.rules||b.cssRules||[];for(e=0;e<c.length;e++)h=c[e],h.selectorText&&"x-"==h.selectorText.substring(0,2)&&(b.needsParsing=!0);c=b.imports||
c;for(e=0;e<c.length;e++)h=c[e],h.href&&(h=h.styleSheet||h,k(h,a)&&e--,h.needsParsing&&(b.needsParsing=!0))}}var p=f.sheet||f.styleSheet,q=1;k(p);g()}});