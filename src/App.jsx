// import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project";
import About from "./components/About";
import "../public/css/App.css";
import Form from "./components/Form";
import Resume from "./components/Resume";

function App() {
  const wrapNavbar = (item) => {
    return (
      <>
        <Header />
        {item}
      </>
    );
  };

  return (
    <div className=" h-dvh ">
      <Router>
        <Routes>
          <Route path="/" element={wrapNavbar(<About />)} />
          <Route path="/projects" element={wrapNavbar(<Project />)} />
          <Route path="/contact" element={wrapNavbar(<Form />)} />
          <Route path="/resume" element={wrapNavbar(<Resume />)} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
