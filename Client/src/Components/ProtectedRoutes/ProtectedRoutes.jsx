import { Navigate } from "react-router-dom";
const ProtectedRoutes = (prop) => {
  const tokenexist = sessionStorage.getItem("token");

  if (tokenexist) {
    return prop.children;
  } else {
    return (
      <>
        <Navigate to="/login" />;
      </>
    );
  }
};

export default ProtectedRoutes;
