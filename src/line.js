var GPIO = require('onoff').Gpio;
var Engine = require('./engine');

var l = new GPIO(16, 'in');
var c = new GPIO(21, 'in');
var r = new GPIO(20, 'in');

var it;
var lineValue = 0;

exports.switchLineValue = function(){
    if(lineValue == 0){
      lineValue = 1;
    }else{
      lineValue = 0;
    }
    return lineValue;
}

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


    //TODO invert switch
    if(value.l == lineValue){
      Engine.left();
    }else if (value.r == lineValue) {
      Engine.right();
    }else if (value.c == lineValue) {
        //DO Nothing
    }else {
      clearInterval(it);
      Engine.stop();
    }

  //TODO PWM
  },10);
}

exports.stopFollow = function(){
  clearInterval(it);
}
