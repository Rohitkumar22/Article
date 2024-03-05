import { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    //axios implementation
    // const url = "http://localhost:8000/user/signup";
    // const options = {
    //   method: "POST",
    //   body: { email: email, password: Password, name: name },
    // };
    // try {
    //   const req = await axios.request(url, options);
    //   const data = req.data;
    //   console.log(data);
    //   navigate("/login"); // Navigate to login page after signup
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, password: Password }),
    };
    try {
      const request = await fetch(
        "http://localhost:8000/user/signup",
        requestOptions
      );

      const data = await request.json();
      console.log(data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

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
                  setName(e.target.value);
                }}
                value={name}
                className="form-body-row-input-field"
                placeholder="Enter your Name"
              />
            </div>
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
              <div onClick={handleSubmit} className="RegisterButton">
                Signup
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
