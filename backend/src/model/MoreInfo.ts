import mongoose from "mongoose";

const MoreInfoSchema=new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    birthdate:{type:String,required:false},
    phone:{type:String, required:false},
    location:{type:String,required:false},
    bio:{type:String,required:false},
    website:{type:String,required:false}

})

export const moreuserinfo=mongoose.model('moreuserinfo',MoreInfoSchema)