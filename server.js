const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Connects to the database
mongoose.connect(
  process.env.DB_URI_KEY || process.env.DB_LH_KEY,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
mongoose.connection.once("open", () => {
  console.log(`Connected successfully to database`)
})

// initialise express
const app = express();

// Enables cors
app.use(cors());

// Require routes
const routes = require("./routes/index.js");
app.use("/routes/index", routes);

app.get("*", function (req, res) {
  res.send("Invalid URL");
});

// Listen on port 4000
const port = 4000;
app.listen(port, () => {
  console.log(`app is listening on port http://localhost:${port}`);
});

//READ UP ABOUT POST AND HOW TO POST FROM A FORM ELEMENT
//READ UP/THINK ABOUT A SERVER'S ROLE IN A POST METHOD
