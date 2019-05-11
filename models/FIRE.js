var fs = require("fs");
var creds = require('./client_secret.json')
var GoogleSpreadsheet = require('google-spreadsheet');
var doc = new GoogleSpreadsheet('1uc9hkMcWdhPZNXCK59NZXUSA08nK1bekCYQhMXNyqT8');


class incident{
  constructor(starfire_incident_ID,incident_datetime,final_call_type, dispatch_response_seconds_qy, borough, zipcode){
    this.starfire_incident_ID = starfire_incident_ID;
    this.incident_datetime = incident_datetime;
    this.final_call_type = final_call_type;
    this.dispatch_response_seconds_qy = dispatch_response_seconds_qy;
    this.borough = borough;
    this.zipcode = zipcode;

}}
// Authenticate with the Google Spreadsheets API.

exports.rows = function(callback){
  doc.useServiceAccountAuth(creds, function (err) {

    var rows = doc.getRows(1, function (err, rows) {
   		if (callback) {
			callback(rows);
		}
    });

  });
}

exports.getbyzipcode = function(zipcode, callback){
    var incidentlist = [];
    var incident = {};

    exports.rows(function(rows){
    for(var i = 0; i <rows.length; i++){
      console.log(rows[i].zipcode.trim());
      console.log(zipcode.trim());
        if(rows[i].zipcode == zipcode){
          incident = new incident(rows[i].starfire_incident_ID, rows[i].incident_datetime, rows[i].final_call_type, rows[i].dispatch_response_seconds_qy, rows[i].borough, rows[i].zipcode);
          console.log("incident display test:" + incident);
          incidentlist.push(Object.entries(incident));
        }
    }
     if(isEmpty(incident)){
      callback(null);
    }else
		 callback(incidentlist);
});
}

exports.getbyID = function(starfire_incident_ID, callback){
  var incident = {};
  var incidentlist = [];
    exports.rows(function(rows){
    for(var i = 0; i <rows.length; i++){
      console.log(rows[i].starfire_incident_ID.trim());
      console.log(starfire_incident_ID.trim());
        if(rows[i].starfire_incident_ID == starfire_incident_ID){
          incident = new incident(rows[i].starfire_incident_ID, rows[i].incident_datetime, rows[i].final_call_type, rows[i].dispatch_response_seconds_qy, rows[i].borough, rows[i].zipcode);
          incidentlist.push(Object.entries(incident));
        }
    }
     if(isEmpty(incident)){
      console.log("incident does not exist");
      callback(null);
    }else
		 callback(incident);
});
}

exports.getbyborough = function(borough, callback){
    var incidentlist = [];
    var incident = {};

    exports.rows(function(rows){
    for(var i = 0; i <rows.length; i++){
      console.log(rows[i].borough.trim());
      console.log(borough.trim());
        if(rows[i].borough == borough){
          incident = new incident(rows[i].starfire_incident_ID, rows[i].incident_datetime, rows[i].final_call_type, rows[i].dispatch_response_seconds_qy,  rows[i].borough, rows[i].zipcode);
          console.log("incident display test:" + incident);
          incidentlist.push(Object.entries(incident));
        }
    }
     if(isEmpty(incident)){
      callback(null);
    }else
		 callback(incidentlist);
});
}

exports.getbyzipcode = function(zipcode, callback){
    var incidentlist = [];
    var incident = {};

    exports.rows(function(rows){
    for(var i = 0; i <rows.length; i++){
      console.log(rows[i].zipcode.trim());
      console.log(zipcode.trim());
        if(rows[i].zipcode == zipcode){
          incident = new incident(rows[i].starfire_incident_ID, rows[i].incident_datetime, rows[i].final_call_type, rows[i].dispatch_response_seconds_qy, rows[i].borough,  rows[i].zipcode);
          console.log("incident display test:" + incident);
          incidentlist.push(Object.entries(incident));
        }
    }
     if(isEmpty(incident)){
      callback(null);
    }else
		 callback(incidentlist);
});
}



function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}
