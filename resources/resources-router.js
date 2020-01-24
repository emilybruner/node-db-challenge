const express = require('express');

const db = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getResources()
    .then(resource => {
        res.json(resource)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'Failed to get resources'})
    })
})

router.post('/', (req, res) => {
    const data = req.body

    db.addResources(data)
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: 'Failed to add resource'})
    })
})

module.exports = router;