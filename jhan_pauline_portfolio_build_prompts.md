# Portfolio Website Build Kit - Jhan Pauline C. Tan

Use this file as the master planning document and prompt pack for building a polished portfolio website. It includes the recommended tech stack, content stack, visual direction, hero section copy, image-container requirements, AI build prompts, and design-review prompts.

Source resume: `TAN_JHAN PAULINE C. (4).pdf`

---

## 1. Portfolio Goal

Build a modern, premium, responsive portfolio website for **Jhan Pauline C. Tan**, positioning her as a detail-oriented Administrative, Accounting, Bookkeeping, Document Control, and Audit Support professional.

The site should feel clean, trustworthy, organized, and professional - not generic corporate. It should communicate reliability, accuracy, international readiness, and strong operational support.

### Primary Audience

- Employers hiring for administrative, accounting assistant, bookkeeping, audit support, document control, operations support, or office coordination roles.
- International recruiters who need to quickly understand experience, certifications, tools, and relocation readiness.

### Core Message

> Organized financial operations. Clean records. Reliable administrative support.

### Resume-Based Positioning

Jhan has experience across accounting assistance, secretarial work, customer service, ESL teaching, auditing support, leadership administration, and part-time bookkeeping. The portfolio should make this mixed experience feel coherent by framing her as a highly organized professional who supports teams through documentation, records, reporting, compliance, and communication.

---

## 2. Recommended Tech Stack

Use a simple, scalable frontend stack that can be deployed quickly and still look premium.

### Core Stack

- **Next.js App Router** - portfolio framework and routing
- **React** - component-based UI
- **TypeScript** - safer code and reusable data models
- **Tailwind CSS** - fast visual styling and responsive layout
- **shadcn/ui** - accessible, polished UI primitives
- **Motion for React** - tasteful animations and micro-interactions
- **Lucide React** - clean icon set
- **next/font** - optimized typography loading
- **MDX or local TypeScript data file** - easy content updates without a CMS
- **Vercel** - deployment and preview links

### Optional Add-ons

- **React Hook Form + Zod** - only if adding a contact form
- **Resend** - only if the contact form needs real email delivery
- **Plausible or Vercel Analytics** - lightweight analytics
- **Framer or Figma** - optional visual exploration before coding

### Suggested File Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Hero.tsx
  SectionHeading.tsx
  ExperienceTimeline.tsx
  SkillCloud.tsx
  ProjectCard.tsx
  CertificationCards.tsx
  ContactSection.tsx
  ImagePlaceholder.tsx
data/
  profile.ts
  experience.ts
  projects.ts
  skills.ts
public/
  resume.pdf
  images/
    profile-placeholder.png
    projects/
      project-01-placeholder.png
      project-02-placeholder.png
      project-03-placeholder.png
