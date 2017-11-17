const HttpStatus = require('http-status-codes');

//mocked data
let id = 0;
function genId() {
    return ++id;
}

let task1 = {
    id: genId(),
    title: "task1",
    done: false,
    description: "opis taska 1",
    createDate: new Date()
};

let task2 = {
    id: genId(),
    title: "task2",
    done: false,
    items: [
        {
            id: genId(),
            content: "lp 1",
            done: false
        },
        {
            id: genId(),
            content: "lp 2",
            done: true
        },
        {
            id: genId(),
            content: "lp 3",
            done: false
        }
    ],
    createDate: new Date()
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

function isValidForAdd(newTask) {
    return newTask.title && (newTask.description || newTask.items);
}
exports.addTask = (req, res) => {
    let newTask = req.body;

    if (isValidForAdd(newTask)){

        newTask.id = genId();
        newTask.createDate = new Date();
        newTask.done = false;
        tasks.set(newTask.id, newTask);
        res.status(HttpStatus.CREATED).send(newTask);

    }else{
        res.status(HttpStatus.BAD_REQUEST).send();
    }
};