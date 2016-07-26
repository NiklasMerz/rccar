var GPIO = require('onoff').Gpio;

var l = new GPIO(16, 'in');
var c = new GPIO(21, 'in');
var r = new GPIO(20, 'in');

var it;

exports.getAll = function(){
  var value = {};
  var value.l = l.readSync();
  var value.c = c.readSync();
  var value.r = r.readSync();

  return value;
}

exports.startFollow = function(){
  it = setInterval(function(){
    var value = exports.getAll();
    console.log(value);
  },200);
}

exports.stopFollow = function(){
  clearInterval(it);
}
