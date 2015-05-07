var socket = io();

socket.on('hey', function (data) {
  console.log(data.data);
});
