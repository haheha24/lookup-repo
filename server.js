const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connects to the database
mongoose.connect("mongodb://localhost:27017/lookup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

mongoose.connection.once("open", function () {
  console.log(`Connected to the database`);

  const userSchema = new mongoose.Schema(
    { firstName: String, secondName: String, email: String },
    { collection: "user" }
  );

  const User = mongoose.model("user", userSchema);

  User.find(function (err, users) {
    if (err) return console.log(err);
    console.log(users);
  });
});

/* mongoose.connection.db.collection('user', (err, docs) => {
  if(err) return console.log(err)
  docs.find().each((err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
  })
}) */

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("There is nothing to show here");
});

app.listen(port, () => {
  console.log(`app is listening on port http://localhost:${port}`);
});

app.post("/lookupdb", (req, res) => {
  console.log(req.body);
  res.send("POST request to lookupdb");
});

//READ UP ABOUT POST AND HOW TO POST FROM A FORM ELEMENT
//READ UP/THINK ABOUT A SERVER'S ROLE IN A POST METHOD
