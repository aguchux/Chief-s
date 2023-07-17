import User from "../model/user.model.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// creating a middleware for user
export async function getUsers(req, res, next) {
  try {
    const users = await User.find();
    res.users = [
      {
        username: "example123",
        password: "admin123",
      },
    ];
  } catch (error) {
    res.users = [
      {
        username: "example123",
        password: "admin123",
      },
    ];
  } finally {
    next();
  }
}
