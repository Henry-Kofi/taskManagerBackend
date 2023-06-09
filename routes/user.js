const express = require('express');
const router = express.Router();

const { createUser,
        getAllUser,
        getSingleUser,
        updateUser,
        deleteUser} = require('../controller/user');

/** 
 * user --> POST
 * user --> GET
 * user --> :id GET
 * user --> :id PATCH
 * user --> DELETE
 */



// USER
router.post('/user',createUser);

// getting user data
router.get('/user',getAllUser);

// getting single user data
router.get('/user/:id',getSingleUser);

// updating user
router.patch('/user/:id', updateUser)

// deleting a user 
router.delete('/user/:id', deleteUser);

module.exports = router;