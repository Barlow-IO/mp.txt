var socket = io();

socket.on('hey', function (data) {
  console.log(data.data);
});

$('form').submit(function(e){
  e.preventDefault();
  console.log('sumbitted the form');
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
