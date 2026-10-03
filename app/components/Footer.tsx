import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rajan10kuwar",
    icon: FaGithub,
    hover: "hover:border-white/30 hover:bg-white/10 hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rajan-kuwar",
    icon: FaLinkedin,
    hover: "hover:border-blue-500 hover:bg-blue-500/20 hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:rajan10kuwar@gmail.com",
    icon: FaEnvelope,
    hover: "hover:border-red-400 hover:bg-red-400/20",
    iconHover: "group-hover:text-red-500",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Rajan Kuwar. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map(({ name, href, icon: Icon, hover, iconHover }) => (
            <a
              key={name}
              href={href}
              target={name !== "Email" ? "_blank" : undefined}
              rel={name !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={name}
              className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 ${hover}`}
            >
              <Icon
                className={`text-xl transition-all duration-300 group-hover:scale-110 ${
                  iconHover ?? ""
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
