import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";


const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/reviews" Component={Reviews}/>
        </Routes>
    </Router>
  );
};

export default App;
