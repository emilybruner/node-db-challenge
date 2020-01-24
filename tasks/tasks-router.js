const express = require('express');

const db = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getTasks()
    .then(task => {
        res.json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'Failed to get tasks'})
    })
})

router.post('/', (req, res) => {
    const data = req.body

    db.addTasks(data)
    .then(newTask => {
        res.status(201).json(newTask)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: 'Failed to add task'})
    })
})

module.exports = router;