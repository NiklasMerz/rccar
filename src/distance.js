var GPIO = require('onoff').Gpio;
var usonic_trig = new GPIO(24, 'in');
var usonic_trig = new GPIO(25, 'out');

exports.getDistance = function(){
  var 	pulse_start;
  var pulse_end;
  var pulse_duration;
  var distance = 0;

  //Measuring time
  pinOff(usonic_trig);
  setTimeout(function(){
    pinOn(usonic_trig);
    setTimeout(pinOff(usonic_trig), 0.01)M
  } ,20000)

  usonic_echo.watch(function(err, value){
    if(value == 0){
      pulse_start = new Date();
    }

    if(value == 1){
      pulse_end = new Date();
    }

  });

  //Calculating distance
  if(pulse_start != null && pulse_end != null){
    pulse_duration = pulse_end - pulse_start;
    distance = pulse_duration * 17150;
    distance = round(distance, 2);
  }
  return distance;
}

function pinOn(pin){
  pin.writeSync(1);
}

function pinOff(pin){
  pin.writeSync(0);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
