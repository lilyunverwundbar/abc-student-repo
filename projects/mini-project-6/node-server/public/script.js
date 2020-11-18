let button = document.getElementById("button");
let input = document.getElementById("eval");

l = ["3 5 6 3","8 2 4 2", "4 10 8 2", "5 5 5 1"];
let riddle = document.getElementsByTagName("p")[0];
let idx = Math.floor(4*Math.random());
riddle.innerHTML = l[idx];


button.addEventListener("click", ()=>{
  console.log("click");
  let answer = input.value;
  console.log("answer:", answer);
  window.location.href = "/answer?word=" + answer;
})
