// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/themes/ThemeLibrary","dojo/_base/lang ./PageBorderStyles ../charts/utils/ChartLineStyles ./ReportThemes ./ThemeUtil esri/dijit/geoenrichment/utils/ObjectUtil dojo/i18n!esri/nls/jsapi".split(" "),function(h,n,g,e,p,q,r){function k(a){a=a||{};a=a.defaultFontFamilty||"Avenir Next";return{backgroundColor:"#FFFFFF",padding:5,icon:{backgroundColor:"#56a5d8"},highlightedIcon:{backgroundColor:"#D6851A"},iconBarBackground:{backgroundColor:"#AAAAAA"},titleLine:{color:"#A8A7A8"},
titleStyle:{fontFamily:a,color:"#828282",fontSize:16,backgroundColor:"transparent"},variableLabelStyle:{fontFamily:a,color:"#56a5d8",fontSize:24,backgroundColor:"transparent"},variableLabelStyleHighlighted:{fontFamily:a,fontSize:24},variableLabelStyleContrast:{fontFamily:a,fontSize:24},variableDescriptionStyle:{fontFamily:a,color:"#828282",fontSize:13,backgroundColor:"transparent"}}}function l(){return{style:n.ALL,lineStyle:"dashed",thickness:1,color:"#b2b2b2"}}function m(a){a=a||{};var b=a.defaultFontFamilty||
"Avenir Next",c=a.defaultFontSize||13;return{document:{fontSize:c,fontFamily:b,backgroundImage:{data:null,position:"center",repeat:!1,scale:!0,opacity:1,size:null},border:l()},table:{dataTablePadding:5},chart:{renderSingleDataSeriesWithSameColor:!0,line:{},column:{},bar:{},pie:{},donut:{},gauge:{},ring:{},pictureColumn:{},pictureBar:{},gauge:{dataLabelStyle:{fontFamily:b}},titleStyle:{fontFamily:b,fontSize:16},dataLabelsStyle:{fontFamily:b,fontSize:10},xAxis:{gridLinesStyle:g.SOLID,axisStyle:{fontFamily:b,
fontSize:9},titleStyle:{fontFamily:b,fontSize:c}},yAxis:{gridLinesStyle:g.SOLID,baseLineStyle:g.SOLID,axisStyle:{fontFamily:b,fontSize:9},titleStyle:{fontFamily:b,fontSize:c}},legendStyle:{fontFamily:b,fontSize:10},minMaxLegend:{titleStyle:{fontFamily:b,fontSize:10},minVariableLabelStyle:{fontFamily:b,fontSize:16},maxVariableLabelStyle:{fontFamily:b,fontSize:16}},icon:{backgroundColor:"#56a5d8"}},infographic:{staticInfographic:k(a)}}}var c={DEFAULT_FONT_FAMILY_CLASSIC:"Verdana",DEFAULT_FONT_FAMILY_GRAPHIC:"Avenir Next",
DEFAULT_FONT_SIZE_CLASSIC:10,DEFAULT_FONT_SIZE_GRAPHIC:13,CHART_DATA_FONT_SIZE:10,defaultStaticInfographic:k(),standardRamps:[{id:e.CLASSIC,colors:["#FFFFFF","#13729F","#DEA429"],additional:{table:{overrideStyles:{Default:{color:"#4C4C4C",backgroundColor:"#FFFFFF"},ReportTitle:{color:"#FFFFFF",backgroundColor:"#00436D"},TableHeader:{color:"#4C4C4C",backgroundColor:"#CCCCCC"},GreyText:{color:"#AAAAAA",backgroundColor:"#FFFFFF"},BlueText:{color:"#00436D",backgroundColor:"#FFFFFF"},AlternatingRow:{color:"#4C4C4C",
backgroundColor:"#EEEEEE"}}},chart:{renderSingleDataSeriesWithSameColor:!1,colors:"#13729F #DEA429 #6A9741 #A75523 #456E35 #D7DF22 #868686 #3C546D #829AB3 #DEDEDE #03406E #B1B1B1".split(" ")}}},{id:e.GRAPHIC,colors:["#FFFFFF","#56A5D8","#D6851A"],additional:{chart:{colors3series:["#56A5D8","#AED6F1","#85C1E9"],colors:"#AED6F1 #85C1E9 #5DADE2 #3498DB #2E86C1 #2874A6 #21618C #1B4F72".split(" ")}}},{id:"red",colors:["#d3d3d3","#8b4513","#ff4500"],additional:{chart:{colors:"#8b4513 #F1948A #EC7063 #E74C3C #CB4335 #B03A2E #943126 #78281F".split(" ")}}},
{id:"dark",colors:["#6A6A6A","#FFFFFF","#EEEEEE"],additional:{chart:{colors:"#FFFFFF #D7DBDD #CACFD2 #BDC3C7 #A6ACAF #909497 #797D7F #626567 #4d4d4d #3e3e3e #262626".split(" "),ring:{colors:["#6B1010"]}}}},{id:"green",colors:["#556b2f","#90ee90","#ffffe0"],additional:{chart:{colors:"#E9F7EF #A9DFBF #7DCEA0 #52BE80 #27AE60 #229954 #1E8449 #196F3D #145A32".split(" ")}}},{id:"green2",colors:["#FFFFFF","#0B7AC0","#35AC46"],additional:{chart:{colors:"#56A5D8 #AED6F1 #85C1E9 #5DADE2 #3498DB #2E86C1 #2874A6 #21618C #1B4F72".split(" ")}}}]},
d={};c.standardRamps.forEach(function(a){var b=h.mixin({},a.additional);b.id=a.id;var f=m({defaultFontFamilty:a.id===e.CLASSIC?"Verdana":"Avenir Next",defaultFontSize:a.id===e.CLASSIC?10:13});p.applyThemeColorsToTheme(f,a.colors);q.populateObject(f,b,!0);c[a.id]=f;d[a.id]=f});c.TABLE_STYLES="Default ReportTitle TableHeader GreyText BlueText AlternatingRow".split(" ");c.getReportThemeById=function(a){return d[a]};c.isStandardTheme=function(a){return!!d[a]};c.getStandardThemes=function(){return Object.keys(d).map(function(a){return d[a]})};
c.getDefaultStaticInfographicSettings=function(){return h.clone(c.defaultStaticInfographic)};c.getDefaultBorderSettings=function(){return l()};c.getDefaultTheme=function(a){return m(a)};return c});