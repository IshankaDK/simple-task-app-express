const express = require('express')
const taskRouter = express.Router()
const {getTask,setTask,deleteTask,updateTask} = require('../controllers/TaskController')

taskRouter.route('/').get(getTask).post(setTask).put(updateTask)
taskRouter.route('/:id').delete(deleteTask)

module.exports = taskRouter