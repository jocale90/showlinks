//>>built
define("dojox/av/FLVideo",["dojo","dijit","dijit/_Widget","dojox/embed/Flash","dojox/av/_Media"],function(c,f,d,g,e){c.experimental("dojox.av.FLVideo");return c.declare("dojox.av.FLVideo",[d,e],{_swfPath:c.moduleUrl("dojox.av","resources/video.swf"),constructor:function(a){c.global.swfIsInHTML=function(){return!0}},postCreate:function(){this._subs=[];this._cons=[];this.mediaUrl=this._normalizeUrl(this.mediaUrl);this.initialVolume=this._normalizeVolume(this.initialVolume);var a={path:this._swfPath,
width:"100%",height:"100%",minimumVersion:9,expressInstall:!0,params:{allowFullScreen:this.allowFullScreen,wmode:this.wmode,allowScriptAccess:this.allowScriptAccess,allowNetworking:this.allowNetworking},vars:{videoUrl:this.mediaUrl,id:this.id,autoPlay:this.autoPlay,volume:this.initialVolume,isDebug:this.isDebug}};this._sub("stageClick","onClick");this._sub("stageSized","onSwfSized");this._sub("mediaStatus","onPlayerStatus");this._sub("mediaMeta","onMetaData");this._sub("mediaError","onError");this._sub("mediaStart",
"onStart");this._sub("mediaEnd","onEnd");this._flashObject=new dojox.embed.Flash(a,this.domNode);this._flashObject.onError=function(a){console.error("Flash Error:",a)};this._flashObject.onLoad=c.hitch(this,function(a){this.flashMedia=a;this.isPlaying=this.autoPlay;this.isStopped=!this.autoPlay;this.onLoad(this.flashMedia);this._initStatus();this._update()});this.inherited(arguments)},play:function(a){this.isPlaying=!0;this.isStopped=!1;this.flashMedia.doPlay(this._normalizeUrl(a))},pause:function(){this.isStopped=
this.isPlaying=!1;if(this.onPaused)this.onPaused();this.flashMedia.pause()},seek:function(a){this.flashMedia.seek(a)},volume:function(a){a&&(this.flashMedia||(this.initialVolume=a),this.flashMedia.setVolume(this._normalizeVolume(a)));return this.flashMedia&&this.flashMedia.doGetVolume?this.flashMedia.getVolume():this.initialVolume},_checkBuffer:function(a,b){100==this.percentDownloaded?this.isBuffering&&(this.onBuffer(!1),this.flashMedia.doPlay()):!this.isBuffering&&.1>b?(this.onBuffer(!0),this.flashMedia.pause()):
(b=.01*this.percentDownloaded*this.duration,!this.isBuffering&&a+.001*this.minBufferTime>b?(this.onBuffer(!0),this.flashMedia.pause()):this.isBuffering&&a+.001*this.bufferTime<=b&&(this.onBuffer(!1),this.flashMedia.doPlay()))},_update:function(){var a=Math.min(this.getTime()||0,this.duration),b=this.flashMedia.getLoaded();this.percentDownloaded=Math.ceil(b.bytesLoaded/b.bytesTotal*100);this.onDownloaded(this.percentDownloaded);this.onPosition(a);this.duration&&this._checkBuffer(a,b.buffer);this._updateHandle=
setTimeout(c.hitch(this,"_update"),this.updateTime)},destroy:function(){clearTimeout(this._updateHandle);c.disconnect(this._positionHandle);this.inherited(arguments)}})});