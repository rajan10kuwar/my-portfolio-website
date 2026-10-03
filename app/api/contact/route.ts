import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactData = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validateContact(data: ContactData) {
  const name = data.name?.trim() || "";
  const email = data.email?.trim() || "";
  const subject = data.subject?.trim() || "";
  const message = data.message?.trim() || "";

  if (!name) {
    return "Please enter your full name.";
  }

  if (!/^[A-Za-z]+(?:[ '-][A-Za-z]+)+$/.test(name)) {
    return "Please enter your first and last name.";
  }

  if (name.length > 60) {
    return "Name is too long.";
  }

  if (!email) {
    return "Please enter your email.";
  }

  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    return "Please enter a valid email.";
  }

  if (!subject) {
    return "Please enter a subject.";
  }

  if (subject.length < 10) {
    return "Subject is too short.";
  }

  if (subject.length > 100) {
    return "Subject is too long.";
  }

  if (!message) {
    return "Please enter your message.";
  }

  if (message.length < 20) {
    return "Message must be at least 20 characters.";
  }

  if (message.length > 1000) {
    return "Message is too long.";
  }

  return "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, website } = await request.json();

    // Honeypot: silently accept submissions from bots.
    if (website) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 200,
        },
      );
    }

    // Server-side validation.
    const validationError = validateContact({
      name,
      email,
      subject,
      message,
    });

    if (validationError) {
      return NextResponse.json(
        {
          error: validationError,
        },
        {
          status: 400,
        },
      );
    }

    // Clean data before sending.
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      throw new Error("Email configuration missing.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailUser,
      replyTo: cleanEmail,
      subject: `Portfolio Contact: ${cleanSubject}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p>
          <strong>Name:</strong> ${escapeHtml(cleanName)}
        </p>

        <p>
          <strong>Email:</strong> ${escapeHtml(cleanEmail)}
        </p>

        <p>
          <strong>Subject:</strong> ${escapeHtml(cleanSubject)}
        </p>

        <hr />

        <p>
          ${escapeHtml(cleanMessage).replace(/\n/g, "<br />")}
        </p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Unable to send email.",
      },
      {
        status: 500,
      },
    );
  }
}
