(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{253:function(e,n,t){"use strict";t.r(n);var a=t(2),i=t(3),r=t(216),o=t(36),c=t(217),s=t(102),u=t(171),f=t(205),g=t(49),w=t(6),l=t(221),p=t(41),d=t(13),v=new f.a({formatConstructors:[r.a,o.a,c.a,s.a,u.a]}),m=new a.a({interactions:Object(g.a)().extend([v]),layers:[new w.a({source:new p.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})})],target:"map",view:new i.a({center:[0,0],zoom:2})});v.on("addfeatures",function(e){var n=new d.a({features:e.features});m.addLayer(new l.a({source:n})),m.getView().fit(n.getExtent())});var b=function(e){var n=[];if(m.forEachFeatureAtPixel(e,function(e){n.push(e)}),n.length>0){var t,a,i=[];for(t=0,a=n.length;t<a;++t)i.push(n[t].get("name"));document.getElementById("info").innerHTML=i.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};m.on("pointermove",function(e){if(!e.dragging){var n=m.getEventPixel(e.originalEvent);b(n)}}),m.on("click",function(e){b(e.pixel)})}},[[253,0]]]);
//# sourceMappingURL=drag-and-drop-image-vector.js.map