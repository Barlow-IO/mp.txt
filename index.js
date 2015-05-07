//SETUP EXPRESS ERVER
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;

//listen to the 'port'
server.listen(port, function() {
  console.log('Server listening at port %d', port);
});

//ROUTING
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   //req means "request" and res mean "result"
// });

//Chat room
var usernames = {};
var numUsers = 0;

io.on('connection', function (socket) {
  socket.broadcast.emit('hey', {
    data: 'hello socket'
  });
});
