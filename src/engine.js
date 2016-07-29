var GPIO = require('onoff').Gpio;
var rpio = require('rpio');
var Distance = require('./distance');
var motor1_a = new GPIO(17, 'out');
//var motor1_b = new GPIO(18, 'out');
var motor2_a = new GPIO(22, 'out');
var motor2_b = new GPIO(23, 'out');

//TODO PWM
exports.forward = function(autostop){

  if(autostop){
    autostopListener();
  }

  motor1_a.writeSync(1);
}

exports.backward = function(){
  //motor1_b.writeSync(1);

  var pin = 12;           /* P12/GPIO18 */
  var range = 4096;       /* LEDs can quickly hit max brightness, so only use */
  var max = 2048;          /*   the bottom 8th of a larger scale */
  var clockdiv = 8;       /* Clock divider (PWM refresh rate), 8 == 2.4MHz */

  /*
   * Enable PWM on the chosen pin and set the clock and range.
   */
  rpio.open(pin, rpio.PWM);
  rpio.pwmSetClockDivider(clockdiv);
  rpio.pwmSetRange(pin, range);
  rpio.pwmSetData(12, 512);
}

exports.left = function(){
  motor2_a.writeSync(1);
}

exports.right = function(){
  motor2_b.writeSync(1);
}

exports.freeRessources = function(){
  motor1_a.unexport();
  //motor1_b.unexport();
  motor2_a.unexport();
  motor2_b.unexport();
}

exports.stop = function(){
  motor1_a.writeSync(0);
  //motor1_b.writeSync(0);
  motor2_a.writeSync(0);
  motor2_b.writeSync(0);
}


function autostopListener(){
  var it = setInterval(function(){
    var distance = parseInt(Distance.getDistance());
    if(distance < 20){
      exports.stop();
      clearInterval(it);
    }
  },200);
}
