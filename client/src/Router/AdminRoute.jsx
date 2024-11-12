import { Navigate, useLocation } from "react-router";
import useAdmin from "../Components/Hooks/useAdmin";
import useAuth from "../Components/Hooks/useAuth";
import Loader from "../Components/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader progress={45} />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
