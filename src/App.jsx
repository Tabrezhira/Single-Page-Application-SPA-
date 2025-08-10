import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Pages/Nav";
import Hero from "./Pages/Hero";
import Rates from "./Pages/Rates";
import Portfolioo from "./Pages/Portfolioo";
import Skills from "./Pages/Skills";
import Kaleb from "./Pages/Kaleb";
import Life from "./Pages/Life";
import Footer from "./Pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto w-full overflow-x-hidden ">
      <Nav />
      <section id="home">
        <Hero />
      </section>

      <Rates />
      <section id="portfolio">
        <Portfolioo />
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <Kaleb />
      </section>

      <section id="contact">
        <Life />
      </section>

      <Footer />
    </main>
  );
}

export default App;
