import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// Order matters: Administration is left of Technology everywhere.
// Active colours: neutral pages = ink, Administration = sage, Technology = slate.
const links = [
  { to: "/", label: "Home", active: "bg-[#C5FF5C] text-[#171717]" },
  { to: "/about", label: "About", active: "bg-[#C5FF5C] text-[#171717]" },
  {
    to: "/administration",
    label: "Administration",
    active: "bg-[#C5FF5C] text-[#171717]",
    dot: "bg-[#C5FF5C] text-[#171717]",
    activeDot: "bg-white",
  },
  {
    to: "/technology",
    label: "Technology",
    active: "bg-[#C5FF5C] text-[#171717]",
    dot: "bg-[#C5FF5C] text-[#171717]",
    activeDot: "bg-white",
  },
  { to: "/contact", label: "Contact", active: "bg-[#C5FF5C] text-[#171717]" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // lock page scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-3 z-50 mt-3 px-5">
      <div className="mx-auto max-w-[70rem]">
        {/* The blurred translucent background lives on ::before so the pill itself
            has no backdrop-filter (a fixed child would otherwise be trapped inside it). */}
        <nav
          aria-label="Main"
          className="relative isolate z-50 flex items-center justify-between rounded-full border border-line px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.07)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-bg/75 before:backdrop-blur-md before:content-[''] md:pl-6 md:pr-2"
        >
          <Link
            to="/"
            aria-label="Hasanull — home"
            className="font-display text-lg font-bold tracking-tight"
          >
            HASANULL<span className="text-admin">.</span>
            <span className="text-tech dark:text-tech-light">_</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.78rem] font-semibold transition-colors lg:px-4 lg:text-[0.85rem] ${
                      isActive ? l.active : "text-ink hover:bg-bg2"
                    }`}
                  >
                    {l.dot && (
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${isActive ? l.activeDot : l.dot}`}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side (desktop): theme switch + CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Link
              to="/contact"
              className="rounded-full bg-ink px-5 py-2.5 font-display text-[0.78rem] font-bold tracking-wide text-bg transition hover:-translate-y-0.5 lg:text-[0.85rem]"
            >
              LET’S TALK
            </Link>
          </div>

          {/* Right side (mobile): theme switch + hamburger (two lines → X) */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle className="h-9 w-9" />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative grid h-10 w-10 place-items-center rounded-full md:hidden"
            >
              <span className="relative block h-5 w-5">
                <span
                  className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded bg-ink transition-transform duration-300 ${
                    open ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded bg-ink transition-transform duration-300 ${
                    open ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-3 bg-bg px-8 pb-10 pt-24 transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {links.map((l) => {
          const isActive = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-display text-[clamp(1.8rem,8vw,2.6rem)] font-bold leading-none ${
                isActive ? l.active : "text-ink"
              }`}
            >
              {l.dot && (
                <span
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 rounded-full ${isActive ? l.activeDot : l.dot}`}
                />
              )}
              {l.label}
            </Link>
          );
        })}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 font-display text-base font-bold tracking-wide text-bg"
        >
          LET’S TALK
        </Link>
      </div>
    </header>
  );
}
