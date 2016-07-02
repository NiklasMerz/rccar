var GPIO = require('onoff').Gpio;
var NanoTimer = require('nanotimer');

var usonic_trig = new GPIO(24, 'out');
var usonic_echo = new GPIO(25, 'in');

exports.getDistance = function(){
  var pulse_start;
  var pulse_end;
  var pulse_duration;
  var distance = 0;

  //Measuring time
  var timer = new NanoTimer();
  pinOff(usonic_trig);
  timer.setTimeout(function(){
    pinOn(usonic_trig);
    timer.setTimeout(function(){
      pinOff(usonic_trig);
    }, [timer], '10u');
  }, [timer], '2s');


  while(usonic_echo.readSync() == 0){
    pulse_start = new Date();
  }

  while(usonic_echo.readSync() == 1){
    pulse_end = new Date();
  }

  //Calculating distance
  console.log(pulse_start);
  console.log(pulse_end);
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
