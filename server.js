var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);

require('./server/routes')(app);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {

  res.sendFile('index.html', {
    root: __dirname + '/public/'
  });

});

var port = process.env.PORT || 5000;
server.listen(port, 'localhost');
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
