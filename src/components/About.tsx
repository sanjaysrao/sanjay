"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const infoCards = [
  { label: "Email", value: resume.basics.email, action: "email", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Phone", value: resume.basics.phone, action: "phone", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { label: "Location", value: resume.basics.location, action: "location", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Career Objective
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary/50" />
        </motion.div>

        <div className="mt-8 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {resume.summary}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                MCA graduate specializing in Generative Artificial Intelligence with hands-on experience in AI/ML, deep learning, and intelligent system development. Skilled in Python, TensorFlow, Scikit-learn, MySQL, and web technologies with practical exposure through multiple internships and industry projects.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Developed AI-driven solutions including MigrantConnect — an intelligent workforce analytics platform using OPTICS and K-Means clustering, an automated timetable generator using Google OR-Tools (CP-SAT), a CNN-based pneumonia detection system, and full-stack web applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Passionate about Artificial Intelligence, Machine Learning, data analytics, and building scalable solutions that solve real-world challenges. Seeking opportunities to contribute technical expertise, creativity, and problem-solving skills in AI/ML and software development roles.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {resume.skills.languages.slice(0, 3).map((skill) => (
                <span key={skill} className="rounded-full glass px-3 py-1 text-xs font-medium text-primary shadow-sm">
                  {skill}
                </span>
              ))}
              <span className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                +{resume.skills.languages.length + resume.skills.aiMl.length - 3} more
              </span>
            </div>

            <div className="glass rounded-2xl p-6 glow-border mt-6">
              <p className="text-lg font-medium italic text-foreground">
                &ldquo;Aspiring AI/ML Developer with a passion for Generative AI and building intelligent systems that solve real-world problems.
                &rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 border-y border-border py-6"
          >
            {infoCards.map((item) => {
              const handleClick = () => {
                switch (item.action) {
                  case "email":
                    navigator.clipboard.writeText(item.value);
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${item.value}`, '_blank');
                    break;
                  case "phone":
                    window.location.href = `tel:${item.value}`;
                    break;
                  case "location":
                    window.open(`https://www.google.com/maps/search/${encodeURIComponent(item.value)}`, '_blank');
                    break;
                }
              };
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={handleClick}
                  className="flex items-center gap-3 text-left transition-opacity hover:opacity-80"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 border-b border-border pb-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Age</p>
                <p className="text-sm font-medium text-foreground">23</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">DOB</p>
                <p className="text-sm font-medium text-foreground">25/06/2003</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Gender</p>
                <p className="text-sm font-medium text-foreground">Male</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Languages</p>
                <p className="text-sm font-medium text-foreground">{resume.languages.map(l => l.name).join(", ")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
