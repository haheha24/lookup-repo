const express = require("express");
const router = express.Router();
/* const cors = require("cors"); */

router.use(express.json()); //For JSON requests
router.use(express.urlencoded({ extended: true }));
/* router.use(cors()); */

router.get("/", (req, res) => {
  res.send("looks like you're trying to do something");
});

//POST REQUESTS TO ADD A NEW DOCUMENT
const userModel = require("../model/users-model.js");

//CREATE A NEW ROUTER.GET TO READ THE DATABASE AND ADD IT TO THE STATE ON FORM.JS USING FETCH.
router.get("/read", (req, res) => {
  userModel.find((err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        status: 200,
        message: "Succesfully read documents",
        userObj: users,
      });
    }
  });
});

router.post("/add", (req, res) => {
  let newUser = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  newUser.save((err, newUser) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        status: 200,
        message: "Successfully added document",
        userObj: newUser,
      });
    }
  });
});

//DELETE REQUEST TO DELETE DOCUMENTS
router.delete("/delete/:id", (req, res) => {
  const id = {_id: req.params.id};
  userModel.findByIdAndDelete(id, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        status: 200,
        message: "Successfuly deleted document",
        objectId: id,
      });
    }
  });
});

router.get("/delete", (req, res) => {
  res.send("delete");
});

module.exports = router;
