import { FiCode, FiMonitor, FiServer, FiTool } from "react-icons/fi";
import {
  SiCplusplus,
  SiCss,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { LuDatabase, LuKeyRound, LuWorkflow } from "react-icons/lu";

const skillCategories = [
  {
    name: "Languages",
    icon: FiCode,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: LuDatabase },
    ],
  },
  {
    name: "Frontend",
    icon: FiMonitor,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    icon: FiServer,
    skills: [
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: FiServer },
      { name: "Database Management", icon: LuDatabase },
      { name: "Authentication", icon: LuKeyRound },
    ],
  },
  {
    name: "Tools & Workflow",
    icon: FiTool,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jira", icon: SiJira },
      { name: "Agile (Scrum)", icon: LuWorkflow },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-4 mx-auto max-w-7xl px-4 pt-14">
      {/* Section Heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Technical Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Technologies & Tools
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          A growing toolkit focused on modern software engineering, full-stack
          development, and scalable application design.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;

          return (
            <article
              key={category.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* Category Heading */}
              <div className="flex items-center gap-3">
                <CategoryIcon className="h-6 w-6 text-gray-400" />

                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-white/50 hover:text-white"
                    >
                      <SkillIcon className="h-4 w-4" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
