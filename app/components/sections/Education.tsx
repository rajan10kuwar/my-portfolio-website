const education = [
  {
    period: "Jan 2024 – Dec 2025",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Maryland, Baltimore County (UMBC)",
    gpa: "3.90 / 4.0",
    areas: [
      "Software Engineering",
      "Operating Systems",
      "Database Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Security",
    ],
  },
  {
    period: "Aug 2020 – May 2023",
    degree: "Associate of Science in Computer Science",
    institution: "Community College of Baltimore County (CCBC)",
    gpa: "3.86 / 4.0",
    areas: [
      "Programming Fundamentals",
      "Data Structures",
      "Object-Oriented Programming",
      "Mathematics",
      "Problem Solving",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-4 mx-auto max-w-7xl px-4 pt-14"
    >
      {/* Section Heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Education
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Academic Background
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Educational foundation in computer science, software engineering,
          systems, databases, cybersecurity, and modern application development.
        </p>
      </div>

      {/* Education Cards */}
      <div className="mt-10 space-y-6">
        {education.map((item) => (
          <article
            key={item.institution}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              {/* Education Details */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  {item.period}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">{item.degree}</h3>

                <p className="mt-2 text-gray-400">{item.institution}</p>
              </div>

              {/* GPA */}
              <div className="rounded-2xl border border-white/10 px-5 py-4 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  GPA
                </p>

                <p className="mt-1 text-xl font-semibold">{item.gpa}</p>
              </div>
            </div>

            {/* Coursework / Focus Areas */}
            <div className="mt-8 flex flex-wrap gap-3">
              {item.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
