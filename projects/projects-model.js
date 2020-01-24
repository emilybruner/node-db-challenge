const db = require('../data/db-config');

module.exports = {
  getProjects,
  addProjects,
  getById
}

function getProjects() {
    return db.select("*").from('projects')
}

function addProjects(newProject) {
    return db('projects')
    .insert(newProject)
}

// function getById(id) {
//     return db('projects')
//     .join('tasks', 'tasks.project_id', 'projects.id')
//     .where('projects.id', id)
// }