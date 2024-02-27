import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);