(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{322:function(e,a,n){"use strict";n.r(a);var t=n(24),r=n(3),s=n(2),o=n(26),i=n(23),w=n(10),l=n(17),u=n(11),c=n(111),d=n(22),g=new l.a({color:"black",width:1}),p={square:new u.c({image:new c.a({fill:new d.a({color:"blue"}),stroke:g,points:4,radius:80,angle:Math.PI/4})}),triangle:new u.c({image:new c.a({fill:new d.a({color:"red"}),stroke:g,points:3,radius:80,rotation:Math.PI/4,angle:0})}),star:new u.c({image:new c.a({fill:new d.a({color:"green"}),stroke:g,points:5,radius:80,radius2:4,angle:0})})};function v(e,a,n){var r=new t.a(new o.a(e));r.setStyle(a);var s=new w.a({features:[r]}),l=new i.a({source:s});return l.setZIndex(n),l}var f=v([40,40],p.star,0),h=v([0,0],p.square,1),m=v([0,40],p.triangle,0),I=[];I.push(h),I.push(m);var k=new r.a({layers:I,target:"map",view:new s.a({center:[0,0],zoom:18})});function b(e,a){var n=document.getElementById("idx"+e);n.onchange=function(){a.setZIndex(parseInt(this.value,10)||0)},n.value=String(a.getZIndex())}f.setMap(k),b(1,h),b(2,m)}},[[322,0]]]);
//# sourceMappingURL=layer-z-index.js.map