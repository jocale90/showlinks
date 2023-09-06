// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/StaticMap",["dojo/_base/declare","dojo/Evented","dojo/Deferred","dojo/dom-construct","dojo/dom-style"],function(e,f,g,d,a){return e(f,{_mapImageInfo:null,_mapImage:null,loaded:!1,updating:!1,error:!1,constructor:function(h,b){this._mapImageInfo=h;this._mapImage=d.create("img",{"class":"esriGEAbsoluteStretched"},b);a.set(this._mapImage,{width:a.get(b,"width")+"px",height:a.get(b,"height")+"px"});a.set(b,"position","relative")},load:function(){function a(a){b.error=
!0;a&&console.log(a);b.destroy();c.resolve()}var b=this,c=new g;if(!this._mapImageInfo.url)return a(Error("No URL specified.")),c.promise;this._mapImage.onload=function(){b.loaded=!0;c.resolve()};this._mapImage.onerror=a;this._mapImage.src=this._mapImageInfo.url;return c.promise},destroy:function(){d.destroy(this._mapImage)}})});