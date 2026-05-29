export default function PortfolioNavbar() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white transition hover:opacity-80"
          >
            R<span className="text-gray-400">.</span>
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
              href="#projects"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              skills
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
              href="/RK_Resume.pdf\" target="_blank\"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Resume
            </a>
          </div>
        </nav>
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
        
        <section id="About" className="mx-auto min-h-screen max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">About</h2>
        </section>
        <section id="projects" className="mx-auto min-h-screen max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Projects</h2>
        </section>
        <section id="experience" className="mx-auto min-h-screen max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Experience</h2>
        </section>
        <section id="skills" className="mx-auto min-h-screen max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Skills</h2>
        </section>
        <section id="contact" className="mx-auto min-h-screen max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Contact</h2>
        </section>
        <footer></footer>
    </div>
  );
}
