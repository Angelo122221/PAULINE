"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";

const capabilityTicker = [
  "Bookkeeping",
  "Document control",
  "Audit support",
  "Payroll records",
  "Reporting workflows",
  "International-ready"
];

const skills = [
  "Excel",
  "QuickBooks",
  "Xero",
  "Power BI",
  "Tableau",
  "Data management",
  "Reporting support",
  "Bookkeeping",
  "Audit documentation",
  "Document control",
  "Office coordination",
  "Customer support",
  "Critical thinking",
  "Adaptability",
  "Communication"
];

const experience = [
  {
    role: "Accounting Assistant / Secretary",
    company: "United Consultants",
    location: "Doha, Qatar",
    period: "November 2025 - May 2026",
    bullets: [
      "Managed financial and administrative documents to support accurate record-keeping and compliance.",
      "Assisted in preparing and organizing financial reports and supporting documents for internal use.",
      "Maintained updated transaction and project documentation for better data accuracy and accessibility.",
      "Coordinated correspondence, scheduling, and daily administrative tasks to support office operations."
    ]
  },
  {
    role: "Customer Service Representative",
    company: "Alorica",
    location: "Manila, Philippines",
    period: "July 2025 - November 2025",
    bullets: [
      "Handled customer inquiries and resolved issues promptly to support customer satisfaction.",
      "Documented customer interactions in CRM systems for accurate tracking and follow-up.",
      "Applied problem-solving skills to address concerns efficiently and reduce repeat inquiries.",
      "Followed data privacy and company procedures for secure, compliant service delivery."
    ]
  },
  {
    role: "ESL Teacher",
    company: "Acadsoc",
    location: "Online",
    period: "October 2024 - July 2025",
    bullets: [
      "Delivered structured lessons to improve student language proficiency and engagement.",
      "Managed schedules and maintained student progress records for accurate performance tracking.",
      "Assessed learning outcomes and provided feedback to support continuous improvement.",
      "Adapted teaching methods to meet diverse learner needs and maintain satisfaction."
    ]
  },
  {
    role: "On-the-Job Trainee - Auditing",
    company: "Commission on Audit",
    location: "Ozamiz, Philippines",
    period: "February 2025 - April 2025",
    bullets: [
      "Prepared audit working papers to support evaluation of financial records.",
      "Reviewed documents for compliance with government regulations and accountability standards.",
      "Organized audit files and reports to improve documentation efficiency.",
      "Assisted auditors in reporting processes to strengthen audit quality."
    ]
  },
  {
    role: "Commissioner for Administration - Leadership Experience",
    company: "Commission on Audit, La Salle University",
    location: "Ozamiz, Philippines",
    period: "July 2021 - July 2025",
    bullets: [
      "Reviewed financial transactions to support compliance with audit standards and policies.",
      "Assisted in preparing audit reports for transparency and accountability.",
      "Maintained organized audit documentation for accuracy and easy reference.",
      "Supported audit processes to improve financial reporting reliability."
    ]
  },
  {
    role: "Bookkeeper - Part-time",
    company: "Tudela Coconut Farmers Cooperative",
    location: "Tudela, Philippines",
    period: "July 2022 - June 2024",
    bullets: [
      "Recorded financial transactions to maintain accurate accounting records.",
      "Prepared financial reports and reconciliations to support business decisions.",
      "Monitored budgets and processed payroll for timely financial operations.",
      "Organized financial documents to improve audit readiness and reporting efficiency."
    ]
  }
];

const projects = [
  {
    title: "Financial Documentation and Reporting Support",
    type: "Accounting / Administration",
    summary:
      "Organized financial reports, transaction records, and administrative documents to support accurate internal reporting.",
    responsibilities: ["Document control", "Report preparation", "Transaction records", "Office coordination"],
    tools: ["Excel", "QuickBooks", "Xero"],
    value: "Improved record accessibility, accuracy, and administrative continuity."
  },
  {
    title: "Audit Working Paper Preparation",
    type: "Audit Support",
    summary:
      "Prepared audit working papers and organized compliance documents for government audit support.",
    responsibilities: ["Audit documentation", "Compliance review", "File organization", "Report support"],
    tools: ["Excel", "Audit checklists", "Documentation systems"],
    value: "Supported clearer audit evaluation and more efficient reporting workflows."
  },
  {
    title: "Bookkeeping and Payroll Records",
    type: "Bookkeeping",
    summary:
      "Maintained transaction records, prepared reconciliations, monitored budgets, and supported payroll processing.",
    responsibilities: ["Bookkeeping", "Reconciliation", "Budget monitoring", "Payroll support"],
    tools: ["Excel", "Bookkeeping records", "Financial reports"],
    value: "Helped maintain accurate financial operations and stronger audit readiness."
  },
  {
    title: "Customer Service Documentation",
    type: "Customer Operations",
    summary:
      "Documented customer interactions and supported accurate CRM tracking while following data privacy procedures.",
    responsibilities: ["Customer support", "CRM documentation", "Issue tracking", "Data privacy"],
    tools: ["CRM", "Support scripts", "Documentation workflows"],
    value: "Improved follow-up accuracy and helped resolve concerns efficiently."
  }
];

