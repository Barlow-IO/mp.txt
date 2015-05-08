"use strict";

//SETUP EXPRESS SERVER//
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
const port = process.env.PORT || 3001;

//listen to the 'port'
server.listen(port, function() {
  console.log('Server listening at port %d', port);
});

//ROUTING//
app.use(express.static(__dirname + '/public'));
//Use app.get if you're going to route to a page that can't be served statically
// app.get('/', function(req, res){
//   //req means "request" and res mean "result"
// });

//EVENT HANDLING//
io.on('connection', function (socket) {
  console.log('a user connected');
  //emit events
  socket.broadcast.emit('hey', {
    data: 'hello socket'
  });

  //bind to events
  socket.on('disconnect', function(){ //disconnect event
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){ // send message event
    socket.broadcast.emit('chat message', msg);
    socket.emit('chat message', msg);
  });

  socket.on('keypress',  function(event) {
    // body...
  });
});
