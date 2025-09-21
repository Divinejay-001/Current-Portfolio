import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
} from "react-icons/si";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive, and user-friendly interfaces with React.js, Next.js, and TailwindCSS.",
    },
    {
      title: "Backend Development",
      description:
        "Creating secure, scalable APIs and databases with Supabase, Node.js, and MongoDB.",
    },
    {
      title: "Web3 Development",
      description:
        "Smart contracts, DApps, and blockchain integration to power the decentralized internet.",
    },
    {
      title: "Marketing & Growth",
      description:
        "Helping your brand grow with digital strategies, SEO, and audience-focused campaigns.",
    },
  ];

  const stacks = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiReact />, name: "React.js" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-[#0F0F28] text-gray-300 relative overflow-hidden"
    >
      {/* Floating background blobs */}
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6 text-center shadow-lg shadow-purple-500/10"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Logos */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-center text-white mb-8"
        >
          Tech Stack I Use
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-10 text-5xl text-purple-400">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              {stack.icon}
              <span className="text-sm text-gray-300">{stack.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
