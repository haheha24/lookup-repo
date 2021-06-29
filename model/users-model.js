const mongoose = require("mongoose");

// Open the connection once by creating a schema and log the user collection
module.exports = mongoose.connection.once("open", function () {
  console.log(`Connected to the database`);

  const userSchema = new mongoose.Schema(
    { firstName: String, secondName: String, email: String },
    { collection: "user" }
  );

  const User = mongoose.model("user", userSchema);
});