```

---

## 3. AI Agent Skills to Add

These are optional but recommended if using Cursor, Codex, Claude Code, or another AI coding assistant that supports portable skills.

### Emil Kowalski Design Engineering Skill

Use this for animation polish, UI feel, transitions, and production-quality interaction design.

```bash
npx skills add emilkowalski/skill
```

Use it when reviewing:

- Hero animations
- Page load transitions
- Card hover states
- Project gallery interactions
- Timeline reveal animations
- Mobile navigation transitions
- Button and link micro-interactions

### Taste Skill

Use this for stronger layout, typography, visual hierarchy, spacing, color, and design-reference thinking.

```bash
npx skills add Leonxlnx/taste-skill
```

Use it when reviewing:

- Overall visual direction
- Homepage composition
- Typography hierarchy
- Spacing rhythm
- Portfolio sections that feel too generic
- Reference-board generation
- Color and layout decisions

Important: do not turn these on blindly for every task. Use them for design review, motion review, and visual-quality passes.

---

## 4. Content Stack

### Name

Jhan Pauline C. Tan

### Contact

- Phone: +63 930 014 0667
- Email: jhanpauline2003@gmail.com
- Location: Las Pinas City, Philippines
- Availability: Available for international employment
- Additional: Passport holder; willing to relocate

### Target Roles

Use these across SEO, headings, and copy:

- Administrative Professional
- Accounting Assistant
- Bookkeeper
- Document Control Assistant
- Audit Support Staff
- Office Operations Support
- Customer Service / Admin Support

### Tools and Skills

- Excel
- QuickBooks
- Xero
- Power BI
- Tableau
- Data management
- Reporting support
- Bookkeeping
- Audit documentation
- Document control
- Office coordination
- Customer support
- Critical thinking
- Adaptability
- Communication

### Certifications

- Certified Bookkeeper
- QuickBooks
- Xero
- Teaching English as a Foreign Language

### Education

Bachelor of Science in Accounting Information System (BSAIS)  
La Salle University - 2025

---

## 5. Visual Direction

### Design Personality

Clean, calm, organized, competent, quietly premium.

Avoid:

- Loud neon tech startup look
- Overly playful gradients
- Generic template feel
- Stock-photo-heavy layout
- Random animation just for flash

Use:

- Soft neutral background
- Deep ink text
- Warm off-white cards
- Subtle blue, slate, or emerald accents
- Thin borders
- Spacious layout
- Dashboard/document-inspired UI cards
- High-quality typography
- Small, precise animations

### Suggested Color Tokens

```ts
const colors = {
  background: "#F7F5F0",      // warm paper
  surface: "#FFFFFF",         // cards
  text: "#172033",            // deep navy ink
  muted: "#667085",           // slate gray
  border: "#E6E1D8",          // warm divider
  accent: "#2563EB",          // professional blue
  accentSoft: "#DBEAFE",      // soft blue tint
  success: "#047857"          // restrained green
}
```

### Typography Direction

Use one elegant sans-serif and one optional display font.

Recommended pairing:

- Headings: Geist, Inter Tight, or Satoshi-style sans
- Body: Inter, Geist Sans, or system sans
- Optional numbers/labels: JetBrains Mono or Geist Mono

### Layout Rules

- Max content width: 1120px to 1200px
- Section padding: 96px desktop, 64px tablet, 40px mobile
- Card radius: 20px to 28px
- Use 12-column desktop grid, then collapse cleanly on mobile
- Keep line length readable: 60-75 characters for paragraphs
- Every section should have one clear purpose

---

## 6. Homepage Structure

1. Hero
2. Trust / quick stats strip
3. About
4. Skills and tools
5. Experience timeline
6. Work examples / case-study cards with image placeholders
7. Certifications and education
8. Relocation / availability callout
9. Contact CTA

---

## 7. Hero Section Direction

The hero should be the strongest visual section of the site.

### Hero Layout

Use a split-grid hero:

- Left side: copy, CTAs, credibility tags
- Right side: layered visual card containing a profile-image placeholder, document/report cards, tool tags, and small status metrics

Since there are no photos yet, use a polished placeholder container instead of a fake profile image.

### Hero Copy

Eyebrow:

> Accounting Information Systems Graduate | Admin & Bookkeeping Support

Main headline:

> Organized financial operations, clean records, and reliable administrative support.

Subheadline:

> I help teams keep documentation accurate, reports organized, and daily office operations running smoothly across accounting, audit, customer support, and administrative workflows.

Primary CTA:

> View Experience

Secondary CTA:

> Download Resume

Small trust tags:

- Certified Bookkeeper
- QuickBooks & Xero
- Excel, Power BI & Tableau
- Passport Holder
- Open to Relocate

### Hero Visual Card Requirements

Create a large hero visual card with these layers:

1. **Profile image placeholder**
   - Rounded 28px container
   - Aspect ratio 4:5
   - Placeholder text: `Profile photo coming soon`
   - Use a tasteful abstract background, not a gray box

2. **Floating report card**
   - Title: `Monthly Records`
   - Mini line items: `Transactions`, `Payroll`, `Reconciliation`
   - Tiny progress/check indicators

3. **Floating document card**
   - Title: `Audit-ready files`
   - Subtitle: `Organized, compliant, accessible`

4. **Tool chips**
   - Excel
   - QuickBooks
   - Xero
   - Power BI
   - Tableau

5. **Micro stat row**
   - `4+ Years Combined Admin & Finance Exposure`
   - `Public + Private Sector Experience`

### Hero Animation Requirements

- Fade and slide hero copy in on load
- Stagger trust tags subtly
- Hero visual card should rise in with a soft spring
- Floating cards should have a very subtle y-axis drift or parallax
- Buttons should have smooth hover feedback
- Respect `prefers-reduced-motion`
- Avoid bouncy, distracting motion

---

## 8. Work Examples / Project Image Containers

The resume does not include traditional web-design projects, so frame this section as **Work Examples** or **Selected Operational Case Studies**.

Each card must include an image container placeholder now, so real screenshots or photos can be added later.

### Project Card Component Requirements

Each card should have:

- Image placeholder at top
- Aspect ratio: 16:10 desktop, 4:3 mobile acceptable
- Soft gradient or document-dashboard skeleton inside placeholder
- Text label: `Project image coming soon`
- Title
- Short problem statement
- Responsibilities
- Tools used
- Outcome / business value

### Suggested Work Example Cards

#### 1. Financial Documentation and Reporting Support

Use for United Consultants experience.

Summary:

> Supported accurate financial and administrative documentation by organizing reports, transaction records, and project files for internal use.

Possible tools:

- Excel
- QuickBooks
- Xero
- Document management

Image placeholder idea:

> Dashboard-style card with ledger rows, report tiles, and document icons.

#### 2. Audit Working Paper Preparation

Use for Commission on Audit trainee experience.

Summary:

> Prepared audit working papers, reviewed compliance documents, and organized audit files to support accurate evaluation and reporting.

Possible tools:

- Excel
- Audit files
- Compliance checklists
- Government documentation

Image placeholder idea:

> Checklist card with document stack and audit status badges.

#### 3. Bookkeeping and Payroll Records

Use for Tudela Coconut Farmers Cooperative experience.

Summary:

> Recorded financial transactions, prepared reports and reconciliations, monitored budgets, and processed payroll for cooperative operations.

Possible tools:

- Bookkeeping
- Payroll
- Budget monitoring
- Financial reporting

Image placeholder idea:

> Payroll summary card with budget progress bars and reconciliation rows.

#### 4. Customer Service Documentation

Use for Alorica experience.

Summary:

> Handled customer inquiries, documented interactions in CRM systems, and followed privacy procedures to maintain accurate and compliant service records.

Possible tools:

- CRM
- Customer support
- Data privacy
- Issue resolution

Image placeholder idea:

> Support dashboard card with ticket rows and satisfaction indicators.

---

## 9. Master Build Prompt

Paste this into your AI coding assistant when ready to build.

```md
You are a senior design engineer and frontend developer. Build a premium, responsive portfolio website for Jhan Pauline C. Tan, an Administrative, Accounting, Bookkeeping, Document Control, and Audit Support professional.

