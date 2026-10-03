"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 120;

      let currentSection = "home";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);

        if (!section) continue;

        const sectionTop = (section as HTMLElement).offsetTop - offset;

        if (scrollPosition >= sectionTop) {
          currentSection = link.href.slice(1);
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-gray-900 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-2 items-center px-4 py-4 md:grid-cols-3">
        {/* Logo */}
        <div className="justify-self-start">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="text-xl font-bold tracking-tight transition hover:text-blue-400"
          >
            Rajan Kuwar<span className="text-blue-400">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden justify-center md:flex">
          <div className="flex items-center gap-6 lg:gap-12">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:transition-all ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="justify-self-end">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <a
              href="https://github.com/rajan10kuwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-white sm:px-4"
            >
              <span className="absolute inset-0 rounded-xl bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/70" />

              <FaGithub className="relative z-10 text-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </a>

            <a
              href="/RK_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex items-center justify-center rounded-lg p-2 text-xl text-white transition-colors hover:bg-white/10 hover:text-blue-400 md:hidden"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`border-t border-white/10 bg-black md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-3">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`border-b border-white/5 py-4 text-base transition-colors last:border-b-0 ${
                  isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
