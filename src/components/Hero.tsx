"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { resume } from "@/data/resume";

const roles = ["AI/ML Developer", "Generative AI Specialist", "Deep Learning Engineer", "Problem Solver"];
const codeLines = [
  "import neural_network as nn",
  "model = nn.Sequential()",
  "model.add(Dense(256, activation='relu'))",
  "model.compile(optimizer='adam')",
  "model.fit(X_train, y_train, epochs=100)",
  "# Accuracy: 98.7% 🚀",
];

const marqueeSkills = [
  "Python", "Java", "JavaScript", "TypeScript", "PHP",
  "React", "Next.js", "Node.js", "HTML/CSS", "Tailwind",
  "TensorFlow", "Scikit-learn", "PyTorch", "Machine Learning",
  "Deep Learning", "Generative AI", "MySQL", "Pandas",
  "NumPy", "Matplotlib", "Docker", "Git",
];

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(() =>
    Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 20}s`,
      size: Math.random() > 0.5 ? "w-1.5 h-1.5" : "w-1 h-1",
    })),
  []);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${p.size}`}
          style={{
            backgroundColor: "var(--primary)",
            left: p.left,
            top: p.top,
            opacity: 0.5,
            animation: `slow-drift ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const b = resume.basics;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  const [codeChars, setCodeChars] = useState(0);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayText === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayText === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            deleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        deleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  useEffect(() => {
    if (!showCode) return;
    const line = codeLines[codeIndex];
    if (codeChars < line.length) {
      const t = setTimeout(() => setCodeChars((c) => c + 1), 30);
      return () => clearTimeout(t);
    } else if (codeIndex < codeLines.length - 1) {
      const t = setTimeout(() => {
        setCodeIndex((i) => i + 1);
        setCodeChars(0);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [showCode, codeIndex, codeChars]);

  useEffect(() => {
    const t = setTimeout(() => setShowCode(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="animate-float absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-float-delayed absolute bottom-20 right-[10%] h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-float-slow absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-morph bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
      </div>

      <FloatingParticles />

      <div className="flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:text-left">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              {b.name.split(" ")[0]}{" "}
              <span className="text-primary glow-text">
                {b.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-4 h-8"
          >
            <span className="text-xl text-muted-foreground sm:text-2xl">
              {displayText}
              <span
                className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary"
                style={{ animation: "type-cursor 1s step-end infinite" }}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {b.headline}
          </motion.p>

          <div className="mt-10 mb-16 flex flex-wrap items-center justify-center gap-4 lg:justify-start animate-fade-in animation-delay-500">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(b.email);
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${b.email}`, '_blank');
                const el = document.getElementById('email-copied-toast');
                if (el) {
                  el.classList.remove('opacity-0', 'translate-y-2');
                  el.classList.add('opacity-100', 'translate-y-0');
                  setTimeout(() => {
                    el.classList.add('opacity-0', 'translate-y-2');
                    el.classList.remove('opacity-100', 'translate-y-0');
                  }, 2000);
                }
              }}
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Get in Touch</span>
            </button>
            <div
              id="email-copied-toast"
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium text-foreground shadow-xl transition-all duration-300 opacity-0 translate-y-2 pointer-events-none"
            >
              <svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Email copied to clipboard!
            </div>
            <a
              href={b.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full glass px-8 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-primary/10 hover:text-primary hover:shadow-md"
            >
              <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={b.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full glass px-8 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-primary/10 hover:text-primary hover:shadow-md"
            >
              <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="hidden w-full max-w-sm shrink-0 lg:block"
        >
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-primary/30 opacity-30 blur-lg transition-all duration-500 group-hover:opacity-70" />
            <div className="relative rounded-2xl glass p-5 glow-border">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-[10px] font-medium text-muted-foreground">neural_network.py</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-3 w-4 text-right text-muted-foreground select-none">{i + 1}</span>
                    <span
                      className={`${
                        line.startsWith("#")
                          ? "text-green-400"
                          : line.includes("import") || line.includes("from")
                          ? "text-purple-400"
                          : line.includes("=") && !line.includes("==")
                          ? "text-blue-300"
                          : "text-foreground"
                      }`}
                    >
                      {showCode && i < codeIndex
                        ? line
                        : showCode && i === codeIndex
                        ? line.slice(0, codeChars)
                        : ""}
                      {showCode && i === codeIndex && codeChars < line.length && (
                        <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-primary" />
                      )}
                    </span>
                  </div>
                ))}
                {showCode && codeIndex === codeLines.length - 1 && codeChars >= codeLines[codeLines.length - 1].length && (
                  <div className="mt-2 flex items-center gap-2 border-t border-border pt-2 text-green-400">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px]">Training complete — 98.7% accuracy</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Skills */}
      <div className="absolute bottom-24 left-0 right-0 animate-fade-in animation-delay-600">
        <p className="mb-4 text-center text-xs text-muted-foreground tracking-widest uppercase">
          Technologies I work with
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
              <div key={idx} className="flex-shrink-0 px-8 py-3">
                <span className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
