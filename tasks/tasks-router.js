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


module.exports = router;