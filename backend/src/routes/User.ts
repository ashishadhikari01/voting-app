import express from "express"
import { RegisterController } from "../controllers/RegisterController.js"
import { LoginController } from "../controllers/LoginController.js"


export const User=express.Router()
User.post('/register',RegisterController)
User.post('/login',LoginController)


