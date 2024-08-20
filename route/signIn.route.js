import express from "express"
import signIn from "../controller/signIn.controller.js";
const signRoute=express.Router();

signRoute.post('/signin',signIn);

export default signRoute;