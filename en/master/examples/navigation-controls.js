(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{227:function(t,e,n){"use strict";var o=n(7),a=n(11),i=n(73),r=n(42),c=function(t){function e(e){var n=e||{};t.call(this,{element:document.createElement("div"),target:n.target}),this.extent=n.extent?n.extent:null;var i=void 0!==n.className?n.className:"ol-zoom-extent",c=void 0!==n.label?n.label:"E",l=void 0!==n.tipLabel?n.tipLabel:"Fit to extent",s=document.createElement("button");s.setAttribute("type","button"),s.title=l,s.appendChild("string"==typeof c?document.createTextNode(c):c),Object(o.a)(s,a.a.CLICK,this.handleClick_,this);var p=i+" "+r.e+" "+r.b,u=this.element;u.className=p,u.appendChild(s)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleClick_=function(t){t.preventDefault(),this.handleZoomToExtent()},e.prototype.handleZoomToExtent=function(){var t=this.getMap().getView(),e=this.extent?this.extent:t.getProjection().getExtent();t.fit(e)},e}(i.a);e.a=c},334:function(t,e,n){"use strict";n.r(e);var o=n(3),a=n(2),i=n(51),r=n(227),c=n(6),l=n(10);new o.a({controls:Object(i.a)().extend([new r.a({extent:[813079.7791264898,5929220.284081122,848966.9639063801,5936863.986909639]})]),layers:[new c.a({source:new l.b})],target:"map",view:new a.a({center:[0,0],zoom:2})})}},[[334,0]]]);
//# sourceMappingURL=navigation-controls.js.map