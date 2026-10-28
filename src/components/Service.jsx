import { motion } from "framer-motion";
import { LayoutTemplate, Server, Link2, Gauge, ArrowRight } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
} from "react-icons/si";

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    description:
      "Modern, responsive websites and web apps built with React, Next.js and Tailwind that look sharp on every device.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Secure, scalable APIs and data layers using Supabase, MongoDB and Node.js to power your product.",
  },
  {
    icon: Link2,
    title: "Web3 Integration",
    description:
      "Smart contract and blockchain integration for dApps, connected to a smooth user interface.",
  },
  {
    icon: Gauge,
    title: "UI Optimization",
    description:
      "Better UX, accessibility and speed for an existing site, so more visitors stay and take action.",
  },
];

const STACKS = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiHtml5, name: "HTML5" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const view = { once: true, margin: "-80px" };

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-border bg-surface/30 py-24 text-text"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to get online and grow
          </h2>
          <p className="text-lg text-muted">
            From a first landing page to a full dashboard, I handle the build so
            you can focus on your business.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={view}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary/60"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-bg">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="mb-8 text-center"
        >
          <h3 className="text-xl font-semibold">Tools I build with</h3>
        </motion.div>

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {STACKS.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={view}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-muted transition hover:border-primary/60 hover:text-text"
            >
              <Icon className="text-xl text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-gradient-to-r from-brand/20 via-surface to-accent/10 p-8 text-center md:flex-row md:text-left"
        >
          <div>
            <h3 className="mb-1 text-xl font-semibold">Have a project in mind?</h3>
            <p className="text-muted">
              Tell me what you need and I'll get back to you with a plan.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand/90"
          >
            Start a project
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
