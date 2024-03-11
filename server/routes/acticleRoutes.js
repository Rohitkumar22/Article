// const express = require("express");
import express from "express";
import authmiddleware from "../middlewares/authmiddleware";
import articleController from "../Controller/articleController";

const router = express.Router();

//Login Route
router.post("/create", authmiddleware, createpost);

//dashboard  Route
router.get("/", authmiddleware, articleController);

module.exports = router;
