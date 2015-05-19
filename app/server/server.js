module.exports = () => {
  "use strict";
  //CONSTANTS//
  const port = process.env.PORT || 3001;

  //SETUP EXPRESS SERVER//
  var express = require('express');
  var app = express();
  var server = require('http').createServer(app);
  var io = require('socket.io')(server);
  var SocketHandler = require('./socket-handler');
  var db = require('./db');

  //listen to the port
  server.listen(port, () => {
    console.log('Server listening at port %d', port);
  });

  //ROUTING//
  app.use(express.static(__dirname + '/../../public'));
  app.get('/api/*', function(request, result){
    var id = request.url.split('/')[2];
    console.log(id);
    result.send(db('worlds').chain().where({id: id}).value());
    console.log(request.url.split('/'));
  });

  //EVENT HANDLING//
  io.on('connection', (socket) => {
    console.log('connection made... creating a Socket Handler');
    new SocketHandler(socket);
  });
};
