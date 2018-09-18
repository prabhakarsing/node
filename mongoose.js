var mongoose=require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

////////////////create schema
var userSchema=new mongoose.Schema({
user:{type:String,required:true},
mob:{type:Number,unique:true},
add:[String]    
},{_id:false})
    /////////////create auto inc
userSchema.plugin(AutoIncrement);
module.exports = mongoose.model("ins",userSchema)//collection name we can pass