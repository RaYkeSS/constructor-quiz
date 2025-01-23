import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import {
  AppApolloProvider,
  AppBrowserProvider,
  ThemeProvider,
} from "./providers";

import "~/shared/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppApolloProvider>
        <AppBrowserProvider>{/*<App />*/}</AppBrowserProvider>
      </AppApolloProvider>
    </ThemeProvider>
  </StrictMode>,
);
