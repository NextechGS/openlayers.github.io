(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{260:function(e,t,r){"use strict";r.r(t);var o=r(24),n=r(3),i=r(2),a=r(26),s=r(36),c=r(34),u=r(58),h=r(49),l=r(5),p=r(23),w=r(53),_=r(10),d=r(11),v=r(95),f=r(17),y=r(22),m=function(e){function t(){e.call(this,{handleDownEvent:b,handleDragEvent:g,handleMoveEvent:x,handleUpEvent:E}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(u.b);function b(e){var t=e.map.forEachFeatureAtPixel(e.pixel,(function(e){return e}));return t&&(this.coordinate_=e.coordinate,this.feature_=t),!!t}function g(e){var t=e.coordinate[0]-this.coordinate_[0],r=e.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(t,r),this.coordinate_[0]=e.coordinate[0],this.coordinate_[1]=e.coordinate[1]}function x(e){if(this.cursor_){var t=e.map.forEachFeatureAtPixel(e.pixel,(function(e){return e})),r=e.map.getTargetElement();t?r.style.cursor!=this.cursor_&&(this.previousCursor_=r.style.cursor,r.style.cursor=this.cursor_):void 0!==this.previousCursor_&&(r.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}}function E(){return this.coordinate_=null,this.feature_=null,!1}var C=new o.a(new a.a([0,0])),j=new o.a(new s.a([[-1e7,1e6],[-1e6,3e6]])),k=new o.a(new c.b([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new n.a({interactions:Object(h.a)().extend([new m]),layers:[new l.a({source:new w.a({url:"https://a.tiles.mapbox.com/v4/aj.1x1-degrees.json?access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q"})}),new p.a({source:new _.a({features:[C,j,k]}),style:new d.c({image:new v.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.95,src:"data/icon.png"}),stroke:new f.a({width:3,color:[255,0,0,1]}),fill:new y.a({color:[0,0,255,.6]})})})],target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[260,0]]]);
//# sourceMappingURL=custom-interactions.js.map