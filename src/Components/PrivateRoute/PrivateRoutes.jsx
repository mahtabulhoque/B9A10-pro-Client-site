import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return(
        <div className="text-center py-16">
            <span className="loading loading-spinner text-center  loading-lg"></span>
        </div>
    )
  }

  if (!user) {
    return <Navigate to='/logIn' state={location?.pathname}></Navigate>
  }

  return <div>{children}</div>;
};

export default PrivateRoutes;
