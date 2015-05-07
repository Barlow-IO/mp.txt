//SETUP EXPRESS ERVER
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;

server.listen(port, function() {
  console.log('Server listening at port %d', port);
});

//ROUTING
app.use(express.static(__dirname + '/public'));
// app.get('/', function(req, res){
//   //req means "request" and res mean "result"
//   res.sendFile(__dirname + '/public/');
//   // console.log(req);
// });

//Chat room
var usernames = {};
var numUsers = 0;

io.on('connection', function (socket) {
  console.log('connection made');
});
