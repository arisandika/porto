import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import TransitionLink from "@/components/common/transition-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ari Sandika, a Fullstack Web Developer with expertise in Laravel, WordPress, React, Next.js, and scalable business systems.",
  alternates: {
    canonical: "/about",
  },
};

const skills = {
  Languages: ["PHP", "JavaScript", "TypeScript"],
  "Frameworks & Libraries": [
    "Laravel",
    "CodeIgniter",
    "WordPress",
    "Next.js",
    "React.js",
    "Express.js",
    "Tailwind CSS",
    "jQuery",
  ],
  "Backend & Architecture": [
    "REST APIs",
    "MVC",
    "Service Layer Architecture",
    "RBAC",
    "Session Management",
    "Caching Management",
    "Payment Gateway Integration",
  ],
  Database: [
    "PostgreSQL",
    "MySQL",
    "Database Transactions",
    "Row-Level Locking",
    "Query Optimization",
    "ERD Design",
  ],
  Security: [
    "HMAC-SHA256",
    "Webhook Security",
    "CSRF Protection",
    "XSS/SQL Injection Prevention",
    "API Security",
  ],
  "Infrastructure & DevOps": [
    "VPS",
    "Ubuntu",
    "Apache",
    "Cloudflare",
    "SSL/SSH",
    "CI/CD",
    "Cron Jobs",
  ],
  "Tools & Workflow": [
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Figma",
    "Adobe XD",
    "Agile Development",
  ],
};

const experiences = [
  {
    role: "Full-Stack Web Developer",
    company: "PT. LYRID PRIMA INDONESIA",
    location: "North Jakarta",
    date: "Jun 2026 – Present",
    achievements: [
      "Architected and developed a modular backend platform using PHP and PostgreSQL, with custom routing, dynamic parameters, RESTful APIs, authentication, and database services.",
      "Integrated a third-party payment gateway with HMAC-SHA256 webhook verification, IP whitelisting, and idempotent callbacks to secure transaction processing and data integrity.",
      "Developed user authentication and access management covering registration, multi-step email verification, password recovery, OAuth 2.0 single sign-on, database-backed sessions, CSRF protection, and role-based access control.",
      "Built core wallet transaction logic with dynamic value conversion, fee calculation, transaction limits, and automated cleanup of stale records to maintain financial and database consistency.",
      "Developed item distribution services with multi-condition business rules and session-scoped state management to ensure consistent transaction outcomes.",
      "Implemented high-concurrency PostgreSQL transactions with PgBouncer connection pooling, row-level locking, batch processing, and deadlock prevention to maintain data integrity and query performance.",
      "Designed relational database schemas for user assets, ownership states, and transaction history with optimized queries for reliable and low-latency data access.",
      "Built scheduled reconciliation jobs for transaction monitoring and recovery to improve reliability and consistency for pending financial transactions.",
    ],
  },
  {
    role: "Full-Stack Web Developer — University–Industry Graduation Project",
    company: "PT. NEXT GENERATION SOLUTIONS",
    location: "South Tangerang",
    date: "Sep 2025 – Apr 2026",
    achievements: [
      "Developed a multi-module ERP platform using Laravel, Filament, MySQL, and Tailwind CSS, covering 8+ business modules including HR, Attendance, CRM, Sales, Procurement, Inventory, Finance, Marketing, and Project Management.",
      "Handled end-to-end application development from requirements gathering and business workflow analysis to ERD design, backend/frontend implementation, and CI/CD deployment.",
      "Implemented role-based access control and authentication using Filament Shield and Spatie Permission to manage multi-role system access.",
      "Developed and maintained RESTful APIs to integrate business workflows and data across multiple ERP modules.",
    ],
  },
  {
    role: "Front-End Web Developer Intern",
    company: "PT. RHP CIPTA DIGITAL",
    location: "Remote — Jakarta",
    date: "Aug 2025 – Jan 2026",
    achievements: [
      "Developed 12+ production-ready WordPress websites from Figma designs using Kadence and Divi with responsive, pixel-accurate interfaces.",
      "Optimized frontend performance to achieve Google PageSpeed scores of 85–95+ through lazy loading, caching, and asset compression.",
      "Extended WordPress functionality using Advanced Custom Fields (ACF), custom post types, and reusable component structures.",
    ],
  },
  {
    role: "Full-Stack Web Developer Intern",
    company: "PT. TOFFEE INTERNATIONAL",
    location: "West Jakarta",
    date: "Feb 2025 – May 2025",
    achievements: [
      "Developed an internal project management system using Laravel and Filament to improve project visibility and team collaboration.",
      "Implemented task management, KPI tracking, and role-based access control to support structured operational workflows.",
      "Designed relational database structures and ERDs and contributed to application architecture decisions.",
      "Resolved application issues and improved existing features to enhance system stability and maintainability.",
    ],
  },
  {
    role: "Full-Stack Web Developer Intern",
    company: "PT. SEPULUH SEBELAS MEDIA",
    location: "North Jakarta",
    date: "Jul 2024 – Jan 2025",
    achievements: [
      "Developed a career portal with automated psychometric testing using CodeIgniter and REST APIs to streamline candidate screening workflows.",
      "Designed API-based data flows for candidate records and test results to support cross-system integration.",
      "Implemented automated email workflows to streamline candidate onboarding and deliver timely recruitment notifications.",
    ],
  },
];

