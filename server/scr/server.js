'use strict';
const express = require('express');
const app = express();

// server starter
let port = 3000;

app.listen(port, '0.0.0.0');
console.log(`works at port ${port}, and set ip to 0.0.0.0`);

// CORS handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
