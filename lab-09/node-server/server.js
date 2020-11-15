const express = require('express')//get the express code from modules to where it was installed
const app = express()
const port = 3000


console.log(__dirname);
// define routers behaviour, what to return on which request
app.use(express.static('public'));



let lilycount = 0;

app.get('/lily', (req, res) => {
  lilycount += 1;
  console.log(lilycount, "people asked for lily");
  console.log('someone requested /lily');
  //res.send('Hi Lily!')
  res.sendFile(__dirname + "/lily/index.html");
})


//start the server, listening on a specific port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
