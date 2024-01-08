// import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project";
import About from "./components/About";
import "../public/css/App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="flex flex-col justify-center" >
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<About />} />
          <Route path='/projects' exact element={<Project />} />
          <Route path='/contact' exact element={< Form />} />
          {/* <Route path='/resume' exact element={<Project />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
