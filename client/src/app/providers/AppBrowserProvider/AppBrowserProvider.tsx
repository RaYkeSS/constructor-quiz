import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";

import { HomePage } from "~/pages/HomePage";
import { NotFoundPage } from "~/pages/NotFoundPage";
import { TestPage } from "~/pages/TestPage";
import { AuthPage } from "~/pages/AuthPage/ui/AuthPage.tsx";

import { ProtectedRoutes } from "./ProtectedRoutes.tsx";

export const AppBrowserProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="test" element={<TestPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
