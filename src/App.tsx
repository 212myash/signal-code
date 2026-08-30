import "./App.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <Experience />
        <Project />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;