"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-muted/30 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Education</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Academic Background
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/50" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resume.education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {edu.period}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {edu.school}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30"
          >
            <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
