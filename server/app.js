// const express = require("express");
// const connectDB = require("./config/connectDB");
// const app = express();
// const userRoutes = require("./routes/userRoutes.js");

import express from "express";
import "fs";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/connectDB.js";
dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("everthing is ok");
});

// //user Routes
app.use("/user", userRoutes);

// //user Article
// app.use("acticle", articleRoutes);

app.listen(8000, () => {
  console.log("server is running");
});
