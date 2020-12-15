// function floatAround(obj){
//   let r = Math.random()*50;
//   obj.style.marginLeft=r+'px';
//   let y = Math.random()*300;
//   obj.style.marginTop = y+"px";
//
//   //obj.style.color = 'orange';
// }

function changeColor(obj){
  obj.style.marginTop = '100px';
  if (obj.style.color != 'orange'){
    obj.style.color = 'orange';
  }else{
    obj.style.color = 'rgb(177,122,125)';
  }
}
