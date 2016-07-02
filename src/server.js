var BlynkLib = require('blynk-library');
var Engine = require('./engine.js');
var Distance = require('./distance');

var blynk = new BlynkLib.Blynk(process.env.APIKEY_BLYNK);
var v0 = new blynk.VirtualPin(0);
var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);
var v4 = new blynk.VirtualPin(4);
var v5 = new blynk.VirtualPin(5);
var v6 = new blynk.WidgetTerminal(6);
var v7 = new blynk.VirtualPin(7);
var v8 = new blynk.VirtualPin(8);
var v9 = new blynk.VirtualPin(9);

//Joystick
v0.on('write', function(param) {
  var value = parseInt(param);

  if(value > 128){
    Engine.right();
  }

  if(value < 128){
    Engine.left();
  }

  if(value == 128){
    Engine.stop();
  }
});

//Joystick
v1.on('write', function(param) {
  var value = parseInt(param);

  if(value > 128){
    Engine.forward();
  }

  if(value < 128){
    Engine.backward();
  }

  if(value == 128){
    Engine.stop();
  }
});

//Forwards
v2.on('write', function(param) {
  console.log(param);
  Engine.forward();
});

//Backwards
v3.on('write', function(param) {
  Engine.backward();
});

//Left
v4.on('write', function(param) {
  Engine.left();
});

//Right
v5.on('write', function(param) {
  Engine.right();
});

//Terminal
v6.on('write', function(data) {
  v6.write('You wrote:' + data + '\n');
  blynk.notify('HAHA! ' + data);
});

//Selftest
v7.on('write', function(param) {
  console.log('V7:');
});

//Stop
v8.on('write', function(param) {
  Engine.stop();
});

//Distance
v9.on('read', function() {
  v9.write(Distance.getDistance());
});

process.on('SIGINT', function () {
  engine.freeRessources();
});
