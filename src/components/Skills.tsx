"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const skillGroups = [
  { title: "Programming Languages", items: resume.skills.languages },
  { title: "Web Technologies", items: resume.skills.web },
  { title: "Database", items: resume.skills.database },
  { title: "AI / ML", items: resume.skills.aiMl },
  { title: "Data Analysis", items: resume.skills.dataAnalysis },
];

const skillLevels: Record<string, number> = {
  Python: 92, Java: 80, JavaScript: 78, PHP: 70,
  HTML: 90, CSS: 85, Bootstrap: 82,
  MySQL: 80,
  "Machine Learning": 85, "Deep Learning": 80, "Generative AI": 78,
  CNN: 75, "Scikit-learn": 85, TensorFlow: 80,
  Pandas: 85, NumPy: 88, Matplotlib: 82,
};

const groupIcons = [
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
  "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
          {name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          className="relative h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 shadow-sm shadow-primary/20"
        >
          <div className="animate-data-flow absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-muted/30 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Skills</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/50" />
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={groupIcons[i]} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="space-y-4">
                {group.items.map((skill, j) => (
                  <SkillBar key={skill} name={skill} level={skillLevels[skill] || 70} index={j} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
