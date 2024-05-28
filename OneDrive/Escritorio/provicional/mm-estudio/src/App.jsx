import "./App.css";
import { Header } from "./layouts/header/Header";
import { Hero } from "./components/sections/hero/Hero";
import { About } from "./components/sections/about/About";
import { Services } from "./components/sections/services/Services";
import { Contact } from "./components/sections/contact/Contact";

import { useState, useEffect } from "react";
import { Ball } from "./components/ball/Ball";

function App() {
  const AppContent = () => {
    return (
      <>
        {/* <Ball /> */}
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
      </>
    );
  };

  return <AppContent />;
}

export default App;
