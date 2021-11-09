import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";

import App from "./App";
import AppState from "./contexts/AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>,
  document.getElementById("root")
);
