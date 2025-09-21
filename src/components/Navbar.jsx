// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Home", "About", "Services", "Projects", "Contact"];

const navEnter = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 110, damping: 16 } },
};

const mobilePanel = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
};

const mobileItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route/hash change (optional)
  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <motion.header
      variants={navEnter}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-3">
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Divinegift
          </motion.span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-8 items-center text-sm text-gray-200">
          {NAV_LINKS.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, color: "#a78bfa" }}
              transition={{ duration: 0.14 }}
              className="cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/40 text-gray-200"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden bg-black/95 border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <motion.a
                  key={item}
                  variants={mobileItem}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-purple-400 transition py-2"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
