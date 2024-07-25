import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { backgroundImage } from "./assets";
import Navbar from "./pages/components/navbar";
import Home from "./pages/components/home";
import About from "./pages/components/about";
import Services from "./pages/components/services";
import Portfolio from "./pages/components/portfolio";
import Experiences from "./pages/components/experiences";
import Contact from "./pages/components/contact";
import Testimonials from "./pages/components/testimonials";


function App() {


  return (
    <Router>
    <div className="text-white bg-cover bg-center h-[4000px] bg-fixed relative space-y-5" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="absolute inset-0 bg-black opacity-70 h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Home />
      <About /><br /><br />
      <Services />
      <Portfolio />
      <Experiences />
      <Contact />
      <Testimonials />
    </div>
  </div>
  </Router>
  )
}

export default App
