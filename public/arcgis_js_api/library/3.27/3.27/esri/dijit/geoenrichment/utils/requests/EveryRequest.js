// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/EveryRequest",["dojo/_base/declare","dojo/Deferred","dojo/when"],function(g,h,k){var l=g(null,{requests:null,results:null,requestCount:0,chunkSize:0,stopOnError:!1,index:0,completeCount:0,executeCount:0,isExecuting:!1,dfd:null,constructor:function(b,a,d,c){this.requests=b;this.results=a;this.requestCount=this.requests.length;this.chunkSize=Number(d);if(isNaN(this.chunkSize)||0>=this.chunkSize)this.chunkSize=this.requestCount;this.stopOnError=!!c},execute:function(){this.isExecuting=
!0;for(this.dfd=new h;this.tryStartNextRequest(););return this.dfd.promise},tryStartNextRequest:function(){if(!this.isExecuting)return!1;if(this.index==this.requestCount&&!this.executeCount)return this.isExecuting=!1,this.dfd.resolve(this.results),!1;if(this.index==this.requestCount||this.executeCount==this.chunkSize)return!1;var b=this.requests[this.index++];this.executeCount++;var a=b.request;"function"===typeof a&&(a=a());var d=this,c=!0;k(a,function(a){d.processResult(a,b.key,a instanceof Error,
c)},function(a){d.processResult(a,b.key,!0,c)});c=!1;return!0},processResult:function(b,a,d,c){if(this.isExecuting)if(d&&this.stopOnError)this.isExecuting=!1,this.dfd.progress(1),this.dfd.reject(b);else if(this.results[a]=b,this.completeCount++,this.executeCount--,this.dfd.progress(this.completeCount/this.requestCount),!c)for(;this.tryStartNextRequest(););}});return function(b,a,d){void 0===d&&(d=10);var c=[],e;if(Array.isArray(b))e=[],b.forEach(function(a,b){c.push({key:b,request:a})});else for(var f in b)e=
{},c.push({key:f,request:b[f]});return(new l(c,e,d,a)).execute()}});