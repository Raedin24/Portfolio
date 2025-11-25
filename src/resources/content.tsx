import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kofi",
  lastName: "Corletey",
  name: `Kofi Corletey`,
  role: "Backend Engineer & Machine Learning Developer",
  avatar: "/images/avatar.jpg",
  email: "mkcorletey@gmail.com",
  location: "Africa/Accra", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/raedin24",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/matey-corletey/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable systems and intelligent models.</>,
  featured: {
  display: true,
  title: (
  <Row gap="12" vertical="center">
  <strong className="ml-4">ElectionHub</strong>{" "}
  <Line background="brand-alpha-strong" vert height="20" />
  <Text marginRight="4" onBackground="brand-medium">Featured project</Text>
  </Row>
  ),
  href: "/work/electionhub-secure-realtime-voting",
  },
  subline: (
    <>
      I'm {person.firstName}, a backend & ML developer focused on building secure, real‑time
      systems, and developing data‑driven products that solve real problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/matey-kofi-corletey-oonse8/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a backend and machine learning developer with hands‑on experience in
        Python/Django, RESTful APIs, PostgreSQL, and PyTorch. He blends systems design with
        applied ML, with a strong focus on security, real‑time dashboards, and data quality for model training.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bits and Bytes Consulting",
        timeframe: "Jan 2025 – Present",
        role: "Principal Backend Developer (ElectionHub)",
        achievements: [
        <>Architected a secure, real‑time voting platform (Python, Django, DRF, PostgreSQL, WebSockets) with OTP verification, device locking, JWT auth, and tamper‑evident audit logs.</>,
        <>Handled 4,000+ votes across three simultaneous elections with zero downtime; delivered instant results and automated reports; adopted by student electoral committees.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Turing",
        timeframe: "Oct 2025",
        role: "LLM Trainer – Video Annotation Expert",
        achievements: [
          <>Labeled and reviewed visual datasets for <b>computer vision</b> and <b>multimodal reasoning</b> tasks, following strict annotation protocols and QA pipelines.</>,
          <>Performed quality control checks on labeled data to identify inconsistencies, refine labeling accuracy, and improve dataset reliability.</>,
        ],
        images: [],
      },
  
      {
        company: "University of Ghana",
        timeframe: "Oct 2024 – Aug 2025",
        role: "Teaching Assistant – Machine Learning & Statistical Methods",
        achievements: [
          <>Supported instruction in <b>machine learning</b>, <b>statistical modeling</b>, and <b>data analysis</b>.</>,
          <>Designed and graded assignments on <b>regression</b>, <b>classification</b>, and <b>model evaluation</b>.</>,
          <>Assisted students with <b>Python-based implementations</b> (<b>NumPy</b>, <b>Pandas</b>, <b>scikit-learn</b>).</>,
          <>Clarified theoretical concepts in <b>probability</b>, <b>optimization</b>, and <b>model assessment</b>.</>,
          <>Provided feedback on projects to improve <b>analytical</b> and <b>programming proficiency</b>.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "University of Ghana — BSc. Computer Science",
        description: <>Relevant coursework: Machine Learning, Data Structures, Computer Networks, Software Engineering.</>,
      },
      {
        name: "Huawei HCIA Security — Certified",
        description: <>Focus: access control, encryption fundamentals, audit logging, and network security basics.</>,
      },
      {
        name: "Data Intelligence and Swarm Analytics Laboratory — Research Fellow",
        description: <>Worked on reproducing Transformer architectures for Facial Expression Recognition (FER) using PyTorch.</>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
      title: "Backend & APIs",
      description: <>Python (Django, DRF), Go, REST APIs, WebSockets, JWT auth, systems design.</>,
      tags: [
        { name: "Python", icon: "python" },
        { name: "Django", icon: "custom" },
        { name: "Go", icon: "go" },
        { name: "PostgreSQL", icon: "postgres" },
      ],
      images: [],
      },
      {
        title: "Databases & Ops",
        description: <>PostgreSQL, MySQL, Docker, Linux, Git; Nginx, Vercel/Ngrok; real‑time dashboards and optimized queries.</>,
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Linux", icon: "terminal" },
          { name: "Git", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Deployment & Hosting",
        description: <>DigitalOcean Droplets/Apps, GoDaddy DNS & cPanel hosting, Nginx reverse proxy, HTTPS via Let's Encrypt, Dockerized releases, zero‑downtime rollouts.</>,
        tags: [
          { name: "DigitalOcean", icon: "cloud" },
          { name: "GoDaddy", icon: "server" },
          { name: "Nginx", icon: "globe" },
          { name: "Let's Encrypt", icon: "lock" },
        ],
        images: [],
      },
      {
        title: "Machine Learning",
        description: <>PyTorch, transformers, attention mechanisms, CV pipelines, evaluation, and data processing.</>,
        tags: [
          { name: "PyTorch", icon: "pytorch" },
          { name: "Transformers", icon: "sparkles" },
        ],
        images: [],
      },
      {
        title: "Security",
        description: <>OTP flows, device binding, audit logging, access control; HCIA Security certified.</>,
        tags: [
          { name: "Security", icon: "lock" },
          { name: "HCIA", icon: "shield" },
        ],
        images: [],
      },
      {
        title: "Frontend & Mobile (secondary)",
        description: <>React + Vite integration and Jetpack Compose (Kotlin) for API‑driven UIs.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Kotlin", icon: "kotlin" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about backend, ML, and security",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
