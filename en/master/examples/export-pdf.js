(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{282:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(2),r=a(213),s=a(5),d=a(23),i=a(9),c=a(10),u=new s.a({source:new i.b}),m=(new r.a).readFeature("POLYGON((10.689697265625 -25.0927734375, 34.595947265625 -20.1708984375, 38.814697265625 -35.6396484375, 13.502197265625 -39.1552734375, 10.689697265625 -25.0927734375))");m.getGeometry().transform("EPSG:4326","EPSG:3857");var l=new d.a({source:new c.a({features:[m]})}),w=new n.a({layers:[u,l],target:"map",view:new o.a({center:[0,0],zoom:2})}),p={a0:[1189,841],a1:[841,594],a2:[594,420],a3:[420,297],a4:[297,210],a5:[210,148]},g=document.getElementById("export-pdf");g.addEventListener("click",(function(){g.disabled=!0,document.body.style.cursor="progress";var e=document.getElementById("format").value,t=document.getElementById("resolution").value,a=p[e],n=Math.round(a[0]*t/25.4),o=Math.round(a[1]*t/25.4),r=w.getSize(),s=w.getView().getResolution();w.once("rendercomplete",(function(){var t=document.createElement("canvas");t.width=n,t.height=o;var d=t.getContext("2d");document.querySelectorAll(".ol-layer canvas").forEach((function(e){if(e.width>0){var t=e.style.transform.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number);CanvasRenderingContext2D.prototype.setTransform.apply(d,t),d.drawImage(e,0,0)}}));var i=new jsPDF("landscape",void 0,e);i.addImage(t.toDataURL("image/jpeg"),"JPEG",0,0,a[0],a[1]),i.save("map.pdf"),w.setSize(r),w.getView().setResolution(s),g.disabled=!1,document.body.style.cursor="auto"}));var d=[n,o];w.setSize(d);var i=Math.min(n/r[0],o/r[1]);w.getView().setResolution(s/i)}),!1)}},[[282,0]]]);
//# sourceMappingURL=export-pdf.js.map