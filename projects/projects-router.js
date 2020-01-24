const express = require('express');

const db = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
    // .then(project => {
    //     res.json(project)
    // })
    .then(project => {
        project.map(projects => {
            if (projects.completed){
                projects.completed = true
            } else {
                projects.completed = false;
            }
        })
        return res.status(200).json(project)
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

// router.get('/:id'), (req, res) => {
//     const {id} = req.params

//     db.getById(id)
//     .then(project => {
//         if (project) {
//             res.json(project)
//         } else {
//             res.status(404).json({message: 'No project with that id'})
//         }
//     })
//     .catch(error => {
//         console.log(error)
//         res.status(500).json({message: 'Failed to get project'})
//     })
// }

module.exports = router;