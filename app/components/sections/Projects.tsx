const projects = [
  {
    title: "Portfolio Website",
    description:
      "Designed and deployed a responsive portfolio website using Next.js, React, TypeScript, and Tailwind CSS to showcase projects, skills, and experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Built reusable React components and a mobile-first interface.",
      "Implemented SEO metadata and semantic HTML structure.",
      "Created responsive navigation with smooth scrolling.",
      "Deployed a production-ready application using Vercel.",
    ],
  },

  {
    title: "Student Course Registration & Admin Task Manager",
    description:
      "Built a full-stack web application for managing student course registration and administrative tasks using React.js, Flask, and MySQL.",
    technologies: ["React.js", "Flask", "MySQL", "REST APIs"],
    highlights: [
      "Developed CRUD functionality for managing student, course, and enrollment data through a React.js interface.",
      "Designed and implemented RESTful Flask APIs to handle application requests and database operations.",
      "Wrote SQL queries for creating, retrieving, updating, and deleting relational data in MySQL.",
      "Integrated the React frontend with Flask APIs using fetch() and React Hooks to retrieve and update data dynamically.",
      "Debugged frontend, API, and database interactions to ensure changes were reflected correctly across the application.",
    ],
  },

  {
    title: "Snakes and Ladders Game Engine",
    description:
      "Developed a C++ game engine using linked lists to manage board state, player movement, and randomized gameplay logic.",
    technologies: ["C++", "Linked Lists", "Game Logic", "Valgrind"],
    highlights: [
      "Implemented turn-based game mechanics and board logic.",
      "Built snake and ladder interaction systems.",
      "Created a randomized board generation system.",
      "Verified memory safety using Valgrind.",
    ],
  },
  {
    title: "Assembly Language String Manipulation Program",
    description:
      "Built a menu-driven x86_64 Assembly program integrated with C for string manipulation, transformation, and validation.",
    technologies: ["x86_64 Assembly", "C", "Low-level Programming"],
    highlights: [
      "Implemented assembly subroutines for string operations.",
      "Integrated C and Assembly code for hybrid execution.",
      "Built a menu-driven interface for user interaction.",
      "Performed incremental testing to improve reliability.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-4 mx-auto max-w-7xl px-4 pt-14">
      {/* Section Heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Featured Work
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          A selection of software engineering projects demonstrating full-stack
          development, systems programming, and low-level computing.
        </p>
      </div>

      {/* Projects */}
      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            {/* Description */}
            <p className="mt-3 leading-7 text-gray-400">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-6 space-y-3 text-gray-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-5 leading-7">
                  <span className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-gray-500" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
