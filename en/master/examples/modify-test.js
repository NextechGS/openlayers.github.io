(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{331:function(e,t,o){"use strict";o.r(t);var n,r,i=o(3),a=o(2),l=o(36),c=o(93),y=o(159),w=o(50),g=o(21),s=o(12),u=o(49),p=o(20),d=o(14),m=o(24),P=(n={},r=new u.a({radius:5,fill:null,stroke:new p.a({color:"orange",width:2})}),n.Point=new d.c({image:r}),n.Polygon=new d.c({stroke:new p.a({color:"blue",width:3}),fill:new m.a({color:"rgba(0, 0, 255, 0.1)"})}),n.MultiLineString=new d.c({stroke:new p.a({color:"green",width:3})}),n.MultiPolygon=new d.c({stroke:new p.a({color:"yellow",width:1}),fill:new m.a({color:"rgba(255, 255, 0, 0.1)"})}),n.default=new d.c({stroke:new p.a({color:"red",width:3}),fill:new m.a({color:"rgba(255, 0, 0, 0.1)"}),image:r}),function(e){return n[e.getGeometry().getType()]||n.default}),f=new s.a({features:(new l.a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[-2e6,0],[0,-2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[9e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[8e6,3e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6],[-5e6,-1e6]],[[-45e5,-5e5],[-35e5,-5e5],[-4e6,5e5],[-45e5,-5e5]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[-1e6,-75e4],[-1e6,75e4],[-5e5,0],[-1e6,-75e4]],[[1e6,-75e4],[15e5,0],[15e5,0],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]],[[[-3e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-3e6,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[2e6,-4e6],[3e6,-6e6],[1e6,-6e6]]]}]}}]})}),h=new g.a({source:f,style:P}),k=function(){var e={};return e.Polygon=[new d.c({fill:new m.a({color:[255,255,255,.5]})}),new d.c({stroke:new p.a({color:[255,255,255,1],width:5})}),new d.c({stroke:new p.a({color:[0,153,255,1],width:3})})],e.MultiPolygon=e.Polygon,e.LineString=[new d.c({stroke:new p.a({color:[255,255,255,1],width:5})}),new d.c({stroke:new p.a({color:[0,153,255,1],width:3})})],e.MultiLineString=e.LineString,e.Point=[new d.c({image:new u.a({radius:7,fill:new m.a({color:[0,153,255,1]}),stroke:new p.a({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],e.MultiPoint=e.Point,e.GeometryCollection=e.Polygon.concat(e.Point),function(t){return e[t.getGeometry().getType()]}}(),F=new c.a({style:k}),S=new y.a({features:F.getFeatures(),style:k,insertVertexCondition:function(){return!F.getFeatures().getArray().every(function(e){return e.getGeometry().getType().match(/Polygon/)})}});new i.a({interactions:Object(w.a)().extend([F,S]),layers:[h],target:"map",view:new a.a({center:[0,1e6],zoom:2})})}},[[331,0]]]);
//# sourceMappingURL=modify-test.js.map