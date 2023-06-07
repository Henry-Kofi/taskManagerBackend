const express = require('express');
const mongoose =  require('mongoose');
const colors = require('colors')
const app = express();

// middleware
app.use(express.json());

var url = 'mongodb://127.0.0.1:27017/restmongose';

mongoose.connect(url)
.then(() => console.log("Database Connected Successfully!"))
.catch((err) => console.error(err));

// Schema(Shape of a document)

const User = require('./model/User');
const Task = require('./model/Task');   

/**
 * task --> POST
 * task --> GET
 * task --> :id GET
 * task --> :id PATCH
 * task --> DELETE
 * 
 * user --> POST
 * user --> GET
 * user --> :id GET
 * user --> :id PATCH
 * user --> DELETE
 */


// TASKS
app.post('/task',async (req,res) => {

    try{ 
       
        const task = new Task(req.body);
        
    
        await task.save();
    
        return res.status(201).json({success: true, task});
    }
    catch(e){
        return res.status(400).json({success: false,message:e.message});
    }

})

// USER
app.post('/user',async (req,res) => {

    try{ 
       
        const user = new User(req.body);
        
    
        await user.save();
    
        return res.status(201).json({success: true, user});
    }
    catch(e){
        return res.status(400).json({success: false,message:e.message});
    }

});

// getting task data
app.get('/task',async (req,res) => {
    const tasks  = await Task.find({});
    return res.json({success:true,tasks});
});

// getting user data
app.get('/user',async (req,res) => {
    const users  = await User.find({});
    return res.json({success:true,users});
});

// next is 09

const port = process.env.PORT||4040;

app.listen(port, () => console.log(`Server running at port ${port}`));

