var GPIO = require('onoff').Gpio;
var motor1_a = new GPIO(17, 'out');
var motor1_b = new GPIO(18, 'out');
var motor2_a = new GPIO(22, 'out');
var motor2_b = new GPIO(23, 'out');

//TODO PWM

exports.forward = function(){
  motor1_a.writeSync(1);
}

exports.backward = function(){
  motor1_b.writeSync(1);
}

exports.left = function(){
  motor2_a.writeSync(1);
}

exports.right = function(){
  motor2_b.writeSync(1);
}

exports.freeRessources = function(){
  motor1_a.unexport();
  motor1_b.unexport();
  motor2_a.unexport();
  motor2_b.unexport();
}

exports.stop = function(){
  motor1_a.writeSync(0);
  motor1_b.writeSync(0);
  motor2_a.writeSync(0);
  motor2_b.writeSync(0);
}
