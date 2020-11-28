// let socket = io();


let img = document.createElement("img");
console.log(img);
img.src = "lattern.png";
img.style.width = "100px";
img.style.height = "100px";
img.style.left = Math.random()*(screen.width - 100) + "px";
img.style.top = Math.random()*(screen.height - 100) + "px";
document.getElementById("body").appendChild(img);

// socket.emit("message",data);
// console.log(data);
//
//
//
// let colors = ["red","orange","hotpink","cyan","yellow","green"];
//
// socket.on("incoming",(data)=>{
//   console.log(data);
//   let message = data.message;
//   let move = data.move;
//   let li = document.createElement("li");
//   li.style.position = "absolute";
//   let p = document.createElement("p");
//   let angle = 0;
//   let left = 0;
//   if (move==true){
//     setInterval(()=>{
//       console.log(angle);
//       angle += 30;
//       left += 10;
//       li.style.transform = "rotate("+angle+"deg)";
//       li.style.marginLeft = left + "px";
//       p.style.fontSize = "x-large";
//       let top = 0;
//       top += Math.random()*20;
//       li.style.marginTop = top + "px";
//
//     },100);
//
//   }else{
//     li.style.marginTop = Math.random()*300+"px";
//     li.style.marginLeft = Math.random()*500+"px";
//     let idx = Math.floor(Math.random()*6);
//     console.log(idx);
//     p.style.color = colors[idx];
//   }
//
//
//   p.innerHTML = message;
//   li.appendChild(p);
//   chatbox.appendChild(li);
// })