export default function AboutPage() {
  // SEO OPTIMIZATION: ProfilePage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Ari Sandika",
      jobTitle: "Fullstack Web Developer",
      email: "arisndk36@gmail.com",
      telephone: "+6288210508008",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tangerang",
        addressRegion: "Banten",
        addressCountry: "ID",
      },
      url: siteConfig.url,
      sameAs: [
        "https://github.com/arisandika",
        "https://linkedin.com/in/ari-sandika",
        "https://arisandika.vercel.app",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universitas Pamulang",
      },
    },
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative flex flex-col justify-center pt-36 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-container md:p-4 w-full">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="overline-wrapper">
              <div className="icon-section-dot"></div>
              <div className="text-projectpage-overline">ABOUT ME</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white font-neue">
              I build scalable <span className="text-hero-serif">systems</span>{" "}
              <br className="hidden md:block" />
              for real business operations.
            </h1>

            <div className="flex flex-col gap-6 md:flex-row md:gap-12 mt-4 pt-8 border-t border-[#f2f2f21a] border-dotted">
              <div className="flex flex-col gap-1 shrink-0 md:w-1/3">
                <p className="text-sm text-yellow-300">Ari Sandika</p>
                <p className="text-sm text-white/50">Tangerang, Banten, ID</p>
                <p className="text-sm text-white/50">+62 882-1050-8008</p>
                <div className="flex gap-4 mt-3 text-sm text-white/70 flex-wrap">
                  <TransitionLink
                    href="mailto:arisndk36@gmail.com"
                    target="_blank"
                    className={`inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group`}
                  >
                    <span>Email</span>
                    <svg
                      className="w-3 h-3 text-yellow-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </TransitionLink>
                  <TransitionLink
                    href="https://linkedin.com/in/ari-sandika"
                    target="_blank"
                    className={`inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group`}
                  >
                    <span>LinkedIn</span>
                    <svg
                      className="w-3 h-3 text-yellow-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </TransitionLink>
                  <TransitionLink
                    href="https://github.com/arisandika"
                    target="_blank"
                    className={`inline-flex items-center gap-1 text-sm transition-colors duration-300 border-b border-dotted w-fit text-white/80 hover:text-yellow-300 border-white/20 hover:border-yellow-300/50 group`}
                  >
                    <span>GitHub</span>
                    <svg
                      className="w-3 h-3 text-yellow-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </TransitionLink>
                </div>
              </div>

              <div className="text-sm leading-relaxed text-white/80">
                <p>
                  Full-Stack Web Developer with 2+ years of hands-on experience building and delivering production
                  web applications across business, commerce, recruitment, ERP, and internal operations. I specialize
                  in PHP, JavaScript, and TypeScript, with strong experience across Laravel, React, Next.js,
                  WordPress, PostgreSQL, and MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-container w-full md:px-4 flex flex-col gap-24">
        <section className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-sm tracking-widest text-white/40 uppercase">
              Key Skills
            </h2>
            <div className="flex-1 h-px border-b border-[#f2f2f21a] border-dotted"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-3">
                <h3 className="text-sm text-white/90">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 text-[12px] text-white/60 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-sm tracking-widest uppercase text-white/40">
              Work Experience
            </h2>
            <div className="flex-1 h-px border-b border-[#f2f2f21a] border-dotted"></div>
          </div>

          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row">
                <div className="absolute left-3 md:left-3/12 top-0 bottom-0 flex flex-col items-center -translate-x-1/2 z-0">
                  <div
                    className={`w-px border-l border-[#f2f2f259] border-dotted ${index === 0 ? "h-2 opacity-0" : "h-2"}`}
                  ></div>

                  <div className="relative shrink-0 z-10 icon-section-dot"></div>

                  <div
                    className={`w-px border-l border-[#f2f2f259] border-dotted flex-1 ${index === experiences.length - 1 ? "opacity-0" : ""}`}
                  ></div>
                </div>

                <article className="flex flex-col w-full gap-4 z-10 md:flex-row md:gap-0 pb-8">
                  <div className="flex flex-col pl-10 shrink-0 gap-1 md:w-4/12 md:text-left md:pr-14 md:pl-0">
                    <time className="text-sm text-yellow-300/80">
                      {exp.date}
                    </time>
                    <p className="text-sm text-white/40">{exp.location}</p>
                  </div>

                  <div className="flex flex-col gap-3 pl-10 md:pl-0 md:w-8/12">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base text-white">{exp.role}</h3>
                      <p className="text-sm text-white/60">{exp.company}</p>
                    </div>
                    <ul className="flex flex-col mt-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-white/70 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 -mt-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h2 className="text-sm tracking-widest text-white/40 uppercase">
                Education
              </h2>
              <div className="flex-1 h-px border-b border-[#f2f2f21a] border-dotted"></div>
            </div>
            <article className="flex flex-col gap-1">
              <h3 className="text-sm text-white">Universitas Pamulang</h3>
              <p className="text-sm text-white/60">
                Bachelor of Computer Science — Informatics Engineering
              </p>
              <time className="text-sm text-yellow-300/80 mt-2">
                Aug 2022 – Aug 2026
              </time>
              <p className="text-sm text-white/40">South Tangerang</p>
            </article>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h2 className="text-sm tracking-widest text-white/40 uppercase">
                Certifications
              </h2>
              <div className="flex-1 h-px border-b border-[#f2f2f21a] border-dotted"></div>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1">
                <h3 className="text-sm text-white">
                  Certified Web Developer Scheme
                </h3>
                <span className="text-sm text-yellow-300/80">
                  BNSP, 2026
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-sm text-white">Junior Web Developer</h3>
                <span className="text-sm text-yellow-300/80">
                  Digital Talent Scholarship, Kominfo, 2023
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-sm text-white">Junior Web Developer</h3>
                <span className="text-sm text-yellow-300/80">
                  BNSP, 2023
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-sm text-white">
                  Front-End Developer Virtual Internship
                </h3>
                <span className="text-sm text-yellow-300/80">
                  Rakamin Academy, 2023
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}