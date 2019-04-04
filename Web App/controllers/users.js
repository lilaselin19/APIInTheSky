var express = require('express');
var router = express.Router();

var Data = require('../models/data');
var Users = require('../models/users');

router.get('/users/new', function(req, res){
  console.log("Request-get /users/new");

  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  res.render('signup');
});

router.post('/users',function(req,res){
  console.log("Request-post /users");

  Users.createUser(req.body,function(user){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('index',user);
  });
});

router.get('/users/:id/edit',function(req,res){
  console.log("Request-get /users/"+req.params.id+"/edit");

  Users.getUser(req.params.id,function(user){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('index',user);
  });
});

router.put('/users/:id',function(req,res){
  console.log("Request-put /users/"+req.params.id);

  Users.updateUser(req.body,function(user){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('index',user);
  });
});

router.delete('/users/:id',function(req,res){
  console.log("Request-delete /users/"+req.params.id);

  Users.deleteUser(req.params.id,function(){
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.render('index');
  });
});

module.exports = router;
