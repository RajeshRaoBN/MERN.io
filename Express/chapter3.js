var express = require("express");
var http = require("http");

var app = express();

app.use(function (req, res, next) {
    console.log("In comes a " + req.method + " to: " + req.url);
    next();
});

app.use(function(request, response, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});

app.use(function (req, res) {
    res.end("Secret info: the password is \"swordfish\"!");
});

http.createServer(app).listen(3000);
console.log('Server listning at port 3000');