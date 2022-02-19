import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HeroesApp } from "./HeroesApp";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>,
  document.getElementById("root")
);
