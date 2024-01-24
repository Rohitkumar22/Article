import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = () => {
    console.log(email);
    console.log(Password);
  };

  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div className="container">
        <div className="form">
          <h6 className="form-header">
            <Link to={"/"}>Articly</Link>
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
            <div className="Form-buttons">
              <div onClick={handleSubmit} className="loginButton">
                Login
              </div>
              <div className="registerButton">
                <Link to={"/register"}> Not Registered?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
