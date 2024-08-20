import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../model/user.model.js";
export const protect=async(req,res,next)=>{
    try {
        console.log("hit");
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user=await User.findById(decode.userId);
        const dbtoken=user.token;
        if(token!==dbtoken){
            return res.status(401).json({message:"Unauthorized"});
        }

        next();
        

    } catch (error) {
        res.status(404).json({message:"internal server error"});
        console.log(error);
    }
}