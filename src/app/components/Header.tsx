import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5E942] shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <span className="text-4xl md:text-5xl font-black text-[#4A7C59] tracking-tight uppercase">
              SGAMO
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-6"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors uppercase"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors uppercase"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors uppercase"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-[#E3654A] text-white font-black uppercase hover:bg-[#4A7C59] transition-all"
            >
              Contatti
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4"
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors text-left py-2 uppercase"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors text-left py-2 uppercase"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors text-left py-2 uppercase"
              >
                Chi Siamo
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-lg font-black text-black hover:text-[#4A7C59] transition-colors text-left py-2 uppercase"
              >
                Contatti
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
