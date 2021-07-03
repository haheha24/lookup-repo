const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
  },
  { collection: "user" }
);
const User = mongoose.model("user", schema);

module.exports = User;
