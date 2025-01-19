import { Navigate, Outlet } from "react-router";
import { useUserFromCache } from "~/entities/user";

export const ProtectedRoutes = () => {
  const isUserLoggedIn = useUserFromCache();

  if (!isUserLoggedIn) {
    return <Navigate to="login" replace />;
  }

  return <Outlet />;
};
