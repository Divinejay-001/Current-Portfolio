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
        "Modern, responsive UI built with React, Next.js, and Tailwind.",
    },
    {
      title: "Backend & APIs",
      description:
        "Secure, scalable APIs using Supabase, MongoDB, and Node.js.",
    },
    {
      title: "Web3 Integration",
      description:
        "Smart contracts and blockchain integration for dApps.",
    },
    {
      title: "UI Optimization",
      description:
        "Improving UX, accessibility, and performance.",
    },
  ];

  const stacks = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiHtml5 />, name: "HTML5" },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#0E0E11] text-[#FAFAFA]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-14"
        >
          What I Do
        </motion.h2>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                rounded-xl p-6
                bg-[#16161A]
                border border-[#262626]
                hover:border-[#14B8A6]
                transition
              "
            >
              <h3 className="text-lg font-semibold text-[#14B8A6] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-10"
        >
          Tech Stack
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-10 text-4xl text-[#14B8A6]">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              {stack.icon}
              <span className="text-sm text-[#A1A1AA]">
                {stack.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
