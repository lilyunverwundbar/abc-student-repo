let socket = io();

let chatbox = document.getElementById("chat");
let messagebox = document.getElementById("message");
let sendbutton = document.getElementById("send");


sendbutton.addEventListener("click",()=>{
  console.log("clicked!");
  let message = messagebox.value.trim();
  let move = false;
  if(message != ""){
    if(message == "Hi"|| message == "hi"|| message == "hello"|| message == "Hello"){
      message = "(*´▽｀)ノノ😺";
      move = true;
    }
    let data = {message:message, move:move};
    socket.emit("message",data);
    console.log(data);

  }

  messagebox.value ="";


})

let colors = ["red","orange","hotpink","cyan","yellow","green"];

socket.on("incoming",(data)=>{
  console.log(data);
  let message = data.message;
  let move = data.move;
  let li = document.createElement("li");
  li.style.position = "absolute";
  let p = document.createElement("p");
  let angle = 0;
  let left = 0;
  if (move==true){
    setInterval(()=>{
      console.log(angle);
      angle += 30;
      left += 10;
      li.style.transform = "rotate("+angle+"deg)";
      li.style.marginLeft = left + "px";
      p.style.fontSize = "x-large";
      let top = 0;
      top += Math.random()*20;
      li.style.marginTop = top + "px";

    },100);

  }else{
    li.style.marginTop = Math.random()*300+"px";
    li.style.marginLeft = Math.random()*500+"px";
    let idx = Math.floor(Math.random()*6);
    console.log(idx);
    p.style.color = colors[idx];
  }


  p.innerHTML = message;
  li.appendChild(p);
  chatbox.appendChild(li);
})
