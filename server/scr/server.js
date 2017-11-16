'use strict';
const express = require('express');
const HttpStatus = require('http-status-codes');
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

//mocked data
let id = 0;
function genId() {
    return ++id;
}

let task1 = {
    id: genId(),
    title: "task1",
    createDate: new Date(),
    status: false,
    description: "opis taska 1"
};

let task2 = {
    id: genId(),
    title: "task12",
    createDate: new Date(),
    status: false,
    items: [
        {
            id: genId(),
            content: "lp 1",
            status: false
        },
        {
            id: genId(),
            content: "lp 2",
            status: true
        },
        {
            id: genId(),
            content: "lp 3",
            status: false
        }
    ]
};

let tasks = new Map();
tasks.set(task1.id, task1);
tasks.set(task2.id, task2);

// routes
app.get('/tasks', (req, res) => {
    let tabTasks = [];
    tasks.forEach((v) => {
        tabTasks.push(v);
    });
    res.json(tabTasks);
});

app.get('/tasks/:id',(req, res) => {
    let id = parseInt(req.params.id);
    if (tasks.has(id)){
        res.send(tasks.get(id))
    }else{
        res.status(HttpStatus.NOT_FOUND).send();
    }
});

app.delete('/tasks/:id',(req, res) => {
    let id = parseInt(req.params.id);
    if (tasks.delete(id)){
        res.status(HttpStatus.NO_CONTENT).send();
    }else{
        res.status(HttpStatus.NOT_FOUND).send();
    }
});