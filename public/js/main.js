var socket = io();

socket.on('hey', function(data) {
  console.log(data.data);
});

$('form').submit(function(e){
  e.preventDefault();
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
});

$(window).keypress(function(e) {
  event = {
    type: e.type,
    timeStamp: e.timeStamp,
    target: e.target,
    shiftKey: e.shiftKey,
    metaKey: e.metaKey,
    ctrlKey: e.ctrlKey,
    altKey: e.altKey
  };
  // socket.emit('keypress', event);
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
