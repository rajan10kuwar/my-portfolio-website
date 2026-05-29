export default function PortfolioNavbar() {
  return (
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
            href="#projects"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            skills
          </a>

          <a
            href="#experience"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            About
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
  );
}
