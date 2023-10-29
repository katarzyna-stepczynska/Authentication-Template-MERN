//Description: Auth user/set token
//Route:  POST api/users/auth
//Access  Public
import asyncHandler from "express-async-handler";
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export { authUser };
