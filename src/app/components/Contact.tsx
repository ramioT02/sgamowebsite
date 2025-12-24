import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Dove Siamo",
    content: "Via San Giuseppe 2, Maglie",
    color: "#E3654A"
  },
  {
    icon: Phone,
    title: "Telefono",
    content: "+39",
    color: "#4A7C59"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@sgamo.it",
    color: "#F5E942"
  },
  {
    icon: Clock,
    title: "Orari",
    content: "Lun-Dom: 19:00 - 12:00",
    color: "#F5BFB8"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tighter">
            VIENI A
            <br />
            <span style={{ color: '#E3654A' }}>TROVARCI</span>
          </h2>
          <p className="text-xl font-black text-black uppercase tracking-wide">
            EST 2025 — BAGUÈ — CONTATTI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ backgroundColor: info.color }}
                className="p-8 shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-black mb-3 uppercase">
                    {info.title}
                  </h3>
                  <p className="text-black">{info.content}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-[#A8D5E2] px-12 py-10 shadow-2xl">
            <p className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6 leading-tight">
              PRONTO PER
              <br />
              UN'ESPERIENZA
              <br />
              <span style={{ color: '#E3654A' }}>ESAGERATA?</span>
            </p>
            <button className="mt-4 px-10 py-4 bg-[#F5E942] text-black text-xl font-black uppercase hover:bg-[#4A7C59] hover:text-white transition-all">
              ORDINA ORA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
