var http = require("http");

function reqHandler(req,res) {
    console.log("In comes a request: " + req.url);
    //res.end("Hello, Rajesh");
    if (req.url === "/") {
        res.end("Welcome to the homepage!");
    } else if (req.url === "/about") {
        res.end("Welcome to the about page!");
    } else {
        res.end("Error! File not found.");
    }
}

var server = http.createServer(reqHandler);

server.listen(3000)
console.log("I am listning at localhost:3000");