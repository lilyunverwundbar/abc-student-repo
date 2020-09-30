let brewCof = document.getElementById("brewCof");
let grapefruit = document.getElementById("grapefruit");
let bubble = document.getElementById("bubble");


console.log(brewCof);
console.log(screen.width);
console.log(screen.height);

function brewCoffee(){
  let brewBottle = window.open("icebrew/icebrew.html","","width = 380, height = 530, left = "+400+", top = "+200+"");

};

function Grapefruit(){
  window.open("grapefruit/grapefruit.html","","width = 320, height = 540, left = "+430+", top = "+200+"");
};

function Bubbletea(){
  window.open("bubbletea/bubbletea.html","","width = 320, height = 530, left = "+430+", top = "+200+"");
};




brewCof.addEventListener("click",brewCoffee);
grapefruit.addEventListener("click",Grapefruit);
bubble.addEventListener("click",Bubbletea);
