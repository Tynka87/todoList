'use strict';
const express = require('express');
const taskRouter = require('./routes/task.router');
const bodyParser = require('body-parser');

const server = express();

// server starter
let port = 3000;

server.listen(port, '0.0.0.0');
console.log(`works at port ${port}, and set ip to 0.0.0.0`);

// CORS handling
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// to parse body in POST and PUT requests
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use('/tasks', taskRouter);

