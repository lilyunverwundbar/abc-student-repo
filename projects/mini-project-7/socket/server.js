let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
const port = process.env.PORT;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);

  socket.on("disconnect",()=> {
    console.log("user disconnected", socket.id);
  });

//receive from one socket and broadcast to all the sockets
  socket.on("message",(data)=>{
    console.log(data);
    io.emit("incoming",data);
  });
});

http.listen(port, () => {
  console.log('listening on *:',port);
});
