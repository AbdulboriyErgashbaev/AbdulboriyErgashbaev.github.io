import React from "react";
import { render } from "react-dom";
import ReactDom from "react-dom/client";
import App from "./components/App";

const root =ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>


)
