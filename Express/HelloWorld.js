console.log('Hello Golly ol Boy');

var url = require("url");
var parsedURL = url.parse("http://www.example.com/profile?name=barry");

console.log(parsedURL.protocol);  // "http:"
console.log(parsedURL.host);      // "www.example.com"
console.log(parsedURL.query);     // "name=barry"

var Mustache = require("mustache");

var result = Mustache.render("Hi, {{first}} {{last}}!", {
    first: "Nicolas",
    last: "Cage"
});
console.log(result);

var randomInt = require("./randomInteger");
console.log(randomInt());  // 12
console.log(randomInt());  // 77
console.log(randomInt());  // 8