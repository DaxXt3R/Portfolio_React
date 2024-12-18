import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "./components/Context/ThemeContext.jsx";
import { LanguageProvider } from "./components/Context/LanguageContext.jsx";
import {WindowProvider} from "./components/Context/WindowContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <WindowProvider>
          <App />
        </WindowProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
