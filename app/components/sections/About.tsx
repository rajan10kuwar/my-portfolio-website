const aboutParagraphs = [
  "I'm a Computer Science graduate focused on software engineering roles, including frontend, backend, and full-stack development.",
  "I enjoy building responsive, scalable, and user-focused web applications while continuously learning modern technologies and development practices.",
  "My current interests include React, Next.js, TypeScript, backend architecture, and performance-focused application design.",
  "I'm currently seeking opportunities where I can contribute, grow as an engineer, and work on impactful software products.",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-4 mx-auto max-w-7xl px-4 pt-14">
      {/* Section Heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Who I Am
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          About Me
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          A brief look at my background, technical interests, and approach to
          building software.
        </p>
      </div>

      {/* About Content */}
      <div className="mt-10 max-w-3xl space-y-6">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8 text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
