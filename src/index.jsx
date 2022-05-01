import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./global.scss";
import ProductState from "./contexts/ProductState";
import AppState from "./contexts/AppState";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <BrowserRouter>
        <ProductState>
          <App />
        </ProductState>
      </BrowserRouter>
    </AppState>
  </React.StrictMode>,
  document.getElementById("root")
);
