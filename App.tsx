import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { CategoryPage } from './components/CategoryPage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 md:hidden z-40">
          <button 
            onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({behavior: 'smooth'});
                else window.open(`https://wa.me/5511999999999`, '_blank');
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md shadow-lg transition-colors"
          >
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;