import express, { response } from "express";
import loginController from "../Controller/loginController.js";
import SignupController from "../Controller/SignupController.js";
import jwt from "jsonwebtoken";
import authmiddleware from "../middlewares/authmiddleware.js";
import createPostController from "../Controller/createPostController.js";
const router = express.Router();

//Login Route
router.post("/login", loginController);

//SignUp Route
router.post("/signup", SignupController);

router.post("/create", authmiddleware, createPostController);

export default router;
