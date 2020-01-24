const db = require('../data/db-config');

module.exports = {
  getResources,
  addResources
}

function getResources() {
    return db.select("*").from('resources')
}

function addResources(newResource) {
    return db('resources')
    .insert(newResource)
}