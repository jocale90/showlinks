// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/fgdc/base/PortalItemTransformer",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../arcgis/portal/PortalItemTransformer","../../../../../kernel"],function(b,d,c,e,f){b=b([e],{postCreate:function(){this.inherited(arguments)},populateTransformationInfo:function(b,d,c){this.inherited(arguments);var a=c;a.id.path="/metadata/idinfo/citation/citeinfo/edition";a.title.path="/metadata/idinfo/citation/citeinfo/title";a.snippet.path="/metadata/idinfo/descript/purpose";
a.description.path="/metadata/idinfo/descript/abstract";a.accessInformation.path="/metadata/idinfo/datacred";a.licenseInfo.path="/metadata/idinfo/useconst";a.tags.path="/metadata/idinfo/keywords/theme/themekey";a.url.path="/metadata/idinfo/citation/citeinfo/onlink";a.extent.xmin.path="/metadata/idinfo/spdom/bounding/westbc";a.extent.ymin.path="/metadata/idinfo/spdom/bounding/southbc";a.extent.xmax.path="/metadata/idinfo/spdom/bounding/eastbc";a.extent.ymax.path="/metadata/idinfo/spdom/bounding/northbc"}});
c("extend-esri")&&d.setObject("dijit.metadata.types.fgdc.base.PortalItemTransformer",b,f);return b});