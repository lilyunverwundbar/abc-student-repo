let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
const port = 3000;

let latterns = [];
//const port = process.env.PORT;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);

//when one socket connects, the server send it all the latterns
  socket.emit("hi",latterns);

  // socket.on("disconnect",()=> {
  //   console.log("user disconnected", socket.id);
  // });

//receive from one socket and broadcast to all the sockets
  socket.on("message",(data)=>{
    latterns.push(data);
    console.log(data);
    socket.broadcast.emit('other',data);
  });


//if the server receives info that one lattern's brightness is updated
  socket.on("changeLight",(data)=>{
    latterns.forEach(d=>{
      if (d.left == data.left && d.top == data.top){
        d.lightsource = data.lightsource;
        d.brightness = data.brightness;
      }

      console.log("the updated lattern in the lattern list",d);
    })


    socket.broadcast.emit("other",data);

  });


});

http.listen(port, () => {
  console.log('listening on *:',port);
});
