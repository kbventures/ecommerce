import User, {IUser} from "../models/userModel";
import jwt from "jsonwebtoken";
import {ObjectId} from "mongoose"
import { Request, Response } from 'express';

const createToken = (_id: ObjectId) => {
  return jwt.sign({ _id }, process.env.SECRET!, { expiresIn: "1d" });
};

// login user
export const loginUser = async (req: Request<{}, {}, IUser>, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

//signup user
export const signupUser = async (req: Request<{}, {},IUser>, res:Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    if(error instanceof Error){
      res.status(400).json({ error: error.message });
    }
  }
};

