import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";

import { HomePage } from "~/pages/HomePage";
import { NotFoundPage } from "~/pages/NotFoundPage";
import { TestPage } from "~/pages/TestPage";
import { AuthPage } from "~/pages/AuthPage/ui/AuthPage.tsx";

import { ProtectedRoutes } from "./ProtectedRoutes.tsx";

import { ENDPOINTS } from "~/shared/endpoints";

export const AppBrowserProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ENDPOINTS.home} element={<HomePage />} />
        <Route path={ENDPOINTS.login} element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={ENDPOINTS.test} element={<TestPage />} />
        </Route>
        <Route path={ENDPOINTS.notfound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
