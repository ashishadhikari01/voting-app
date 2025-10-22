import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export type UserPayload={
    id:string
    email:string
    // iat:number
    // exp:number
}
export const verifyToken = (req: Request &{user?:UserPayload}, res: Response, next: NextFunction) => {
  console.log('inside middleware')
  const token = req.cookies.token; // since you’re storing it in cookie
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret as string) as UserPayload;
    req.user = decoded; // ✅ You now have access to user info (like id, email)
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
