//>>built
define("dojox/wire/TreeAdapter",["dojo","dijit","dojox","dojo/require!dojox/wire/CompositeWire"],function(e,l,d){e.provide("dojox.wire.TreeAdapter");e.require("dojox.wire.CompositeWire");e.declare("dojox.wire.TreeAdapter",d.wire.CompositeWire,{_wireClass:"dojox.wire.TreeAdapter",constructor:function(b){this._initializeChildren(this.nodes)},_getValue:function(b){if(!b||!this.nodes)return b;e.isArray(b)||(b=[b]);var c=[],a;for(a in b)for(var d in this.nodes)c=c.concat(this._getNodes(b[a],this.nodes[d]));
return c},_setValue:function(b,c){throw Error("Unsupported API: "+this._wireClass+"._setValue");},_initializeChildren:function(b){if(b)for(var c in b){var a=b[c];a.node&&(a.node.parent=this,d.wire.isWire(a.node)||(a.node=d.wire.create(a.node)));a.title&&(a.title.parent=this,d.wire.isWire(a.title)||(a.title=d.wire.create(a.title)));a.children&&this._initializeChildren(a.children)}},_getNodes:function(b,c){var a=null;if(c.node){a=c.node.getValue(b);if(!a)return[];e.isArray(a)||(a=[a])}else a=[b];var d=
[],h;for(h in a){b=a[h];var g={};g.title=c.title?c.title.getValue(b):b;if(c.children){var f=[],k;for(k in c.children)f=f.concat(this._getNodes(b,c.children[k]));0<f.length&&(g.children=f)}d.push(g)}return d}})});