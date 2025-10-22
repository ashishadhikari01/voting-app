import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { registeruser as RegisterUserModel } from "../model/RegisterUserModel.js";
import { json } from "stream/consumers";
import { moreuserinfo } from "../model/MoreInfo.js";
import { registeruser } from "../model/RegisterUserModel.js";


type AuthenticatedRequest = Request & {
  user?: {
    id: string;
    email: string;
  };
};

export const UserInformationController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  console.log("uff");
  try {
    console.log(req.user);
    if (!req.user) {
      return res.json({ message: "unauthorized: user not found" });
    }
    const { id, email } = req.user;
    const findUser = await RegisterUserModel.findById(id);
    res.json(findUser);
  } catch (err) {
    res.json({ message: "internal server error" });
    console.log("error", err);
  }
};

export const UpdateBasicUserInfo = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.json({ message: "unauthorized:user not found" });
    }
    const { id } = req.user;
    const findUser = await RegisterUserModel.findById(id);
    const { firstname, lastname, gender, email } = req.body;
    const updateUser = await RegisterUserModel.findByIdAndUpdate(id, {
      firstname: firstname || findUser?.firstname,
      lastname: lastname || findUser?.lastname,
      gender: gender || findUser?.gender,
      email: email || findUser?.email,
    });
    return res.json({ message: "user data updatedd" });
  } catch (error) {
    console.log("error on updating basic info", error);
  }
};

export const updateMoreInfo = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.json({ message: "unauthorized:user not found" });
    }
    const { birthdate, phone, location, bio, website } = req.body;
    const { id } = req.user;
    const existingUserInfo = await moreuserinfo.findOne({ id });
    if (existingUserInfo) {
      return res.json({ message: "user data already saved" });
    }
    const detailUserInfo = new moreuserinfo({
      id: id,
      birthdate,
      phone,
      location,
      bio,
      website,
    });
    await detailUserInfo.save();
    res.json({ message: "Additional user detail added" });
    console.log("additional info added");
  } catch (error) {
    console.log("error on updating info", error);
  }
};

export const getMoreUserInfo = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.json({ message: "unauthorized:user not found" });
    }
    const { id } = req.user;
    const findUser = await moreuserinfo.findOne({ id });
    if (!findUser) {
      return res.json({ message: "user not found" });
    }
    res.json(findUser);
  } catch (error) {
    console.log("error on getting more user info");
  }
};

export const PutMoreInfo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.json({ message: "unauthorized:user not found" });
    }
    const { id } = req.user;
    const findUser = await moreuserinfo.findOne({ id });
    if (!findUser) {
      return res.json({ message: "user not found" });
    }
    const { birthdate, phone, location, bio, website } = req.body;
    
    const updateUserInfo=await moreuserinfo.findOneAndUpdate({id},{ 
     birthdate: birthdate || findUser?.birthdate,
      phone: phone || findUser?.phone,
      location: location || findUser?.location,
      bio: bio || findUser?.bio,
      website: website || findUser?.website,
    })
    res.json({message:'user detail updated'})
    console.log('user detail updated')
  } catch (err) {
    console.log("error on put request of more info", err);
  }
};

export const updatePassword=async(req:AuthenticatedRequest,res:Response)=>{
  console.log('ufff',req.body)
  try{
    if(!req.user) return res.json({message:"unauthorized:user not found"})
    const {id}=req.user  
    const findUser=await RegisterUserModel.findById({_id:id})
    if(!findUser) return res.json({message:'user not found'})
    const {oldPassword,newPassword}=req.body
    const newhashedPassword=await bcrypt.hash(newPassword,10)
    const isMatch=await bcrypt.compare(oldPassword,findUser.password)
    if(isMatch){
      findUser.password=newhashedPassword||findUser.password
      await findUser.save()
      return res.json({message:'Password updated sucessfully'})
    }
    else{
      return res.json({message:'old password is invalid'})
    }
  }
  catch(err){
    console.log('server error on updating password',err)
     res.json({message:'server error on updating password',err})
  }
}

export const deactivateAccount=async(req:AuthenticatedRequest,res:Response)=>{
  try{
    if(!req.user) return res.json({message:'unauthorized:user'})
    const {id}=req.user
  console.log('id isssss',id)
   const {password}=req.body
  const user=await RegisterUserModel.findById({_id:id})
  if(!user) return res.json({message:'user not found'})
  const isMatch=await bcrypt.compare(password,user?.password)
  if(!isMatch) return res.json({message:'Password Invalid'})
  const updateActiveStatus=await RegisterUserModel.findByIdAndUpdate({_id:id},{
   isActive:false
  })
  res.json({message:'account deactivating...'})

  }
  catch(err){
   return res.json({message:'server error on deactivating account'})
  }
}