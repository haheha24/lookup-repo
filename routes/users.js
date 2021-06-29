const express = require("express");
const router = express.Router();

const userModel = require('../model/users-model.js')
/* router.use('/', userModel) */

router.post('/', (req, res) => {
    res.send('hello')
})

module.exports = router