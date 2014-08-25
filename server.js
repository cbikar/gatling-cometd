var WebSocket = require('faye-websocket'),
    http      = require('http');

var server = http.createServer();

server.on('upgrade', function(request, socket, body) {
  if (WebSocket.isWebSocket(request)) {
    var ws = new WebSocket(request, socket, body);

    ws.on('message', function(event) {
      console.log(event.data)
      var response = JSON.stringify({response:JSON.parse(event.data).request});
      console.log(response)
      ws.send(response);
    });

    ws.on('close', function(event) {
      console.log('close', event.code, event.reason);
      ws = null;
    });
  }
});

server.listen(8000);

console.log("Server listening on port %d", server.address().port);

