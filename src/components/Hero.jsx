import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Video */}
     <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-125 contrast-110"
>

        <source src="https://cdn.pixabay.com/video/2021/02/17/65495-514501835_tiny.mp4" 
        type="video/mp4" />
        {/* fallback image */}
        <img
          src="/heroimg.webp"
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white relative z-10"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Divinegift
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl relative z-10"
      >
        A Full-Stack Web Developer crafting sleek, scalable and modern web
        applications.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-lg transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-500/20 transition"
        >
          Hire Me
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-10"
      >
        <ArrowDownCircle className="text-purple-400 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
