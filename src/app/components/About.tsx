import { motion } from 'motion/react';
import { ChefHat, Clock, Utensils } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: "Chef Esperti",
    description: "Il nostro team prepara ogni piatto con passione",
    color: "#E3654A"
  },
  {
    icon: Clock,
    title: "Servizio Veloce",
    description: "Fast food di qualità senza compromessi",
    color: "#4A7C59"
  },
  {
    icon: Utensils,
    title: "Ingredienti Freschi",
    description: "Solo prodotti selezionati e di prima scelta",
    color: "#F5E942"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-[#A8D5E2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tighter">
            CHI SIAMO
            <br />
            <span style={{ color: '#E3654A' }}>SGAMO</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-black text-black uppercase mb-4">
              EST 2025 — BAGUÈ
            </p>
            <p className="text-xl text-black/80">
              Sgamo nasce dalla passione per il buon cibo e il servizio veloce. 
              Crediamo che il fast food possa essere di alta qualità, preparato con cura 
              e servito con un sorriso. Il nostro motto? <span className="font-black">DOLCE, SALATO, ESAGERATO!</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{ backgroundColor: feature.color }}
                className="p-8 shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-black text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Slogan Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-[#F5E942] px-12 py-8 shadow-2xl">
            <p className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-tight">
              RICERCATE
              <br />
              <span style={{ color: '#4A7C59' }}>BONTÀ</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
