// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/AgePyramid","../../declare dojo/_base/lang ./BaseSelectComparison dojo/dom-construct dojo/number dojo/dom-class ./utils ./theme dojox/charting/Chart dojox/charting/axis2d/Default dojox/charting/plot2d/Bars dojox/charting/plot2d/Lines ./ReportPlayer/core/charts/tooltips/ZoomSupportTooltip dojox/charting/action2d/Highlight dojox/charting/SimpleTheme dojo/i18n!../../nls/jsapi".split(" "),function(v,k,w,g,l,n,x,p,y,r,z,A,t,u,B,d){d=d.geoenrichment.dijit.AgePyramid;return v("esri.dijit.geoenrichment.AgePyramid",
w,{baseClass:"Infographics_AgePyramid",showVerticalAxis:!1,chart:null,_currentTheme:null,_themeChangeHandle:null,updateUI:function(){this.inherited(arguments);this._themeChangeHandle||(this._themeChangeHandle=p.on("change",k.hitch(this,this._onThemeChange)));this._currentTheme?this._doUpdateUI():p.load("AgePyramid").then(k.hitch(this,this._onThemeLoad))},_onThemeChange:function(){this._currentTheme=null;this._destroyChart();this.updateUI()},_onThemeLoad:function(a){this._currentTheme=a;this._currentTheme.theme=
new B(a.theme);this._doUpdateUI()},_doUpdateUI:function(){this.ensureChart();var a=this.getDataFields();this.maleIndices=[];this.femaleIndices=[];for(var b=a.length/2,c=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,q,g,e=!0,h=!0,m=0;m<a.length;m++){var d=m<b;d?this.maleIndices.push(a[m]):this.femaleIndices.push(a[m]);var l=this.getValueByIndex(0,a[m]);l>c?(c=l,q=this.getFieldByIndex(a[m]).alias,e=d):l<f&&(f=l,g=this.getFieldByIndex(a[m]).alias,h=d)}a=this.setSeriesData(this.chart.getSeries("male_bars"),
0,this.maleIndices,-1);b=this.setSeriesData(this.chart.getSeries("female_bars"),0,this.femaleIndices,1);this.expanded?(f=this._getComparisonRow(),c=this.setSeriesData(this.chart.getSeries("male_lines"),f,this.maleIndices,-1),f=this.setSeriesData(this.chart.getSeries("female_lines"),f,this.femaleIndices,1)):(this.chart.getSeries("male_lines").update([]),this.chart.getSeries("female_lines").update([]),f=c=Number.NEGATIVE_INFINITY);this.extreme=x.getCeiling(Math.max(a,b,c,f),!0);this.chart.removeAxis("y");
this.chart.addAxis("y",{type:r,min:-this.extreme,max:this.extreme,minorTicks:!1,labelFunc:k.hitch(this,this.getAxisLabel)});this.chart.removeAxis("x");if(this.showVerticalAxis){var p=/\d+$/i;this.chart.addAxis("x",{type:r,min:.5,max:this.maleIndices.length+1,majorTickStep:1E3,majorTicks:!1,minorTicks:!0,minorTickStep:2,vertical:!0,labelFunc:k.hitch(this,function(a,b,c){return(a=(a=(a=this.data.fields[this.maleIndices[b-1]])&&a.name.match(p))&&a[0])||" "})})}this.chart.render();this.expanded&&(e?n.replace(this.max,
"AgePyramid_TextMale","AgePyramid_TextFemale"):n.replace(this.max,"AgePyramid_TextFemale","AgePyramid_TextMale"),h?n.replace(this.min,"AgePyramid_TextMale","AgePyramid_TextFemale"):n.replace(this.min,"AgePyramid_TextFemale","AgePyramid_TextMale"),this.max.innerHTML=q,this.min.innerHTML=g)},getAxisLabel:function(a,b,c){b=Math.abs(b);return b!=this.extreme?l.format(b,{places:0}):l.format(b/100,{places:0,type:"percent"})},resize:function(){this.inherited(arguments);this.chart&&this.chart.resize()},ensureChart:function(){if(!this.chart){var a=
this._currentTheme,b=this.chart=new y(this.chartDiv);b.setTheme(a.theme);b.addPlot("lines",{type:this._getLinesPlot(),markers:!0});b.addPlot("bars",{type:this._getBarsPlot(),gap:this.expanded?1.5:1});b.addSeries("male_bars",[],k.mixin({plot:"bars"},a.male));b.addSeries("female_bars",[],k.mixin({plot:"bars"},a.female));b.addSeries("male_lines",[],k.mixin({plot:"lines"},a.line));b.addSeries("female_lines",[],k.mixin({plot:"lines"},a.line));var c={text:k.hitch(this,this.getTooltip)};new t(b,"bars",c);
new t(b,"lines",c);new u(b,"bars",{duration:1});new u(b,"lines",{duration:1,highlight:a.highlight})}},_getLinesPlot:function(){return A},_getBarsPlot:function(){return z},getTooltip:function(a){var b=this._currentTheme,c,f;switch(a.run.name){case "male_bars":c=this.maleIndices[a.index];f=0;break;case "female_bars":c=this.femaleIndices[a.index];f=0;break;case "male_lines":c=this.maleIndices[a.index];f=this._getComparisonRow();break;case "female_lines":c=this.femaleIndices[a.index];f=this._getComparisonRow();
break;default:return""}var q=this.getFeatureTitle(f),d=this.getFieldByIndex(c).alias;c=l.format(this.getValueByIndex(f,c),{places:0});a=l.format(Math.abs("lines"===a.plot.name?a.x:a.y)/100,{places:1,type:"percent"});return"\x3cdiv class\x3d'AgePyramid_Tooltip_Content'\x3e\x3cspan style\x3d'font:"+b.font+"; color:"+b.color+";'\x3e\x3cb\x3e"+q+"\x3c/b \x3e \x3cbr / \x3e "+d+"\x3cbr/\x3e"+c+" ("+a+")\x3c/span\x3e\x3c/div\x3e"},setSeriesData:function(a,b,c,f){var d=[],g=0,e,h;for(e=0;e<c.length;e++)h=
this.getValueByIndex(b,c[e]),d.push(h),g+=h;b=Number.NEGATIVE_INFINITY;for(e=0;e<c.length;e++)h=d[e]/g*100,d[e]=h*f,h>b&&(b=h);if("lines"===a.plot)for(e=0;e<d.length;e++)d[e]={x:d[e],y:e+1};a.update(d);return b},createUI:function(a){this.inherited(arguments);a.contentClass.push("AgePyramid_ContentPane");this.chartDiv=a.addContent("div",{"class":"AgePyramid_Chart"})},createUIExpanded:function(a){this.inherited(arguments);var b=a.addContent("div",{"class":"AgePyramid_MinMax"});g.create("div",{innerHTML:d.maxLabel},
b);this.max=g.create("div",{"class":"AgePyramid_Text"},b);g.create("div",{"class":"AgePyramid_MinLabel",innerHTML:d.minLabel},b);this.min=g.create("div",{"class":"AgePyramid_Text"},b);b=a.addContent("div",{"class":"AgePyramid_Comparison"});g.create("div",{"class":"AgePyramid_ComparisonLabel",innerHTML:d.compLabel},b);this._createComboBox(b)},createUICollapsed:function(a){this.inherited(arguments);g.create("div",{"class":"MenLabel",innerHTML:d.menLabel},this.chartDiv);g.create("div",{"class":"WomenLabel",
innerHTML:d.womenLabel},this.chartDiv)},destroy:function(){this._destroyChart();this._themeChangeHandle&&(this._themeChangeHandle.remove(),this._themeChangeHandle=null);this.inherited(arguments)},_destroyChart:function(){this.chart&&(this.chart.destroy(),this.chart=null)}})});