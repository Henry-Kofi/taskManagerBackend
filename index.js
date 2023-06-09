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

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')

app.use(userRoutes);
app.use(taskRoutes);

const port = process.env.PORT||4040;

app.listen(port, () => console.log(`Server running at port ${port}`));

// 04 next