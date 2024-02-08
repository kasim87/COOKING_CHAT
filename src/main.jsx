import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
      rel="stylesheet"
    ></link>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
