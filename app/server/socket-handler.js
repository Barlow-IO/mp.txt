module.exports = (socket) => {
  console.log('a user connected');
  //emit events
  socket.broadcast.emit('hey', {
    data: 'hello socket'
  });

  //bind to events
  socket.on('disconnect', () => { //disconnect event
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => { // send message event
    socket.broadcast.emit('chat message', msg);
    socket.emit('chat message', msg);
  });

  socket.on('keypress',  (event) => {
    // body...
  });
};
