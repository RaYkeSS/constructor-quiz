import { Navigate, Outlet } from "react-router";
import { useUserFromCache } from "~/entities/user";

import { ENDPOINTS } from "~/shared/endpoints";

export const ProtectedRoutes = () => {
  const isUserLoggedIn = useUserFromCache();

  if (!isUserLoggedIn) {
    return <Navigate to={ENDPOINTS.login} replace />;
  }

  return <Outlet />;
};
