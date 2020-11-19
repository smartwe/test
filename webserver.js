const http = require('http');

const hostname = '121.141.52.79';
const port = 0218;

http.createServer((req, res) => {
  const express = require('express');
  const app = express();
  const http = require('http').Server(app);
  const io = require('socket.io')(http);
  const port = 0218;
  http.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
