import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme appearance="light" accentColor="yellow" grayColor="slate">
      <App />
    </Theme>
  </StrictMode>
);
