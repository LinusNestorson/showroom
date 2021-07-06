import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from "react-dom";
import "./Main.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

/* Method for rendering main page */
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
