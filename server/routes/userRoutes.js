import express, { response } from "express";
import loginController from "../Controller/loginController.js";
import SignupController from "../Controller/SignupController.js";
import jwt from "jsonwebtoken";
const router = express.Router();

//Login Route
router.post("/login", loginController);

//SignUp Route
router.post("/signup", SignupController);

export default router;
