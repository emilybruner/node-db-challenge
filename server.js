const express = require('express');

const recipeRouter = require('./projects/projects-router')
const db = require('./data/db-config.js');

const server = express();

server.use(express.json());
server.use('/api/project', projectRouter)

module.exports = server;