// Shared About Me content (2026-08-28) -- single source of truth for both the v1 (Home.jsx) and
// v2 (coherence/CoherenceHome.jsx) About Me pages, so a future edit to the bio only has to happen
// once instead of drifting between two copies of the same facts.

export const ABOUT_TITLE_LIST = 'Full-Stack Developer, Project Manager, QA Specialist, Live Broadcaster, 3D Model Artist, Audio Coach/Consultant, and Voice Over Artist';

export const ABOUT_PARAGRAPHS = [
  `I'm Tyler Fruik, a ${ABOUT_TITLE_LIST}. I received my education through the UT-Austin Full-Stack Web Development Bootcamp in which I earned the awards for "Best Front-End Developer" as well as "Best Single Day Programmer" graduating in March of 2024. My education also included several courses through the University of Wisconsin-Madison and Madison Area Technical College.`,
  `In my day job, I'm a Project Manager and QA Specialist at Uber Technologies, specifically picked for my proven ability to take a multi-team workflow from conception through production, optimization, and completion. That's sharpened something I already leaned on as a developer: knowing when the right call is "do now, fix later" versus "fix now, do later." Every project calls for a different balance of speed and polish, and reading that correctly, fast, is often the difference between shipping and stalling.`,
  `It's really the same lens on both sides of the bridge: web dev, QA, and project management. The underlying logic patterns don't change. I've led training and calibration for teams of 70+, and the same instinct that catches an edge case in QA is the instinct that wants to go build the fix myself.`,
  `I'm already working full time, but I'm always open to the right next step for both sides of that experience. You'll find my projects in the portfolio section above; each one links to a live deployment and its GitHub repository. If you have questions beyond what's covered below, every page's footer has direct links to reach me.`,
];

export const DEV_QA = [
  {
    q: 'What motivated me to become a web developer?',
    a: `I've always wanted to stage my career in the tech field. No other field is as constantly evolving and has such opportunity for innovation. As for web development in particular, when I began my computer science education, I learned the programming fundamentals through Java and Python. From the start I was intrigued by the ability to accomplish similar results through different languages. As I began to learn the three core languages of web development, I was impressed by the synergy offered despite vastly different syntax. Through my early projects, I found that this varied syntax provides great assistance in splitting up the functions of each piece of the program, organizing code flow, and making imports simple to understand. Additionally, I enjoy web development as it is one of the fastest ways to allow users to engage with the products I create.`,
  },
  {
    // Added 2026-08-28 at Tyler's request, drafted from his own description of how he works: system
    // design + task prioritization + front-end/UX instincts, applied to Coherence, the large
    // interconnected personal-tools project he's building for an audience of one (himself).
    q: 'How do I use AI to develop?',
    a: `AI is a constant collaborator in how I build, but the direction is always mine. My background in system design and task prioritization is what actually drives the work: I map out how the pieces need to fit together, decide what gets built next, and lean on a strong sense for front-end UX to make sure the result feels good, not just functional. The clearest proof of this is Coherence, a massive interconnected set of personal tools I've been designing and building from scratch, all meant to work together, all built with the user in mind. That user happens to be me, which raises the bar rather than lowering it: since I'm the only one who'll ever use it, it has to be exactly right. So AI output gets treated the way I'd treat a junior developer's pull request: fast and genuinely useful, but always reviewed, refined, and occasionally sent back to the drawing board before it ships. It's turned into one of the more transferable skills I've picked up building this thing for myself.`,
  },
  {
    q: 'What makes me stand out from other web developers?',
    a: `Most significantly, my pursuit of a career in web development has taken a non-traditional path. Having lived alongside many friends (my wife included) with successful careers as software engineers, I was privy to a fair amount of tech-talk for years. Then I learned web development. In doing so, I had context for how my education would apply to the present field. I was also able to fluidly adapt to my bootcamp's structure which held Agile Methodologies at the core of its curriculum. An additional way I stand out, is that over the last five years I have balanced my pursuit of a career in the tech industry with entertainment work, specifically live broadcasting on Twitch. My desire to create an experience both visually and auditorily unique necessitated a clear understanding of file type conversions. Be it images, videos, or sound effects, knowing the proper use case for a specific file format was crucial for maintaining a clean, interruption-free broadcast. Additionally, being restricted to a 16:9 visual space taught the fundamentals of z-indexing, UX/UI design, and smooth transition effects. Time and time again, my work in broadcasting has proven to be a directly transferable skill set.`,
  },
  {
    q: 'What is my daily routine as a web developer?',
    a: `My developer projects right now are divided between smaller contract jobs and personal projects. Therefore, if I have a project with a client's deadline, I will first devote my time to its completion. When I am working with more freedom, I will commonly be working on one of a handful of side projects while watching YouTube videos going over tips and tricks, new innovations in the field, or replaying recordings of past lectures when stumped on a particular subject. Recently, my core project has been updating my developer portfolio. When I need a break, I turn to one of four other options: Testing the limits of CSS, refactoring old projects, finding interesting public APIs to add to my personal homepage, or creating custom browser sources for live streaming.`,
  },
  {
    q: 'What is my remote work experience?',
    a: `All of my developer experience is remote. From education to production, I have built every program from my at-home setup and interfaced with other team members through Slack, Zoom, Discord, and Github. I thoroughly enjoy working remotely and am able to communicate and collaborate with ease.`,
  },
  {
    q: 'How do I approach collaborating with designers and other developers on a project?',
    a: `First off, I would ensure that each team member, regardless of background, is on the same page. This would entail breaking complex technical concepts down into terms understood by all. From there, work together to identify the project's components and sort them by priority. As development progresses, I would make certain to remain in constant contact with the team.`,
  },
  {
    q: 'What was a recent web development difficulty I faced and how did I work to overcome it?',
    a: `During my web development bootcamp, our final project was a full-stack application harboring a workload designed for five developers to divide evenly. This allowed each of us to focus on a particular aspect of the project highlighting our individual strengths. Our project was to create a user-focused website using the MERN Stack (MongoDB, Express.js, React, Node.js) with a scalable backend. The project was required to "fulfill a real-world need, with a focus on data and user demand." We decided to make a wedding planning website through which a user can handle all invites and fundraise using Stripe. My chosen task was facilitating the site's front-end. As half of the allotted time passed, three of the five suddenly dropped from the project having begun none of their components. As this was the final requirement for graduation, we were left with no time to waste. In one week, my remaining partner and I successfully incorporated Stripe, BCrypt, GraphQL, built our database using MongoDB and the Mongoose ODM, and ensured cross-browser compatibility all while keeping the code up to W3C standards. This crunch time led to me winning the "Best Single Day Programmer" award in our graduation ceremony. While the necessary work load of that week could have been overwhelming given the clear ramifications upon coming up short, I was delighted to have an excuse to write code for 80 hours.`,
  },
  {
    q: 'How do I ensure that my code is accessible to users with disabilities?',
    a: `For each website I have created, I follow the Web Content Accessibility Guidelines (WCAG) documents. These practices are commonplace across all of web development and were a crucial aspect of my education. A key parameter is ensuring that any non-text component of a website has a text correlate. For example, providing alt text when creating an img element. Another important strategy is properly formatting HTML. Not only does this assist other developers, but it is required for many screen readers to correctly interpret the content of a page.`,
  },
  {
    q: 'When I build a web application, how do I optimize its performance?',
    a: `Lately, I have been updating outdated projects to be React compatible. The reusable components and virtual DOM not only lessen the website's stress on the server, but also provide a more efficient and scalable code flow. Additionally, though a simple change, many of the refactoring projects I have worked on use "var" in variable declarations rather than the standard "let" or "const." By changing these, the website is less susceptible to bugs or data complications. Finally, ensuring that data is fetched only when needed, for example when a div enters the view port through scrolling improves site performance on devices with fewer resources.`,
  },
];

