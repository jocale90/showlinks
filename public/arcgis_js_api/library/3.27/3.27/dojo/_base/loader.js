/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/loader","./kernel ../has require module ../json ./lang ./array".split(" "),function(e,y,t,K,z,p,A){var q=function(a){return a.replace(/\./g,"/")},L=/\/\/>>built/,w=[],M=[],u=function(a,b,c){w.push(c);A.forEach(a.split(","),function(a){a=n(a,b.module);M.push(a);B(a)});C()},C=function(){var a,b;for(b in D)if(a=D[b],void 0===a.noReqPluginCheck&&(a.noReqPluginCheck=/loadInit\!/.test(b)||/require\!/.test(b)?1:0),!a.executed&&!a.noReqPluginCheck&&a.injected==N)return;O(function(){var a=
w;w=[];A.forEach(a,function(a){a(1)})})},P=/\/\/.*|\/\*[\s\S]*?\*\/|("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`)/mg,x=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,Q=/(^|\s)(require|define)\s*\(/m,E=function(a,b){var c,f,v,d=[],g=[];c=[];for(b=b||a.replace(P,"$1");c=x.exec(b);){f=x.lastIndex;v=f-c[0].length;var m=b,h=/\(|\)/g,k=1,l=void 0;for(h.lastIndex=f;(l=h.exec(m))&&(k=")"==l[0]?k-1:k+1,0!=k););if(0!=k)throw"unmatched paren around character "+
h.lastIndex+" in: "+m;f=[e.trim(m.substring(v,h.lastIndex))+";\n",h.lastIndex];"loadInit"==c[2]?d.push(f[0]):g.push(f[0]);x.lastIndex=f[1]}c=d.concat(g);return c.length||!Q.test(b)?[a.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 \x26\x26 dojo.loadInit("),c.join(""),c]:0},d=t.initSyncLoader(u,C,function(a,b){var c,f=[],v=[];if(L.test(b)||!(c=E(b)))return 0;b=a.mid+"-*loadInit";for(var d in n("dojo",a).result.scopeMap)f.push(d),v.push('"'+d+'"');return"// xdomain rewrite of "+a.mid+"\ndefine('"+b+"',{\n\tnames:"+
z.stringify(f)+",\n\tdef:function("+f.join(",")+"){"+c[1]+"}});\n\ndefine("+z.stringify(f.concat(["dojo/loadInit!"+b]))+", function("+f.join(",")+"){\n"+c[0]+"});"}),R=d.sync,N=d.requested,S=d.arrived,F=d.nonmodule,T=d.executing,G=d.executed,r=d.syncExecStack,D=d.modules,H=d.execQ,n=d.getModule,B=d.injectModule,I=d.setArrived,U=d.signal,V=d.finishExec,W=d.execModule,J=d.getLegacyMode,O=d.guardCheckComplete,u=d.dojoRequirePlugin;e.provide=function(a){var b=r[0],c=p.mixin(n(q(a),t.module),{executed:T,
result:p.getObject(a,!0)});I(c);b&&(b.provides||(b.provides=[])).push(function(){c.result=p.getObject(a);delete c.provides;c.executed!==G&&V(c)});return c.result};y.add("config-publishRequireResult",1,0,0);e.require=function(a,b){b=function(a,b){var c=n(q(a),t.module);if(r.length&&r[0].finish)r[0].finish.push(a);else{if(c.executed)return c.result;b&&(c.result=F);b=J();B(c);b=J();c.executed!==G&&c.injected===S&&d.guardCheckComplete(function(){W(c)});if(c.executed)return c.result;b==R?c.cjs?H.unshift(c):
r.length&&(r[0].finish=[a]):H.push(c)}}(a,b);y("config-publishRequireResult")&&!p.exists(a)&&void 0!==b&&p.setObject(a,b);return b};e.loadInit=function(a){a()};e.registerModulePath=function(a,b){var c={};c[a.replace(/\./g,"/")]=b;t({paths:c})};e.platformRequire=function(a){a=(a.common||[]).concat(a[e._name]||a["default"]||[]);for(var b;a.length;)p.isArray(b=a.shift())?e.require.apply(e,b):e.require(b)};e.requireIf=e.requireAfterIf=function(a,b,c){a&&e.require(b,c)};e.requireLocalization=function(a,
b,c){t(["../i18n"],function(d){d.getLocalization(a,b,c)})};return{extractLegacyApiApplications:E,require:u,loadInit:function(a,b,c){b([a],function(a){b(a.names,function(){for(var d="",f=[],g=0;g<arguments.length;g++)d+="var "+a.names[g]+"\x3d arguments["+g+"]; ",f.push(arguments[g]);eval(d);var m=b.module,h=[],k,d={provide:function(a){a=q(a);a=n(a,m);a!==m&&I(a)},require:function(a,b){a=q(a);b&&(n(a,m).result=F);h.push(a)},requireLocalization:function(a,b,c){k||(k=["dojo/i18n"]);c=(c||e.locale).toLowerCase();
a=q(a)+"/nls/"+(/root/i.test(c)?"":c+"/")+q(b);n(a,m).isXd&&k.push("dojo/i18n!"+a)},loadInit:function(a){a()}},g={},l;try{for(l in d)g[l]=e[l],e[l]=d[l];a.def.apply(null,f)}catch(X){U("error",[{src:K.id,id:"failedDojoLoadInit"},X])}finally{for(l in d)e[l]=g[l]}k&&(h=h.concat(k));h.length?u(h.join(","),b,c):c()})})}}});