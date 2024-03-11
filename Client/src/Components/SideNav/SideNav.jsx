import { Link } from "react-router-dom";
import "./SideNav.css";
const SideNav = () => {
  return (
    <>
      <div className="SideContainerLeft">
        <div className="ProfilePicContainer"></div>
        <div className="NavlinkContainer">
          <Link to="#">Create</Link>
          <Link to="#">All blogs</Link>
          <Link to="#">Achive</Link>
        </div>
      </div>
    </>
  );
};

export default SideNav;
