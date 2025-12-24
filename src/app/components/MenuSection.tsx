import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "SGAMO BURGER",
    description: "Il nostro burger signature con doppia carne e salsa speciale",
    price: "€8.90",
    image: "https://images.unsplash.com/photo-1658822118306-8ee34f118600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBjbG9zZXVwfGVufDF8fHx8MTc2NjU3NDA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "#E3654A",
    textColor: "#4A7C59"
  },
  {
    id: 2,
    name: "PANINO BAGUÈ",
    description: "Panino croccante con ingredienti freschi e ricercati",
    price: "€7.50",
    image: "https://images.unsplash.com/photo-1636115502138-4b0340faf53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5pbmklMjBzYW5kd2ljaCUyMGl0YWxpYW58ZW58MXx8fHwxNzY2NTc0MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "#F5BFB8",
    textColor: "#F5E942"
  },
  {
    id: 3,
    name: "PASTA AL MOMENTO",
    description: "Pasta fresca preparata con ricette tradizionali",
    price: "€9.90",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGZvb2QlMjBpdGFsaWFufGVufDF8fHx8MTc2NjU3NDA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "#A8D5E2",
    textColor: "#E3654A"
  },
  {
    id: 4,
    name: "DOLCE FINALE",
    description: "Dessert artigianale per chiudere in dolcezza",
    price: "€5.50",
    image: "https://images.unsplash.com/photo-1655633584060-c875b9821061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc2NjUwNDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bgColor: "#F5E942",
    textColor: "#4A7C59"
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-4 uppercase tracking-tighter">
            IL NOSTRO
            <br />
            <span style={{ color: '#E3654A' }}>MENU</span>
          </h2>
          <p className="text-xl font-black text-black uppercase tracking-wide mt-8">
            EST 2025 — BAGUÈ — RICERCATE BONTÀ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              style={{ backgroundColor: item.bgColor }}
              className="relative overflow-hidden shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 
                    style={{ color: item.textColor }}
                    className="text-3xl font-black uppercase tracking-tight leading-tight"
                  >
                    {item.name}
                  </h3>
                </div>
                <p className="text-black text-lg mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-black">{item.price}</span>
                  <div className="text-xs font-black uppercase text-black/70">
                    EST 2025 — BAGUÈ
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
