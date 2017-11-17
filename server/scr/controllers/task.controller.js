const HttpStatus = require('http-status-codes');

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
    title: "task2",
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


exports.getTasks = (req, res) => {
    let tabTasks = [];
    tasks.forEach((v) => {
        tabTasks.push(v);
    });
    res.json(tabTasks);
};

exports.getTaskById = (req, res) => {
    let id = parseInt(req.params.id);
    if (tasks.has(id)){
        res.send(tasks.get(id))
    }else{
        res.status(HttpStatus.NOT_FOUND).send();
    }
};

exports.deleteTaskById = (req, res) => {
    let id = parseInt(req.params.id);
    if (tasks.delete(id)){
        res.status(HttpStatus.NO_CONTENT).send();
    }else{
        res.status(HttpStatus.NOT_FOUND).send();
    }
};