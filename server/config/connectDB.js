// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connection establised with ${mongoose.connection.host} dbname ${mongoose.connection.db.databaseName}`
    );
  } catch (e) {
    console.log(`DB connection issue \n${e}`);
    console.log("Hi there from catch");
  }
};
export default connectDB;
