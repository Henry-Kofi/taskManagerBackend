const mongoose =  require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 3,
        unique:true,
        maxlength: 20,
        required:true ,
        trim: true
    
    },
    age:{
        type:Number,
        validate(value){
            if(value < 18){
                throw new Error(`Age can't be less than 18`)
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid');
            }
        }
    },
    password:{
        type:String,
        required:true
    },
});

userSchema.pre('save', async function(nexxt){
    
    const user = this;
    user.password = await bcrypt.hash(user.password,8);

    nexxt();
})

const User  = mongoose.model('User',userSchema);

module.exports = User;