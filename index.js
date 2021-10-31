/* const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;
io.on('connection', (socket) => {
  socket.on('chat-message', msg => {
    io.emit('chat-message', msg);
  });
});
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
 */

require('dotenv').config();

const Server = require("./models/server");

const server = new Server();

server.listen();