(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{355:function(t,i,o){"use strict";o.r(i);var e=o(2),d=o(3),n=o(6),s=o(52);function a(t){this.el=t,this.loading=0,this.loaded=0}a.prototype.addLoading=function(){0===this.loading&&this.show(),++this.loading,this.update()},a.prototype.addLoaded=function(){var t=this;setTimeout(function(){++t.loaded,t.update()},100)},a.prototype.update=function(){var t=(this.loaded/this.loading*100).toFixed(1)+"%";if(this.el.style.width=t,this.loading===this.loaded){this.loading=0,this.loaded=0;var i=this;setTimeout(function(){i.hide()},500)}},a.prototype.show=function(){this.el.style.visibility="visible"},a.prototype.hide=function(){this.loading===this.loaded&&(this.el.style.visibility="hidden",this.el.style.width=0)};var l=new a(document.getElementById("progress")),h=new s.a({url:"https://api.tiles.mapbox.com/v3/mapbox.world-bright.json?secure",crossOrigin:"anonymous"});h.on("tileloadstart",function(){l.addLoading()}),h.on("tileloadend",function(){l.addLoaded()}),h.on("tileloaderror",function(){l.addLoaded()});new e.a({layers:[new n.a({source:h})],target:"map",view:new d.a({center:[0,0],zoom:2})})}},[[355,0]]]);
//# sourceMappingURL=tile-load-events.js.map