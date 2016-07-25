var GPIO = require('onoff').Gpio;

var l = new GPIO(16, 'in');;
var c = new GPIO(21, 'in');;
var r = new GPIO(20, 'in');;

exports.getAll = function(){
  var valueL = l.readSync();
  var valueC = c.readSync();
  var valueR = r.readSync();

  console.log(valueL);
  console.log(valueC);
  console.log(valueR);
  return 'L: ' + valueL + ' C: ' + valueC + ' R: ' + valueR;
}
