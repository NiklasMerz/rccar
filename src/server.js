var BlynkLib = require('blynk-library');
var Engine = require('./engine.js');
var Distance = require('./distance');

//usonic
Distance.init();

//############################BLYNK#####################################

//In Module an start express server?
var blynk = new BlynkLib.Blynk(process.env.APIKEY_BLYNK);
var v0 = new blynk.VirtualPin(0);
var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);
var v4 = new blynk.VirtualPin(4);
var v5 = new blynk.VirtualPin(5);
var v6 = new blynk.WidgetTerminal(6);
var v7 = new blynk.VirtualPin(7);
var v8 = new blynk.VirtualPin(8);
var v9 = new blynk.VirtualPin(9);

var autostop = true;

//Joystick
v0.on('write', function(param) {
  var value = parseInt(param);

  if(value > 128){
    Engine.right();
  }

  if(value < 128){
    Engine.left();
  }

  if(value == 128){
    Engine.stop();
  }
});

//Joystick
v1.on('write', function(param) {
  var value = parseInt(param);

  if(value > 128){
    Engine.forward(autostop);
  }

  if(value < 128){
    Engine.backward();
  }

  if(value == 128){
    Engine.stop();
  }
});

//Forwards
v2.on('write', function(param) {
  console.log(param);
  Engine.forward();
});

//Backwards
v3.on('write', function(param) {
  Engine.backward();
});

//Left
v4.on('write', function(param) {
  Engine.left();
});

//Right
v5.on('write', function(param) {
  Engine.right();
});

//Terminal
v6.on('write', function(data) {
  v6.write('You wrote:' + data + '\n');
});

//Autostop switch
v7.on('write', function(param) {
  if(param == 1){
    autostop = true;
  }else{
    autostop = false;
  }

  v6.write('Autostop: ' + param);
});

//Stop
v8.on('write', function(param) {
  Engine.stop();
});

//Distance
v9.on('read', function() {
  v9.write(Distance.getDistance());
});

//########################################WEB#################################

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var config = require('./config/server.js');
var hbs = require('./scriptlibs/hbs.js')

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger(config.logger));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));
//---------------------------------------

var flash    = require('connect-flash');
var morgan       = require('morgan');
var session      = require('express-session');

// set up express application
app.use(morgan(config.logger)); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

//Routes-------------------------------------------
app.get('/', function(req, res) {
  res.redirect('/web/index');
});

var index = require('./routes/index');
app.use('/', index);

var web = require('./routes/web');
app.use('/web', web);

var api = require('./routes/api');
app.use('/api', api);

//Error Handling-----------------------------------------------
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// will print stacktrace
if (app.get('env') === config.environment) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//############################################################################
process.on('exit', (code) => {
  Engine.freeRessources();
});

process.on('uncaughtException', (err) => {
  Engine.freeRessources();
});

module.exports = app;
