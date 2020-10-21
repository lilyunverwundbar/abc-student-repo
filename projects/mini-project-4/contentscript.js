let content = document.getElementsByTagName('BODY')[0];
let text = content.innerHTML;

let images = document.getElementsByTagName("IMG");
console.log(images);

let newDiv = document.createElement("div");
let newContent = document.createTextNode("Can you catch me?");
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

//console.log(content);
//console.log(text); //worked!!

let letters = text.split("");


let deg0 = -1;
let imgidx = 0;

let change = ["130%","200%","50%","20%"];
let deg = [15,30];


setInterval(()=>{
  let idx = Math.floor(Math.random()*4);
  content.style.fontSize = change[idx];
  content.style.color = "orange";

  let idx2 = Math.floor(Math.random()*2);
  deg0 *= -1;

  content.style.transform = "rotate("+deg0*deg[idx2]+"deg)";

  images[imgidx].src = "../mini-project-4/glitch.png";
  imgidx+=1;



},300);

// let letterSpans = letters.map((letter)=>{return "<span>"+letter+"</span>"});
// content.innerHTML = letterSpans.join("");
//
//
// let spanTags = content.getElementsByTagName("span");
//
// for(let i =0; i< spanTags.length; i+=1){
//   spanTags[i].style.top += 100 + "px";
//
// }

//content.innerHTML = spanTags.join("");
