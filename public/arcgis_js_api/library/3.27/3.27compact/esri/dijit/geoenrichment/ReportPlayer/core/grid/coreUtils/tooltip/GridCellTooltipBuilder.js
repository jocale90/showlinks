// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/tooltip/GridCellTooltipBuilder","dojo/_base/declare ../GridDataUtil ../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder ../../valueField/utils/ValueFieldTextTrimmer ./_ScriptExpressionBuilder esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/utils/TooltipUtil esri/dijit/geoenrichment/ReportPlayer/config dojo/i18n!esri/nls/jsapi".split(" "),function(m,f,q,r,t,u,v,n,g){g=g.geoenrichment.dijit.ReportPlayer.Grid;
var w=m(null,{_content:"",getContent:function(){return this._content?"\x3cdiv class\x3d'esriGEAdjustableGridValueField_cellTooltipContent'\x3e"+this._content+"\x3c/div\x3e":null},addValue:function(a){this._content+="\x3cdiv class\x3d'esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'\x3e"+a+"\x3c/div\x3e"},addImageValue:function(a){var c=f.getNumericCellValue(a);isNaN(c)||"number"!==typeof c||(a=a.numberFormatFunction?a.numberFormatFunction(c):u.formatNumber(c),this._content+="\x3cdiv class\x3d'esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'\x3e"+
a+"\x3c/div\x3e")},addAlias:function(a){this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e\x3cb\x3e"+g.variable+"\x3c/b\x3e "+a+"\x3c/div\x3e"},addExpression:function(a,c,b){if(a=t.buildTooltipExpression(a,c))this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e"+g.variableIsBasedOnExpression+"\x3c/div\x3e",this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e"+a+"\x3c/div\x3e"},addConditionalStyleLegend:function(a){var c=f.getNumericCellValue(a),b=f.getConditionalFormatting(a);a=f.getFieldInfo(a).isImage;
this._content+=q.createLegendNode(b,a?"image":"text",c).outerHTML},addTextBlock:function(a){this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e"+a+"\x3c/div\x3e"}}),x=/<\w/,l={setDynamicTooltipToCell:function(a,c,b){var e=f.getFieldInfo(a);(a.hasOverflowText()||f.isVariableFieldCell(a)||f.isImageTriggerCell(a))&&a.own(v.setTooltipToNode(a.domNode,function(){return l.renderCellTooltip(a,c,b)},{classes:"esriGEAdjustableGridValueField_cellTooltip",stayOnHover:e&&(e.script||e.expressionText)}))},renderCellTooltip:function(a,
c,b){b=b||{};var e=b.getExpressionText||function(a){return n.modules.complexCellTooltips&&a.expressionText},g=r.getFullText(a),k=f.getConditionalFormatting(a),d=f.getFieldInfo(a),l=d&&(d.hasVariable||d.script),p=d&&d.isImage,m=d&&d.isRichText||g&&x.test(g),h=new w;!g||m||p||b.hideValue||h.addValue(g);l?(h.addAlias(d.script?d.script.alias:d.alias),(e=e(d))&&h.addExpression(e,c,b.makeExpressionExpandable)):p&&k&&k.fieldInfo&&(!b.hideValue&&h.addImageValue(a),h.addAlias(k.fieldInfo.script?k.fieldInfo.script.alias:
k.fieldInfo.alias),(e=e(k.fieldInfo))&&h.addExpression(e,c,b.makeExpressionExpandable));k&&n.modules.complexCellTooltips&&(b.conditionalLegendDesc&&h.addTextBlock(b.conditionalLegendDesc),h.addConditionalStyleLegend(a));return h.getContent()}};return l});