var GPIO = require('onoff').Gpio;
var motor1_a = new GPIO(17, 'out');
var motor1_b = new GPIO(18, 'out');
var motor2_a = new GPIO(22, 'out');
var motor2_b = new GPIO(23, 'out');

exports.forward = function(){
  motor1_a.writeSync(1);
}

exports.backward = function(){
  console.log('Move Backwards');
}

exports.left = function(){
  console.log('Move left');
}

exports.right = function(){
  console.log('Move right');
}
