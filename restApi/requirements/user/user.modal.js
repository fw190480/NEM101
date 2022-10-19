const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    age:{type:Number,min:15}
})

const User = mongoose.model('user',userScheme)
module.exports = User