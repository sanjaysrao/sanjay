"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const medals = [
  "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
];

const accentColors = [
  { border: "hover:border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-500" },
  { border: "hover:border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-500" },
  { border: "hover:border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-500" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden px-6 py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Achievements</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Awards & Recognition
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resume.achievements.map((achievement, i) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${accentColors[i].border} hover:shadow-xl`}
            >
              <div className="relative">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentColors[i].bg} ${accentColors[i].text} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={medals[i]} />
                  </svg>
                </div>

                {i === 0 && (
                  <div className="absolute -top-1 -right-1">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[8px] font-bold text-white shadow-lg">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </div>
                )}

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {achievement}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Achievement
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
