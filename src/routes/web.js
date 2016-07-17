var express = require('express');
var router = express.Router();
var config = require('../config/server.js');
var Model = require('../models/files');
var helper = require('../scriptlibs/helperFunctions.js')
var fs = require('fs');

//_____________________________________________________________
//Default Seite
router.get('/week', function(req, res) {

    var date = helper.getCurrentDate();

    //TODO Sort
    Model.find({'fdTimeNumber': 0}).slaveOk().read("nearest").sort({fdDate: 'descending'}).limit(7).exec(function(err, docs) {
      if (err) {
        return res.send(err); //TODO Error Handling
      }

      var total = 0;
      for(var i = 0; i < docs.length; i++){
        total = total + docs[i].fdValueTotal;
      }

      res.render('week', {data: docs, total: total});
    });
});

module.exports = router;
