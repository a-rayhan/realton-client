import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    console.log(user);

    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;