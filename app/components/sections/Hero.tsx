import { FiArrowDown } from "react-icons/fi";
import { LuDatabase } from "react-icons/lu";
import { RiContactsFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "SQL", icon: LuDatabase },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-5 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4"
    >
      <div className="max-w-4xl">
        {/* Introduction */}
        <p className="text-lg font-medium text-gray-300">
          Hi, I'm Rajan Kuwar.
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Software Engineer Building Modern Web Applications.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
          Computer Science graduate focused on building responsive, scalable,
          and user-focused applications with modern frontend and backend
          technologies.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-3 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            View Projects
            <FiArrowDown className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-2 text-md font-sm text-gray-300 transition hover:border-white/50 hover:text-white"
          >
            Contact Me
            <RiContactsFill className="h-4 w-4" />
          </a>
        </div>

        {/* Core Technologies */}
        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <span
                key={technology.name}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white/50 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {technology.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
