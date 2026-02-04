import React, { useState } from 'react';
import { Menu, X, Printer, Sparkles, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/', isAnchor: false },
    { name: 'Produtos', path: '/#categories', isAnchor: true },
    { name: 'Assistente IA', path: '/#ai-assistant', isAnchor: true },
    { name: 'Sobre', path: '/#contact', isAnchor: true },
  ];

  const handleNavClick = (path: string, isAnchor: boolean) => {
    setIsOpen(false);
    
    if (isAnchor) {
      const id = path.replace('/#', '');
      
      if (location.pathname !== '/') {
        // If not on home, navigate home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If already on home, just scroll
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-gradient-to-tr from-cmyk-c via-cmyk-m to-cmyk-y p-1.5 rounded-md mr-2">
              <Printer className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white leading-none tracking-tight">Prisma</h1>
              <span className="text-[10px] text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase">Visual</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path, link.isAnchor)}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center focus:outline-none"
              >
                {link.name === 'Assistente IA' && <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cmyk-m" />}
                {link.name}
              </button>
            ))}
            
            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2"></div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => handleNavClick('/#contact', true)}
              className="bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Fale Conosco
            </button>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-500 dark:text-zinc-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path, link.isAnchor)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                {link.name}
              </button>
            ))}
            <button
               onClick={() => handleNavClick('/#contact', true)}
               className="block w-full text-center px-3 py-3 mt-4 bg-brand-600 text-white rounded-md font-bold"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
};