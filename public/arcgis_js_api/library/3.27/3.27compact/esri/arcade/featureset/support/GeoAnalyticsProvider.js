// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/arcade/featureset/support/GeoAnalyticsProvider",["require","exports","dojo/Deferred","../../../request"],function(k,l,g,h){return function(){function f(c,e){this.url=c;this.token=e}f.prototype.extendScriptWithGlobals=function(c,e){var b={newscript:"",newglobals:[]},d;for(d in e){var a=e[d];"geometry"===a.type?b.newscript+="var "+a.name+"\x3d "+(null===a.params.value?"null;\n":"Geometry("+JSON.stringify(a.params.value.toJson())+");\n"):"FeatureLayer"===a.type?(a={name:a.name,value:a.params.url,
token:a.params.token,filter:a.params.definitionExpression,type:"FeatureLayer"},0===a.value.indexOf("//")&&(a.value=document.location.protocol+a.value),b.newglobals.push(a)):"BigDataCatalogShare"===a.type&&(a={name:a.name,value:a.params.url,token:a.params.token,filter:a.params.definitionExpression,type:"FeatureLayer"},0===a.value.indexOf("//")&&(a.value=document.location.protocol+a.value),b.newglobals.push(a))}b.newscript+=c;return b};f.prototype.executeScript=function(c,e,b){var d=new g;c=this.extendScriptWithGlobals(c,
e);b={f:"json",sref:null===b?"":JSON.stringify(b.toJson()),vars:JSON.stringify(c.newglobals),script:c.newscript};h(this.url,{method:"auto",responseType:"json",query:b}).then(function(a){void 0!==a.data?a.data.error?d.reject(Error(a.data.error)):d.resolve(null):a.error?d.reject(Error(a.error)):d.resolve(null)},function(a){d.reject(a)});return d.promise};f.prototype.executeFeatureSetPageRequest=function(c,e,b,d){c=this.extendScriptWithGlobals(c,e);var a=new g;b={f:"json",sref:null===b?"":JSON.stringify(b.toJson()),
vars:JSON.stringify(c.newglobals),script:c.newscript};if(""!==d)return a.resolve({moniker:d,records:[]}),a.promise;h(this.url,{method:"auto",responseType:"json",query:b}).then(function(b){b.data.error?a.reject(Error(b.data.error)):a.resolve(null)},function(b){a.reject(b)});return a.promise};return f}()});