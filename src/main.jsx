import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";
import { AnswerContext } from "./Context/ShowAnsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="history" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
