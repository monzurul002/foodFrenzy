import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProviders";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/signup" state={{ from: location }} replace  ></Navigate>
    }
    return children
};

export default PrivateRoute;