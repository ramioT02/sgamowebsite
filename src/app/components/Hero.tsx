import { motion } from 'motion/react';
import heroImage from 'figma:asset/85f484eeeb7f7c1ecc6c83f3883c4e055bfc9574.png';

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dolce Salato Esagerato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter uppercase"
          >
            DOLCE
            <br />
            <span className="text-white">SALATO</span>
            <br />
            <span className="text-[#F5E942]">ESAGERATO</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <button
              onClick={scrollToMenu}
              className="px-10 py-5 bg-[#F5E942] text-black text-xl font-black uppercase hover:bg-[#4A7C59] hover:text-white transition-all transform hover:scale-105"
            >
              SCOPRI IL MENU
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
