// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DateUtil",["dojo/date/locale","esri/moment","./ObjectUtil"],function(c,d,e){var b={formatDate:function(a,b){return(a=e.objectToDate(a))?c.format(a,b):""},formatMoment:function(a,b){return(a=e.objectToTime(a))?d(a).format(b):""},formatDateShort:function(a){return b.formatMoment(a,"L")},formatDateTimeShort:function(a){return b.formatMoment(a,"L LT")},formatLiveTime:function(a){var c=b.formatMoment(a,"l, LT").replace(/\d\d\d\d/,function(a){return a.substr(2)});
return c?c+" "+b.formatDate(a,{datePattern:"ZZZZ",selector:"date"}):""},formatTypicalTime:function(a){return b.formatMoment(a,"ddd LT")},parseDateShort:function(a){return(a=+d(a,"L"))?new Date(a):null},getReportFooterDate:function(a){return c.format(a||new Date,{datePattern:"MMMM d, yyyy",selector:"date"})},getFullYear:function(){return(new Date).getFullYear()}};return b});