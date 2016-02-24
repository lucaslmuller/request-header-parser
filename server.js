var http = require('http');
var express = require("express");
var app = new express();

app.get("/", function(req,res){
  var os = req.headers["user-agent"].split("(")[1].split(")")[0];
  
  var result = {
    "ipaddress" : req.headers["x-forwarded-for"],
    "language": req.acceptedLanguages[0],
    "software":os
  };
  
  res.send(JSON.stringify(result));
  res.end();
});

app.listen(8080);