Use this stack:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion for React
- Lucide React
- next/font
- Local TypeScript data files for content

Design direction:
- Clean, calm, organized, competent, quietly premium
- Warm off-white background, deep navy text, subtle borders, restrained blue/green accents
- Strong spacing, editorial layout, polished card system
- No generic portfolio-template look
- No fake images; use elegant image placeholders until real photos/project screenshots are provided

Main content:
- Name: Jhan Pauline C. Tan
- Positioning: Accounting Information Systems Graduate | Admin & Bookkeeping Support
- Location: Las Pinas City, Philippines
- Email: jhanpauline2003@gmail.com
- Phone: +63 930 014 0667
- Available for international employment, passport holder, willing to relocate
- Key tools: Excel, QuickBooks, Xero, Power BI, Tableau
- Certifications: Certified Bookkeeper, QuickBooks, Xero, TEFL

Hero requirements:
- Split layout with copy on left and a rich visual card on right
- Headline: "Organized financial operations, clean records, and reliable administrative support."
- Subheadline: "I help teams keep documentation accurate, reports organized, and daily office operations running smoothly across accounting, audit, customer support, and administrative workflows."
- CTAs: "View Experience" and "Download Resume"
- Add credibility chips: Certified Bookkeeper, QuickBooks & Xero, Excel/Power BI/Tableau, Passport Holder, Open to Relocate
- Right visual card should include a profile-photo placeholder, floating document/report cards, tool chips, and small metrics

Sections:
1. Hero
2. Quick stats / credibility strip
3. About
4. Skills and tools
5. Experience timeline
6. Selected operational case studies with image placeholders
7. Certifications and education
8. Availability / relocation callout
9. Contact CTA

Animation requirements:
- Use Motion for React for subtle load animations, staggered tags, timeline reveals, and card hover states
- Motion should feel intentional, not flashy
- Use spring transitions for hero card entrance
- Respect prefers-reduced-motion
- Animate opacity and transform only where possible

Accessibility and performance:
- Semantic HTML
- Strong keyboard focus states
- Proper alt text for future images
- Good color contrast
- Fast loading
- Mobile-first responsiveness
- Avoid layout shift

Deliverables:
- Complete project structure
- Reusable components
- Clean data files
- Responsive design
- Placeholder image containers for all project/work-example cards
- Resume download button wired to /resume.pdf
```

---

## 10. Emil-Inspired Motion Review Prompt

Use this after the first version is coded.

```md
Act as a motion-focused design engineer inspired by Emil Kowalski's approach to polished web interfaces. Review this portfolio website for animation quality, interaction feel, performance, and restraint.

