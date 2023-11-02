import React from "react";
import ReactDOM from "react-dom/client";
import { GymApp } from "./GymApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GymApp />
  </React.StrictMode>
);
