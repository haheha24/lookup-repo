var MongoClient = require('mongodb');
var url = "mongodb+srv://localhost";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
}); 