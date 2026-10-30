import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUp, Mail } from "lucide-react";

const BRAND = "Divinegift"; // change to "Divinora" if that is the name you want everywhere
const EMAIL = "divinegiftjohnson21@gmail.com";

const LINKS = ["Home", "About", "Services", "Projects", "Contact"];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divinegift-johnson-739977324/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/Divinejay-001", icon: FaGithub },
  { label: "X (Twitter)", href: "https://x.com/DivinoraHQ", icon: FaXTwitter },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg text-text">
      {/* Soft glow along the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="mb-4 inline-flex items-center gap-2 text-xl font-bold tracking-tight"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-accent" />
              {BRAND}
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Frontend developer building fast, clean websites and dashboards
              for startups, local businesses and agencies.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-xs">
              {LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted transition hover:text-text"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Connect
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => {
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-text">{BRAND}</span>. All rights
            reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 transition hover:border-primary/60 hover:text-text"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}