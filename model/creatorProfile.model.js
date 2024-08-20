import mongoose from "mongoose";
const creatorProfileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    descirption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})