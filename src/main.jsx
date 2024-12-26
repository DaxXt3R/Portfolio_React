import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// CONTEXT TESTING
// import { ThemeProvider } from "./components/Context/ThemeContext.jsx";
// import { LanguageProvider } from "./components/Context/LanguageContext.jsx";
// import { WindowProvider } from "./components/Context/WindowContext.jsx";

// REDUX
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* I think the redux store is provided to the whole app kinda like context */}
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>
);
