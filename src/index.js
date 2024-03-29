import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./frontend/App";
import reportWebVitals from './frontend/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();

if (module.hot) {
  module.hot.accept();
}
