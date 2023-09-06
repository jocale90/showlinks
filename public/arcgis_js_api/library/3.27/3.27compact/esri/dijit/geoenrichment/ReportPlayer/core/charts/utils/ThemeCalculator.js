// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ThemeCalculator","dojo/_base/lang dojox/charting/Theme ../../themes/ThemeLibrary ./ChartTypes ./ChartLineMarkers ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder".split(" "),function(h,t,l,f,m,u){function q(d,c,a){var b;switch(d){case f.COLUMN:b=c.column&&c.column.colors;break;case f.BAR:b=c.bar&&c.bar.colors;break;case f.LINE:b=c.line&&c.line.colors;break;case f.VERTICAL_LINE:b=c.line&&c.line.colors;break;case f.PIE:b=
c.pie&&c.pie.colors;break;case f.DONUT:b=c.donut&&c.donut.colors;break;case f.GAUGE:b=c.gauge&&c.gauge.colors;break;case f.RING:b=c.ring&&c.ring.colors;break;case f.PICTURE_COLUMN:b=c.pictureColumn&&c.pictureColumn.colors;break;case f.PICTURE_BAR:b=c.pictureBar&&c.pictureBar.colors}b&&b.length||(b=null);return b||3>=a&&c.colors3series||c.colors||r}var e={},r=["#AAAAAA","#888888","#555555","#333333"];e.DEFAULT_LINE_THICKNESS=1;e.DEFAULT_COLUMN_THICKNESS="Medium";e.DEFAULT_DONUT_HOLE_PERCENT=50;e.DEFAULT_DONUT_GAP=
3;e.DEFAULT_DONUT_ARC_PERCENT=100;e.DEFAULT_GAUGE_HOLE_PERCENT=80;e.DEFAULT_GAUGE_GAP=2;e.DEFAULT_GAUGE_ANGLE=0;e.DEFAULT_GAUGE_ARC_PERCENT=100;e.getThemeForSettings=function(d,c){var a=new t({colors:c.colors||r});if(!d)return a;var b=d.visualProperties;a.plotarea.fill=b.backgroundColor||c.backgroundColor;a.plotarea.stroke={width:0};a.chart.fill="transparent";a.axis.title.font="normal normal normal 11px Verdana";!f.isPieLike(d.type)&&d.type!==f.RING&&b.backgroundImageData&&(a.plotarea.backgroundImageData=
b.backgroundImageData);var g=h.mixin({},c.dataLabelsStyle,b.dataLabelsStyle);g.color&&(a.series.fontColor=g.color);a.series.font=e.combineFontString(g);a.series.showColumnBarBackground=b.showColumnBarBackground;a.series.columnBarBackgroundColor=b.columnBarBackgroundColor||c.columnBarBackground&&c.columnBarBackground.backgroundColor;a.series.renderColumnBarsInOppositeDirections=b.renderColumnBarsInOppositeDirections;a.series.baseLineValue=b.yAxis.baseLineValue;d.type===f.DONUT&&(a.series.donutHolePercent=
void 0!==b.donutHolePercent?b.donutHolePercent:e.DEFAULT_DONUT_HOLE_PERCENT,a.series.donutGap=void 0!==b.donutGap?b.donutGap:e.DEFAULT_DONUT_GAP,a.series.donutArcPercent=void 0!==b.donutArcPercent?b.donutArcPercent:e.DEFAULT_DONUT_ARC_PERCENT,a.series.donutArcPercent=Math.min(100,Math.max(50,a.series.donutArcPercent)));d.type===f.GAUGE&&(a.series.donutHolePercent=void 0!==b.gaugeHolePercent?b.gaugeHolePercent:e.DEFAULT_GAUGE_HOLE_PERCENT,a.series.donutGap=void 0!==b.gaugeGap?b.gaugeGap:e.DEFAULT_GAUGE_GAP,
a.series.startAngle=void 0!==b.gaugeStartAngle?b.gaugeStartAngle:e.DEFAULT_GAUGE_ANGLE,a.series.donutArcPercent=void 0!==b.gaugeArcPercent?b.gaugeArcPercent:e.DEFAULT_GAUGE_ARC_PERCENT,a.series.donutArcPercent=Math.min(100,Math.max(50,a.series.donutArcPercent)),a.series.donutShowIcons=b.showChartIcons,b.gaugeShowArrow&&(a.series.donutShowArrowIndicator=!0,a.series.donutGap=0,100!==a.series.donutArcPercent&&(a.series.startAngle=0),a.series.donutArrowIndicatorLineColor=b.gaugeArrowLineColor||c.gauge&&
c.gauge.arrowIndicator.lineColor,a.series.donutArrowIndicatorFillColor=b.gaugeArrowFillColor||c.gauge&&c.gauge.arrowIndicator.backgroundColor),g=h.mixin({},c.gauge&&c.gauge.dataLabelStyle,b.gaugeLabelStyle),a.series.donutMainLabelPosition=b.gaugeLabelPlacement,a.series.donutMainLabelFont=e.combineFontString(g),a.series.donutMainLabelFontColor=b.gaugeConditionalStylingLabel?null:g.color,a.series.donutMainLabelFontColorFromConditionalStyling=b.gaugeConditionalStylingLabel&&!!b.conditionalStyling,a.series.donutMainLabelFontSize=
b.gaugeLabelStyle&&b.gaugeLabelStyle.fontSize,a.series.donutMainLabelTextDecoration=g.textDecoration,b.gaugeShowFromToLabels&&(a.series.donutShowFromToLabels=b.gaugeShowFromToLabels,g=h.mixin({},c.gauge&&c.gauge.dataLabelStyle,b.gaugeFromLabelStyle),a.series.donutFromLabelText=b.gaugeRangeMin||0,a.series.donutFromLabelFont=e.combineFontString(g),a.series.donutFromLabelFontColor=g.color,a.series.donutFromLabelFontSize=g.fontSize,a.series.donutFromLabelTextDecoration=g.textDecoration,g=h.mixin({},c.gauge&&
c.gauge.dataLabelStyle,b.gaugeToLabelStyle),a.series.donutToLabelText=b.gaugeRangeMax||"",a.series.donutToLabelFont=e.combineFontString(g),a.series.donutToLabelFontColor=g.color,a.series.donutToLabelFontSize=g.fontSize,a.series.donutToLabelTextDecoration=g.textDecoration),a.series.isPercentState=u.isFieldInfoInPercentState(d.seriesItems[0].points[0].fieldInfo));d.type===f.RING&&(a.series.show100PercentLabel=!0,a.series.ringBackgroundColor=b.ringBackgroundColor||c.ring&&c.ring.ringBackground&&c.ring.ringBackground.backgroundColor);
f.isPictureLike(d.type)&&(a.series.showWholePictures=b.showWholePictures);a.marker.fill="#FFFFFF";a.series.outline=null;return a};e.getComparisonSymbol=function(){return m.getMarkerPath(m.CIRCLE)};e.calcColorForPoint=function(d){var c=d.point,a=d.seriesItem,b=d.pointIndex,e=d.seriesIndex,k=d.numSeries,h=d.chartType,n=d.themeSettings,l=d.isComparisonSeries;d=d.comparisonInfo;var m=f.isPieLike(h)||!n.renderSingleDataSeriesWithSameColor&&1===k,k=q(h,n,m?a.points.length:k),p;if(f.isLineLike(h))l&&d?c=
d.color||n.comparisonInfo.lineColor:(p=k[e%k.length],c=a.color||p||"#FFFFFF");else if(l&&d&&d.color)c=d.color;else{if(h===f.GAUGE&&1===b&&n.gauge.othersColor)return c&&c.color||n.gauge.othersColor;p=p||(m?k[b%k.length]:k[e%k.length]);c=c&&c.color||!f.isPieLike(h)&&a.color||p||"#FFFFFF"}return c};e.calcColorForSeries=function(d){var c=d.seriesItem,a=d.seriesIndex,b=d.numSeries,e=d.chartType,k=d.themeSettings;d=f.isPieLike(e)||!k.renderSingleDataSeriesWithSameColor&&1===b;b=q(e,k,d?c.points.length:
b);a=f.isLineLike(e)?b[a%b.length]:d?null:b[a%b.length];return c&&c.color||a||"#FFFFFF"};e.provideMissingIconsForPoints=function(d,c){if(!f.isPictureLike(c))return null;var a,b=[];d.forEach(function(c){c.iconFieldInfo?(a=c.iconFieldInfo,b.forEach(function(b){b.iconFieldInfo=h.clone(a)}),b.length=0):a?c.iconFieldInfo=h.clone(a):b.push(c)})};e.calcIconForPoint=function(d,c,a){if(!f.isPictureLike(a))return null;(d=d.iconFieldInfo)&&d.shapeJson&&c&&(d.shapeJson.themeStyle={fillColor:c,borderColor:c});
return d};e.calcBackgroundIconForPoint=function(d,c,a,b){if(!f.isPictureLike(c))return null;c=b.columnBarBackgroundColor||a.columnBarBackground&&a.columnBarBackground.backgroundColor;return(d=d.iconFieldInfo)&&d.shapeJson&&c?(d=h.clone(d),d.shapeJson.themeStyle={fillColor:c,borderColor:c},d):null};e.combineFontString=function(d){d=d||{};return(d.fontStyle||"normal")+" normal "+(d.fontWeight||"normal")+" "+((d.fontSize||l.CHART_DATA_FONT_SIZE)+"px")+" "+(d.fontFamily||l.DEFAULT_FONT_FAMILY_CLASSIC)};
return e});