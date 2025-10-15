import { Request,Response } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config() 
import { registeruser as RegisterUserModel } from "../model/RegisterUserModel.js";

export const LoginController= async (req:Request,res:Response)=>{
   
    const {email,password}=req.body
    const secretkey=process.env.jwt_secret as string
     try{
        console.log(email,password)
    const findUser=await RegisterUserModel.findOne({email})
    if(!findUser){
     return res.status(404).json({message:"user not registered yet"})
    } 
    const isPasswordMatch=await bcrypt.compare(password,findUser.password)
    if(isPasswordMatch){
        const token=jwt.sign(
            {id:findUser._id,email:findUser.email},
             secretkey,
             {expiresIn:'2h'}
        )
        res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            sameSite:'lax',
            maxAge:7200000,
            path:'/'
        })
        console.log('login sucessed')
        return res.status(200).json({message:'Login sucessfully'})

    }
    else{
        res.status(401).json({message:'Invalid password'})
    }
   }
   catch(err){
    console.log('error on login user',err)
   }
}