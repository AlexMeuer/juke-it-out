import React from "react";
import ReactDOM from "react-dom/client";
import { UIProvider } from "@repo/ui";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>,
);
