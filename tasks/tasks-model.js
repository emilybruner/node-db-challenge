const db = require('../data/db-config');

module.exports = {
  getTasks,
  addTasks
}

function getTasks() {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select(
        'tasks.id', 
        'tasks.task_name', 
        'tasks.description', 
        'tasks.notes', 
        'tasks.done', 
        'projects.project_name',
        'projects.project_description',
    )
}

function addTasks(newTask) {
    return db('tasks')
    .insert(newTask)
}