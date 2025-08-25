import { motion } from "framer-motion";
import { Code2, Layout, Database } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-10 h-10 text-purple-400" />,
    title: "Frontend Development",
    desc: "Building modern, responsive, and user-friendly interfaces with React.js.",
  },
  {
    icon: <Database className="w-10 h-10 text-purple-400" />,
    title: "Backend Development",
    desc: "Creating scalable APIs & databases with Node.js and MongoDB.",
  },
  {
    icon: <Code2 className="w-10 h-10 text-purple-400" />,
    title: "Web3 Integration",
    desc: "Integrating smart contracts and blockchain solutions into apps.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 70 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(124,58,237,0.3)" }}
              className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0] }}
                className="flex justify-center mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
