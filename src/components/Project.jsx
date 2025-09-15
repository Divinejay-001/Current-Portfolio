import { useState } from "react";
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
  {
    title: "Collabora",
    img: 'https://i.pinimg.com/736x/a3/d5/22/a3d522685ba5f133791fac60c97d8a13.jpg',
    tech: ["MERN Stack", "Tailwind"],
    link: "http://coollabora.netlify.app",
    github: "https://github.com/Divinejay-001/Collabora",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#0F0F28] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative rounded-xl overflow-hidden border border-purple-500/20 shadow-lg cursor-pointer"
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
            >
              {/* Project Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Title & Tech always visible */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-purple-500/30 text-purple-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-300 mt-1 md:hidden">
                  Tap for details
                </p>
              </div>

              {/* Overlay for buttons */}
              <div
                className={`absolute inset-0 bg-black/70 flex flex-col justify-center items-center transition-opacity duration-300
                  ${activeIndex === i ? "opacity-100" : "opacity-0"} md:opacity-0 md:hover:opacity-100`}
              >
                <div className="flex gap-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-500/80 rounded-lg text-white hover:bg-purple-600 transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
