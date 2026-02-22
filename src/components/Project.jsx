import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Flower from "../assets/flower.webp";
import Headset from "../assets/headset.webp";
import Eccom from "../assets/Eccom.webp";
import Travel from "../assets/Travel.webp";
import Cashmind from "../assets/Cashmind.webp";

const projects = [
  {
  title: "Chaindustry (Client Project)",
  img: "data:image/jpeg;base64,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",
  problem:
    "Chaindustry needed a clean, responsive frontend to present their platform clearly and support continuous updates as the product evolved.",
  tech: ["React", "Tailwind", "Frontend"],
  link: "https://www.chaindustry.io/",
  // no github – client work
},
 {
    title: "Collabora",
    img: "https://i.pinimg.com/736x/a3/d5/22/a3d522685ba5f133791fac60c97d8a13.jpg",
    problem:
      "Teams needed a shared workspace to manage tasks and collaborate efficiently.",
    tech: ["MERN Stack", "Tailwind"],
    link: "https://coollabora.netlify.app/",
    github: "https://github.com/Divinejay-001/Collabora",
  },
  
  {
    title: "Headset Product Website",
    img: Headset,
    problem:
      "A product landing page was needed to clearly present features and drive customer interest.",
    tech: ["React"],
    link: "https://headset-dcj.onrender.com",
    github: "https://github.com/Divinejay-001/Headset-website",
  },
  {
    title: "Shophere Ecommerce",
    img: Eccom,
    problem:
      "Users needed a full e-commerce platform to browse products, manage carts, and place orders.",
    tech: ["MERN Stack"],
    link: "https://shoppy-cx1x.onrender.com",
    github: "https://github.com/Divinejay-001/Shoppy",
  },
  {
    title: "VistaXplore",
    img: Travel,
    problem:
      "Travelers needed inspiration and easy access to curated travel destinations.",
    tech: ["React"],
    link: "https://vista-xplore.vercel.app/",
    github: "https://github.com/Divinejay-001/VistaXplore",
  },
  // {
  //   title: "CashMind (MoneyNest)",
  //   img: Cashmind,
  //   problem:
  //     "Individuals needed a simple way to track expenses and manage personal finances.",
  //   tech: ["MERN Stack", "Tailwind"],
  //   link: "https://moneynest001.netlify.app/",
  //   github: "https://github.com/Divinejay-001/MoneyNest",
  // },
  {
    title: "Flower App",
    img: Flower,
    problem:
      "Local flower vendors needed a simple online presence to showcase products and receive orders.",
    tech: ["React", "Tailwind"],
    link: "https://flower-store.onrender.com",
    github: "https://github.com/Divinejay-001/Flower-website",
  },
 
 
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0E0E11] text-[#FAFAFA]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-14"
        >
          Selected Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#16161A]
                border border-[#262626]
                rounded-xl
                overflow-hidden
                flex flex-col
                hover:border-[#14B8A6]
                transition
              "
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#14B8A6] mb-3">
                  {project.title}
                </h3>
               
                 {project.title.includes("Chaindustry") && (
  <span className=" mb-3 text-xs px-1 py-1 rounded-full bg-[#0E0E11] border border-[#262626] text-[#A1A1AA]">
    Client Project
  </span>
)}


                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3 py-1 text-xs
                        rounded-full
                        bg-[#0E0E11]
                        text-[#2DD4BF]
                        border border-[#262626]
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center gap-2
                      px-4 py-2 rounded-md
                      bg-[#14B8A6]
                      text-[#0E0E11]
                      text-sm font-medium
                      hover:bg-[#2DD4BF]
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center justify-center gap-2
                        px-4 py-2 rounded-md
                        border border-[#262626]
                        text-sm text-[#A1A1AA]
                        hover:text-[#FAFAFA]
                        hover:border-[#14B8A6]
                        transition
                      "
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
