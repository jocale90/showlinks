// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/TriStateItem","dojo/_base/declare dojo/_base/event dojo/_base/lang dojo/Stateful dojo/on dojo/dom-construct dojo/dom-class ./utils/DeviceUtil".split(" "),function(e,m,f,n,k,g,h,p){return e(n,{domNode:null,checkboxNode:null,checked:!1,disabled:!1,autoToggle:!0,_currentClass:null,_lastChecked:!1,constructor:function(a,b,e){var l=p.isMobileDevice()?"touchstart":"click";b=b||{};var c=b["class"];b["class"]=(c?c+" ":"")+"esriTriStateCheckBoxIcon";if(c=b.label){if(a instanceof
HTMLLabelElement)a.innerHTML="\x26nbsp;"+c;else{var d=b.labelAttrs||{};d.innerHTML="\x26nbsp;"+c;d=g.create("label",d);a&&g.place(d,a);a=d}b=f.mixin({},b);delete b.label;delete b.labelAttrs}this.checkboxNode=g.create("div",b,a,a instanceof HTMLLabelElement?"first":e);this._currentClass=this._composeClass();h.add(this.checkboxNode,this._currentClass);a instanceof HTMLLabelElement?(k(a,l,f.hitch(this,this._onClick)),h.add(a,"esriTriStateCheckBoxLabel")):k(this.checkboxNode,l,f.hitch(this,this._onClick));
this.domNode=c?a:this.checkboxNode},postscript:function(){},_onClick:function(a){this.disabled||(this.autoToggle&&this.toggle(),a.checked=this.checked,this.onClick(m.fix(a)))},onClick:function(a){},toggle:function(){this.set("checked",!this._lastChecked);return this.checked},_checkedSetter:function(a){a!==this.checked&&(this.checked="mixed"===a?a:this._lastChecked=!!a,this._updateClass())},_disabledSetter:function(a){this.disabled=!!a;this._updateClass()},_updateClass:function(){var a=this._composeClass();
a!==this._currentClass&&(h.replace(this.checkboxNode,a,this._currentClass),this._currentClass=a)},_composeClass:function(){var a="esriTriStateCheckBox"+("mixed"==this.checked?"Mixed":this.checked?"Checked":"");return this.disabled?a+"Disabled":a}})});