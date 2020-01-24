const db = require('../data/db-config');

module.exports = {
  getProjects,
  addProjects,
}

function getProjects() {
    return db.select("*").from('projects')
}

function addProjects(newProject) {
    return db('projects')
    .insert(newProject)
}