// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/PixelBlock",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(k,p,q,r){k=k([],{declaredClass:"esri.layers.PixelBlock",planes:null,width:null,height:null,pixelType:null,pixels:[],statistics:[],maskIsAlpha:!1,validPixelCount:null,constructor:function(a){if(a){if(!a.width||Math.floor(a.width)!==a.width)throw"PixelBlock: incorrect width";if(!a.height||Math.floor(a.height)!==a.height)throw"PixelBlock: incorrect height";if(!a.pixels)throw"PixelBlock: pixel data not present";
this.width=a.width;this.height=a.height;this.pixels=a.pixels;this.pixelType=a.pixelType||null;this.statistics=a.statistics;this.mask=a.mask||null;this.maskIsAlpha=a.maskIsAlpha||!1;a=a.validPixelCount;null==a&&(a=this.mask?this._getValidPixelCount(this.mask):this.width*this.height);this.validPixelCount=a}},getPlaneCount:function(){return this.pixels.length!==this.statistics.length?console.error("Inconsistent pixel data and statistics"):this.statistics.length},addData:function(a){if(!a.pixels||!a.statistics)throw"Pixel data or statistics are not present";
if(a.pixels.length!==this.width*this.height)throw"Inconsistent pixel data size";this.statistics.push(a.statistics);this.pixels.push(a.pixels)},getAsRGBA:function(){var a=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case "S8":case "S16":case "U16":case "S32":case "U32":case "F32":case "F64":this._fillFromNon8Bit(a);break;default:this._fillFrom8Bit(a)}return new Uint8ClampedArray(a)},getAsRGBAFloat:function(){var a=new Float32Array(this.width*this.height*4);this._fillFrom32Bit(a);
return a},clone:function(a){a=a||this;var b=new this.constructor;b.width=a.width;b.height=a.height;b.pixelType=a.pixelType;b.maskIsAlpha=a.maskIsAlpha;a.mask&&(b.mask=new Uint8Array(a.mask));var c,e,d;if(a.pixels)for(b.pixels=[],d=(e=a.pixels.length)&&a.pixels[0].slice,c=0;c<e;c++)b.pixels[c]=d?a.pixels[c].slice(0,a.pixels[c].length):new a.pixels[c].constructor(a.pixels[c]);if(a.statistics)for(b.statistics=[],e=a.statistics.length,c=0;c<e;c++)b.statistics[c]=p.clone(a.statistics[c]);a=a.validPixelCount;
null==a&&(a=b.mask?this._getValidPixelCount(b.mask):b.width*b.height);return b},clamp:function(a){if("F64"!==a&&"F32"!==a){var b;switch(a){case "U8":b=[0,255];break;case "U16":b=[0,65535];break;case "U32":b=[0,4294967295];break;case "S8":b=[-128,127];break;case "S16":b=[-32768,32767];break;case "S32":b=[-2147483648,2147483647];break;default:b=[-3.4*1E39,3.4*1E39]}var c=b[0];b=b[1];var e=this.pixels,d=this.width*this.height,f=e.length,g,h,n,m,l,k=[];for(m=0;m<f;m++){n=this._createEmptyBand(a,d);g=
e[m];for(l=0;l<d;l++)h=g[l],n[l]=h>b?b:h<c?c:h;k.push(n)}this.pixels=k;this.pixelType=a}},calculateStatistics:function(){var a,b=[],c,e=this.mask;for(a=0;a<this.pixels.length;a++)c=this.pixels[a],b.push(this._calculateBandStatistics(c,e));this.statistics=b},_getValidPixelCount:function(a){var b,c=0;for(b=0;b<a.length;b++)a[b]&&c++;return c},_createEmptyBand:function(a,b){switch(a){case "U8":a=new Uint8Array(b);break;case "U16":a=new Uint16Array(b);break;case "U32":a=new Uint32Array(b);break;case "S8":a=
new Int8Array(b);break;case "S16":a=new Int16Array(b);break;case "S32":a=new Int32Array(b);break;case "U32":a=new Uint32Array(b);break;case "F32":a=new Float32Array(b);break;case "F64":a=new Float64Array(b);break;default:a=new Float32Array(b)}return a},_fillFrom8Bit:function(a){var b=this.pixels,c=this.mask;if(!a||!b||!b.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var e,d,f;e=d=f=b[0];3<=b.length&&(d=b[1],f=b[2]);var b=new Uint32Array(a),g=this.width*
this.height;if(e.length!==g)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(c&&c.length===g)if(this.maskIsAlpha)for(a=0;a<g;a++)c[a]&&(b[a]=c[a]<<24|f[a]<<16|d[a]<<8|e[a]);else for(a=0;a<g;a++)c[a]&&(b[a]=-16777216|f[a]<<16|d[a]<<8|e[a]);else for(a=0;a<g;a++)b[a]=-16777216|f[a]<<16|d[a]<<8|e[a]},_fillFromNon8Bit:function(a){var b=this.pixels,c=this.mask,e=this.statistics;if(!a||!b||!b.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");
var d=1,f=0,d=1;e&&0<e.length?(f=e.map(function(a){return a.minValue}).reduce(function(a,b){return Math.min(a,b)}),d=e.map(function(a){return a.maxValue-a.minValue}).reduce(function(a,b){return Math.max(a,b)}),d=255/d):(d=255,"S8"===this.pixelType?(f=-128,d=127):"U16"===this.pixelType?d=65535:"S16"===this.pixelType?(f=-32768,d=32767):"U32"===this.pixelType?d=4294967295:"S32"===this.pixelType?(f=-2147483648,d=2147483647):"F32"===this.pixelType?(f=-3.4*1E39,d=3.4*1E39):"F64"===this.pixelType&&(f=-Number.MAX_VALUE,
d=Number.MAX_VALUE),d=255/(d-f));a=new Uint32Array(a);var e=this.width*this.height,g,h,k;g=b[0];if(g.length!==e)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(3<=b.length)if(h=b[1],k=b[2],c&&c.length===e)for(b=0;b<e;b++)c[b]&&(a[b]=-16777216|(k[b]-f)*d<<16|(h[b]-f)*d<<8|(g[b]-f)*d);else for(b=0;b<e;b++)a[b]=-16777216|(k[b]-f)*d<<16|(h[b]-f)*d<<8|(g[b]-f)*d;else if(c&&c.length===e)for(b=0;b<e;b++)h=(g[b]-f)*d,c[b]&&(a[b]=-16777216|h<<16|h<<8|h);else for(b=0;b<e;b++)h=
(g[b]-f)*d,a[b]=-16777216|h<<16|h<<8|h},_fillFrom32Bit:function(a){var b=this.pixels,c=this.mask;if(!a||!b||!b.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var e,d,f;e=d=f=b[0];3<=b.length&&(d=b[1],f=b[2]);var g=this.width*this.height;if(e.length!==g)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");var h=0;if(c&&c.length===g)for(b=0;b<g;b++)a[h++]=e[b],a[h++]=d[b],a[h++]=f[b],a[h++]=c[b]&1;else for(b=0;b<g;b++)a[h++]=e[b],a[h++]=
d[b],a[h++]=f[b],a[h++]=1},_calculateBandStatistics:function(a,b){var c=Infinity,e=-Infinity,d=a.length,f,g=0;if(b)for(f=0;f<d;f++)b[f]&&(g=a[f],c=g<c?g:c,e=g>e?g:e);else for(f=0;f<d;f++)g=a[f],c=g<c?g:c,e=g>e?g:e;return{minValue:c,maxValue:e}}});q("extend-esri")&&p.setObject("layers.PixelBlock",k,r);return k});