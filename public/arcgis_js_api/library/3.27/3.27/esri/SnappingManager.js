// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/SnappingManager","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/Deferred dojo/has dojo/keys ./kernel ./graphic ./geometry/ScreenPoint ./geometry/Extent ./symbols/SimpleMarkerSymbol ./symbols/SimpleLineSymbol ./tasks/query".split(" "),function(x,d,u,y,D,J,E,F,K,L,G,v,H,I,w){x=x(null,{declaredClass:"esri.SnappingManager",constructor:function(a){a=a||{};a.map||console.error("map is not specified for SnappingManager");this.map=a.map;this.tolerance=
a.tolerance||15;this.layerInfos=[];if(a.layerInfos)this.layerInfos=a.layerInfos;else{var b;for(b=0;b<this.map.graphicsLayerIds.length;b++){var c=this.map.getLayer(this.map.graphicsLayerIds[b]);this.layerInfos.push({layer:c})}if(this.map.loaded)this.layerInfos.push({layer:this.map.graphics});else var m=d.connect(this.map,"onLoad",this,function(a){d.disconnect(m);m=null;this.layerInfos.push({layer:this.map.graphics});this.setLayerInfos(this.layerInfos)})}this.snapPointSymbol=a.snapPointSymbol?a.snapPointSymbol:
new H(H.STYLE_CROSS,15,new I(I.STYLE_SOLID,new D([0,255,255]),1),new D([0,255,0,0]));this.alwaysSnap=a.alwaysSnap?a.alwaysSnap:!1;this.snapKey=a.snapKey?a.snapKey:E("mac")?F.META:F.CTRL;this._SelectionLyrQuery=new w;this._SelectionLyrQuery.spatialRelationship=w.SPATIAL_REL_INTERSECTS;this._snappingGraphic=new L;this.setLayerInfos(this.layerInfos);this._currentGraphicOption={snapToPoint:!0,snapToVertex:!0,snapToEdge:!0};this._snappingCallback=u.hitch(this,this._snappingCallback)},getSnappingPoint:function(a){var b=
this.layers,c=this.tolerance,m=this.map,B=this.layerOptions,h=m.toMap(a.offset(-c,c)),c=m.toMap(a.offset(c,-c)),h=new v(h.x,h.y,c.x,c.y,m.spatialReference),r=new w;r.geometry=h;r.spatialRelationship=w.SPATIAL_REL_INTERSECTS;var k=[],n=[],d,C=this._extractPointsAndLines,z=new J,A=0,f,c=h.xmin,l=h.xmax;y.forEach(b,function(a,b){a.visible&&a.loaded&&"esri.layers.FeatureLayer"===a.declaredClass&&a.mode!==a.constructor.MODE_SELECTION&&A++});m.spatialReference._isWrappable()&&(c=v.prototype._normalizeX(h.xmin,
m.spatialReference._getInfo()).x,l=v.prototype._normalizeX(h.xmax,m.spatialReference._getInfo()).x);var g=new v(c,h.ymin,l,h.ymax,m.spatialReference);y.forEach(b,function(a,b){if("esri.layers.GraphicsLayer"===a.declaredClass&&a.visible){var c=[];y.forEach(a.graphics,function(a){a&&a.visible&&g.intersects(a.geometry)&&c.push(a)});a=C(c,B[b]);k=k.concat(a[0]);n=n.concat(a[1])}});var e=u.hitch(this,function(b){A--;b instanceof Error?console.log("getSnappingPoint: query features failed"):(b=C(b.features,
B[f]),k=k.concat(b[0]),n=n.concat(b[1]));A||(d=this._getSnappingPoint(k,n,a),z.callback(d))}),p=!1;y.forEach(b,function(a,b){a.visible&&a.loaded&&(f=b,"esri.layers.FeatureLayer"===a.declaredClass&&a.mode!==a.constructor.MODE_SELECTION&&(p=!0,a.queryFeatures(r,e,e)))});p||(d=this._getSnappingPoint(k,n,a),z.callback(d));return z},setLayerInfos:function(a){this.layers=[];this.layerOptions=[];var b;for(b=0;b<a.length;b++)this.layers.push(a[b].layer),this.layerOptions.push({snapToPoint:!0,snapToVertex:!0,
snapToEdge:!0}),!1===a[b].snapToPoint&&(this.layerOptions[b].snapToPoint=a[b].snapToPoint),!1===a[b].snapToVertex&&(this.layerOptions[b].snapToVertex=a[b].snapToVertex),!1===a[b].snapToEdge&&(this.layerOptions[b].snapToEdge=a[b].snapToEdge);this._featurePtsFromSelectionLayer=[];this._featureLinesFromSelectionLayer=[];this._selectionLayers=[];this._selectionLayerOptions=[];y.forEach(this.layers,function(a,b){"esri.layers.FeatureLayer"===a.declaredClass&&a.mode===a.constructor.MODE_SELECTION&&(this._selectionLayers.push(a),
this._selectionLayerOptions.push(this.layerOptions[b]))},this);this.layerInfos=a},destroy:function(){d.disconnect(this._onExtentChangeConnect);this._killOffSnapping();this._featurePtsFromSelectionLayer=this._featureLinesFromSelectionLayer=this._currentFeaturePts=this._currentFeatureLines=this.layers=this.map=null},_startSelectionLayerQuery:function(){d.disconnect(this._onExtentChangeConnect);this._mapExtentChangeHandler(this._selectionLayers,this._selectionLayerOptions,this.map.extent);this._onExtentChangeConnect=
d.connect(this.map,"onExtentChange",u.hitch(this,"_mapExtentChangeHandler",this._selectionLayers,this._selectionLayerOptions))},_stopSelectionLayerQuery:function(){d.disconnect(this._onExtentChangeConnect)},_mapExtentChangeHandler:function(a,b,c){this._featurePtsFromSelectionLayer=[];this._featureLinesFromSelectionLayer=[];var m;this._SelectionLyrQuery.geometry=c;var d=u.hitch(this,function(a){a instanceof Error?console.log("getSnappingPoint: query features failed"):(a=this._extractPointsAndLines(a.features,
b[m]),this._featurePtsFromSelectionLayer=this._featurePtsFromSelectionLayer.concat(a[0]),this._featureLinesFromSelectionLayer=this._featureLinesFromSelectionLayer.concat(a[1]))});y.forEach(a,function(a,b){a.visible&&a.loaded&&(m=b,a.queryFeatures(this._SelectionLyrQuery,d,d))},this)},_extractPointsAndLines:function(a,b){var c=[],m=[],d,h;y.forEach(a,function(a,k){if((!a._graphicsLayer||a.visible)&&a.geometry)if("point"===a.geometry.type&&b.snapToPoint)c.push(a.geometry);else if("polyline"===a.geometry.type)for(d=
0;d<a.geometry.paths.length;d++){m.push("lineStart");for(h=0;h<a.geometry.paths[d].length;h++)k=a.geometry.getPoint(d,h),b.snapToVertex&&c.push(k),b.snapToEdge&&m.push(k);m.push("lineEnd")}else if("polygon"===a.geometry.type)for(d=0;d<a.geometry.rings.length;d++){m.push("lineStart");for(h=0;h<a.geometry.rings[d].length;h++)k=a.geometry.getPoint(d,h),b.snapToVertex&&c.push(k),b.snapToEdge&&m.push(k);m.push("lineEnd")}});return[c,m]},_getSnappingPoint:function(a,b,c){var d,B,h=this.tolerance,r=this.map,
k=this.map._getFrameWidth();a=a.concat(this._featurePtsFromSelectionLayer);b=b.concat(this._featureLinesFromSelectionLayer);if(this._currentGraphic){var n=this._extractPointsAndLines([this._currentGraphic],this._currentGraphicOption);a=a.concat(n[0]);b=b.concat(n[1])}var x,C;y.forEach(a,function(a,b){a=r.toScreen(a,!0);if(-1!==k&&(a.x%=k,0>a.x&&(a.x+=k),r.width>k))for(b=(r.width-k)/2;a.x<b;)a.x+=k;d=Math.sqrt((a.x-c.x)*(a.x-c.x)+(a.y-c.y)*(a.y-c.y));d<=h&&(h=d,x=a.x,C=a.y)});if(x)b=new G(x,C),B=b=
r.toMap(b);else{var z,A,h=this.tolerance;for(a=0;a<b.length;a++)if("lineStart"===b[a])for(n=a+1;n<b.length;n++){if("lineEnd"!==b[n+1]&&"lineStart"!==b[n+1]&&"lineEnd"!==b[n]&&"lineStart"!==b[n]){var f=r.toScreen(b[n],!0),l=r.toScreen(b[n+1],!0),g=f.x>=l.x?f:l,e=f.x>=l.x?l:f;-1!==k&&(g.x%=k,0>g.x&&(g.x+=k),e.x%=k,0>e.x&&(e.x+=k),e.x>g.x&&(e.x-=k));var f=g.x,g=g.y,l=e.x,e=e.y,p,q,t,u,v,w;f===l?(p=f,q=c.y,t=u=f,v=g<=e?g:e,w=g<=e?e:g):g===e?(p=c.x,q=g,t=f<=l?f:l,u=f<=l?l:f,v=w=g):(q=(e-g)/(l-f),t=(g*
l-f*e)/(l-f),p=(t-(c.y*e-c.y*g-c.x*f+c.x*l)/(e-g))/((f-l)/(e-g)-q),q=q*p+t,t=f<=l?f:l,u=f<=l?l:f,v=g<=e?g:e,w=g<=e?e:g);p>=t&&p<=u&&q>=v&&q<=w?(f=Math.sqrt((c.x-p)*(c.x-p)+(c.y-q)*(c.y-q)),f<=h&&(h=f,z=p,A=q)):(p=Math.sqrt((f-c.x)*(f-c.x)+(g-c.y)*(g-c.y)),q=Math.sqrt((l-c.x)*(l-c.x)+(e-c.y)*(e-c.y)),p<=q?(t=p,p=f,q=g):(t=q,p=l,q=e),t<=h&&(h=t,z=p,A=q))}if("lineEnd"===b[n]){a=n;break}}z&&(b=new G(z,A),B=b=r.toMap(b))}return B},_setGraphic:function(a){this._currentGraphic=a},_addSnappingPointGraphic:function(){var a=
this.map;this._snappingGraphic.setSymbol(this.snapPointSymbol);a.graphics.add(this._snappingGraphic)},_setUpSnapping:function(){var a=this.map;this._onSnapKeyDown_connect=d.connect(a,"onKeyDown",this,"_onSnapKeyDownHandler");this._onSnapKeyUp_connect=d.connect(a,"onKeyUp",this,"_onSnapKeyUpHandler");this._onSnappingMouseMove_connect=d.connect(a,"onMouseMove",this,"_onSnappingMouseMoveHandler");this._onSnappingMouseDrag_connect=d.connect(a,"onMouseDrag",this,"_onSnappingMouseMoveHandler");this.alwaysSnap&&
this._activateSnapping()},_killOffSnapping:function(){d.disconnect(this._onSnapKeyDown_connect);d.disconnect(this._onSnapKeyUp_connect);d.disconnect(this._onSnappingMouseMove_connect);d.disconnect(this._onSnappingMouseDrag_connect);this._deactivateSnapping()},_onSnapKeyDownHandler:function(a){a.keyCode===this.snapKey&&(d.disconnect(this._onSnapKeyDown_connect),this.alwaysSnap?this._deactivateSnapping():this._activateSnapping())},_activateSnapping:function(){this._snappingActive=!0;this._addSnappingPointGraphic();
this._currentLocation&&this._onSnappingMouseMoveHandler(this._currentLocation)},_onSnapKeyUpHandler:function(a){a.keyCode===this.snapKey&&(this._onSnapKeyDown_connect=d.connect(this.map,"onKeyDown",this,"_onSnapKeyDownHandler"),this.alwaysSnap?this._activateSnapping():this._deactivateSnapping())},_deactivateSnapping:function(){this._snappingActive=!1;this._snappingPoint=null;this.map.graphics.remove(this._snappingGraphic);this._snappingGraphic.setGeometry(null)},_onSnappingMouseMoveHandler:function(a){this._currentLocation=
a;this._snappingPoint=null;this._snappingActive&&(this._snappingGraphic.hide(),this.getSnappingPoint(a.screenPoint).addCallback(this._snappingCallback))},_snappingCallback:function(a){if(this._snappingPoint=a)this._snappingGraphic.show(),this._snappingGraphic.setGeometry(a)}});E("extend-esri")&&(K.SnappingManager=x);return x});