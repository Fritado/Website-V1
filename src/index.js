import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./script.scss";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
