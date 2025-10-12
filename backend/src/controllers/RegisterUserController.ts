import { Request, Response } from "express";
import { registeruser as RegisterUserModel } from "../model/RegisterUserModel.js";
import bcrypt from "bcrypt";

export const registeruser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, gender, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new RegisterUserModel({
      firstname,
      lastname,
      email,
      gender,
      password: hashedPassword,
    });
    await newUser.save();
    console.log('user registered')
    res.status(200).json({message:'user registered successfully'})

  } catch (err) {
    console.log('user not registeredd')
    res.status(500).json({ message: "Registration failed", error: err });
  }
};
