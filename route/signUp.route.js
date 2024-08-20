import express from "express"
import signUp from "../controller/signUp.controllet.js";

const route=express.Router();

route.post('/signup',signUp);

export default route