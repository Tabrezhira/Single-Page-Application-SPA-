import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Pages/Nav";
import Hero from "./Pages/Hero";
import Rates from "./Pages/Rates";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto w-full overflow-x-hidden ">
      <Nav />

      <Hero />

      <Rates />

      <Portfolio />

      <Skills />

      <About />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
