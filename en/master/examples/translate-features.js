(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{228:function(t,e,a){"use strict";var r=a(62),i=a(34),o=a(7),n=a(44),s=a(38),l=a(16),h=a(57),c=a(151),u="translatestart",p="translating",f="translateend",_=function(t){function e(e,a,r){t.call(this,e),this.features=a,this.coordinate=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(n.a),d=function(t){function e(e){var a,r=e||{};if(t.call(this,r),this.lastCoordinate_=null,this.features_=void 0!==r.features?r.features:null,r.layers)if("function"==typeof r.layers)a=r.layers;else{var n=r.layers;a=function(t){return Object(l.f)(n,t)}}else a=s.b;this.layerFilter_=a,this.filter_=r.filter?r.filter:s.b,this.hitTolerance_=r.hitTolerance?r.hitTolerance:0,this.lastFeature_=null,Object(o.a)(this,Object(i.b)(c.a.ACTIVE),this.handleActiveChanged_,this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDownEvent=function(t){if(this.lastFeature_=this.featuresAtPixel_(t.pixel,t.map),!this.lastCoordinate_&&this.lastFeature_){this.lastCoordinate_=t.coordinate,this.handleMoveEvent(t);var e=this.features_||new r.a([this.lastFeature_]);return this.dispatchEvent(new _(u,e,t.coordinate)),!0}return!1},e.prototype.handleUpEvent=function(t){if(this.lastCoordinate_){this.lastCoordinate_=null,this.handleMoveEvent(t);var e=this.features_||new r.a([this.lastFeature_]);return this.dispatchEvent(new _(f,e,t.coordinate)),!0}return!1},e.prototype.handleDragEvent=function(t){if(this.lastCoordinate_){var e=t.coordinate,a=e[0]-this.lastCoordinate_[0],i=e[1]-this.lastCoordinate_[1],o=this.features_||new r.a([this.lastFeature_]);o.forEach(function(t){var e=t.getGeometry();e.translate(a,i),t.setGeometry(e)}),this.lastCoordinate_=e,this.dispatchEvent(new _(p,o,e))}},e.prototype.handleMoveEvent=function(t){var e=t.map.getViewport();this.featuresAtPixel_(t.pixel,t.map)?(e.classList.remove(this.lastCoordinate_?"ol-grab":"ol-grabbing"),e.classList.add(this.lastCoordinate_?"ol-grabbing":"ol-grab")):e.classList.remove("ol-grab","ol-grabbing")},e.prototype.featuresAtPixel_=function(t,e){return e.forEachFeatureAtPixel(t,function(t,e){if(this.filter_(t,e)&&(!this.features_||Object(l.f)(this.features_.getArray(),t)))return t}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_})},e.prototype.getHitTolerance=function(){return this.hitTolerance_},e.prototype.setHitTolerance=function(t){this.hitTolerance_=t},e.prototype.setMap=function(e){var a=this.getMap();t.prototype.setMap.call(this,e),this.updateState_(a)},e.prototype.handleActiveChanged_=function(){this.updateState_(null)},e.prototype.updateState_=function(t){var e=this.getMap(),a=this.getActive();e&&a||(e=e||t)&&e.getViewport().classList.remove("ol-grab","ol-grabbing")},e}(h.b);e.a=d},375:function(t,e,a){"use strict";a.r(e);var r=a(3),i=a(2),o=a(36),n=a(93),s=a(228),l=a(50),h=a(6),c=a(21),u=a(10),p=a(12),f=new h.a({source:new u.b}),_=new c.a({source:new p.a({url:"data/geojson/countries.geojson",format:new o.a})}),d=new n.a,v=new s.a({features:d.getFeatures()});new r.a({interactions:Object(l.a)().extend([d,v]),layers:[f,_],target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[375,0]]]);
//# sourceMappingURL=translate-features.js.map