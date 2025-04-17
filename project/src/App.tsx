import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-[#DEDEBE] text-gray-800">
      <nav className="fixed top-0 w-full bg-[#DEDEBE]/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light tracking-[0.2em]">YUYA'S ILLUSTRATION</h1>
            <div className="flex gap-12 text-sm tracking-[0.2em]">
              <a href="#about" className="hover:text-gray-600 transition-colors duration-300">關於我</a>
              <a href="#portfolio" className="hover:text-gray-600 transition-colors duration-300">作品集</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors duration-300">聯絡我</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="bg-[#DEDEBE] py-12 mt-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-gray-600 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@yuya.art" className="hover:text-gray-600 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm tracking-[0.2em] text-gray-600">© 2025 YUYA'S ILLUSTRATION</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;