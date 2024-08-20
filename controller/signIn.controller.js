import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default async function signIn(req,res){
    try {
        const {username,password}=req.body;
        console.log(username,password);
    if(!username || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const user= await User.findOne({username});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    if(!bcryptjs.compareSync(password,user.password)){
        return res.status(401).json({message:"Invalid credentials"});
    }
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1h'});
    user.token = token;
    await user.save();
    res.status(200).json({message:"Login successful",user,token,status:200});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"something went wrong"});  
                
    }
}
