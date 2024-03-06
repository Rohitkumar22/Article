import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next) => {
  let toke = req.headers["authorization"];
  console.log(toke);
  const token = toke.split(" ")[1];
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.SECRET_TOKEN);
      console.log(decode.id);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send("token not found");
  }
  next();
};
export default authmiddleware;
