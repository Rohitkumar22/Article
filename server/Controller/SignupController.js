import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const SignupController = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password, name } = req.body;
    const entry = await User.find({ email });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    // process.exit();
    if (entry.length === 0) {
      console.log("hashed", hashed);
      const user = await User.create({
        name: name,
        email: email,
        password: hashed,
      });
      console.log("user --- ", user);
      if (user) {
        return res.send({ message: "user created", data: user });
      } else {
        return res.send({ message: "issue in user creation", data: null });
      }
    } else {
      return res.send({ message: "user already Registered", data: entry });
    }
  } catch (error) {
    console.log("error in signupcontroller", error);
  }
};

export default SignupController;
