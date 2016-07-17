var hbs = require('hbs');
var moment = require('moment');

hbs.registerHelper('index_1', function(index) {
  //var index = index.toNumber();
  return index+1;
});

hbs.registerHelper('ifCond', function (v1, operator, v2, options) {

  switch (operator) {
    case '==':
    return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
    return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '<':
    return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
    return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '&&':
    return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
    return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
    return options.inverse(this);
  }
});

hbs.registerHelper('dateFromNow', function (date) {

  return moment(date).fromNow();
});

hbs.registerHelper('mod', function (number) {

  number = number % 10;
  return number;
});

module.exports = hbs;
