const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

let score = 1;


// app.get('/',(req,res) => {
//   res.sendFile(__dirname + '/lily/index.html');
// })

app.get('/answer',(req,res) => {
  let query = req.query;
  let guess = query.word;
  guess = guess.replace(/ /g,"+");


  console.log(guess);
  console.log(eval("5+6"));
  if(score < 0){
    res.send("You failed!");
  }
  else if(eval(guess) == 24){
    score += 1;
    res.redirect("/right");
  }else{
    score -= 1;
    res.redirect("/wrong");
  }

  // let query = req.query;
  // let guess = req.word;
  // res.sendFile(__dirname + '/lily/index.html');

})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
