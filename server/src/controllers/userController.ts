import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel';

const createToken = (_id: ObjectId) =>
  jwt.sign({ _id }, process.env.SECRET || '', { expiresIn: '1d' });

// login user
export const loginUser = async (
  req: Request<unknown, unknown, IUser>,
  res: Response
) => {
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

// signup user
export const signupUser = async (
  req: Request<unknown, unknown, IUser>,
  res: Response
) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};
