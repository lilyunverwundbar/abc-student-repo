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
let colors = ["orange","yellow","blue"];
let glitches = ["https://cdn131.picsart.com/334559014044211.png?type=webp&to=min&r=640","https://cdn131.picsart.com/307962139370211.png?type=webp&to=min&r=640","https://cdn140.picsart.com/330084782021211.png?type=webp&to=min&r=640","https://cdn140.picsart.com/328470435000211.png?type=webp&to=min&r=640"]
let deg = [10,20];


setInterval(()=>{
  let idx = Math.floor(Math.random()*4);
  content.style.fontSize = change[idx];

  let idx1 = Math.floor(Math.random()*4)
  content.style.backgroundColor = colors[idx1];
  content.style.marginLeft = deg0*Math.random()*400+40+"px";
  content.style.marginTop = deg0*Math.random()*100+50+"px";


  let idx2 = Math.floor(Math.random()*2);
  deg0 *= -1;

  //content.style.transform = "rotate("+deg0*deg[idx2]+"deg)";
  //content.style.left = deg0*deg[idx2] + "px";



  images[imgidx].src = glitches[idx1];
  imgidx+=1;



},300);


setTimeout(()=>{
  let letterSpans = letters.map((letter)=>{return "<span>"+letter+"</span>"});
  content.innerHTML = letterSpans.join("");


  // let spanTags = content.getElementsByTagName("span");
  //
  // for(let i =0; i< spanTags.length; i+=1){
  //   spanTags[i].style.top += 100 + "px";
  //
  // }

},10000);


//content.innerHTML = spanTags.join("");
