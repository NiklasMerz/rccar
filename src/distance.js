var usonic = require('mmm-usonic');
var sonarPin1 = new Sonar(24);

var usonic_trig = 24;
var usonic_echo = 25;

exports.getDistance = function(){
  usonic.init(function (error) {
    if (error) {
        return "error";
    } else {
        var sensor = usonic.createSensor(usonic_echo, usonic_trig, 450);
        var distance = sensor();
        console.log(distance);
        return distance;
    }
});
}
