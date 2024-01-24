// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rohitguleria223:Fxe7V9voTEZOFAkm@cluster1.u3dmg87.mongodb.net/testing_db"
    );
    console.log(
      `connection establised with ${mongoose.connection.host} dbname ${mongoose.connection.db.databaseName}`
    );
  } catch (e) {
    console.log(`DB connection issue`);
  }
};
export default connectDB;
