console.log('this is my server')
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Listening on 3000')
})