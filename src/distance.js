var usonic = require('mmm-usonic');

var usonic_trig = 24;
var usonic_echo = 25;

exports.init = function(){
  console.log('Init Ultrasonic module');
  usonic.init(function (error) {
    if (error) {
      return "error";
    } else {
      console.log('Init Ultrasonic module');
    }
  });
}

exports.getDistance = function(){
  var sensor = usonic.createSensor(usonic_echo, usonic_trig);
  var distance = sensor();
  return Math.round(distance);
}
