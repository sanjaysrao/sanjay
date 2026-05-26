"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="absolute bottom-0 left-0 h-[1px]">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary/50 to-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Sanjay<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg glass hover:bg-primary/10 transition-all"
            aria-label="Menu"
          >
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass-strong md:hidden animate-fade-in">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
