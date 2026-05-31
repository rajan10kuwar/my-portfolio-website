"use client";

import { useState } from "react";

export default function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white transition hover:opacity-80"
            >
            Rajan kuwar<span className="text-gray-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rajan10kuwar "
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="/RK_Resume.pdf" target="_blank"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white md:hidden"
              >
              ☰
            </button>
          </div>
        </nav>
        {isOpen && (
    <div className="border-t border-white/10 bg-black md:hidden">
      <div className="flex flex-col px-6 py-4">
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="py-3 text-gray-300 transition hover:text-white"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="py-3 text-gray-300 transition hover:text-white"
        >
          Projects
        </a>

        <a
          href="#experience"
          onClick={() => setIsOpen(false)}
          className="py-3 text-gray-300 transition hover:text-white"
        >
          Experience
        </a>
        <a
          href="#education"
          onClick={() => setIsOpen(false)}
          className="py-3 text-gray-300 transition hover:text-white"
        >
          Education
        </a>
        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className="py-3 text-gray-300 transition hover:text-white"
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="py-3 text-gray-300 transition hover:text-white"
        >
          Contact
        </a>
      </div>
    </div>
)}
      </header>

      {/* Hero Section */}
        <section
          id="home"
          className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-20"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              Computer Science Graduate
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Full-Stack Developer Building Modern Web Applications.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              I build responsive, scalable, and production-ready applications
              using React, TypeScript, Next.js, and modern backend technologies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:text-white"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                'Next.js',
                'TypeScript',
                'React',
                'Tailwind CSS',
                'PostgreSQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="scroll-mt-8 mx-auto min-h-screen max-w-7xl px-6 py-24"
        >
          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              About Me
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Learn more about my background, interests, and goals as a software
              engineer.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 max-w-3xl">
            <p className="text-lg leading-8 text-gray-400">
              I'm a Computer Science graduate focused on software engineering
              roles including frontend, backend, and full-stack development.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I enjoy building responsive, scalable, and user-focused web
              applications while continuously learning modern technologies
              and development practices.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My current interests include React, Next.js, TypeScript,
              backend architecture, and performance-focused application
              design.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Currently seeking opportunities where I can contribute,
              grow as an engineer, and work on impactful software products.
            </p>
          </div>
        </section>

        <section id="projects" className=" scroll-mt-8 mx-auto min-h-screen max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Projects</h2>
        </section>
        <section id="experience" className="scroll-mt-8 mx-auto min-h-screen max-w-7xl px-6 py-24">
          {/* Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Professional Experience
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Hands-on experience across software engineering,
              cybersecurity, backend systems, and technical instruction.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 border-l border-white/10 pl-8 space-y-12">

            {/* Internship */}
            <div className="relative">
              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-white"></div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Technical/Cybersecurity Intern
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Technuf • Rockville, MD
                    </p>
                  </div>

                  <p className="text-sm text-gray-500">
                    July 2025 – Aug 2025
                  </p>
                </div>

                <ul className="mt-6 space-y-4 text-gray-300">
                  <li>
                    Developed a bi-directional MCP Server for Wazuh,
                    automating alert forwarding to Splunk and
                    Elasticsearch using async REST/Webhook connectors.
                  </li>

                  <li>
                    Built a FastAPI-based inbound adapter integrating
                    third-party CTI feeds into Wazuh in real time with
                    sub-2 second latency.
                  </li>

                  <li>
                    Engineered outbound connectors with retry logic
                    ensuring reliable schema transformation across
                    multiple SIEM platforms.
                  </li>

                  <li>
                    Wrote integration tests using Pytest and authored
                    technical documentation covering APIs, deployment,
                    and architecture workflows.
                  </li>
                </ul>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Python",
                    "FastAPI",
                    "Pytest",
                    "REST APIs",
                    "Splunk",
                    "Elasticsearch",
                    "Wazuh",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Teaching Assistant */}
            <div className="relative">
              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-white"></div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Teaching Assistant — Social & Ethical Issues in IT
                    </h3>

                    <p className="mt-2 text-gray-400">
                      UMBC • Catonsville, MD
                    </p>
                  </div>

                  <p className="text-sm text-gray-500">
                    Aug 2025 – Dec 2025
                  </p>
                </div>

                <ul className="mt-6 space-y-4 text-gray-300">
                  <li>
                    Led weekly discussion sections for a 60-student
                    course focused on cybersecurity ethics, digital
                    privacy, and intellectual property.
                  </li>

                  <li>
                    Managed grading and academic support for
                    approximately 30 students using Blackboard.
                  </li>

                  <li>
                    Delivered detailed feedback helping students improve
                    research quality and assignment performance.
                  </li>

                  <li>
                    Collaborated with instructors and co-TAs to maintain
                    consistent grading standards across evaluations.
                  </li>
                </ul>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Leadership",
                    "Communication",
                    "Research",
                    "Cybersecurity Ethics",
                    "Blackboard",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-8 mx-auto min-h-screen max-w-7xl px-6 py-24"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Academic Background
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Computer Science education focused on software engineering,
              systems, databases, cybersecurity, and modern application development.
            </p>
          </div>

        </section>

        <section id="skills" className="scroll-mt-8 mx-auto min-h-screen max-w-7xl px-6 py-24">
          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              Technical Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Technologies & Tools
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              A growing toolkit focused on modern software engineering,
              full-stack development, and scalable application design.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Languages */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold">Languages</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Python",
                  "JavaScript",
                  "Java",
                  "C++",
                  "SQL",
                  "HTML",
                  "CSS",
                ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:text-white"
                >
                  {skill}
                </span>
               ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold">Frontend</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:text-white"
                >
                  {skill}
                </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold">Backend</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Flask",
                  "REST APIs",
                  "Database Management",
                  "Authentication",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold">
                Tools & Workflow
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Git",
                  "GitHub",
                  "Jira",
                  "Agile (Scrum)",
                  "VS Code",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 mx-auto min-h-screen max-w-7xl px-6 py-24">
          {/* Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Let’s Connect
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I’m currently seeking software engineering opportunities
              including frontend, backend, and full-stack roles.
              Feel free to reach out for collaboration, networking,
              or potential opportunities.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Email */}
            <a
              href="mailto:rajan10kuwar@gmail.com"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Email
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                rajan10kuwar@gmail.com
              </h3>

              <p className="mt-4 text-gray-400">
                Best way to reach me directly regarding opportunities
                or collaboration.
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rajan10kuwar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                GitHub
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                https://github.com/rajan10kuwar
              </h3>

              <p className="mt-4 text-gray-400">
                Explore projects, repositories, and ongoing development
                work.
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajan-kuwar-8356982b2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                LinkedIn
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                https://www.linkedin.com/in/rajan-kuwar-8356982b2
              </h3>

              <p className="mt-4 text-gray-400">
                Connect professionally and stay updated on my experience
                and technical growth.
              </p>
            </a>
          </div>
        </section>
        <footer className="border-t border-white/10 py-8">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 md:flex-row">
    <p>© 2026 Rajan Kuwar. All rights reserved.</p>

    <div className="flex items-center gap-4">
      <a
        href="https://github.com/rajan10kuwar"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/rajan-kuwar-8356982b2"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        LinkedIn
      </a>

      <a
        href="mailto:rajan10kuwar@gmail.com.com"
        className="transition hover:text-white"
      >
        Email
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}