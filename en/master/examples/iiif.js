(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{410:function(e,i,t){"use strict";t.r(i);var o=t(3),n=t(2),r=t(6),a=t(118),s=t(1),l=t(160),f=t(22),u={VERSION1:"version1",VERSION2:"version2",VERSION3:"version3"},g={};g[u.VERSION1]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},g[u.VERSION2]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},g[u.VERSION3]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg"],qualities:["default","bitonal"]}},g.none={none:{supports:[],formats:[],qualities:[]}};var p=new RegExp("^https?://library.stanford.edu/iiif/image-api/(1.1/)?compliance.html#level[0-2]$"),c=new RegExp("^https?://iiif.io/api/image/2/level[0-2](.json)?$"),m=new RegExp("(^https?://iiif.io/api/image/3/level[0-2](.json)?$)|(^level[0-2]$)");var h={};h[u.VERSION1]=function(e){var i=e.getComplianceLevelSupportedFeatures();return void 0===i&&(i=g[u.VERSION1].level0),{url:void 0===e.imageInfo["@id"]?void 0:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),supports:i.supports,formats:i.formats.concat([void 0===e.imageInfo.formats?[]:e.imageInfo.formats]),qualities:i.qualities.concat([void 0===e.imageInfo.qualities?[]:e.imageInfo.qualities]),resolutions:e.imageInfo.scale_factors,tileSize:void 0!==e.imageInfo.tile_width?void 0!==e.imageInfo.tile_height?[e.imageInfo.tile_width,e.imageInfo.tile_height]:[e.imageInfo.tile_width,e.imageInfo.tile_width]:null!=e.imageInfo.tile_height?[e.imageInfo.tile_height,e.imageInfo.tile_height]:void 0}},h[u.VERSION2]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=Array.isArray(e.imageInfo.profile)&&e.imageInfo.profile.length>1,o=t&&e.imageInfo.profile[1].supports?e.imageInfo.profile[1].supports:[],n=t&&e.imageInfo.profile[1].formats?e.imageInfo.profile[1].formats:[],r=t&&e.imageInfo.profile[1].qualities?e.imageInfo.profile[1].qualities:[];return{url:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map(function(e){return[e.width,e.height]}),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map(function(e){return e.width})[0],e.imageInfo.tiles.map(function(e){return void 0===e.height?e.width:e.height})[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map(function(e){return e.scaleFactors})[0],supports:i.supports.concat(o),formats:i.formats.concat(n),qualities:i.qualities.concat(r)}},h[u.VERSION3]=function(e){var i=e.getComplianceLevelSupportedFeatures();return{url:e.imageInfo.id,sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map(function(e){return[e.width,e.height]}),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map(function(e){return e.width})[0],e.imageInfo.tiles.map(function(e){return e.height})[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map(function(e){return e.scaleFactors})[0],supports:void 0===e.imageInfo.extraFeatures?i.supports:i.supports.concat(e.imageInfo.extraFeatures),formats:void 0===e.imageInfo.extraFormats?i.formats:i.formats.concat(e.imageInfo.extraFormats),qualities:void 0===e.imageInfo.extraQualities?i.qualities:i.supports.concat(e.imageInfo.extraQualities),maxWidth:void 0,maxHeight:void 0,maxArea:void 0}};var d=function(e){this.setImageInfo(e)};d.prototype.setImageInfo=function(e){this.imageInfo="string"==typeof e?JSON.parse(e):e},d.prototype.getImageApiVersion=function(){if(void 0!==this.imageInfo){var e=this.imageInfo["@context"]||"ol-no-context";"string"==typeof e&&(e=[e]);for(var i=0;i<e.length;i++)switch(e[i]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return u.VERSION1;case"http://iiif.io/api/image/2/context.json":return u.VERSION2;case"http://iiif.io/api/image/3/context.json":return u.VERSION3;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(u.VERSION1)&&this.imageInfo.identifier)return u.VERSION1}Object(f.a)(!1,61)}},d.prototype.getComplianceLevelEntryFromProfile=function(e){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===e&&(e=this.getImageApiVersion()),e){case u.VERSION1:if(p.test(this.imageInfo.profile))return this.imageInfo.profile;break;case u.VERSION3:if(m.test(this.imageInfo.profile))return this.imageInfo.profile;break;case u.VERSION2:if("string"==typeof this.imageInfo.profile&&c.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&c.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}},d.prototype.getComplianceLevelFromProfile=function(e){var i=this.getComplianceLevelEntryFromProfile(e);if(void 0!==i){var t=i.match(/level[0-2](\.json)?$/g);return Array.isArray(t)?t[0].replace(".json",""):void 0}},d.prototype.getComplianceLevelSupportedFeatures=function(){if(void 0!==this.imageInfo){var e=this.getImageApiVersion(),i=this.getComplianceLevelFromProfile(e);return void 0===i?g.none.none:g[e][i]}},d.prototype.getTileSourceOptions=function(e){var i=e||{},t=this.getImageApiVersion();if(void 0!==t){var o=void 0===t?void 0:h[t](this);if(void 0!==o)return{url:o.url,version:t,size:[this.imageInfo.width,this.imageInfo.height],sizes:o.sizes,format:o.formats.includes(i.format)?i.format:"jpg",supports:o.supports,quality:i.quality&&o.qualities.includes(i.quality)?i.quality:o.qualities.includes("native")?"native":"default",resolutions:Array.isArray(o.resolutions)?o.resolutions.sort(function(e,i){return i-e}):void 0,tileSize:o.tileSize}}};var v=d,I=t(87);function y(e){return e.toLocaleString("en",{maximumFractionDigits:10})}var z=function(e){function i(i){var t=i||{},o=t.url||"";o+=o.lastIndexOf("/")===o.length-1||""===o?"":"/";var n=t.version||u.VERSION2,r=t.sizes||[],g=t.size;Object(f.a)(null!=g&&Array.isArray(g)&&2==g.length&&!isNaN(g[0])&&g[0]>0&&!isNaN(g[1])&&g[1]>0,60);var p,c,m,h=g[0],d=g[1],v=t.tileSize,z=t.tilePixelRatio||1,B=t.format||"jpg",x=t.quality||(t.version==u.VERSION1?"native":"default"),S=t.resolutions||[],E=t.supports||[],N=t.extent||[0,-d,h,0],O=null!=r&&Array.isArray(r)&&r.length>0,R=null!=v&&(Number.isInteger(v)&&v>0||Array.isArray(v)&&v.length>0),j=null!=E&&Array.isArray(E)&&(E.includes("regionByPx")||E.includes("regionByPct"))&&(E.includes("sizeByWh")||E.includes("sizeByH")||E.includes("sizeByW")||E.includes("sizeByPct"));if(S.sort(function(e,i){return i-e}),R||j)if(null!=v&&(Number.isInteger(v)&&v>0?(p=v,c=v):Array.isArray(v)&&v.length>0&&((1==v.length||null==v[1]&&Number.isInteger(v[0]))&&(p=v[0],c=v[0]),2==v.length&&(Number.isInteger(v[0])&&Number.isInteger(v[1])?(p=v[0],c=v[1]):null==v[0]&&Number.isInteger(v[1])&&(p=v[1],c=v[1])))),void 0!==p&&void 0!==c||(p=a.b,c=a.b),0==S.length)for(var w=m=Math.max(Math.ceil(Math.log(h/p)/Math.LN2),Math.ceil(Math.log(d/c)/Math.LN2));w>=0;w--)S.push(Math.pow(2,w));else{var b=Math.max([].concat(S));m=Math.round(Math.log(b)/Math.LN2)}else if(p=h,c=d,S=[],O){r.sort(function(e,i){return e[0]-i[0]}),m=-1;for(var q=[],V=0;V<r.length;V++){var P=h/r[V][0];S.length>0&&S[S.length-1]==P?q.push(V):(S.push(P),m++)}if(q.length>0)for(var A=0;A<q.length;A++)r.splice(q[A]-A,1)}else S.push(1),r.push([h,d]),m=0;var C=new I.a({tileSize:[p,c],extent:N,origin:Object(s.C)(N),resolutions:S}),W=l.a.bind(null,z,C);e.call(this,{attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:W,tileGrid:C,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:function(e,i,t){var a,s,l=e[0];if(!(l>m)){var f=e[1],g=e[2],v=S[l];if(!(void 0===f||void 0===g||void 0===v||f<0||Math.ceil(h/v/p)<=f||g<0||Math.ceil(d/v/c)<=g)){if(j||R){var I=f*p*v,z=g*c*v,N=p*v,w=c*v,b=p,q=c;I+N>h&&(N=h-I),z+w>d&&(w=d-z),I+p*v>h&&(b=Math.floor((h-I+v-1)/v)),z+c*v>d&&(q=Math.floor((d-z+v-1)/v)),0==I&&N==h&&0==z&&w==d?a="full":!j||E.includes("regionByPx")?a=I+","+z+","+N+","+w:E.includes("regionByPct")&&(a="pct:"+y(I/h*100)+","+y(z/d*100)+","+y(N/h*100)+","+y(w/d*100)),n!=u.VERSION3||j&&!E.includes("sizeByWh")?!j||E.includes("sizeByW")?s=b+",":E.includes("sizeByH")?s=","+q:E.includes("sizeByWh")?s=b+","+q:E.includes("sizeByPct")&&(s="pct:"+y(100/v)):s=b+","+q}else if(a="full",O){var V=r[l][0],P=r[l][1];s=n==u.VERSION3?V==h&&P==d?"max":V+","+P:V==h?"full":V+","}else s=n==u.VERSION3?"max":"full";return o+a+"/"+s+"/0/"+x+"."+B}}},transition:t.transition}),this.zDirection=t.zDirection}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i}(t(82).a),B=new r.a,x=new o.a({layers:[B],target:"map"}),S=document.getElementById("iiif-notification"),E=document.getElementById("imageInfoUrl");function N(e){fetch(e).then(function(e){e.json().then(function(e){var i=new v(e).getTileSourceOptions();if(void 0!==i&&void 0!==i.version){i.zDirection=-1;var t=new z(i);B.setSource(t),x.setView(new n.a({resolutions:t.getTileGrid().getResolutions(),extent:t.getTileGrid().getExtent(),constrainOnlyCenter:!0})),x.getView().fit(t.getTileGrid().getExtent()),S.textContent=""}else S.textContent="Data seems to be no valid IIIF image information."}).catch(function(e){S.textContent="Could not read image info json. "+e})}).catch(function(){S.textContent="Could not read data from URL."})}document.getElementById("display").addEventListener("click",function(){N(E.value)}),N(E.value)}},[[410,0]]]);
//# sourceMappingURL=iiif.js.map