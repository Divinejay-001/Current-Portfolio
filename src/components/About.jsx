import { motion } from "framer-motion";
import Img from "/heroimg.webp";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F0F28] text-gray-300 relative overflow-hidden">
      {/* Floating Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-16 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Image */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <img
            src={Img}
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-purple-500/50 shadow-lg shadow-purple-500/30 object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div variants={item}>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="mb-6 text-gray-400 leading-relaxed text-lg">
            I’m a passionate web developer skilled in creating modern, responsive, and user-friendly websites. I love working with{" "}
            <span className="text-purple-400 font-semibold">React.js, Node.js, and Web3</span> to bring ideas to life.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React.js", "Supabase", "JavaScript", "Tailwind", "HTML", "MongoDB"].map((skill, i) => (
              <motion.span
                key={skill}
                variants={item}
                whileHover={{ scale: 1.1, backgroundColor: "#7c3aed/20" }}
                className="px-4 py-2 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 cursor-pointer transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
