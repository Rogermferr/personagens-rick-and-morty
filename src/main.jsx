import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResetGlobalStyle } from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResetGlobalStyle />
    <App />
  </React.StrictMode>
);
