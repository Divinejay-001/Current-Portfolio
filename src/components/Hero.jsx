import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const AUDIENCES = ["Startups", "Local businesses", "Agencies"];

const POINTS = [
  "Mobile-first and fully responsive",
  "Fast load times and clean code",
  "Clear communication, on-time delivery",
];

const STACK = ["React", "Tailwind CSS", "Framer Motion", "JavaScript"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-28 pb-16"
    >
      {/* Background: faded grid + glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--border) / 0.45) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border) / 0.45) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            Websites and dashboards that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              win you clients
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            I'm a frontend developer who turns ideas into fast, clean and
            responsive web apps, from landing pages that convert to full
            dashboards your team can rely on.
          </motion.p>

          <motion.ul variants={item} className="mb-9 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-text/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mb-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand/90"
            >
              Start a project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-border bg-surface/60 px-7 py-3.5 font-semibold text-text transition hover:-translate-y-0.5 hover:border-primary/60"
            >
              View my work
            </a>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <p className="text-sm text-muted">
              Built for{" "}
              {AUDIENCES.map((a, i) => (
                <span key={a}>
                  <span className="font-medium text-text">{a}</span>
                  {i < AUDIENCES.length - 2 ? ", " : i === AUDIENCES.length - 2 ? " and " : ""}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Visual: stylised dashboard window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-primary/10"
          >
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <div className="ml-4 h-5 flex-1 rounded-md bg-bg/70" />
            </div>

            <div className="grid grid-cols-[56px_1fr]">
              {/* Sidebar */}
              <div className="space-y-3 border-r border-border p-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-lg bg-bg/70" />
                ))}
              </div>

              {/* Content */}
              <div className="space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="space-y-2 rounded-xl border border-border bg-bg/60 p-3">
                      <div className="h-2 w-10 rounded bg-muted/30" />
                      <div className="h-4 w-14 rounded bg-primary/40" />
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="flex h-40 items-end gap-2 rounded-xl border border-border bg-bg/60 p-4">
                  {[40, 62, 48, 78, 58, 90, 70, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease: "easeOut" }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-brand/60 to-primary"
                    />
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="h-2.5 w-3/4 rounded bg-muted/20" />
                  <div className="h-2.5 w-1/2 rounded bg-muted/15" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating chip */}
          <motion.div
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
              <Check size={16} strokeWidth={3} />
            </span>
            <div>
              <p className="text-sm font-semibold text-text">Responsive</p>
              <p className="text-xs text-muted">Phone, tablet, desktop</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
