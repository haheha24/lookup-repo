const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config;

// Connects to the database
mongoose.connect(process.env.REACT_APP_URI || process.env.REACT_APP_URILOCAL, {
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

// Serve React static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

// Enables cors
app.use(cors());

// Require routes
const routes = require("./routes/index.js");
app.use("/routes/index", routes);

// Listen on port 3000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});