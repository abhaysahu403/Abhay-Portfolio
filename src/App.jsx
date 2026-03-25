import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import MouseGlow from './components/MouseGlow';

export default function App() {
  return (
    <div className="noise-bg min-h-screen" style={{ background: '#0f172a' }}>
      {/* Subtle scan line */}
      <div className="scan-line" />

      {/* Mouse-follow glow orb */}
      <MouseGlow />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />

      {/* Floating AI Chat */}
      <AIChat />
    </div>
  );
}