import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import Starability from "./Starability.jsx";
import StarabilityTest from "./StarabilityTest.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Starability maxRating={5} />
    <Starability maxRating={10} />
    <StarabilityTest />
  </StrictMode>
);
