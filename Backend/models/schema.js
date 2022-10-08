const mongoogse = require('mongoose')

const userSchema = new mongoogse.Schema({
    name:{ type:String , required:true},
    number:{type:Number, required:true},
    email:{type:String, required:true},
    description:{type:String , required:true}
})

const users = new mongoogse.model("users",userSchema)
module.exports=users;