var GPIO = require('onoff').Gpio;
var Engine = require('./engine');

var l = new GPIO(16, 'in');
var c = new GPIO(21, 'in');
var r = new GPIO(20, 'in');

var it;

exports.getAll = function(){
  var value = {};
  value.l = l.readSync();
  value.c = c.readSync();
  value.r = r.readSync();

  return value;
}

exports.startFollow = function(){
  it = setInterval(function(){
    var value = exports.getAll();
    Engine.forward();

    if(value.l == 1){
      Engine.right();
    }else if (value.r == 1) {
      Engine.left();
    }else if (value.c == 1) {
        //DO Nothing
    }else {
      //TODO Sound????
      Engine.stop();
    }

  },200);
}

exports.stopFollow = function(){
  clearInterval(it);
}
