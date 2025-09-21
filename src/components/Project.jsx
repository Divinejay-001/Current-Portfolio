import { motion } from "framer-motion";
import Flower from "../assets/flower.webp";
import Headset from "../assets/headset.webp";
import Eccom from "../assets/Eccom.webp";
import Travel from "../assets/Travel.webp";
import Cashmind from "../assets/Cashmind.webp";

const projects = [
  {
    title: "Flower App",
    img: Flower,
    tech: ["Frontend", "React", "Tailwind"],
    link: "https://flower-store.onrender.com",
    github: "https://github.com/Divinejay-001/Flower-website",
  },
  {
    title: "Headset Website",
    img: Headset,
    tech: ["Frontend", "React"],
    link: "https://headset-dcj.onrender.com",
    github: "https://github.com/Divinejay-001/Headset-website",
  },
  {
    title: "Shophere Ecommerce",
    img: Eccom,
    tech: ["MERN Stack"],
    link: "https://shoppy-cx1x.onrender.com",
    github: "https://github.com/Divinejay-001/Shoppy",
  },
  {
    title: "VistaXplore",
    img: Travel,
    tech: ["Frontend", "React"],
    link: "https://vistaxplore.onrender.com",
    github: "https://github.com/Divinejay-001/VistaXplore",
  },
  {
    title: "CashMind (MoneyNest)",
    img: Cashmind,
    tech: ["MERN Stack", "Tailwind"],
    link: "https://moneynest001.netlify.app/",
    github: "https://github.com/Divinejay-001/MoneyNest",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0F0F28] text-gray-300 relative overflow-hidden">
      {/* Floating blobs */}
      <motion.div
        className="absolute -top-32 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-500/5 border border-purple-500/20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/10 flex flex-col justify-between"
            >
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.link} className="text-sm text-purple-400 hover:underline">Live →</a>
                  <a href={project.github} className="text-sm text-purple-400 hover:underline">GitHub →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
