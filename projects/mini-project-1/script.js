let range = document.getElementById('myRange');

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let imglist = [b1,b2,b3,b4,b5,b6,b7];


let randomlist = [];
for (i = 0; i<7; i++){
  randomlist.push(0.7+0.3*Math.random());
}
function inputHappen(){
  for (i=0; i<6; i++){
    left = randomlist[i];
    imglist[i].style.marginLeft = left*range.value + 'px';
    //imglist[i].style.marginTop = left*range.value*0.1 + 'px';
  }

  let randomlist2 =[];
  let imglist2 = [];
  for (j = 0; j< Math.floor(range.value*0.09); j++){
    var img = document.createElement('img');
    let n = floor(Math.random()*2);
    randomlist2.push(0.7+0.3*Math.random());
    if(n == "0"){
      img.src = 'b1.png';
      img.style.width = '10%';
      img.style.height = '10%';
      document.getElementById('butterfly').appendChild(img);
    }else{
      img.src = 'b2.png';
      img.style.width = '10%';
      img.style.height = '10%';
      document.getElementById('butterfly').appendChild(img);




    }

    imglist2.push(img);
  }



  for (j=0; j < Math.floor(range.value*0.09);j++){
    left = randomlist2[j];
    document.body.appendChild(imglist2[j]);
    imglist2[j].style.marginLeft = left*range.value +'px';


  }






}

range.addEventListener('input',inputHappen);
