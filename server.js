var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var env = require('node-env-file');

require('./server/routes')(app);

// Load any undefined ENV variables form a specified file.
env(__dirname + '/.env');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname + '/public/'
  });
});

var port = process.env.PORT || 5000;
// server.listen(port, 'localhost');
server.listen(port);
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
