import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const EMAIL = "divinegiftjohnson21@gmail.com";
const PHONE_DISPLAY = "+234 912 706 4183";
const PHONE_LINK = "+2349127064183";
const WHATSAPP = "https://wa.me/2349127064183";
const LOCATION = "Uyo, Akwa Ibom State, Nigeria";

const CONTACTS = [
  { icon: Mail, title: "Email me", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, title: "Call me", value: PHONE_DISPLAY, href: `tel:${PHONE_LINK}` },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat with me directly", href: WHATSAPP, external: true },
  { icon: MapPin, title: "Location", value: LOCATION },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};
const view = { once: true, margin: "-80px" };

const fieldClass =
  "w-full rounded-2xl border border-border bg-bg/80 px-5 py-4 text-text placeholder:text-muted/70 outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/20";

function CircuitLine({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 140"
      fill="none"
      className={`pointer-events-none absolute hidden w-64 text-text/30 lg:block ${className}`}
    >
      <path d="M0 30 H80 L120 70 H220" stroke="currentColor" strokeWidth="1" />
      <circle cx="226" cy="70" r="4" stroke="currentColor" strokeWidth="1" />
      <path d="M0 60 H50 L90 100 H150" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="156" cy="100" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function ContactCard({ icon: Icon, title, value, href, external }) {
  const inner = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg text-text">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-text">{title}</span>
        <span className="block text-sm text-muted [overflow-wrap:anywhere]">{value}</span>
      </span>
      {href && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-border/70 text-text transition group-hover:bg-primary group-hover:text-bg">
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      )}
    </>
  );

  const base =
    "group flex items-center gap-3 rounded-2xl border border-border bg-surface/50 p-3 backdrop-blur transition sm:gap-4 sm:p-4";

  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} hover:border-primary/50 hover:bg-surface`}
    >
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}

const ContactSection = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_o2mv64m",
        "template_wnxfh8q",
        form.current,
        "-6O_x7lhtYIqwaClF"
      );
      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error(error?.text ?? error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-20 pt-24 text-text sm:pb-24"
    >
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 75% at 50% 0%, rgb(var(--primary) / 0.28), transparent 70%)",
        }}
      />

      {/* Circuit decorations */}
      <CircuitLine className="left-0 top-24" />
      <CircuitLine className="right-0 top-24 -scale-x-100" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Giant faded watermark: in normal flow so it can never overlap on small screens */}
        <div
          aria-hidden="true"
          className="pointer-events-none mb-8 select-none whitespace-nowrap bg-gradient-to-b from-text/25 to-transparent bg-clip-text text-center text-[17vw] font-black uppercase leading-[0.9] tracking-tight text-transparent sm:text-[7rem] md:text-[10rem] lg:mb-0 lg:text-[13rem]"
        >
          Contact
        </div>

        <div className="relative z-10 grid gap-10 lg:-mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Left: info */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={view}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 py-1.5 pl-1.5 pr-5 text-sm font-medium text-text backdrop-blur"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg">
                <MessageSquare size={15} aria-hidden="true" />
              </span>
              Contact
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={view}
              className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Get in touch
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={view}
              className="mb-10 max-w-md text-muted"
            >
              Have a project in mind, or ready for a website that brings in more
              customers? Send a message and I'll reply by email.
            </motion.p>

            <div className="space-y-3">
              {CONTACTS.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  custom={3 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={view}
                >
                  <ContactCard {...c} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={view}
            className="flex flex-col"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-surface/40 p-3 backdrop-blur"
            >
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-1">
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project: what you need, your goal, and any timeline"
                  required
                  className={`${fieldClass} min-h-[160px] flex-1 resize-none sm:min-h-[220px]`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
                {isLoading ? "Sending..." : "Send message"}
              </button>
            </form>

            <div aria-live="polite" className="mt-4">
              {status === "success" && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm text-emerald-300"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-2xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-300"
                >
                  <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Something went wrong. Please try again, or email me directly at {EMAIL}.
                </motion.p>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-text">Own a business?</span>{" "}
              I'm also building Astris, a 24/7 receptionist, and I'd love to
              hear how you handle customers today.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
