(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{268:function(e,a,t){"use strict";t.r(a);var n,r=t(3),o=t(2),w=t(101),s=t(35),c=t(21),i=t(6),l=t(64),m=t(65),u=t(12),p=t(14),g=t(24),d=t(20),b=t(95),f=[[0,0],[4,2],[6,0],[10,5],[6,3],[4,5],[0,0]],k=function(e){return[e[0]*n,e[1]*n]},v={},y=new c.a({source:new u.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new w.a({extractStyles:!1})}),style:function(e){var a=e.get("name"),t=parseFloat(a.substr(2)),r=parseInt(10+40*(t-5),10);n=r/10;var o=v[r];if(!o){var w=document.createElement("canvas"),c=Object(l.d)(w.getContext("2d"),{size:[r,r],pixelRatio:1});c.setStyle(new p.c({fill:new g.a({color:"rgba(255, 153, 0, 0.4)"}),stroke:new d.a({color:"rgba(255, 204, 0, 0.2)",width:2})})),c.drawGeometry(new s.b([f.map(k)])),o=new p.c({image:new b.a({img:w,imgSize:[r,r],rotation:1.2})}),v[r]=o}return o}}),h=new i.a({source:new m.a({layer:"toner"})});new r.a({layers:[h,y],target:"map",view:new o.a({center:[0,0],zoom:2})})}},[[268,0]]]);
//# sourceMappingURL=earthquake-custom-symbol.js.map