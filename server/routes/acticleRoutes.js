// const express = require("express");
import express from "express";
import loginController from "../Controller/loginController.js";
import SignupController from "../Controller/SignupController.js";

const router = express.Router();

//Login Route
router.post("/login", loginController);

//SignUp Route
router.post("/Signup", SignupController);

module.exports = router;
