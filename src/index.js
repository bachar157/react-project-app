import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/style.css";

// Root element rendering
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
