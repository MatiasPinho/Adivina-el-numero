import "./App.css";
import { Header } from "./layouts/header/Header";
import { Hero } from "./components/sections/hero/Hero";
import { About } from "./components/sections/about/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Hero />
      </main>
    </>
  );
}

export default App;
