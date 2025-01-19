import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { AppApolloProvider, AppBrowserProvider } from "./providers";

import "~/shared/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppApolloProvider>
      <AppBrowserProvider>{/*<App />*/}</AppBrowserProvider>
    </AppApolloProvider>
  </StrictMode>,
);
