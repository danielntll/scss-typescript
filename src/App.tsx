import * as React from "react";
import "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------

  // FUNCTIONS ----------------------

  // RETURN -------------------------
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" exact element={<HomePage />} />
          <Route path="/components" exact element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