Focus on:
- What should not animate
- Whether the hero entrance feels smooth and premium
- Whether transitions support comprehension
- Whether hover states feel tactile but not distracting
- Whether card and timeline reveals are too generic
- Whether easing, duration, and spring settings feel natural
- Whether animations remain accessible with prefers-reduced-motion
- Whether transforms and opacity are used instead of layout-heavy animation

Then improve the implementation.

Rules:
- Keep animation subtle and purposeful
- Do not add random decorative motion
- Prioritize perceived quality and clarity
- Use small stagger delays only when they help hierarchy
- Make the site feel calm, precise, and professional
```

---

## 11. Taste Skill / Reference Pull Prompt

Use this before finalizing the design.

```md
Act as a taste-focused creative director and frontend design reviewer. Pull design references before improving this portfolio. Do not copy any single reference. Instead, extract reusable principles.

Find or propose references across:
1. Premium personal portfolio layouts
2. Finance/accounting or operations dashboards
3. Clean document-management interfaces
4. Minimal editorial landing pages
5. Modern resume/CV sites

For each reference, identify:
- Layout pattern
- Typography style
- Spacing rhythm
- Color palette
- Card treatment
- Hero composition
- Interaction or motion idea
- What to avoid copying directly

Then synthesize a unique design direction for Jhan Pauline C. Tan's portfolio.

Target aesthetic:
- Professional but warm
- Organized and trustworthy
- Modern without looking like a SaaS template
- Elegant enough for international hiring
- Strong hero section with image placeholders

After the reference analysis, update the website design system, hero section, cards, spacing, and interaction details.
```

---

## 12. Hero Refinement Prompt

Use this if the hero still feels weak.

```md
Redesign only the hero section to make it feel premium and memorable while staying appropriate for an administrative/accounting professional.

Keep the content accurate:
- Name: Jhan Pauline C. Tan
- Role: Accounting Information Systems Graduate | Admin & Bookkeeping Support
- Headline: Organized financial operations, clean records, and reliable administrative support.
- Subheadline: I help teams keep documentation accurate, reports organized, and daily office operations running smoothly across accounting, audit, customer support, and administrative workflows.

Visual requirements:
- Split layout
- Strong headline hierarchy
- Two CTAs
- Trust chips
- Right-side visual card with profile image placeholder
- Floating dashboard/document cards
- Soft shadows and thin borders
- Warm off-white background
- Premium spacing
- Mobile layout must stack beautifully

Do not use:
- Fake headshots
- Random stock images
- Loud gradients
- Overly playful effects
- Generic "Hi, I'm..." hero layout

Add subtle Motion for React animations:
- Copy fade/slide in
- Visual card spring entrance
- Floating cards with subtle parallax or hover only
- Reduced-motion fallback
```

---

## 13. Copywriting Prompt

Use this to polish the words on the site.

```md
Rewrite the portfolio copy for Jhan Pauline C. Tan so it sounds professional, warm, clear, and employer-focused.

Tone:
- Confident but not exaggerated
- Clear and direct
- Administrative/accounting professional
- International-employment ready
- Organized, reliable, detail-oriented

Avoid:
- Buzzwords without proof
- Overly dramatic claims
- Startup-style hype
- Saying "expert" unless backed by strong proof

Core strengths to emphasize:
- Document control
- Bookkeeping
- Audit support
- Financial reports
- Organized records
- Office coordination
- Customer communication
- Data privacy and compliance
- Adaptability across public/private/online settings

