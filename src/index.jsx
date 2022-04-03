import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./global.scss";

import App from "./App";
import AppState from "./contexts/AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState>
  </React.StrictMode>,
  document.getElementById("root")
);
