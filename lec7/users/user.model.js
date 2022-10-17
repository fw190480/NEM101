const mongoose = require('mongoose')
// Information about structure of data
// model instance of collection ------->>> parameter inside model is always singular [ user=users] if [users=userss]
const userSchema = new mongoose.Schema({
    id:{type:Number},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:String,
    age:Number,
    gender:{type:String,required:true,enum:["Male","Female"]}
})

const Users = mongoose.model("user",userSchema)

module.exports = Users