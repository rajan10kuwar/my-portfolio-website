const experiences = [
  {
    role: "Technical/Cybersecurity Intern",
    company: "Technuf",
    location: "Rockville, MD",
    period: "July 2025 – Aug 2025",
    highlights: [
      "Developed a bi-directional MCP Server for Wazuh, automating alert forwarding to Splunk and Elasticsearch using asynchronous REST and webhook connectors.",
      "Built a FastAPI-based inbound adapter that integrated third-party CTI feeds into Wazuh in real time.",
      "Engineered outbound connectors with retry logic to support reliable schema transformation across multiple SIEM platforms.",
      "Wrote integration tests using Pytest and authored technical documentation covering APIs, deployment, and architecture workflows.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Pytest",
      "REST APIs",
      "Splunk",
      "Elasticsearch",
      "Wazuh",
    ],
  },
  {
    role: "Teaching Assistant - Social & Ethical Issues in IT",
    company: "University of Maryland, Baltimore County (UMBC)",
    location: "Catonsville, MD",
    period: "Aug 2025 – Dec 2025",
    highlights: [
      "Led weekly discussion sections for a 60-student course focused on cybersecurity ethics, digital privacy, and intellectual property.",
      "Managed grading and academic support for approximately 30 students using Blackboard.",
      "Delivered detailed feedback that helped students improve research quality and assignment performance.",
      "Collaborated with instructors and co-TAs to maintain consistent grading standards across evaluations.",
    ],
    technologies: [
      "Leadership",
      "Communication",
      "Research",
      "Cybersecurity Ethics",
      "Blackboard",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-4 mx-auto max-w-7xl px-4 pt-14"
    >
      {/* Section Heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Professional Experience
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Hands-on experience across software engineering, cybersecurity,
          backend systems, and technical instruction.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mt-10 space-y-10 border-l border-white/10 pl-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="relative"
          >
            {/* Timeline Marker */}
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-white" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              {/* Role & Date */}
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{experience.role}</h3>

                  <p className="mt-2 text-gray-400">
                    {experience.company} • {experience.location}
                  </p>
                </div>

                <p className="shrink-0 text-sm text-gray-400">
                  {experience.period}
                </p>
              </div>

              {/* Responsibilities */}
              <ul className="mt-6 space-y-4 text-gray-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-5 leading-7">
                    <span className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-gray-500" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Technologies / Skills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
