import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./global.scss";
import ProductState from "./contexts/ProductState";
import AppState from "./contexts/AppState";
import App from "./App";
import YoutubeState from "./contexts/YoutubeState";

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <BrowserRouter>
        <YoutubeState>
          <ProductState>
            <App />
          </ProductState>
        </YoutubeState>
      </BrowserRouter>
    </AppState>
  </React.StrictMode>,
  document.getElementById("root")
);
