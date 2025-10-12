import express from "express"
import { registeruser } from "../controllers/RegisterUserController.js"


export const registeruserRouter=express.Router()
registeruserRouter.post('/registeruser',registeruser)
