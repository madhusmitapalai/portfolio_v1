import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* accent options: "#CBFF4D" lime · "#5FE3C0" mint · "#FF6B4A" coral · "#7B6BFF" violet */}
    <Portfolio accent="#5FE3C0" />
  </React.StrictMode>
);
