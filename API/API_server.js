var express = require('express');
var fs = require('fs');
var favicon = require('serve-favicon');
var app = express();
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded());

//MVC connection
app.use(require('./controllers/user'));

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/images/logo.png'));

var port = process.env.PORT || 3000; //||8000
app.listen(port, function(){
  console.log('Easy server listening for requests on port '+ port+'!');
});

app.get('/', function(request, response){
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('index');
});

app.get('/index', function(request, response){
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render('index');
});
