var express = require('express');
var router = express.Router();

var Data = require('../models/data');
var Devs = require('../models/devs');

router.get('/devs/new', function(req, res){
  console.log("Request-get /devs/new");

  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  res.render('signup');
});

router.post('/devs',function(req,res){
  console.log("Request-post /devs");

  apikey = generateAPIkey(req.body.email);
  Devs.createDev(req.body.email,apikey,function(dev){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('results',dev);
  });
});

var generateAPIkey = function(email){
  var key = 0;

  ////generate actual key

  return key;
};

module.exports = router;
