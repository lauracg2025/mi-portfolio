import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Proyect from "./components/Proyect";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Proyect />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
