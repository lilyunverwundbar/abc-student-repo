let strawWin = window.open("straw.html","","width = 10, height = 120, left = "+530+", top="+30+"");

let brew = document.getElementById("brew");

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
    brew.style.marginTop = x + "px";
    strawWin.height = x + "px";

  },t2);
}


}

// function drinkManySips(){
//    for(let i = 0; i < 10; i++){
//      drinking();
//    }
//  }


button.addEventListener("click",drinking);
