import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: Password }),
    };
    try {
      const request = await fetch(
        "http://localhost:8000/user/login",
        requestOptions
      );
      const data = await request.json();
      console.log(data.token);
      sessionStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

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
