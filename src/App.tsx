import { ReactLenis } from '@studio-freight/react-lenis';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen">
        <ScrollProgressBar />
        <Navbar />
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;