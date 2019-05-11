var fs = require("fs");
var creds = require('./key_generate.json')
var GoogleSpreadsheet = require('google-spreadsheet');
var doc = new GoogleSpreadsheet('1Y-qUU08fYRkGCMOK3TE6Jo5kQBOazXZZl4CfwW8QMfs');
var hat = require('hat');

class user{
  constructor(email,password, key){
    this.email = email;
    this.key = key;
    this.password = password;

}}

exports.addRow = function(index,newrow,callback){
  doc.useServiceAccountAuth(creds, function (err) {
    doc.addRow(index,newrow, function (err, rows) {
    });
		if (callback) {
			callback();
		}
  });
}


exports.generateKey = function(user,callback){
    user.key = hat();


    exports.addRow(1,user,function(){


    callback(user);
    });
}


exports.checkKey = function(user, callback){
  var p = {};
    exports.rows(function(rows){
    for(var i = 0; i <rows.length; i++){
        if(rows[i].key == user.key && rows[i].mail == user.mail && rows[i].password == user.password){
          r = new user(user.mail,user.key,user.password);

        }
    }
     if(isEmpty(p)){
      console.log("empty key");
      callback(false);
    }else
		 callback(true);
});
}



exports.updateUser = function(user,callback){
      var newuser_data = Object.values(user);
      console.log(user.password);


      if(newuser_data.key == null){ //need test to see if they exist
        exports.addRow(1,user,function(){
          		 if (callback) {
          			callback();
          		}
                  //return;
          });
      }

      else{
          exports.rows(function(rows){
              for(var i = 0; i <rows.length; i++){ //check to see if this needs to be -1

                  if(rows[i].key.trim() == newuser_data[1].trim() && rows[i].password.trim() == newuser_data[2].trim()){
					                   console.log(rows[i]);

            rows[i].key = user.key;
            rows[i].password = user.password;
            rows[i].email = user.email;

					            rows[i].save();
				 if (callback) {
					callback();
				}

          }
          }
      });
    }=
}
exports.login = function(ur,callback){
exports.rows(function(rows){
  var user = {};

  for(var i = 0; i <rows.length; i++){
      if(rows[i].email.trim() == ur.email.trim() && rows[i].password == ur.password){
        user.email = ur.email;
        user.password = ur.password;
        user.key = ur.key;
      //  return(user);
      }
  }

  if(isEmpty(user)){
      callback(false);
  }else
    callback(true);
  });
}
