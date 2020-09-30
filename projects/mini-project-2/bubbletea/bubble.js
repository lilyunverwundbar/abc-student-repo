let strawWin = window.open("../icebrew/straw.html","","width = 10, height = 120, left = "+530+", top="+30+"");

let bubbletea = document.getElementById("bubbletea");

let button = document.getElementById("button");


var x = -40;
var height = 130;
var val = 40;
function drinking(){
  // let t = 5000;
  // setTimeout(function(){
  //   brew.style.marginTop="40px";
  // },t);
  x += val;
  height+=val;
  // brew.style.marginTop = x + "px";
  // strawWin.height = x + "px";
  let t2 = 2000;
  if (x < 560){
  setTimeout(function(){
    bubbletea.style.marginTop = x + "px";
    strawWin.height = x + "px";

  },t2);
}


}



button.addEventListener("click",drinking);
