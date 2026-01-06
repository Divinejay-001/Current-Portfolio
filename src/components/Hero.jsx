import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-bg overflow-hidden"
    >
      {/* Soft ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
          Frontend Developer building{" "}
          <span className="text-primary">
            fast React websites & dashboards
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted mb-10">
          I help startups and students turn ideas into clean, responsive web
          applications — from landing pages to full dashboards.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-bg rounded-lg font-medium hover:bg-accent transition"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-border text-text rounded-lg hover:border-primary transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
