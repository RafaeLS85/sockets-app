const socket = io();

const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input");
const online = document.querySelector("#online");
const offline = document.querySelector("#offline");

//listen for the 'connect' event
socket.on("connect", function () {
    console.log("Connected to server");
    offline.style.display = "none";
    online.style.display = "";
  });
  
  //listen for the 'disconnect' event
  socket.on("disconnect", function () {
    console.log("Disconnected from server");
      online.style.display = "none";
      offline.style.display = "";
  });

//click event
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {    

    const message = input.value;

    const payload = {
      id: socket.id,
      message,
      date: new Date().toLocaleString(),
    };

    //console.log("payload", payload);

    //send message to server
    socket.emit("chat-message", payload, (id) => {
      console.log("Message delivered to server", id);
    });
    input.value = "";
  }
});

socket.on("chat-message", function (msg) {
  //console.log("recibimos mensaje del server", msg);
  const item = document.createElement("li");
  item.textContent = msg.message;

  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
