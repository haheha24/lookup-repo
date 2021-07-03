const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
/* const mongoose = require("mongoose"); */

router.get("/add", (req, res) => {
  res.send("looks like you're trying to add something");
});

//CREATE A NEW ROUTER.GET TO READ THE DATABASE AND ADD IT TO THE STATE ON FORM.JS USING FETCH.
router.get("/read", (req, res, next) => {
  userModel.find((err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, message: "Succesfully read documents", userObj: users })
    }
  });
});

//POST REQUESTS TO ADD A NEW DOCUMENT
router.use(express.json()); //For JSON requests
router.use(express.urlencoded({ extended: true }));
const userModel = require("../model/users-model.js");

router.post("/add", (req, res, next) => {
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

module.exports = router;
