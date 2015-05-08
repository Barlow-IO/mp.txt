module.exports = () => {
  "use strict";
  //CONSTANTS//
  const port = process.env.PORT || 3001;

  //SETUP EXPRESS SERVER//
  let express = require('express');
  let app = express();
  let server = require('http').createServer(app);
  let io = require('socket.io')(server);
  let SocketHandler = require('./socket-handler');

  //listen to the 'port'
  server.listen(port, function() {
    console.log('Server listening at port %d', port);
  });

  //ROUTING//
  app.use(express.static(__dirname + '/../../public'));
  // Use app.get if you're going to route to a page that can't be served statically
  // app.get('/', function(req, res){
  //   // req means "request" and res mean "result"
  //   res.send(__dirname + '/../../public');
  // });

  //EVENT HANDLING//
  io.on('connection', function (socket) {
    console.log('connection made... creating a Socket Handler');
    new SocketHandler(socket);
  });

};
