import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res, next) => {
  // console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({username, email, password: hashedPassword}); // username:username mehem enna one
  try {
    await newUser.save();
    res.status(201).json({message: "User created successfully"});
  } catch (error) {
    next(error);
  }
};

// request is the data that we are getting from the client side
// response is the data we send back to the client side