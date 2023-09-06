// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/utils/TooltipInfoBuilder",["./ChartDataUtil"],function(d){return{getTooltipInfo:function(a){function b(b,c){return d.formatNumber(b||0,void 0!==c?{dataLabelsDecimals:c}:void 0!==a.decimals?{dataLabelsDecimals:a.decimals}:a.visualProperties,void 0,a.chartType)}var c=a.isMultiFeature?a.absSumInAreasValue:a.absSumInSeriesValue;return{isMultiFeature:a.isMultiFeature,value:a.yValue,label:a.pointLabel,color:a.color,seriesLabel:a.seriesLabel,
valueLabel:b(a.yValue),sumValueLabel:b(a.isMultiFeature?a.sumInAreasValue:a.sumInSeriesValue),minValueLabel:b(a.isMultiFeature?a.minInAreasValue:a.minInSeriesValue),maxValueLabel:b(a.isMultiFeature?a.maxInAreasValue:a.maxInSeriesValue),avgValueLabel:b(a.isMultiFeature?a.avgInAreasValue:a.avgInSeriesValue),weightValueLabel:c?b(Math.abs(a.yValue)/c*100,2)+"%":"",formatFunc:b,isUnavailableData:isNaN(a.yValue),conditionalStyling:a.conditionalStyling,fieldInfo:a.fieldInfo,isThisAreaSpecific:a.isThisAreaSpecific,
isThisAreaSingleSeries:a.isThisAreaSingleSeries,getGroup:null}}}});