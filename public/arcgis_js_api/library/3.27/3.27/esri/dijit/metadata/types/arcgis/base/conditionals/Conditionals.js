// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/Conditionals","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../../../../../../kernel dijit/_WidgetBase ./ISO19139A1_ROW4 ./ISO19139A1_ROW6 ./ISO19139A1_ROW7 ./ISO19139A1_ROW9 ./ISO19139A1_ROW10_11_12 ./ISO19139A1_ROW15 ./ISO19139A1_ROW18 ./INSPIRE_AccessLimitation ./INSPIRE_ConformanceResult ./INSPIRE_DomainConsistency ./INSPIRE_LineageStatement ./INSPIRE_UseLimitation ./FGDC_DescIfTemporal ./FGDC_Keywords ./FGDC_Reports ./FGDC_Temporal ./NAP_Contact ./GEN_BoundingBox ./GEN_ReportResult".split(" "),
function(c,k,n,f,g,p,q,r,l,t,u,v,G,w,x,y,z,A,B,C,D,E,F,m,h){c=c(p,{postCreate:function(){this.inherited(arguments)},connectXNode:function(a,d){var b=d.gxePath,c=a.isAgsISO19139||a.isAgsINSPIRE||a.isAgsNAP,e=a.isAgsINSPIRE,f=a.isAgsNAP,g=a.isAgsFGDC;a.isViewOnly||(a=function(a){k.isArray(a)?n.forEach(a,function(a){a.parentXNode=d;a.startup()}):(a.parentXNode=d,a.startup());d.conditionalValidator=a},"/metadata/mdConst/LegConsts"===b?a(new l):"/metadata/dataIdInfo/resConst/LegConsts"===b?a(new l):"/metadata/dataIdInfo/aggrInfo"===
b?a(new r):"/metadata/spatRepInfo/Georect/chkPtDesc"===b&&a(new v),c&&("/metadata/dataIdInfo"===b?e?a([new m,new w,new A]):a(new q):"/metadata/dqInfo"===b?e&&a(new y):"/metadata/dqInfo/dqScope/scpLvl"===b?a(new t):"/metadata/dqInfo/dataLineage"===b?e||a(new u):"/metadata/dqInfo/dataLineage/statement"===b?e&&a(new z):"/metadata/dqInfo/report"===b&&(e?a([new x,new h]):a(new h))),g&&("/metadata/dataIdInfo"===b?a([new C,new m,new E]):"/metadata/dqInfo"===b?a(new D):"/metadata/dqInfo/report"===b?a(new h):
"exDesc"===d.target&&a(new B)),f&&"rpCntInfo"===d.target&&a(new F))}});f("extend-esri")&&k.setObject("dijit.metadata.types.arcgis.base.conditionals.Conditionals",c,g);return c});