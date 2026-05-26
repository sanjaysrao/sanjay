"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-muted/30 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Certifications</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Credentials
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {resume.certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-4 glass rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500 transition-transform group-hover:scale-110">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm leading-relaxed text-muted-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
