import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HomePage />
  </React.StrictMode>
);
