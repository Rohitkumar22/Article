import { Navigate } from "react-router-dom";
const ProtectedRoutes = (prop) => {
  const tokenexist = sessionStorage.getItem("jwtToken");
  console.log(tokenexist);
  if (tokenexist) {
    return prop.children;
  } else {
    return (
      <>
        <h1>You have not logged in</h1>
        <Navigate to="/login" />;
      </>
    );
  }
};

export default ProtectedRoutes;
