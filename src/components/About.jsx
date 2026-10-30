import { motion } from "framer-motion";
import { Gauge, MessagesSquare, Layers } from "lucide-react";


// Put your photo in /public (e.g. /public/divinegift.jpg) and use "/divinegift.jpg"
// A Pinterest hotlink can break or be blocked at any time.
const PHOTO = '/Portrait.png';

const SKILLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "Firebase",
  "Node.js",
  "MongoDB",
];

const VALUES = [
  {
    icon: Gauge,
    title: "Performance first",
    text: "Fast pages keep visitors on your site and help you rank.",
  },
  {
    icon: Layers,
    title: "Built to last",
    text: "Clean, organised code that is easy to extend as you grow.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "You always know what is being built and what comes next.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg py-24 text-text">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[0.8fr_1.2fr]">
        {/* Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-accent/40 blur-xl" />
            <div className="relative rounded-[2rem] border border-border bg-surface p-2">
              <img
                src={PHOTO}
                alt="Divinegift portrait"
                loading="lazy"
                className="h-72 w-64 rounded-3xl object-cover sm:h-80 sm:w-72"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-surface/95 px-4 py-2.5 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-text">Frontend Developer</p>
              <p className="text-xs text-muted">React &amp; modern web apps</p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            About me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            I build web products that are easy to use and easy to grow
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-4 text-lg leading-relaxed text-muted"
          >
            I'm a frontend developer focused on clean, responsive and scalable
            web applications. I enjoy working on products that solve real
            problems and are simple for people to use.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-8 text-lg leading-relaxed text-muted"
          >
            I mainly work with React and modern frontend tools to build landing
            pages, dashboards and small SaaS products, always with clarity,
            maintainability and performance in mind.
          </motion.p>

          {/* Values */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={4 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-xl border border-border bg-surface/60 p-4"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            variants={fadeUp}
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap gap-2"
          >
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-surface/60 px-3 py-1.5 text-sm text-muted transition hover:border-primary/60 hover:text-text"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
