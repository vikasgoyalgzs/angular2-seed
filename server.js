var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
  console.log("New connection");
  var i = 0;
  conn.on("text", function (str) {
    setInterval(function () {
      conn.sendText(" " + i);
      i++;
    }, 100);
  });
  conn.on("close", function (code, reason) {
    console.log("Connection closed")
  })
}).listen(8081);
