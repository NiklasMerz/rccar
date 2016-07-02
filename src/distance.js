var Sonar = require('raspi-sonar').Sonar;
var sonarPin1 = new Sonar(25);

var usonic_trig = 24;
var usonic_echo = 25;

exports.getDistance = function(){
  sonarPin1.read(function(duration) {
    var distance = 343.0 * duration / 1000000 * .5;
    console.log('duration: ' + duration + ' distance: ' + distance + 'm');
  });
  return distance;
}
