const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const port = 4000;

// Connects to the database
mongoose.connect("mongodb://localhost:27017/lookup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

const app = express();

const routes = require('./routes/index.js')
app.use('/routes/index', routes)

/* const users = require('./routes/users.js')
app.use('/routes/users', users) */

app.get('/', (req, res) => {
  res.send('server')
})

app.get('*', function(req, res){
  res.send('Invalid URL');
})

app.listen(port, () => {
  console.log(`app is listening on port http://localhost:${port}`);
})

//READ UP ABOUT POST AND HOW TO POST FROM A FORM ELEMENT
//READ UP/THINK ABOUT A SERVER'S ROLE IN A POST METHOD
