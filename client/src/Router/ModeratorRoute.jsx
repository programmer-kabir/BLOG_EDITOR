import { Navigate, useLocation } from "react-router";
import useModerator from "../Components/Hooks/useModarator";
import useAuth from "../Components/Hooks/useAuth";
import Loader from "../Components/Loader/Loader";


const ModeratorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isModerator, isModeratorLoading] = useModerator();
    const location = useLocation();

    if(loading || isModeratorLoading){
        return <Loader progress={45} />
    }

    if (user && isModerator) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default ModeratorRoute;