Produce:
- Hero headline options
- Subheadline options
- About section
- Experience summaries
- Work-example card summaries
- Contact CTA copy
```

---

## 14. Experience Content for Data File

Use this content in `data/experience.ts`.

```ts
export const experience = [
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
]
```

---

## 15. Project / Case Study Data Draft

Use this content in `data/projects.ts`.

```ts
export const projects = [
  {
    title: "Financial Documentation and Reporting Support",
    type: "Accounting / Administration",
    image: "/images/projects/financial-documentation-placeholder.png",
    imageAlt: "Placeholder for financial documentation project image",
    summary: "Organized financial reports, transaction records, and administrative documents to support accurate internal reporting.",
    responsibilities: ["Document control", "Report preparation", "Transaction records", "Office coordination"],
    tools: ["Excel", "QuickBooks", "Xero"],
    value: "Improved record accessibility, accuracy, and administrative continuity."
  },
  {
    title: "Audit Working Paper Preparation",
    type: "Audit Support",
    image: "/images/projects/audit-working-papers-placeholder.png",
    imageAlt: "Placeholder for audit working paper project image",
    summary: "Prepared audit working papers and organized compliance documents for government audit support.",
    responsibilities: ["Audit documentation", "Compliance review", "File organization", "Report support"],
    tools: ["Excel", "Audit checklists", "Documentation systems"],
    value: "Supported clearer audit evaluation and more efficient reporting workflows."
  },
  {
    title: "Bookkeeping and Payroll Records",
    type: "Bookkeeping",
    image: "/images/projects/bookkeeping-payroll-placeholder.png",
    imageAlt: "Placeholder for bookkeeping and payroll project image",
    summary: "Maintained transaction records, prepared reconciliations, monitored budgets, and supported payroll processing.",
    responsibilities: ["Bookkeeping", "Reconciliation", "Budget monitoring", "Payroll support"],
    tools: ["Excel", "Bookkeeping records", "Financial reports"],
    value: "Helped maintain accurate financial operations and stronger audit readiness."
  },
  {
    title: "Customer Service Documentation",
    type: "Customer Operations",
    image: "/images/projects/customer-service-placeholder.png",
    imageAlt: "Placeholder for customer service documentation project image",
    summary: "Documented customer interactions and supported accurate CRM tracking while following data privacy procedures.",
    responsibilities: ["Customer support", "CRM documentation", "Issue tracking", "Data privacy"],
    tools: ["CRM", "Support scripts", "Documentation workflows"],
    value: "Improved follow-up accuracy and helped resolve concerns efficiently."
  }
]
```

---

## 16. Image Placeholder Component Prompt

```md
Create a reusable ImagePlaceholder component for profile and project containers.

Requirements:
- It should never look like an empty gray box.
- Use a soft gradient, thin border, subtle pattern, and small label.
- Support these variants: profile, project, document, dashboard.
- Include accessible text.
- Maintain aspect ratio.
- Be easy to replace with a real image later.
- Add a small note: "Image coming soon" or "Project image coming soon".
```

---

## 17. Quality Checklist

Before considering the site finished, check:

- Hero looks premium on desktop and mobile
- No fake images are used
- All project cards have image containers
- Resume button works
- Contact links work
- Experience dates are correct
- Site does not overclaim experience
- Animations are subtle and accessible
- Cards do not feel like a default template
- Typography hierarchy is strong
- Mobile spacing is clean
- Lighthouse performance is strong
- Page has proper metadata and Open Graph image
- Color contrast is accessible

---

## 18. Details Still Needed From Client/User

Ask for these before final build or before publishing:

1. Preferred portfolio owner name display: `Jhan Pauline C. Tan`, `Jhan Pauline Tan`, or another version?
2. Target role priority: Accounting Assistant, Admin Assistant, Bookkeeper, Audit Support, Document Controller, or general Admin Professional?
3. Do you want the phone number visible publicly?
4. Do you want the email visible publicly or only through a contact form?
5. Do you have a LinkedIn profile URL?
6. Do you have a GitHub, Behance, or portfolio domain, if any?
7. Preferred country or job market for the portfolio?
8. Do you want the site in English only?
9. Do you want a downloadable PDF resume button?
10. Do you want employers to contact through email, WhatsApp, or a form?
11. Do you want the design to feel more corporate, elegant, minimalist, or modern SaaS?
12. Which real work examples can be shown publicly without exposing private company data?
13. Do you want project images to be screenshots, abstract mockups, or document/dashboard illustrations?
14. Do you have a profile photo, brand color, or logo later?
15. Do you want a one-page portfolio or multi-page site?

---

## 19. Suggested Final One-Page Navigation

```txt
Home
About
Skills
Experience
Work Examples
Certifications
Contact
```

---

## 20. Suggested SEO Metadata

```ts
export const metadata = {
  title: "Jhan Pauline C. Tan | Administrative & Accounting Support Portfolio",
  description: "Portfolio of Jhan Pauline C. Tan, an administrative and accounting support professional experienced in bookkeeping, document control, audit support, customer service, and office operations.",
  keywords: [
    "Jhan Pauline C. Tan",
    "Accounting Assistant",
    "Administrative Professional",
    "Bookkeeper",
    "Audit Support",
    "Document Control",
    "QuickBooks",
    "Xero",
    "Excel",
    "Philippines"
  ]
}
```

---

## 21. Final Build Instruction

When building the site, prioritize clarity over complexity. The portfolio should make Jhan look reliable, organized, and ready for professional administrative/accounting roles. The hero section should carry the design quality, while the rest of the site should feel clean, readable, and easy for recruiters to scan.

