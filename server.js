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
  
  res.end(
    "<html>" +
    "<head><title>Request Header Parser</title></head>" +
    "<body>" +
    "<h1>Request Header Parser</h1>" +
    JSON.stringify(result) + 
    "</body>" +
    "</html>"
    );
});

app.listen(process.env.PORT || 8080);