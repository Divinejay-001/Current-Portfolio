import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Home", "About", "Services", "Projects", "Contact"];

const navEnter = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 110, damping: 18 },
  },
};

const mobilePanel = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
};

const mobileItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Background change after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and allow Escape to close when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <motion.header
      variants={navEnter}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-text"
          onClick={() => setOpen(false)}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-accent" />
          Divinegift
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface ring-1 ring-border"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand/90 md:inline-flex"
        >
          Hire me
          <ArrowRight size={16} aria-hidden="true" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="rounded-lg border border-border bg-surface/60 p-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobilePanel}
            className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((item) => {
                const id = item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    variants={mobileItem}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-lg font-medium transition-colors ${
                      active === id
                        ? "bg-surface text-text"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {item}
                  </motion.a>
                );
              })}
              <motion.a
                variants={mobileItem}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white"
              >
                Hire me
                <ArrowRight size={16} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
