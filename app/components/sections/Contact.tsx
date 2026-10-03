"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type Errors = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Touched = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function validateField(field: keyof FormData, value: string) {
    const trimmed = value.trim();

    switch (field) {
      case "name":
        if (!trimmed) {
          return "Please enter your full name.";
        }

        if (!/^[A-Za-z]+(?:[ '-][A-Za-z]+)+$/.test(trimmed)) {
          return "Please enter your first and last name.";
        }

        if (trimmed.length < 6) {
          return "Full name is too short.";
        }

        if (trimmed.length > 60) {
          return "Full name is too long.";
        }

        return "";

      case "email":
        if (!trimmed) {
          return "Please enter your email address.";
        }

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(trimmed)) {
          return "Please enter a valid email address.";
        }

        return "";

      case "subject":
        if (!trimmed) {
          return "Please enter a subject.";
        }

        if (trimmed.length < 10) {
          return "Subject must be at least 10 characters.";
        }

        if (trimmed.length > 100) {
          return "Subject cannot exceed 100 characters.";
        }

        return "";

      case "message":
        if (!trimmed) {
          return "Please enter your message.";
        }

        if (trimmed.length < 20) {
          return "Message must contain at least 20 characters.";
        }

        if (trimmed.length > 1000) {
          return "Message cannot exceed 1000 characters.";
        }

        return "";

      default:
        return "";
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    if (touched[name as keyof Touched]) {
      setErrors({
        ...errors,
        [name]: validateField(name as keyof FormData, value),
      });
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    setErrors({
      ...errors,
      [name]: validateField(name as keyof FormData, value),
    });
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess("");
    setError("");

    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      subject: validateField("subject", form.subject),
      message: validateField("message", form.message),
    };

    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          website: form.website,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess("Your message has been sent successfully!");

      setTimeout(() => {
        setSuccess("");
      }, 5000);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });

      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-4 mx-auto max-w-7xl px-4 pt-4">
      <div className="max-w-3xl">
        <p className="pt-10 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Let’s Connect
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          I’m currently seeking software engineering opportunities including
          frontend, backend, and full-stack roles. Feel free to reach out for
          collaboration, networking, or potential opportunities.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <p className="mt-4 leading-8 text-gray-400">
            Interested in working together, discussing opportunities, or simply
            connecting? Feel free to send a message and I'll get back to you as
            soon as possible.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <MdAlternateEmail
                className="bg-[#6f6258] p-2 hover:bg-blue-500 hover:scale-115 rounded-full transition-all duration-300 text-white cursor-pointer"
                size={38}
              />

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:rajan10kuwar@gmail.com"
                  className="text-gray-300 transition hover:text-blue-400"
                >
                  rajan10kuwar@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CiLocationOn
                className="bg-[#e00f0c] p-2 hover:bg-blue-500 hover:scale-115 rounded-full transition-all duration-300 text-white cursor-pointer"
                size={38}
              />

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Location
                </p>

                <p className="text-gray-300 hover:text-blue-400">
                  Baltimore Maryland, United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="grid gap-6">
            {[
              {
                label: "Name",
                name: "name",
                type: "text",
                placeholder: "Your Full Name",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "youremail@example.com",
              },
              {
                label: "Subject",
                name: "subject",
                type: "text",
                placeholder: "Job Opportunity",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="mb-2 block text-sm text-gray-300">
                  {field.label} *
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof FormData]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-xl border bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500 ${
                    errors[field.name as keyof Errors] &&
                    touched[field.name as keyof Touched]
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                />

                {touched[field.name as keyof Touched] &&
                  errors[field.name as keyof Errors] && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors[field.name as keyof Errors]}
                    </p>
                  )}
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Message *
              </label>

              <textarea
                name="message"
                rows={6}
                value={form.message}
                placeholder="Tell me about your project or opportunity..."
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500 ${
                  errors.message && touched.message
                    ? "border-red-500"
                    : "border-white/10"
                }`}
              />

              <div className="mt-2 flex justify-between">
                {touched.message && errors.message && (
                  <p className="text-sm text-red-400">{errors.message}</p>
                )}

                <p className="text-sm text-gray-500">
                  {form.message.length}/1000
                </p>
              </div>
            </div>

            {error && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </p>
            )}

            {success && (
              <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                {success}
              </p>
            )}

            <button
              disabled={loading}
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />

              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
