var num;


function Function(){
  num = document.getElementById("number").value;
  num = parseInt(num);

  for (i = 0; i <num;i++){
    var myImg = new Image(30,30);
    myImg.src = "smiling.png";
    var nomouth = new Image(30,30);
    nomouth.src = "no_mouth.png";
    if (i!=parseInt(3*num/4)){document.body.appendChild(myImg);}
    else{document.body.appendChild(nomouth);}
  }
}
