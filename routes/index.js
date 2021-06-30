const express = require("express");
const router = express.Router();

const users = require('./users.js')
router.use('/users', users)

router.post("/", (req, res) => {
  res.send('Welcome to the POST Router')
});

module.exports = router
