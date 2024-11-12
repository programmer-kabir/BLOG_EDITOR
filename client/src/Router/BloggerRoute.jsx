import { Navigate, useLocation } from "react-router";
import useAuth from "../Components/Hooks/useAuth";
import Loader from "../Components/Loader/Loader";
import useBlogger from "../Components/Hooks/useBlogger";


const BloggerRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isBlogger, isBloggerLoading] = useBlogger();
    const location = useLocation();

    if(loading || isBloggerLoading){
        return <Loader progress={45} />
    }

    if (user && isBlogger) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default BloggerRoute;