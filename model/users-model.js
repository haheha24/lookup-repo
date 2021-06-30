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

/* module.exports = (first, last, address) => {
  User.insertMany(
    [
      {
        firstName: first,
        lastName: last,
        email: address,
      },
    ],
    (err, r) => {
      test.equal(null, err);
      test.equal(2, r.insertedCount);
    }
  );
}; */

// Open the connection once by creating a schema and log the user collection
/* module.exports = mongoose.connection.once("open", function () {
  console.log(`Connected to the database`);

  const userSchema = new mongoose.Schema(
    { firstName: String, secondName: String, email: String },
    { collection: "user" }
  );

  const User = mongoose.model("user", userSchema);
}); */
