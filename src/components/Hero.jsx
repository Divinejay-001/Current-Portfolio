import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
};

export default function Hero() {
   const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring for smooth, slow following
  const springX = useSpring(mouseX, { stiffness: 20, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 50 });

  // blobs move subtly with mouse (but smooth now)
  const blob1X = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const blob1Y = useTransform(springY, [0, window.innerHeight], [-20, 20]);
  const blob2X = useTransform(springX, [0, window.innerWidth], [20, -20]);
  const blob2Y = useTransform(springY, [0, window.innerHeight], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-[#0F0F28] text-center overflow-hidden"
    >
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://www.pexels.com/download/video/11387073/" type="video/mp4" />
      </video> */}
      <img
        src="https://i.pinimg.com/1200x/85/53/cc/8553cc1dcf8d1c1bacd5a1afca5f9b58.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      {/* Interactive Floating Blobs */}
    <motion.div
  className="absolute top-24 -left-20 w-96 h-14 bg-purple-500/30 blur-xl rounded-md  origin-center"
  style={{ x: blob1X, y: blob1Y }}
  animate={{ rotate: [45, 50, 45] }}
  transition={{ repeat: Infinity, duration: 8 }}
/>

      <motion.div
        className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-500/25 rounded-full blur-2xl"
        style={{ x: blob2X, y: blob2Y }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Hero Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl px-6"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Divinegift
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-400 mb-8"
        >
          A passionate web developer crafting{" "}
          <span className="text-purple-400 font-semibold">modern websites</span>{" "}
          with React, Node.js, and Web3.
        </motion.p>

        <motion.div
          variants={item}
          className="flex justify-center gap-6 flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(168,85,247,0.6)" }}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold transition"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(59,130,246,0.6)" }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition"
          >
            Let’s Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
