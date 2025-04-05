import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/css/aos.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
