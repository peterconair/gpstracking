var http  = require('http');

var server = http.createServer(function (req, res) {
 
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello NodeJS');

});

server.listen('172.0.0.1', 80);
console.log('Server listening on : '+'172.0.0.1'+':'+ 80);
