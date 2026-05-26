"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

function ProjectCard({ project, index }: { project: typeof resume.projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={resume.basics.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group glass rounded-2xl overflow-hidden block transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={`/images/${index + 1}.png`}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View on GitHub
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.name}
            </h3>
            <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Projects</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work, from AI-powered platforms to full-stack applications.
          </p>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/50 mx-auto" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {resume.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
