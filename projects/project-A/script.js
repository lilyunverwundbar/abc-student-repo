let button = document.getElementById('button');
let x = 0;
let y = 0;
let x2 = -840;
console.log(screen.width);



button.addEventListener("click",()=>{
  let topWin1 = window.open("ship/top1.html","","width=300, height=100, left=50,top=0");
  let topWin2 = window.open("ship/top2.html","","width=400, height=100, left=50, top=173" );
  let newWindow = window.open("ship/ship-bottom.html","","width=600, height=290,left=0, top=323");
  let horn = document.getElementById("horn");


//after all the ship bottom is loaded
  function move(){
    //let moving = 0;

    let anchor = newWindow.document.getElementById("anchor");
    //let horn = new sound("ship/horn.mp3");


    anchor.addEventListener("click",()=>{
      horn.play();

      //if(moving == 0){
        //moving = 1;
        let moveShip = setInterval(()=>{
          if (x < 840&&y==0){
            x+=2;
            topWin1.moveBy(2,0);
            topWin2.moveBy(2,0);
            newWindow.moveBy(2,0);
            newWindow.document.getElementById('sea').style.transform = "translate(" +(-1*x) + "px,0px";
          }else if(y<177){
            topWin1.screenLeft = "1140px";
            topWin2.screenLeft = "1040px";
            y+=2;
            topWin1.moveBy(0,2);
            topWin2.moveBy(0,2);
            newWindow.moveBy(0,2);
            newWindow.document.getElementById('sea').style.transform = "translate(-840px," +(-1*y) + "px";
          }else if(x>0&&y>0){
            x-=2;

            x2+=2;

            topWin1.moveBy(-2,0);
            topWin2.moveBy(-2,0);
            newWindow.moveBy(-2,0);
            newWindow.document.getElementById('sea').style.transform = "translate(" +x2 + "px,"+(-1*y)+"px";


          }
        },50);



        //moving = 1;

      // }else{
      //   moving = 0;
      //   clearInterval(moveShip);
      // }




    })


  }


  newWindow.addEventListener("load",move);











})
