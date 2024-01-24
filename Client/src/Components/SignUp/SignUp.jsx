import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div className="container">
        <div className="form">
          <h6 className="form-header">
            <Link to={"/"}>Signup Page</Link>
          </h6>
          <div className="form-body">
            <div className="form-body-row">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                className="form-body-row-input-field"
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-body-row">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={Password}
                type="password"
                className="form-body-row-input-field"
                placeholder="Enter your Password"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
