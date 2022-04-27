import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { GlobalStyles } from "./GlobalStyles";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
