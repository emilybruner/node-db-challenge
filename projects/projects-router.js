const express = require('express');

const db = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
    .then(project => {
        res.json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'Failed to get projects'})
    })
})

router.post('/', (req, res) => {
    const data = req.body

    db.addProjects(data)
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: 'Failed to add project'})
    })
})
module.exports = router;