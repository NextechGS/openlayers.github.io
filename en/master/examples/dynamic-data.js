var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuest({layer: 'sat'})
    })
  ],
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});

var imageStyle = new ol.style.Circle({
  radius: 5,
  fill: new ol.style.Fill({color: 'yellow'}),
  stroke: new ol.style.Stroke({color: 'red', width: 1})
});

var n = 200;
var omegaTheta = 30000; // Rotation period in ms
var R = 7e6;
var r = 2e6;
var p = 2e6;
map.on('postcompose', function(event) {
  var render = event.render;
  var frameState = event.frameState;
  var theta = 2 * Math.PI * frameState.time / omegaTheta;
  var coordinates = [];
  var i;
  for (i = 0; i < n; ++i) {
    var t = theta + 2 * Math.PI * i / n;
    var x = (R + r) * Math.cos(t) + p * Math.cos((R + r) * t / r);
    var y = (R + r) * Math.sin(t) + p * Math.sin((R + r) * t / r);
    coordinates.push([x, y]);
  }
  render.setImageStyle(imageStyle);
  render.drawMultiPointGeometry(new ol.geom.MultiPoint(coordinates), null);
  map.requestRenderFrame();
});
map.requestRenderFrame();
