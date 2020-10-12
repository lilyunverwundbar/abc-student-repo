let window1 = document.getElementById('window1');
let window2 = document.getElementById('window2');
let window3 = document.getElementById('window3');
let window4 = document.getElementById('window4');
let dance = document.getElementById("dance");
let count = 0;
let random_color = ["rgb(117, 14, 235)","rgb(230, 9, 237)","rgb(237, 9, 96)","rgb(9, 237, 169)","rgb(62, 237, 9)"];




window1.addEventListener("click",()=>{
  window1.style.backgroundColor="orange";
  var dancer1 = document.createElement("IMG");
  dancer1.src = "dance1.png";
  dancer1.setAttribute("width","30");
  dancer1.setAttribute("height","30");
  // dancer1.setAttribute("marginLeft","20");
  // dancer1.setAttribute("marginTop","30");

  window1.appendChild(dancer1);

  count+=1;
  console.log(count);

});

window2.addEventListener("click",()=>{
  window2.style.backgroundColor="yellow";
  var dancer2 = document.createElement("IMG");
  dancer2.src = "dancer2.png";
  dancer2.setAttribute("width","30");
  dancer2.setAttribute("height","30");
  // dancer2.setAttribute("marginLeft","20");
  // dancer2.setAttribute("marginTop","30");

  window2.appendChild(dancer2);

  count+=1;
  console.log(count);

});

window3.addEventListener("click",()=>{
  window3.style.backgroundColor="orange";
  var dancer3 = document.createElement("IMG");
  dancer3.src = "dancer3.png";
  dancer3.setAttribute("width","30");
  dancer3.setAttribute("height","30");
  // dancer3.setAttribute("marginLeft","20");
  // dancer3.setAttribute("marginTop","30");

  window3.appendChild(dancer3);

  count+=1;
  console.log(count);

});

window4.addEventListener("click",()=>{
  window4.style.backgroundColor="yellow";
  var dancer4 = document.createElement("IMG");
  dancer4.src = "dancer4.png";
  dancer4.setAttribute("width","30");
  dancer4.setAttribute("height","30");
  // dancer4.setAttribute("marginLeft","20");
  // dancer4.setAttribute("marginTop","30");

  window4.appendChild(dancer4);

  count+=1;
  console.log(count);
});






setInterval(()=>{

  if(count == 4){
    dance.play();

    setInterval(()=>{
      let index = Math.floor(5*Math.random());
      window1.style.backgroundColor = random_color[index];

    },150);


    setInterval(()=>{
      let index = Math.floor(5*Math.random());
      window2.style.backgroundColor = random_color[index];

    },150);

    setInterval(()=>{
      let index = Math.floor(5*Math.random());
      window3.style.backgroundColor = random_color[index];

    },150);

    setInterval(()=>{
      let index = Math.floor(5*Math.random());
      window4.style.backgroundColor = random_color[index];

    },150);






  }


},150);
