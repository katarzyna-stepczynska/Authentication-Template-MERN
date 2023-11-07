import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
//Description: Auth user/set token
//Route:  POST api/users/auth
//Access  Public
const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Something went wrong");
  res.status(200).json({ message: "Auth user" });
});

//Description: Register a new user
//Route:  POST api/users
//Access  Public
const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Register user" });
  // console.log(req.body); // in POSTMAN test it
  const { name, email, password } = req.body;
  // console.log(name);
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//Description: Logout user
//Route:  POST api/users/logout
//Access  Public
const logoutUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Something went wrong");
  res.status(200).json({ message: "Logout user" });
});

//Description: Get user profile
//Route:  GET api/users/profile
//Access  Private (JWT token)
const getUserProfile = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Something went wrong");
  res.status(200).json({ message: "User profile" });
});

//Description: Update user profile
//Route:  PUT api/users/profile
//Access  Private (JWT token)
const updateUserProfile = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Something went wrong");
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
