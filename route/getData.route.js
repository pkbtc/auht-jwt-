import express from "express";
import { protect } from "../middleware/protect.middleware.js";
import { getData } from "../controller/getData.controller.js";
const getDataRoute = express.Router();

getDataRoute.post('/get',protect,getData);

export default getDataRoute