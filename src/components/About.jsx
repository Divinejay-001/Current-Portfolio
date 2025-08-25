import { motion } from "framer-motion";
import Img from "/heroimg.webp";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F0F28] text-gray-300 relative overflow-hidden">
      {/* Floating gradient behind image */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/50 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={Img}
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-purple-500/50 shadow-lg shadow-purple-500/30 object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="mb-6 text-gray-400 leading-relaxed text-lg">
            I’m a passionate web developer skilled in creating modern,
            responsive, and user-friendly websites. I love working with{" "}
            <span className="text-purple-400 font-semibold">React.js, Node.js, and Web3</span>{" "}
            to bring ideas to life.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "TailwindCSS", "Web3"].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#7c3aed/20" }}
                className="px-4 py-2 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 cursor-pointer transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
