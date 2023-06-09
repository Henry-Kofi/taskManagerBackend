const express = require('express');
const router = express.Router();

const { storeTask,
        fetchAllTask,
        getSingleTask,
        updateTask,
        deleteTask} = require('../controller/task')

/**
 * task --> POST
 * task --> GET
 * task --> :id GET
 * task --> :id PATCH
 * task --> DELETE
 * 
 **/

// TASKS
router.post('/task',storeTask)

// getting single task data
router.get('/task/:id',getSingleTask);

// getting  task data
router.get('/task',fetchAllTask);

// updating task
router.patch('/task/:id',updateTask);

// deleting a task
router.delete('/task/:id', deleteTask);

module.exports = router;