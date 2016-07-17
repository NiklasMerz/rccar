var express = require('express');
var router = express.Router();

//_____________________________________________________________
//Default Seite
router.get('/web/index', function(req, res) {
  res.render('index');
});

router.get('/web/about', function(req, res) {
  res.render('about', {title: 'About'});
});

module.exports = router;
