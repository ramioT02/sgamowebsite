import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl font-black uppercase tracking-tight" style={{ color: '#F5E942' }}>
              SGAMO
            </span>
            <p className="text-white/70 mt-4 uppercase tracking-wide">
              Est 2025 — Baguè
            </p>
            <p className="text-white/70 mt-2">
              Dolce, Salato, Esagerato
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-black mb-4 uppercase" style={{ color: '#E3654A' }}>
              Link Rapidi
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#F5E942] transition-colors uppercase font-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-[#F5E942] transition-colors uppercase font-black">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#F5E942] transition-colors uppercase font-black">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#F5E942] transition-colors uppercase font-black">
                  Contatti
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-black mb-4 uppercase" style={{ color: '#4A7C59' }}>
              Contatti
            </h3>
            <div className="space-y-2 text-white/70">
              <p>Via Roma 123, Roma</p>
              <p>+39 06 1234567</p>
              <p>info@sgamo.it</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/50 uppercase font-black tracking-wide">
            &copy; 2025 Sgamo Fast Food. Ricercate Bontà.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
