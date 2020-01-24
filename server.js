const express = require('express');

const projectRouter = require('./projects/projects-router')
const resourceRouter = require('./resources/resources-router')
const taskRouter = require('./tasks/tasks-router')
const db = require('./data/db-config.js');

const server = express();

server.use(express.json());
server.use('/api/project', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

module.exports = server;