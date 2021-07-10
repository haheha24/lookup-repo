const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Connects to the database
mongoose.connect(process.env.REACT_APP_URI|| process.env.REACT_APP_URILOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
mongoose.connection.once("open", () => {
  console.log(`Connected successfully to database`);
});

// initialise express
const app = express();

// Enables cors
app.use(cors());

// Require routes
const routes = require("./routes/index.js");
app.use("/routes/index", routes);

// Serve React static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Listen on port 3001
const port = process.env.SERVER_PORT || 3001
app.listen(port, () => {
  console.log(`app is listening on port http://localhost:${port}`);
});

//READ UP ABOUT POST AND HOW TO POST FROM A FORM ELEMENT
//READ UP/THINK ABOUT A SERVER'S ROLE IN A POST METHOD
