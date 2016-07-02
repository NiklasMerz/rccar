var usonic = require('r-pi-usonic');

var usonic_trig = 24;
var usonic_echo = 25;

exports.getDistance = function(){
  usonic.init(function (error) {
    if (error) {
      return 'ERROR';
    } else {
      var sensor = usonic.createSensor(usonic_echo, usonic_trig, 450);
      return sensor();
    }
  });
}
