//socket controller function
const socketController = (socket) => {
    
 //send-message
 socket.on("chat-message", (payload, callback) => {
    const id = socket.id;
    callback(id)
    //broadcast
     socket.broadcast.emit("chat-message", payload);//para enviar a todos los clientes excepto el que lo envia
     socket.emit("chat-message", payload);//para ver el mensaje en la misma ventana
  });   
  };

module.exports = socketController;