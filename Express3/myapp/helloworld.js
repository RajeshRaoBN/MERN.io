console.log("Hello World of Rajeshes!");

var express = require("express");
var app = express();

app.get("/", function(req,res) {
    res.send("Welcome to the world of Rajeshes!");
});

app.listen(3000, function(){
    console.log("Express app started on port 3000");
});

var url = require("url");
var parsedURL = url.parse("http://www.example.com/profile?name=barry");
console.log(parsedURL.protocol);  // "http:"
console.log(parsedURL.host);      // "www.example.com"
console.log(parsedURL.query);     // "name=barry"