// Curated from the resume PDF's own Technical Skills section (public/documents/Tyler Fruik
// Resume.pdf) -- not invented, just picked the dozen most portfolio-relevant entries out of the
// full list for the v2 Skills row.
//
// logo -- filename (no extension) under public/images/skills/. Nothing there yet: Tyler said
// "I will instead get logos" (2026-08-28, dropping the emoji icons), so each entry renders a
// small gold-toned placeholder badge until he adds public/images/skills/<logo>.png -- no code
// change needed when he does, CoherenceSkillChip swaps to the real image automatically.
export const SKILLS = [
  { name: 'Python', logo: 'python' },
  { name: 'JavaScript', logo: 'javascript' },
  { name: 'React', logo: 'react' },
  { name: 'Node.js / Express', logo: 'node' },
  { name: 'SQL', logo: 'sql' },
  { name: 'MongoDB', logo: 'mongodb' },
  { name: 'GraphQL', logo: 'graphql' },
  { name: 'REST APIs', logo: 'rest' },
  { name: 'Postman / Insomnia', logo: 'postman' },
  { name: 'Agile / Scrum', logo: 'agile' },
  { name: 'Git / GitHub', logo: 'git' },
  { name: 'AI / LLM QA', logo: 'ai' },
];

// Creative Hobbies (2026-08-28, Tyler's ask: "pull these from all across Coherence just as a
// little fun section of the about me page"). Real facts, not invented -- sourced from Tyler's own
// profile: an original fantasy world (books + a Godot roguelike), DnD, music production, 3D
// printing, model painting, Blender, photography, and live streaming on Twitch. Same-day follow-up:
// dropped the world's own name and the Twitch handle -- Tyler didn't want either named here.
export const CREATIVE_HOBBIES = [
  'World-building an original fantasy setting across multiple book series',
  'Building a video game set in that world in Godot',
  'Running and playing in Dungeons & Dragons sessions',
  'Music production using DAWs',
  '3D printing and model painting',
  '3D modeling and rendering in Blender',
  'Photography',
  'Live broadcasting on Twitch',
];
