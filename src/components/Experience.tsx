"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const companyLogos: Record<string, string> = {
  "Genial Digitech Pvt. Ltd - Project Intern": "GD",
  "AICTE (AWS Academy) - AI/ML Intern": "AWS",
  "Cognifyz Technologies - ML Intern": "CZ",
  "CodSoft Technologies - AI Intern": "CS",
  "LCC - Machine Learning Intern": "LCC",
};

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-32">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Experience</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Where I&apos;ve Worked
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/50" />
        </motion.div>

        <div className="relative mt-16">
          <div className="timeline-glow absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {resume.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-20 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {i === 0 && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div className="group glass rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {exp.company}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className={`mt-4 space-y-3 ${i % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                    {exp.description.map((desc, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                        className={`flex items-start gap-3 text-sm text-muted-foreground ${
                          i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-primary" />
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
