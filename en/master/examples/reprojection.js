(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{351:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(2),s=n(1),r=n(145),c=n(6),i=n(4),l=n(116),m=n(52),p=n(10),g=n(66),w=n(82),u=n(97),E=n(87),d=n(63);d.a.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),d.a.defs("EPSG:23032","+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs"),d.a.defs("EPSG:5479","+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=163 +x_0=7000000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),d.a.defs("EPSG:21781","+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs"),d.a.defs("EPSG:3413","+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),d.a.defs("EPSG:2163","+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs"),d.a.defs("ESRI:54009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),Object(l.a)(d.a),Object(i.g)("EPSG:27700").setExtent([0,0,7e5,13e5]),Object(i.g)("EPSG:23032").setExtent([-1206118.71,4021309.92,1295389,8051813.28]),Object(i.g)("EPSG:5479").setExtent([6825737.53,4189159.8,9633741.96,5782472.71]),Object(i.g)("EPSG:21781").setExtent([485071.54,75346.36,828515.78,299941.84]),Object(i.g)("EPSG:3413").setExtent([-4194304,-4194304,4194304,4194304]),Object(i.g)("EPSG:2163").setExtent([-8040784.5135,-2577524.921,3668901.4484,4785105.1096]),Object(i.g)("ESRI:54009").setExtent([-18e6,-9e6,18e6,9e6]);var _={};_.bng=new c.a({source:new m.a({projection:"EPSG:27700",url:"https://tileserver.maptiler.com/miniscale/{z}/{x}/{y}.png",crossOrigin:"",maxZoom:6})}),_.osm=new c.a({source:new p.b}),_.wms4326=new c.a({source:new g.a({url:"https://ahocevar.com/geoserver/wms",crossOrigin:"",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0},projection:"EPSG:4326"})}),_.wms21781=new c.a({source:new g.a({attributions:'© <a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">Pixelmap 1:1000000 / geo.admin.ch</a>',crossOrigin:"anonymous",params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},url:"https://wms.geo.admin.ch/",projection:"EPSG:21781"})});var S=new r.a;fetch("https://map1.vis.earthdata.nasa.gov/wmts-arctic/wmts.cgi?SERVICE=WMTS&request=GetCapabilities").then(function(e){return e.text()}).then(function(e){var t=S.read(e),n=Object(u.b)(t,{layer:"OSM_Land_Mask",matrixSet:"EPSG3413_250m"});n.crossOrigin="",n.projection="EPSG:3413",n.wrapX=!1,_.wmts3413=new c.a({source:new u.a(n)})}),_.grandcanyon=new c.a({source:new m.a({url:"https://tileserver.maptiler.com/grandcanyon@2x/{z}/{x}/{y}.png",crossOrigin:"",tilePixelRatio:2,maxZoom:15,attributions:'Tiles © USGS, rendered with <a href="http://www.maptiler.com/">MapTiler</a>'})});for(var f=Object(s.E)(Object(i.g)("EPSG:3857").getExtent())/256,h=new Array(22),j=0,x=h.length;j<x;++j)h[j]=f/Math.pow(2,j);_.states=new c.a({source:new g.a({url:"https://ahocevar.com/geoserver/wms",crossOrigin:"",params:{LAYERS:"topp:states"},serverType:"geoserver",tileGrid:new E.a({extent:[-13884991,2870341,-7455066,6338219],resolutions:h,tileSize:[512,256]}),projection:"EPSG:3857"})});var b=new a.a({layers:[_.osm,_.bng],target:"map",view:new o.a({projection:"EPSG:3857",center:[0,0],zoom:2})}),v=document.getElementById("base-layer"),y=document.getElementById("overlay-layer"),G=document.getElementById("view-projection"),O=document.getElementById("render-edges"),P=!1;function R(){var e=Object(i.g)(G.value),t=e.getExtent(),n=new o.a({projection:e,center:Object(s.x)(t||[0,0,0,0]),zoom:0,extent:t||void 0});b.setView(n),e==Object(i.g)("EPSG:3857")?_.bng.setExtent([-1057216,6405988,404315,8759696]):_.bng.setExtent(void 0)}G.onchange=function(){R()},R();var k=function(e){if(e instanceof c.a){var t=e.getSource();t instanceof w.a&&t.setRenderReprojectionEdges(P)}};v.onchange=function(){var e=_[v.value];e&&(e.setOpacity(1),k(e),b.getLayers().setAt(0,e))},y.onchange=function(){var e=_[y.value];e&&(e.setOpacity(.7),k(e),b.getLayers().setAt(1,e))},O.onchange=function(){P=O.checked,b.getLayers().forEach(function(e){k(e)})}}},[[351,0]]]);
//# sourceMappingURL=reprojection.js.map