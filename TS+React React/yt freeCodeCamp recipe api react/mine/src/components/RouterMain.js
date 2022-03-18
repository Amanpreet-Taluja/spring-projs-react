import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

function RouterMain() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
    </BrowserRouter>
  );
}

export default RouterMain;
