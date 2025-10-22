import express from "express"
import { RegisterController } from "../controllers/RegisterController.js"
import { LoginController } from "../controllers/LoginController.js"
import { UserInformationController,UpdateBasicUserInfo,updateMoreInfo,getMoreUserInfo, PutMoreInfo,updatePassword,deactivateAccount } from "../controllers/UserInformationController.js"
import { verifyToken } from "../middleware/VerifyToken.js"

export const User=express.Router()
User.post('/register',RegisterController)
User.post('/login',LoginController)
User.get('/info',verifyToken,UserInformationController)
User.put('/updatebasicinfo',verifyToken,UpdateBasicUserInfo)
User.post('/updatemoreinfo', verifyToken,updateMoreInfo)
User.get('/getmoreinfo',verifyToken,getMoreUserInfo)
User.put('/putmoreinfo',verifyToken,PutMoreInfo)
User.put('/updatePassword',verifyToken,updatePassword)
User.put('/deactiveaccount',verifyToken,deactivateAccount)

