import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAgent from "../Hooks/useAgent";



const AgentRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAgent, isAgentLoading] = useAgent();

    const location = useLocation();

    if (loading || isAgentLoading) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (user && isAgent) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace />
};

export default AgentRoute;