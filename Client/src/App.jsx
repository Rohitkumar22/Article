import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/home/Home.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />

      <Route
        exact
        path="/profile/"
        element={
          <ProtectedRoutes>
            <h2>Hi you are log in as a user</h2>
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
