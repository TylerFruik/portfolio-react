// Resume content (2026-08-28) -- transcribed straight from public/documents/Tyler Fruik
// Resume.pdf so the site can render it directly instead of embedding a PDF viewer (Tyler: "It's
// intentionally a single page so I feel the viewer isn't needed"). Shared by both v1
// (pages/Resume/Resume.jsx) and v2 (coherence/CoherenceResume.jsx) via components/ResumeContent.jsx.
//
// Tyler said he's rebuilding the actual resume today -- when that happens, this is the one file
// to update; the PDF stays linked as a download for anyone who wants the original file too.
export const RESUME = {
  name: 'Tyler Fruik',
  location: 'Austin, TX - English/Español',
  email: 'tylerfruik@gmail.com',
  links: [
    { label: 'tylerfruikportfolio.netlify.app', href: 'https://tylerfruikportfolio.netlify.app' },
    { label: 'linkedin.com/in/tyler-fruik/', href: 'https://linkedin.com/in/tyler-fruik/' },
    { label: 'github.com/TylerFruik/', href: 'https://github.com/TylerFruik/' },
  ],
  summary: `Detail-oriented Quality Assurance professional and Full-Stack Developer with a rigorous analytical mindset for identifying edge cases, validating data integrity, and executing comprehensive test strategies. Proven track record in AI model quality assurance, backend validation, and UI testing. Adept at translating complex technical requirements into actionable quality signals within Agile environments to deliver reliable, high-performance software.`,
  skillGroups: [
    { label: 'Languages & Querying', items: 'Python, JavaScript, SQL, Java, HTML, CSS, GraphQL' },
    { label: 'APIs & Backend Testing', items: 'REST APIs, Postman, Insomnia, MongoDB, Node.js, Express, Sequelize' },
    { label: 'Methodologies & Tools', items: 'Agile/Scrum, Git, GitHub, GitLab, Automated UI Checks, Edge Case & Hallucination Detection, Google AI Studio, Google Data Compute, Antigravity' },
    { label: 'Soft Skills', items: 'Technical Training/Coaching, Cross-Functional Collaboration, Abstract Problem Solving, Bilingual' },
  ],
  experience: [
    {
      title: 'AI Rating QA Specialist',
      org: 'Uber Technologies, Austin, TX',
      dates: 'Aug 2025-Present',
      bullets: [
        'Promoted to QA Specialist within 6 months due to exceptional data integrity accuracy, deep understanding of complex evaluation guidelines, and a strong eye for detail.',
        'Performed expert loss pattern and hallucination detection across advanced LLM environments using platforms like Google AI Studio, Google Data Compute, and Antigravity for tier-1 clients (Gemini, Meta, xAI, OpenAI, and the US Army).',
        'Audited the work of peer raters to ensure end-to-end data integrity, providing constructive feedback and calibration to maintain high-quality pipeline outputs.',
        'Scaled team capabilities by leading remote staff training and coaching sessions for a team of 70+ members, leveraging a recognized ability to break down complex, abstract technical topics into simple, approachable terms.',
        'Documented complex edge cases, anomalies, and client-side output risks to ensure strict alignment with rigorous quality and behavior benchmarks.',
      ],
    },
    {
      title: 'Manager / Specialist / Instructor',
      org: 'Austin, TX & Multiple Locations',
      dates: 'Jun 2019-Present',
      bullets: [
        'Team & Conflict Management: Directed and mentored cross-functional teams of up to 20+ members, establishing clear operational expectations, resolving internal conflicts, and leading staff development initiatives.',
        'Strategic Alignment: Partnered with corporate leadership and local stakeholders to stabilize operations at high-priority locations, leveraging engagement and service data to align daily performance with company KPIs.',
        'Process Optimization: Analyzed user flows and guest experiences to support internal process improvement initiatives, including point-of-sale (POS) system enhancements and digital workflow streamlining.',
      ],
    },
  ],
  development: [
    {
      title: 'Wedding Planning Website',
      project: 'LoveStruck',
      dates: 'Feb 2024',
      bullets: [
        'Utilized React and CSS Bootstrap to produce a modern front-end with a focus on user experience.',
        'Integrated Stripe for handling funds raised for each wedding allowing for anonymous financing.',
        "Implemented NPM modules to add an event calendar which auto-populates with RSVP'd events.",
        'Mapped REST API routes using Insomnia and Postman to assist in test driven development.',
        'Incorporated user authentication and secure login features to personalize the experience and allow users to retrieve account information. Passwords are encrypted via Hash Salting through BCrypt.',
      ],
    },
    {
      title: 'Recipe Finder Website',
      project: "Lil' Chefs",
      dates: 'Nov 2023',
      bullets: [
        'Led a team of four to develop a full-stack application from conception to deployment.',
        'Developed using JavaScript, CSS, and HTML, ensuring cross-browser and mobile compatibility with responsive design for optimal user experience and deployed via Heroku for page access reliability.',
        'Implemented third-party APIs to query a recipe database by user specifications, return images for display, and allow users to refine recipes by location and weather.',
        'Allowed users to save favorites to local storage, improving user experience.',
      ],
    },
  ],
};
