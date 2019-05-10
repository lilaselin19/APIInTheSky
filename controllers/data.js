var express = require('express');
var router = express.Router();

/*var Data = require('../models/data');
var Devs = require('../models/devs');

router.get('/data/fire', function(req, res){
  console.log("Request-get /data/fire");

  Devs.getDev(req.params.APIkey,function(){
    Data.getData(req.params.search,function(datum){
      res.status(200);
      res.setHeader('Content-Type', 'text/html');
      res.send(JSON.stringify(datum));
    });
  });
});

router.get('/data/ems', function(req, res){
  console.log("Request-get /data/ems");

  Devs.getDev(req.query.APIkey,function(){
    Data.getData(req.query.search,function(datum){
      res.status(200);
      res.setHeader('Content-Type', 'text/html');
      res.send(JSON.stringify(datum));
    });
  });
});
*/
module.exports = router;
