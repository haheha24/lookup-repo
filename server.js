console.log('this is my server')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/lookupdb.js')
    console.log(req.body + "lookup")
    console.log(__dirname)
})

app.post('/names', (req, res) => {
    console.log(req.body)
})