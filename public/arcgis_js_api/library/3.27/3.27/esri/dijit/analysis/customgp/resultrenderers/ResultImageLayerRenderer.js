// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/resultrenderers/ResultImageLayerRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan\x3e${nls.drawnOnMap}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"clear-node" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/customgp/resultrenderers/ResultImageLayerRenderer","dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/on dijit/_TemplatedMixin dojo/text!./ResultImageLayerRenderer.html ../BaseResultRenderer".split(" "),function(b,c,a,d,e,f,g){return b([g,e],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",templateString:f,postCreate:function(){this.inherited(arguments);this.layer&&(this._displayText(),this._addResultLayer(this.layer))},destroy:function(){this.layer&&
(this.map.removeLayer(this.layer),this.layer=null);this.inherited(arguments)},_displayText:function(){a.set(this.clearNode,"display","");this.own(d(this.clearNode,"click",c.hitch(this,function(){this.layer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.map.removeLayer(this.layer),this.layer=null);a.set(this.clearNode,"display","none");a.set(this.domNode,"display","none")})))},_addResultLayer:function(a){this.map.addLayers([a])}})});