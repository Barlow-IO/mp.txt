var socket = io();

socket.on('hey', function(data) {
  console.log(data.data);
});

//BIND TO EVENTS//
$('#chat-form').submit(function(e){
  e.preventDefault();
  socket.emit('chat message', $('#chat-input').val());
  $('#chat-input').val('');
  $('#chat-messages').animate({ scrollTop: $('#chat-messages')[0].scrollHeight}, 100);
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
  $('#chat-messages').append($('<li>').text(msg));
});
