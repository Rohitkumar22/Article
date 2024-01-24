import "./Navbar.css";
import PinterestIcon from "@mui/icons-material/Pinterest";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <PinterestIcon color="success" />
      </div>
      <div className="Navbar_links">
        <ul className="Navbar_link_items">
          <li className="Navbar_link_item">
            <a href="#">Home</a>
          </li>
          <li className="Navbar_link_item">
            <a href="#">Articles</a>
          </li>
          <li className="Navbar_link_item">
            <a href="#">Create</a>
          </li>
        </ul>
      </div>
      <div className="Navbar_Buttons">
        <Link to={"/login"}>
          <Button
            size="small"
            className="Navbar_Button"
            variant="outlined"
            color="success"
          >
            Login/Signup
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
