let window1 = document.getElementById('window1');
let window2 = document.getElementById('window2');
let window3 = document.getElementById('window3');
let window4 = document.getElementById('window4');
let window5 = document.getElementById('window5');
let window6 = document.getElementById('window6');
var count = 0;
let random_color = ["rgb(117, 14, 235)","rgb(230, 9, 237)","rgb(237, 9, 96)","rgb(9, 237, 169)","rgb(62, 237, 9)"];

window1.addEventListener("click",()=>{
  window1.style.backgroundColor="orange";
  count += 1;
  console.log(count);
});

window2.addEventListener("click",()=>{
  window2.style.backgroundColor="orange";
  count+=1;
  console.log(count);
});

window3.addEventListener("click",()=>{
  window3.style.backgroundColor="yellow";
  count+=1;
  console.log(count);
});

window4.addEventListener("click",()=>{
  window4.style.backgroundColor="orange";
  count+=1;
  console.log(count);
});

window5.addEventListener("click",()=>{
  window5.style.backgroundColor="orange";
  count+=1;
  console.log(count);
});

window6.addEventListener("click",()=>{
  window6.style.backgroundColor="yellow"
  count+=1;
  console.log(count);
});




console.log(count);
setInterval(()=>{

  if(count == 6){
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

    setInterval(()=>{
      let index = Math.floor(5*Math.random());
      window5.style.backgroundColor = random_color[index];

    },150);

    setInterval(()=>{
      let index = Math.floor(5*Math.random());
      window6.style.backgroundColor = random_color[index];

    },150);





  }


},150);
