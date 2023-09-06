// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/WidgetConfigurationProxy",["dojo/_base/declare","dojo/_base/lang","./core/errorMessages","./core/ExtensionConfigurationBase"],function(e,d,f,g){return e([g],{_initializeResponseReceived:function(a){return this.inherited(arguments).then(d.hitch(this,function(){this.config.dataSourceConfigs||(this.config.dataSourceConfigs=[])}))},_messageReceived:function(a){switch(a.functionName.toLowerCase()){case "datasourceselected":return this._dataSourceSelectionChanged(a.args);case "mapWidgetSelected":return this._mapWidgetSelectionChanged(a.args.mapWidgetId)}},
getDataSourceConfig:function(a){if(!this._isHostInitialized())throw Error(f.hostNotReady);var b=a;"object"===typeof a&&(b=a.id);for(a=0;a<this.config.dataSourceConfigs.length;a++)if(this.config.dataSourceConfigs[a].dataSourceId===b)return this.config.dataSourceConfigs[a];return null},_dataSourceSelectionChanged:function(a){a=a.dataSourceId;for(var b=0;b<this.config.dataSourceConfigs.length;b++)if(this.config.dataSourceConfigs[b].dataSourceId!==a){this.config.dataSourceConfigs.splice(b,1);break}var c=
this.getDataSourceConfig(a);c||(c={dataSourceId:a},this.config.dataSourceConfigs.push(c));this.getDataSourceProxy(a).then(d.hitch(this,function(a){this.dataSourceSelectionChanged(a,c);this.emit("data-source-selection-changed",{dataSourceProxy:a,dataSourceConfig:c})}))},dataSourceSelectionChanged:function(a,b){},_mapWidgetSelectionChanged:function(a){this.getMapWidgetProxy(a).then(d.hitch(this,function(a){this.mapWidgetSelectionChanged(a);this.emit("map-widget-selection-changed",{mapWidgetProxy:a})}))},
mapWidgetSelectionChanged:function(a){}})});