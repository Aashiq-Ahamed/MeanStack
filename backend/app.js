const express = require('express');
const app = express();

const mongoose = require('../backend/database/mongoose');
const List = require('../backend/database/models/list');
const Task = require('../backend/database/models/task');

app.use(express.json());
app.listen(3000, () => console.log('Hello world'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Creating Rest APIS => GET
app.get('/lists', (req, res) => {
    List.find({})
        .then((lists => res.send(lists)))
        .catch((err) => console.log(err))
});
//GET by ID
app.get('/lists/:listId', (req, res) => {
    List.find({ _id: req.params.listId })
        .then((lists => res.send(lists)))
        .catch((err) => console.log(err))
});
// POST
app.post('/lists', (req, res) => {
    (new List({ 'title': req.body.title }))
        .save()
        .then((list) => res.send(list))
        .catch((err) => console.log(err))
});
// PATCH
app.patch('/lists/:listId', (req, res) => {
    List.findOneAndUpdate({ '_id': req.params.listId }, { $set: req.body })
        .then((list) => res.send(list))
        .catch((err) => console.log(err))
});
//DELET
app.delete('/lists/:listId', (req, res) => {
    List.findByIdAndDelete(req.params.listId)
        .then((list) => res.send(list))
        .catch((err) => console.log(err))
})

