/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/io/script","../_base/connect ../_base/kernel ../_base/lang ../sniff ../_base/window ../_base/xhr ../dom ../dom-construct ../request/script ../aspect".split(" "),function(m,f,k,n,p,h,q,r,g,l){f.deprecated("dojo/io/script","Use dojo/request/script.","2.0");var d={get:function(a){var c,b=this._makeScriptDeferred(a,function(a){c&&c.cancel()}),e=b.ioArgs;h._ioAddQueryToUrl(e);h._ioNotifyStart(b);c=g.get(e.url,{timeout:a.timeout,jsonp:e.jsonp,checkString:a.checkString,ioArgs:e,frameDoc:a.frameDoc,
canAttach:function(a){e.requestId=a.id;e.scriptId=a.scriptId;e.canDelete=a.canDelete;return d._canAttach(e)}},!0);l.around(c,"isValid",function(a){return function(c){d._validCheck(b);return a.call(this,c)}});c.then(function(){b.resolve(b)}).otherwise(function(a){b.ioArgs.error=a;b.reject(a)});return b},attach:g._attach,remove:g._remove,_makeScriptDeferred:function(a,c){c=h._ioSetArgs(a,c||this._deferredCancel,this._deferredOk,this._deferredError);var b=c.ioArgs;b.id=f._scopeName+"IoScript"+(a.callbackSuffix||
this._counter++);b.canDelete=!1;b.jsonp=a.callbackParamName||a.jsonp;b.jsonp&&(b.query=b.query||"",0<b.query.length&&(b.query+="\x26"),b.query+=b.jsonp+"\x3d"+(a.frameDoc?"parent.":"")+f._scopeName+".io.script.jsonp_"+b.id+"._jsonpCallback",b.frameDoc=a.frameDoc,b.canDelete=!0,c._jsonpCallback=this._jsonpCallback,this["jsonp_"+b.id]=c);c.addBoth(function(a){b.canDelete&&(a instanceof Error?d["jsonp_"+b.id]._jsonpCallback=function(){delete d["jsonp_"+b.id];if(b.requestId)f.global[g._callbacksProperty][b.requestId]()}:
d._addDeadScript(b))});return c},_deferredCancel:function(a){a.canceled=!0},_deferredOk:function(a){a=a.ioArgs;return a.json||a.scriptLoaded||a},_deferredError:function(a,c){console.log("dojo.io.script error",a);return a},_deadScripts:[],_counter:1,_addDeadScript:function(a){d._deadScripts.push({id:a.id,frameDoc:a.frameDoc});a.frameDoc=null},_validCheck:function(a){if((a=d._deadScripts)&&0<a.length){for(var c=0;c<a.length;c++)d.remove(a[c].id,a[c].frameDoc),delete d["jsonp_"+a[c].id],a[c].frameDoc=
null;d._deadScripts=[]}return!0},_ioCheck:function(a){a=a.ioArgs;return a.json||a.scriptLoaded&&!a.args.checkString?!0:(a=a.args.checkString)&&eval("typeof("+a+") !\x3d 'undefined'")},_resHandle:function(a){d._ioCheck(a)?a.callback(a):a.errback(Error("inconceivable dojo.io.script._resHandle error"))},_canAttach:function(){return!0},_jsonpCallback:function(a){this.ioArgs.json=a;if(this.ioArgs.requestId)f.global[g._callbacksProperty][this.ioArgs.requestId](a)}};k.setObject("dojo.io.script",d);return d});