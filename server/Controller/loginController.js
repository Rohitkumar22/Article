import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      res
        .status(404)
        .send({ success: false, message: "User not registered", data: null });
    }
    const passwordmatch = await bcrypt.compare(password, user.password);
    if (!passwordmatch) {
      res
        .status(200)
        .status({ success: false, message: "Wrong password", data: null });
    } else {
      const token = await jwt.sign({ id: user._id }, "Mysecreatkey", {
        expiresIn: "3h",
      });
      const refreshtoken = await jwt.sign(
        { id: user._id, email: email },
        "Mysecreatkey",
        { expiresIn: "7d" }
      );

      res.cookie("refreshToken", refreshtoken, {
        secure: true, // Set to true if using HTTPS
        httpOnly: true,
        sameSite: "strict", // Adjust to your requirements
      });

      res.send({
        success: true,
        message: "Log in Successfully",
        token: token,
        refreshtoken: refreshtoken,
      });
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      data: err.message,
    });
  }
};
export default loginController;
