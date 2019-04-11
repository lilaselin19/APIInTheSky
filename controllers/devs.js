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

  apikey = createKey();
  Devs.createDev(req.body.email,apikey,function(dev){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('results',dev);
  });
});

router.delete('/devs/:id',function(req,res){
  console.log("Request-delete /devs/"+req.params.id);

  Devs.deleteDev(req.params.id,function(){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('index');
  });
});

var createKey = function(){
  var key;
  do while(Devs.uniqueKey(key)==false){
    key = generateAPIkey();
  }
  console.log(key);
  return key;
};

var generateAPIkey = function(){
  var key = "";
  var c;
  var caps;
  var n;

  for(int i = 0; i<8; i++){
    caps = Math.random();
    c = (Math.floor(Math.random()*(91 - 65))+65)+"";
    if(caps<.5) c = c.toLowerCase();
    key+=c;
  }

  key+="-";

  for(int i = 0; i<8; i++){
    n = Math.floor(Math.random()*(10))+"";
    key+=n;
  }

  key+="-";

  for(int i = 0; i<4; i++){
    caps = Math.random();
    c = (Math.floor(Math.random()*(91 - 65))+65)+"";
    if(caps<.5) c = c.toLowerCase();
    key+=c;
  }

  key+="-";

  for(int i = 0; i<4; i++){
    n = Math.floor(Math.random()*(10))+"";
    key+=n;
  }

  return key;
};

module.exports = router;
