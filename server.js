const express = require('express');
const app = express();
const port = 4000
 
app.get("/", (req, res) => {
 res.send("Hello World")
})

app.listen(port, () => {
  console.log(`app is listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/lookupdb.js')
    console.log(req.body + "lookup")
    console.log(__dirname)
})

app.post('/lookupdb', (req, res) => {
    console.log(req.body)
    res.send('POST request to lookupdb')
})


//READ UP ABOUT POST AND HOW TO POST FROM A FORM ELEMENT
//READ UP/THINK ABOUT A SERVER'S ROLE IN A POST METHOD