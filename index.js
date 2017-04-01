var http = require('http');
var port = 3000;
var calc = require('calculator');

var server = http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
            response.end("Hello");
            return;
        case '/favicon.ico':
          response.end();
          return;
    }
    var f = calc.func('f(x) = ' + request.url.slice(1));
    response.end(f().toString());
});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
})