import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String, required:true},
    gender:{type:String, required:true},
    password:{type:String, required:true}
})

export const registeruser=mongoose.model('registeruser',userSchema)

// exports.registeruser=registeruser