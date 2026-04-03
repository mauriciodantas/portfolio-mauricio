/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PixelBackground } from './components/PixelBackground';

export default function App() {
  return (
    <LanguageProvider>
      {/* Alien Isolation — CRT Monitor Overlays */}
      <div className="crt-edge" />
      <div className="crt-noise" />
      <div className="crt-glitch" />
      <div className="crt-sweep" />
      <div className="crt-sweep-2" />
      <div className="crt-overlay" />

      <div className="relative scanlines">
        <PixelBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
