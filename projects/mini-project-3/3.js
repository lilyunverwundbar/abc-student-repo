let trigger = document.getElementsByClassName("trigger");

// selecting the two new inputs
let frequencyRange = document.getElementById("frequencyInput");
let volumeRange = document.getElementById("volumeInput");

let context = new AudioContext();
let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 440;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);

let oscillatorStarted = false;

gain.gain.value = volumeInput.value/100;



let minHz = 65;
let maxHz = 1050;

function map(value, x1, y1, x2, y2){
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}
function rotateMove(box,boxAngle){
  box.style.left += "10%";
  box.style.transform = "rotate("+boxAngle+"deg)";
  boxAngle += 36;

}
console.log(map(3, 0, 10, 0, 100))
// gives us 30, it answers this question:
// if i have 3 on a range from 0 to 10, what is the equivalent value on a range from 0 to 100?
// for the frequency we ask
// if I have x on a range from 0 to 100 (the value range the input slide gives us),
// what is the equivalent on a range from 65 (minHz) to 1050 (maxHz);
let sliderValue = frequencyRange.value;
let mappedHertz = map(sliderValue, 0, 100, minHz, maxHz);
console.log("mapped hertz is", mappedHertz)
oscillator.frequency.value = mappedHertz;



oscillator.start(0);
oscillatorStarted = true;
gain.gain.value = volumeInput.value/100;



trigger.style.backgroundColor = "red";
// lastly we need to define what should happen when we use the sliders!
volumeRange.addEventListener("input", ()=>{
  gain.gain.value = volumeInput.value/100;
})


frequencyRange.addEventListener("input", ()=>{
  // sliderValue = frequencyRange.value;
  // mappedHertz = map(sliderValue, 0, 100, minHz, maxHz);
  // console.log("mapped hertz is", mappedHertz)
  // oscillator.frequency.value = mappedHertz;
  // or, shorter:
  oscillator.frequency.value = map(frequencyRange.value, 0, 100, minHz, maxHz);
  trigger.style.backgroundColor = 'rgb(' + frequencyRange.value + ',' + frequencyRange.value + ',' + frequencyRange.value + ')';
  let iter = valumeInput/10 + 2;
  if (frequencyRange>90){
  for(i = 0; i<iter; i++){
    let popbox = document.createElement("div");
    popbox.className = "boxes";
    document.body.appendChild(popbox);
    let pop = document.getElementsByClassName("boxes");
    pop.style.backgroundColor = 'rgb(' + 255*Math.random() + ',' + 255*Math.random() + ',' + 255*Math.random() + ')';
    pop.style.top = window.innerHeight - 200*Math.random();
    pop.style.left = "0%"
    let boxAngle = 0;
    var myVar = setInterval(rotateMove(pop,boxAngle),10);


  }
}
})
