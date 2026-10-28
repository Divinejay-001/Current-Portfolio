import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import Headset from "../assets/headset.webp";
import Eccom from "../assets/Eccom.webp";
import Travel from "../assets/Travel.webp";

/* ------------------------------------------------------------------ */
/*  CONTENT: edit the text here, the layout below does not need to change */
/* ------------------------------------------------------------------ */

// Featured client project.
// Add a real screenshot: import Chaindustry from "../assets/Chaindustry.webp"
// then set img: Chaindustry. (The old inline base64 thumbnail was tiny and blurry.)
const featured = {
  title: "Chaindustry",
  tag: "Client project",
  img: null,
  challenge:
    "Chaindustry needed a clean, responsive frontend to present their platform clearly, and one that could keep up as the product evolved.",
  built:
    "I built and maintain the frontend in React and Tailwind, structured so new updates ship without breaking the existing experience.",
  tech: ["React", "Tailwind", "Frontend"],
  link: "https://www.chaindustry.io/",
};

// Current project. Replace every [bracketed] placeholder with the real details.
const astris = {
  title: "Astris",
  status: "Currently building",
  img: null,
  challenge:
    "Businesses lose customers when no one is there to answer, and most never learn which leads slipped away, what customers keep asking, or where things went wrong.",
  built:
    "A 24/7 receptionist that responds to customers around the clock, tracks every lead, and turns those conversations into analytics: frequently asked questions, what customers need, and where the business is losing them.",
  progress:
    "The first version of the analytics is built, giving businesses a clear view of their leads and customer questions.",
  next:
    "I'm talking directly to business owners to understand their real problems, so the next features solve what they actually need.",
  tech: [], // add your stack here, e.g. ["React", "Node.js"]. Empty hides the chips.
  link: "", // live or preview link, leave "" to hide the button
  github: "", // repo link, leave "" to hide the button
};

const projects = [
  {
    title: "Collabora",
    tag: "Full-stack build",
    img: "https://i.pinimg.com/736x/a3/d5/22/a3d522685ba5f133791fac60c97d8a13.jpg", // better: host it in /assets
    challenge:
      "Teams needed one shared workspace to manage tasks and collaborate without juggling several tools.",
    built:
      "A MERN-stack workspace where teams organise tasks and work together in one place, styled with Tailwind.",
    tech: ["MERN Stack", "Tailwind"],
    link: "https://coollabora.netlify.app/",
    github: "https://github.com/Divinejay-001/Collabora",
  },
  {
    title: "Shophere",
    tag: "E-commerce",
    img: Eccom,
    challenge:
      "Shoppers needed a complete online store to browse products, manage a cart and place orders.",
    built:
      "A full-stack e-commerce platform covering product browsing, cart management and order placement end to end.",
    tech: ["MERN Stack"],
    link: "https://shoppy-cx1x.onrender.com",
    github: "https://github.com/Divinejay-001/Shoppy",
  },
  {
    title: "VistaXplore",
    tag: "Frontend build",
    img: Travel,
    challenge:
      "Travelers wanted inspiration and quick access to curated destinations in one place.",
    built:
      "A React site that makes curated travel destinations easy to discover and browse.",
    tech: ["React"],
    link: "https://vista-xplore.vercel.app/",
    github: "https://github.com/Divinejay-001/VistaXplore",
  },
  {
    title: "Headset Product Website",
    tag: "Landing page",
    img: Headset,
    challenge:
      "A product needed a landing page that explains its features clearly and drives customer interest.",
    built:
      "A focused React landing page that puts the product's key features front and centre.",
    tech: ["React"],
    link: "https://headset-dcj.onrender.com",
    github: "https://github.com/Divinejay-001/Headset-website",
  },
  // Hidden for now. Move back into the list above to show them again.
  // CashMind (MoneyNest), Flower App
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};
const view = { once: true, margin: "-80px" };

function Cover({ img, title, className = "" }) {
  if (img) {
    return (
      <img
        src={img}
        alt={`${title} screenshot`}
        loading="lazy"
        className={`object-cover transition duration-500 group-hover:scale-105 ${className}`}
      />
    );
  }
  // Fallback when there is no screenshot yet
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-brand/30 via-surface to-accent/20 ${className}`}
    >
      <span className="text-6xl font-extrabold tracking-tight text-text/20">
        {title.charAt(0)}
      </span>
    </div>
  );
}

function Story({ steps }) {
  return (
    <div className="space-y-5 border-l border-border pl-5">
      {steps.map(({ label, text }) => (
        <div key={label} className="relative">
          <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-primary ring-4 ring-surface" />
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {label}
          </p>
          <p className="text-sm leading-relaxed text-muted">{text}</p>
        </div>
      ))}
    </div>
  );
}

function Chips({ items }) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-md border border-border bg-bg/60 px-3 py-1 text-xs font-medium text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Links({ link, github }) {
  if (!link && !github) return null;
  return (
    <div className="mt-auto flex flex-wrap gap-3 pt-2">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand/90"
        >
          View live site
          <FaExternalLinkAlt size={12} aria-hidden="true" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-primary/60"
        >
          <FaGithub aria-hidden="true" />
          Code
        </a>
      )}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-bg py-24 text-text"
    >
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Selected work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Real problems, built and shipped
          </h2>
          <p className="text-lg text-muted">
            Every project started with a problem someone needed solved. Here is
            what it was, and what I built to solve it.
          </p>
        </motion.div>

        {/* Featured client project */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="group mb-8 grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-2"
        >
          <div className="overflow-hidden">
            <Cover
              img={featured.img}
              title={featured.title}
              className="h-64 w-full lg:h-full lg:min-h-[340px]"
            />
          </div>
          <div className="flex flex-col gap-6 p-8">
            <div>
              <Tag>{featured.tag}</Tag>
              <h3 className="mt-4 text-2xl font-bold">{featured.title}</h3>
            </div>
            <Story
              steps={[
                { label: "The problem", text: featured.challenge },
                { label: "What I built", text: featured.built },
              ]}
            />
            <Chips items={featured.tech} />
            <Links link={featured.link} />
          </div>
        </motion.article>

        {/* Astris: current project */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="group relative mb-14 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-brand/15 via-surface to-surface p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-medium text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {astris.status}
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {astris.title}
                </span>
              </h3>
              <Chips items={astris.tech} />
              <Links link={astris.link} github={astris.github} />
              <a
                href="#contact"
                className="group/cta inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
              >
                Run a business? Tell me your biggest headache
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/cta:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            <Story
              steps={[
                { label: "The problem", text: astris.challenge },
                { label: "What I'm building", text: astris.built },
                { label: "Where it stands", text: astris.progress },
                { label: "What's next", text: astris.next },
              ]}
            />
          </div>
        </motion.article>

        {/* More projects */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          className="mb-8 text-xl font-semibold"
        >
          More projects
        </motion.h3>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              custom={i % 2}
              initial="hidden"
              whileInView="visible"
              viewport={view}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-primary/60"
            >
              <div className="overflow-hidden">
                <Cover img={p.img} title={p.title} className="h-52 w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <Tag>{p.tag}</Tag>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                </div>
                <Story
                  steps={[
                    { label: "The problem", text: p.challenge },
                    { label: "What I built", text: p.built },
                  ]}
                />
                <Chips items={p.tech} />
                <Links link={p.link} github={p.github} />
              </div>
            </motion.article>
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
            <h3 className="mb-1 text-xl font-semibold">
              Have a problem that needs solving?
            </h3>
            <p className="text-muted">
              Tell me about it and I'll show you how I'd build the solution.
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
