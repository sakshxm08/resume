import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Saksham Gambhir",
  initials: "SG",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",
  about:
    "Passionate full-stack developer transforming ideas into user-centric web experiences.",
  summary:
    "Skilled Full Stack Developer focused on crafting high-performance web applications with intuitive design and robust architecture. Experienced in modern frameworks like React, Next.js, and Ruby on Rails, and adept at deploying scalable solutions on AWS. Driven to create impactful digital experiences that blend functionality and creativity.",
  avatarUrl: "https://avatars.githubusercontent.com/u/100534890?v=4",
  personalWebsiteUrl: "https://sakshxm08.in",
  contact: {
    email: "hi@sakshxm08.in",
    tel: "+91 9368383987",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sakshxm08",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sakshxm08/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Delhi Technological University",
      degree: "Bachelor's Degree in Electronics and Communication",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "TechiZen India",
      link: "https://www.techizen.com/",
      badges: ["Remote"],
      title: "Full Stack Web Developer & Web Designer Intern",
      logo: ClevertechLogo,
      start: "Oct 2024",
      end: null,
      description:
        "Engaged in redesigning and redeveloping an existing ed-tech platform, with a focus on integrating AI features for enhanced performance and user engagement. Working with Node.js, Express.js, MongoDB, and Vue.js to improve frontend and backend functionality.",
    },
    {
      company: "CalmClove / Rejoying",
      link: "https://calmclove.com",
      badges: ["Remote"],
      title: "Full Stack Developer Intern",
      logo: ConsultlyLogo,
      start: "Mar 2024",
      end: "Apr 2024",
      description:
        "Built a scalable website using React, TailwindCSS, Ruby on Rails, and PostgreSQL. Developed a PWA with Vite for seamless offline access, increasing engagement by 25%, and deployed services on AWS for optimal performance and monitoring.",
    },
    {
      company: "ithinkyoua.re",
      link: "https://ithinkyoua.re",
      badges: ["Remote"],
      title: "FrontEnd Developer Intern",
      logo: ParabolLogo,
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "Created a responsive website with React and TailwindCSS, improving mobile interaction by 50%. Enhanced data flow with React Context API and streamlined deployment through Cloudflare, achieving server response times under 200ms and ensuring reliable performance with AWS EC2.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "React/Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Ruby on Rails",
    "TailwindCSS",
    "ChakraUI",
    "MongoDB",
    "MySQL",
    "AWS",
    "Redux",
    "DSA",
    "Figma"

  ],
  projects: [
    {
      title: "ShortSpot",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
      ],
      description:
        "URL shortener with added capabilities to edit/delete links, generate QR Code and view analytics.",
      logo: ParabolLogo,
      link: {
        label: "ShortSpot",
        href: "https://shortspot.netlify.app/",
      },
    },
    {
      title: "CalmClove",
      techStack: [
        "React",
        "TailwindCSS",
        "Ruby on Rails",
        "PostgreSQL"
      ],
      description: 
        "A med-tech platform that connects individuals with mental wellness experts.",
      logo: ParabolLogo,
      link: {
        label: "CalmClove",
        href: "https://calmclove.com/"
      }
    },
    
    {
      title: "ithinkyoua.re",
      techStack: [
        "React",
        "TailwindCSS",
        "Django",
        "PostgreSQL"
      ],
      description: 
       "A kindness app that amplifies compliments, allowing users to share positive messages and enhance connection.",
      logo: ParabolLogo,
      link: {
        label: "ithinkyoua.re",
        href: "https://ithinkyoua.re/"
      }
    },
    
    {
      title: "WearWorx",
      techStack: [
        "React",
        "MongoDB",
        "Node.js",
        "Redux",
        "TailwindCSS",
      ],
      description: 
        "An e-commerce platform for fashion trends with secure authentication and personalized shopping.",
      logo: ParabolLogo, // Replace with the actual logo if available
      link: {
        label: "WearWorx",
        href: "https://wearworx.sakshxm08.in/"
      }
    },
    
    {
      title: "GitFolio",
      techStack: ["HTML", "TailwindCSS", "JavaScript", "GitHub API"
      ],
      description:
        "A web app to display GitHub user details and repository information via the GitHub API.",
      logo: JarockiMeLogo,
      link: {
        label: "GitFolio",
        href: "https://gitfolio.sakshxm08.in/",
      },
    },
  ],
} as const;
