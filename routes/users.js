const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.use(express.json()); //For JSON requests
router.use(express.urlencoded({ extended: true }));
const userModel = require("../model/users-model.js");

router.post("/add", (req, res, next) => {
  console.log(req.body);
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