const certifications = ["Certified Bookkeeper", "QuickBooks", "Xero", "Teaching English as a Foreign Language"];

const education = [
  {
    title: "Bachelor of Science in Accounting Information System",
    school: "La Salle University - Ozamiz",
    period: "2021 - 2025"
  },
  {
    title: "Senior High School",
    school: "La Salle University - Ozamiz",
    period: "2019 - 2021"
  }
];

export default function Page() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsHeroLoaded(true);
      return;
    }

    const timer = window.setTimeout(() => setIsHeroLoaded(true), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            observer.unobserve(target);
          });
        },
        { threshold: 0.18 }
      );

      revealTargets.forEach((target) => observer.observe(target));
      return () => observer.disconnect();
    }

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((target) => {
      target.classList.add("is-visible");
    });

    return undefined;
  }, []);

  const handleHeroPointerMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    target.style.setProperty("--mx", `${x}`);
    target.style.setProperty("--my", `${y}`);
    target.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    target.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
  };

  const handleHeroPointerLeave = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--rx", "0deg");
    target.style.setProperty("--ry", "0deg");
    target.style.setProperty("--mx", "0.5");
    target.style.setProperty("--my", "0.5");
  };

  return (
    <>
      <div className={`hero-loader ${isHeroLoaded ? "is-loaded" : ""}`} aria-hidden="true">
        <p className="hero-loader-title">Jhan Pauline Tan</p>
        <span className="hero-loader-bar"></span>
      </div>

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#hero" aria-label="Jhan Pauline C. Tan home">
            JPT
          </a>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#work-examples">Work Examples</a></li>
              <li><a href="#certifications">Credentials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-main">
        <section className="hero section" id="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Accounting Information Systems Graduate • Admin and Bookkeeping Support</p>
              <h1 id="hero-title" className="hero-editorial-title">
                <span className="hero-line hero-line-a">Organized financial records.</span>
                <span className="hero-line hero-line-b">Precise administrative support you can trust.</span>
              </h1>
              <p className="lead">
                I help teams keep records accurate, reporting clear, and office operations dependable day to day.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href="#experience">View Experience</a>
                <a className="btn btn-secondary" href="/resume.pdf" download>Download Resume</a>
              </div>
              <p className="hero-support-note">Available for administrative, accounting assistant, and bookkeeping roles.</p>
            </div>

            <div className="bezel-shell" data-reveal>
              <aside
                className="hero-visual card bezel-core"
                aria-label="Profile and documents preview"
                onMouseMove={handleHeroPointerMove}
                onMouseLeave={handleHeroPointerLeave}
              >
                <div className="hero-visual-top">
                  <div className="profile-frame">
                    <Image
                      className="profile-image"
                      src="/images/profile.jpeg"
                      alt="Portrait of Jhan Pauline C. Tan"
                      fill
                      sizes="(max-width: 980px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="ticker-wrap" aria-label="Capability ticker">
          <div className="ticker-track">
            {[...capabilityTicker, ...capabilityTicker].map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section strip" aria-label="Credibility strip">
          <div className="container strip-grid">
            <article className="strip-card" data-reveal>
              <span className="strip-value">4+</span>
              <span className="strip-label">Years combined exposure across admin and finance support.</span>
            </article>
            <article className="strip-card" data-reveal>
              <span className="strip-value">6</span>
              <span className="strip-label">Roles spanning bookkeeping, audit, service, and leadership administration.</span>
            </article>
            <article className="strip-card" data-reveal>
              <span className="strip-value">PH + QA</span>
              <span className="strip-label">Experience across Philippine and Qatar work environments.</span>
            </article>
            <article className="strip-card" data-reveal>
              <span className="strip-value">Open</span>
              <span className="strip-label">Available for international employment and relocation.</span>
            </article>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container section-grid">
            <div data-reveal>
              <p className="eyebrow">About</p>
              <h2 id="about-title">Reliable support for documents, numbers, and day-to-day office flow.</h2>
              <p className="section-copy">
                Jhan Pauline C. Tan is a Bachelor of Science in Accounting Information System graduate with practical experience in bookkeeping, financial documentation, audit support, customer service, and administration. Her work history combines public sector exposure, private-sector operations, and international experience, making her a strong fit for roles that depend on organization, accountability, and clear communication.
              </p>
              <p className="section-copy">
                She is certified in bookkeeping, QuickBooks, Xero, and TEFL, and brings a calm, detail-oriented approach to documentation, reporting, and office support.
              </p>
            </div>

            <aside className="info-panel" data-reveal>
              <h3>Profile snapshot</h3>
              <ul className="check-list">
                <li>Certified Bookkeeper</li>
                <li>B.S. in Accounting Information System</li>
                <li>QuickBooks, Xero, Excel, Power BI, and Tableau</li>
                <li>Passport holder and willing to relocate</li>
                <li>Reliable across admin, finance, and support workflows</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container skills-grid">
            <div data-reveal>
              <p className="eyebrow">Skills and tools</p>
              <h2 id="skills-title">The tools and strengths recruiters can scan quickly.</h2>
              <ul className="skill-cloud" aria-label="Skills and tools list">
                {skills.map((skill) => <li key={skill} className="skill-pill">{skill}</li>)}
              </ul>
            </div>

            <aside className="info-panel info-panel-alt" data-reveal>
              <h3>Core strengths</h3>
              <ul className="check-list">
                <li>Document control and organized records</li>
                <li>Bookkeeping and reconciliation support</li>
                <li>Audit files and compliance preparation</li>
                <li>Customer communication and follow-up</li>
                <li>Adaptable across public and private workflows</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">A career path built around records, reports, service, and support.</h2>

            <div className="timeline">
              {experience.map((item, index) => (
                <article key={item.role + item.period} className="timeline-card" data-reveal style={{ ["--delay" as string]: `${index * 80}ms` }}>
                  <div className="timeline-head">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="muted">{item.company} · {item.location}</p>
                    </div>
                    <p className="timeline-period">{item.period}</p>
                  </div>
                  <ul className="bullet-list">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work-examples" aria-labelledby="work-examples-title">
          <div className="container">
            <p className="eyebrow">Work examples</p>
            <h2 id="work-examples-title">Selected operational case studies with image placeholders.</h2>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article key={project.title} className="project-card bezel-shell" data-reveal style={{ ["--delay" as string]: `${index * 80}ms` }}>
                  <div className="project-media image-placeholder image-placeholder-project bezel-core" aria-hidden="true">
                    <div className="placeholder-skeleton">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>Project image coming soon</p>
                  </div>

                  <div className="project-body bezel-core project-body-core">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="muted">{project.summary}</p>

                    <div>
                      <h4>Responsibilities</h4>
                      <ul className="inline-list">
                        {project.responsibilities.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>

                    <div>
                      <h4>Tools used</h4>
                      <ul className="inline-list">
                        {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                      </ul>
                    </div>

                    <p className="project-value">{project.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certifications" aria-labelledby="certifications-title">
          <div className="container section-grid">
            <div data-reveal>
              <p className="eyebrow">Certifications and education</p>
              <h2 id="certifications-title">Credentials that support the portfolio story.</h2>

              <div className="card-list">
                {certifications.map((cert, index) => (
                  <article key={cert} className="mini-info" data-reveal style={{ ["--delay" as string]: `${index * 70}ms` }}>
                    {cert}
                  </article>
                ))}
              </div>
            </div>

            <div className="card-stack" data-reveal>
              {education.map((item, index) => (
                <article key={item.title} className="education-card" data-reveal style={{ ["--delay" as string]: `${index * 80}ms` }}>
                  <div className="education-brand">
                    <Image
                      src="/images/lsu_logo.png"
                      alt="La Salle University logo"
                      width={36}
                      height={36}
                    />
                    <span>La Salle University</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                  <p className="muted">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="availability" aria-labelledby="availability-title">
          <div className="container availability-card" data-reveal>
            <p className="eyebrow">Availability</p>
            <h2 id="availability-title">International-ready, passport holder, and open to relocation.</h2>
            <p className="section-copy">
              This portfolio is positioned for administrative, accounting assistant, bookkeeping, audit support, document control, and office operations roles. The emphasis is on accuracy, dependable communication, and smooth coordination across teams.
            </p>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-card" data-reveal>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let&apos;s connect about administrative and accounting support roles.</h2>
            <p className="section-copy">
              For opportunities in accounting assistance, bookkeeping, audit support, or office coordination, reach out through email or phone.
            </p>

            <ul className="contact-list">
              <li><strong>Email:</strong> <a href="mailto:jhanpauline2003@gmail.com">jhanpauline2003@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+639300140667">+63 930 014 0667</a></li>
              <li><strong>Location:</strong> Las Pinas City, Philippines</li>
              <li><strong>Availability:</strong> Available for international employment; willing to relocate</li>
            </ul>

            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:jhanpauline2003@gmail.com?subject=Portfolio%20Inquiry">Email Jhan Pauline</a>
              <a className="btn btn-secondary" href="/resume.pdf" download>Download Resume</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>© {new Date().getFullYear()} Jhan Pauline C. Tan</p>
          <p>Administrative, Accounting, Bookkeeping, and Audit Support Portfolio</p>
        </div>
      </footer>
    </>
  );
}
