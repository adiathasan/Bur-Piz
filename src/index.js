import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextApiProvider } from "./data/ContextApi";

ReactDOM.render(
  <Router>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </Router>,
  document.getElementById("root")
);
