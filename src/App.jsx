import { Analytics } from '@vercel/analytics/react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeProvider from "./context/ThemeProvider";


function App() {
  

  return (
    <ThemeProvider>
     <Header />
     <Hero />
     <Skills />
     <About />
     <Projects />
     <Contact />
     <Analytics />
    </ThemeProvider>
  )
}

export default App
