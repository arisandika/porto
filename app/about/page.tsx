import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import TransitionLink from "@/components/common/transition-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ari Sandika, a Fullstack Web Developer with expertise in Laravel, Next.js, and scalable business systems.",
};

const skills = {
  Programming: ["PHP", "JavaScript", "TypeScript"],
  Frameworks: [
    "Laravel",
    "WordPress",
    "CodeIgniter",
    "React.js",
    "Next.js",
    "Express.js",
    "Livewire",
    "jQuery",
    "Tailwind CSS",
  ],
  Backend: ["REST API", "Auth & Authorization", "RBAC", "MVC Architecture"],
  Database: ["MySQL", "PostgreSQL", "Database Design (ERD)"],
  Tools: [
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Redis",
    "VPS",
    "Nginx",
    "Cloudflare",
    "SSL",
    "SSH",
    "Figma",
    "Postman",
  ],
};

const experiences = [
  {
    role: "Fullstack Web Developer",
    company: "PT. NEXT GENERATION SOLUTIONS",
    location: "South Tangerang",
    date: "Sep 2025 – Present",
    achievements: [
      "Developed an integrated ERP system using Laravel, Filament, and MySQL, covering 8+ business modules (attendance, inventory, finance, CRM, HR, marketing, procurement, sales).",
      "Reduced manual data processing and minimized data duplication across departments through centralized system architecture.",
      "Led end-to-end development, from requirements analysis to system design and CI/CD deployment.",
      "Designed and implemented RESTful APIs and role-based access control (RBAC), improving data accessibility, system security, and internal decision-making speed.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "PT. RHP CIPTA DIGITAL",
    location: "Remote, Jakarta",
    date: "Aug 2025 – Jan 2026",
    achievements: [
      "Delivered 12+ production-ready WordPress websites from Figma designs using Kadence and Divi, ensuring responsive and pixel-accurate UI implementation.",
      "Achieved 85–95+ Google PageSpeed scores by optimizing assets, implementing caching strategies, and improving frontend performance.",
      "Extended WordPress functionality using ACF and custom post types, enabling scalable and maintainable content structures.",
      "Collaborated with designers and stakeholders to translate business requirements into functional and SEO-optimized web solutions.",
    ],
  },
  {
    role: "Fullstack Web Developer Intern",
    company: "PT. TOFFEE INTERNATIONAL",
    location: "West Jakarta",
    date: "Feb 2025 – May 2025",
    achievements: [
      "Developed an internal project management system using Laravel and Filament, improving cross-team visibility and coordination.",
      "Implemented task management, KPI tracking, and role-based access control (RBAC) to support structured workflows.",
      "Contributed to system architecture and database design (ERD), ensuring scalability and maintainability.",
      "Debugged and enhanced existing features, improving system stability and reducing manual reporting processes.",
    ],
  },
  {
    role: "Fullstack Web Developer Intern",
    company: "PT. SEPULUH SEBELAS MEDIA",
    location: "North Jakarta",
    date: "Jul 2024 – Jan 2025",
    achievements: [
      "Built a career portal with an automated psychotest system using CodeIgniter and REST APIs, reducing manual candidate screening time.",
      "Implemented automated email workflows, enabling real-time candidate onboarding and improving recruitment efficiency.",
      "Designed API-based data flow for handling candidate data and test results, ensuring seamless system integration.",
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
      telephone: "",
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
                <div className="flex gap-4 mt-3 text-sm text-white/70">
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
                    <span>Github</span>
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
                  Fullstack Web Developer with hands-on experience in ERP and
                  internal business systems, and solid experience in building
                  scalable multi-module platforms using Laravel and modern
                  JavaScript frameworks.
                </p>
                <p className="mt-4">
                  Strong in database design, system architecture, and API
                  development, with a track record of reducing manual workflows
                  and improving operational efficiency. Experienced in
                  delivering end-to-end solutions from requirement analysis to
                  deployment in production environments.
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
              Technical Skill
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
                Bachelor of Computer Science, Informatics Engineering
              </p>
              <time className="text-sm text-yellow-300/80 mt-2">
                2022 – Expected 2026
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
                  BNSP Certified Web Developer
                </h3>
                <span className="text-sm text-yellow-300/80">
                  Indonesia, 2026
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-sm text-white">Junior Web Developer</h3>
                <span className="text-sm text-yellow-300/80">
                  Digital Talent Scholarship, Kominfo, 2023
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-sm text-white">
                  Frontend Developer Virtual Internship
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
