let socket = io();
let body = document.getElementsByTagName("body")[0];
let c_lanterns = []
socket.on("hi",function(latterns){
  console.log(latterns);
  for(let i = 0 ; i < latterns.length; i++){
    let con = document.createElement("div");
    con.style.width = "200px";
    con.style.height = "200px";
    //con.style.backgroundColor = "white";

    let d = latterns[i];


    let a = d.left;
    let b = d.top;
    con.style.left = a;
    con.style.top = b;
    con.style.position = "absolute";



    let newlattern = document.createElement("img");
    newlattern.src = "lattern.png";
    newlattern.style.width = "200px";
    newlattern.style.height = "200px";
    newlattern.style.left = "0px";
    newlattern.style.top = "0px";
    newlattern.style.position = "absolute";

    con.appendChild(newlattern);
    body.appendChild(con);



  }
});



let button = document.getElementById("button");
let container = document.createElement("div");
container.style.width = "200px";
container.style.height = "200px";

let img = document.createElement("img");
let p = document.createElement("p");
p.innerHTML = "My lattern";
p.style.left = "50px";
p.style.color = "white";
p.style.position = "absolute";

let data;
let left = Math.random()*(screen.width-200);
let t = Math.random()*(screen.height-400);
let clicked = 0;


button.addEventListener("click",()=>{
  clicked += 1;


  img.src = "lattern.png";
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.left = "0px";
  img.style.top = "0px";
  img.style.position = "absolute";
  container.style.left = left + "px";
  container.style.top = t + "px";
  //container.style.backgroundColor = "white";
  container.style.position = "absolute";


  data = {left:container.style.left, top: container.style.top, lightsource:undefined, brightness:undefined};
  console.log(data);
  if(clicked == 1){
    console.log("This is my lattern");

    container.appendChild(p);

    container.appendChild(img);
    socket.emit("message",data);

    body.appendChild(container);
  };

})


let idx = Math.floor(Math.random()*3);
let img_click = 0;
let ll = ["light.png","light2.png","light4.png"];
let light = document.createElement("img");
light.src = ll[idx];
light.style.width = "100px";
light.style.height = "100px";
light.style.left = "50px";
light.style.top = "3.5px";
light.style.position = "absolute";
light.style.opacity = 0;


img.addEventListener("click",()=>{


  img_click += 1;
  light.style.opacity = 1 * (img_click/10);

  if(light.style.opacity == 1.1){
    light.style.opacity = 0;
  }else if(light.style.opacity > 1.1){
    light.style.opacity %= 1;
  }

  console.log("click lattern", img_click);

  data.lightsource = light.src;
  data.brightness = light.style.opacity;
  console.log(data);



  socket.emit("changeLight",data);


})

container.appendChild(light);







socket.on("other",function(data){

  let a = data.left;
  let b = data.top;

  let con = document.createElement("div");
  con.style.width = "200px";
  con.style.height = "200px";
  con.style.left = a;
  con.style.top = b;
  con.style.position = "absolute";
  //con.style.backgroundColor = "white";

  let newlattern = document.createElement("img");
  newlattern.src = "lattern.png";
  newlattern.style.width = "200px";
  newlattern.style.height = "200px";
  newlattern.style.left = "0px";
  newlattern.style.top = "0px";
  newlattern.style.position = "absolute";


//注意不能叠加light的图片因为这样总的brightness不对
  let light = document.createElement("img");
  if(data.lightsource){

    light.src = data.lightsource;

    light.style.width = "100px";
    light.style.height = "100px";
    light.style.left = "50px";
    light.style.top = "3.5px";
    light.style.position = "absolute";
    light.style.opacity = data.brightness;
    con.appendChild(light);

  }

  con.appendChild(newlattern);
  body.appendChild(con);


})
