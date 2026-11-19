import type {
  FeaturedProject,
  NavigationItem,
  PortfolioData,
} from "@/types/portfolio";

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const portfolio: PortfolioData = {
  name: "Mathew R",
  role: "Software Development Engineer",
  positioning: "Frontend-focused Software Development Engineer",
  location: "Bengaluru, Karnataka, India",
  shortLocation: "Bengaluru, India",
  email: "macmatthew724@gmail.com",
  siteUrl: "https://mathew-pi.vercel.app",
  resumeUrl: "/Mathew_R_Resume.pdf",
  resumeFileName: "Mathew_R_Resume.pdf",
  social: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/matthew110703",
      handle: "github.com/matthew110703",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matthew110703/",
      handle: "linkedin.com/in/matthew110703",
    },
  ],
  hero: {
    eyebrow: "SOFTWARE DEVELOPMENT ENGINEER · FRONTEND ENGINEERING",
    headline: "I build modular products and the frontend systems behind them.",
    description:
      "I’m a frontend-focused Software Development Engineer working across microfrontend architecture, design systems, cross-platform applications and visual product builders. I enjoy turning complex product requirements into maintainable interfaces, reusable systems and practical engineering workflows.",
    supportingStack: [
      "React",
      "TypeScript",
      "Module Federation",
      "Design Systems",
      "Capacitor",
      "Agentic Tooling",
    ],
  },
  about: {
    heading:
      "Engineering thoughtful interfaces, reusable systems and useful tools.",
    paragraphs: [
      "I’m a Software Development Engineer based in Bengaluru, focused primarily on frontend engineering and architecture. At Vananam, I contribute to rewards and loyalty products across web and mobile, working on microfrontend-based applications, shared design systems, visual builders and complex product workflows.",
      "My day-to-day work spans React, TypeScript, Module Federation, Redux, Storybook and Capacitor. I’ve worked on consolidating separate web and mobile implementations into a shared React codebase, extending a host-and-remotes architecture, and building reusable UI capabilities used across applications.",
      "Outside my primary role, I build backend-heavy products and developer tools. My projects explore commerce workflows, media APIs, mobile operations applications and agentic coding workflows. I’m also currently learning Rust.",
    ],
    quickFacts: [
      "Based in Bengaluru, India",
      "Frontend-focused Software Development Engineer",
      "Interested in frontend architecture, design systems, product engineering and developer tooling",
      "Currently learning Rust",
    ],
  },
  experience: [
    {
      id: "vananam-ventures",
      role: "Software Development Engineer",
      company: "Vananam Ventures",
      companyUrl: "https://www.vananam.com/",
      period: "1 December 2025 – Present",
      location: "Bengaluru, India",
      featured: true,
      summary:
        "Contributing to frontend engineering across the company’s rewards and loyalty product suite, spanning feature development, platform maintenance, frontend architecture, shared UI systems and mobile delivery.",
      productContributions: [
        {
          product: "Rekyndl",
          summary:
            "Worked on Journey Builder and the Puck-based landing-page / website builder.",
        },
        {
          product: "RedeemStack",
          summary:
            "Contributed to merchandise, flight-booking and bus-booking experiences alongside platform maintenance.",
        },
        {
          product: "ApplaudIQ",
          summary:
            "Contributed primarily to platform maintenance and the consolidated mobile application experience.",
        },
      ],
      highlights: [
        "Designed and extended a Module Federation storefront architecture built around a host application and approximately 7–8 remote applications, where remotes expose screens and own internal routing while the host coordinates top-level route registration.",
        "Worked across authentication and route-protection patterns, with authentication handled through a dedicated microfrontend and protected screens enforced inside individual remotes.",
        "Built and maintained reusable components and variants in a shared Storybook-documented design system with shared theming and design tokens distributed via a private npm package.",
        "Contributed to a visual landing-page builder built on Puck and Journey Builder workflows for Rekyndl, alongside complex dashboards, data-heavy interfaces and Redux/Redux Thunk state workflows.",
        "Helped consolidate separate React web and React Native mobile implementations into a shared React + Capacitor codebase supporting web, Android and iOS with deep linking, eliminating separate React Native feature implementations.",
        "Created agentic development workflows, Agent Skills and frontend documentation communicating application architecture and implementation conventions to AI coding agents.",
      ],
      additionalNote:
        "Basic exposure to Go backend code alongside frontend engineering responsibilities.",
      technologies: [
        "React",
        "TypeScript",
        "Module Federation",
        "Redux Toolkit",
        "Storybook",
        "Design Tokens",
        "Puck",
        "Capacitor",
        "Agent Skills",
      ],
    },
    {
      id: "sirpi",
      role: "Frontend Developer",
      company: "SIRPI Products & Services Pvt. Ltd.",
      companyUrl: "https://www.sirpi.io/",
      period: "May 2025 – November 2025",
      location: "Bengaluru, India",
      highlights: [
        "Built responsive web interfaces using React and Tailwind CSS with reusable components, state management and API integrations.",
        "Contributed to an ERP inventory-management application, focusing on modular frontend structure, maintainable components and clear operational workflows.",
        "Debugged and resolved UI and functional issues across React components.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Modular Frontend",
        "API Integration",
      ],
    },
    {
      id: "unified-mentor",
      role: "Full Stack Web Developer Intern",
      company: "Unified Mentor Pvt. Ltd.",
      companyUrl: "https://www.unifiedmentor.com/",
      period: "September 2024 – December 2024",
      location: "Remote",
      highlights: [
        "Developed web application features and REST API functionality, translating requirements into working frontend and backend solutions.",
        "Gained practical experience across feature development, debugging and the software development lifecycle.",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
  ],
  education: [
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Cambridge College, KR Puram",
      institutionUrl: "https://www.cambridge.edu.in/",
      period: "Oct 2021 – Aug 2024",
      location: "Bengaluru, India",
      grade: "8.22 CGPA",
    },
    {
      id: "puc",
      degree: "Pre-University (CEBA)",
      institution: "Charan’s PU College, Domlur",
      institutionUrl: "https://www.charanspu.com/",
      period: "2019 – 2021",
      location: "Bengaluru, India",
    },
  ],
  featuredProjects: [
    {
      slug: "pstack-rewire",
      index: "01",
      title: "pstack-rewire",
      category: "Agentic engineering · Developer tooling",
      summary:
        "A multi-harness adaptation of an agentic coding workflow, bringing platform-specific agent capabilities and installation tooling to several AI coding environments.",
      contributionHighlight:
        "Adapted the upstream pstack baseline into native bundles for Claude Code, OpenAI Codex, Google Antigravity and Agent Skills with cross-platform installers.",
      confidential: false,
      links: {
        github: "https://github.com/matthew110703/pstack-rewire",
      },
      technologies: [
        "Agent Skills",
        "Claude Code",
        "OpenAI Codex",
        "Google Antigravity",
        "Cursor",
        "Shell",
        "PowerShell",
      ],
      visual: "pstack",
      caseStudy: {
        context:
          "Different AI coding harnesses resolve skills, rules, manifests and agent extensions through distinct conventions. Treating every runtime identically loses platform capabilities or breaks installation flows.",
        contribution: [
          "Built a multi-harness distribution porting the upstream pstack agentic engineering workflow across target runtimes.",
          "Maintained alignment with the upstream Cursor baseline while generating platform-adapted bundles for Claude Code plugins, OpenAI Codex plugins, Google Antigravity and a harness-neutral Agent Skills format.",
          "Implemented cross-platform shell and PowerShell installers with agent auto-detection, global and workspace installation scopes, and clean update/uninstall flows.",
        ],
        engineeringDecisions: [
          "Tailored bundle structures and JSON manifests to each coding harness’s native extension conventions rather than forcing one generic adapter.",
          "Separated global user-level installation from project-scoped installation so teams can adopt workflows per repository or machine-wide.",
        ],
        outcomes: [
          "Made a structured multi-agent engineering workflow portable across major coding-agent environments on macOS, Linux and Windows.",
        ],
        note: "This project ports and adapts the upstream pstack workflow rather than authoring the upstream pstack content itself.",
      },
    },
    {
      slug: "commerce-platform-backend",
      index: "02",
      title: "Commerce Platform Backend",
      category: "Backend engineering · E-commerce",
      summary:
        "Backend services for an e-commerce platform, covering catalogue, inventory, cart, checkout, orders, payments and media workflows.",
      contributionHighlight:
        "Designed transactional domain models, payment and order lifecycles, presigned object-storage media uploads and Redis-backed async processing.",
      confidential: true,
      confidentialLabel: "Confidential client project",
      links: {},
      technologies: [
        "NestJS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Cloudflare R2",
        "BullMQ",
      ],
      visual: "commerce",
      caseStudy: {
        context:
          "E-commerce backends require strict consistency across catalogue variants, stock reservations, checkout state transitions, payment verification and high-volume product media uploads.",
        contribution: [
          "Designed and implemented modular backend services in NestJS and TypeScript backed by Prisma and PostgreSQL.",
          "Modelled products, variants, catalogue attributes, inventory records, cart state, checkout flows and order lifecycle transitions.",
          "Implemented payment integration workflows alongside direct-to-object-storage media uploads using presigned URLs.",
        ],
        engineeringDecisions: [
          "Offloaded media binary transfers directly to S3-compatible object storage (Cloudflare R2) via presigned URLs to avoid routing large uploads through API workers.",
          "Used Redis and background job queues for asynchronous and shared application workloads decoupled from request-response latency.",
          "Structured commerce domains around explicit Prisma schema boundaries to keep variant, inventory and order state transitions auditable.",
        ],
        outcomes: [
          "Delivered a cohesive domain-driven commerce API covering end-to-end storefront and back-office transactional workflows.",
        ],
        note: "Client identity, internal product name and repository details are intentionally omitted under confidentiality.",
      },
    },
    {
      slug: "order-fulfilment-companion-app",
      index: "03",
      title: "Order Fulfilment Companion App",
      category: "Mobile application · Operations workflows",
      summary:
        "A mobile operations app that helps workshop and delivery teams track order progress and keep customers informed.",
      contributionHighlight:
        "Built role-focused mobile workflows for staff authentication, order acknowledgement, milestone updates, activity timelines and delivery confirmation.",
      confidential: true,
      confidentialLabel: "Confidential client project",
      links: {},
      technologies: [
        "React Native",
        "Expo",
        "Expo Router",
        "TanStack Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "NativeWind",
      ],
      visual: "fulfilment",
      caseStudy: {
        context:
          "After an order is placed, workshop staff and delivery teams need a focused mobile interface to acknowledge incoming work, log fulfilment milestones and communicate status updates accurately.",
        contribution: [
          "Built the mobile companion application with Expo, Expo Router and NativeWind for operational staff on the floor and in transit.",
          "Implemented staff authentication, order acknowledgement flows, workshop milestone transitions, order activity timelines, customer status communication and delivery confirmation.",
        ],
        engineeringDecisions: [
          "Separated server-synchronized order state (TanStack Query) from lightweight local UI/session state (Zustand) for predictable cache invalidation across milestone updates.",
          "Paired React Hook Form with Zod schemas to enforce runtime validation at operational handoff and delivery confirmation steps.",
          "Adopted file-based routing via Expo Router to keep staff workflows cleanly segmented and deep-link ready.",
        ],
        outcomes: [
          "Gave workshop and delivery personnel a single structured workflow covering post-order execution from acknowledgement through delivery.",
        ],
        note: "Client identity, internal application name and repository details are intentionally omitted under confidentiality.",
      },
    },
    {
      slug: "braindance-api",
      index: "04",
      title: "Braindance API",
      category: "Backend engineering · Media discovery",
      summary:
        "A media API for discovery, franchise collections, device-scoped watchlists and playback-progress telemetry.",
      contributionHighlight:
        "Built versioned REST endpoints integrating TMDB metadata, MongoDB TTL caching, anonymous device-isolated watchlists and structured telemetry logging.",
      confidential: false,
      links: {
        github: "https://github.com/matthew110703/braindance",
      },
      technologies: [
        "Node.js",
        "TypeScript",
        "Express",
        "MongoDB Atlas",
        "Mongoose",
        "TMDB API",
        "Zod",
        "Pino",
      ],
      visual: "braindance",
      caseStudy: {
        context:
          "Streaming clients need fast catalogue discovery, curated franchise grouping and personalized watchlists/resume-playback state without forcing full user account onboarding.",
        contribution: [
          "Built a modular Express + TypeScript backend integrating movie and television metadata from the TMDB API.",
          "Implemented search, discovery, franchise collections, anonymous device-scoped watchlists and playback-progress telemetry endpoints.",
          "Added API-key middleware, rate limiting, Zod request validation, Pino structured logging and SWC-powered builds.",
        ],
        engineeringDecisions: [
          "Cached frequently queried genre metadata in MongoDB with TTL-based expiry to reduce redundant upstream TMDB calls.",
          "Scoped watchlists and playback progress to anonymous device identifiers so client apps can persist user state without mandatory auth.",
          "Versioned API routes and standardized Pino structured logs so route evolution and operational debugging stay isolated.",
        ],
        outcomes: [
          "Provided a clean, versioned media discovery and telemetry service ready for client streaming interfaces.",
        ],
      },
    },
    {
      slug: "garuda-powertech",
      index: "05",
      title: "Garuda Powertech",
      category: "Freelance delivery · Business website",
      summary:
        "A responsive business website and product catalogue for a power-backup solutions provider.",
      contributionHighlight:
        "Delivered a 6-category product catalogue with spec views, route-aware hero content, LocalBusiness JSON-LD, sitemap generation and WhatsApp inquiry entry points.",
      confidential: false,
      links: {
        live: "https://garuda-powertech.vercel.app/",
        github: "https://github.com/matthew110703/garuda-powertech-portfolio",
      },
      technologies: [
        "Next.js App Router",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Swiper",
        "JSON-LD",
        "SEO Metadata",
      ],
      visual: "garuda",
      caseStudy: {
        context:
          "An authorised Exide battery dealer and power-backup provider in Bengaluru needed a clear digital catalogue presenting technical specifications across product lines alongside direct customer inquiry channels.",
        contribution: [
          "Developed a responsive website with Next.js App Router, React 19, TypeScript and Tailwind CSS v4.",
          "Built structured browsing across six product categories with product-specific pages, technical specification layouts and route-aware hero sections.",
          "Configured SEO metadata, sitemap/robots generation, LocalBusiness JSON-LD structured data, branded error states and WhatsApp contact entry points.",
        ],
        engineeringDecisions: [
          "Used Next.js App Router metadata APIs and LocalBusiness structured data so each product category and company page carries accurate search-engine context.",
          "Prioritized WhatsApp entry points alongside a server-action contact handler scaffolded for future email-provider integration, matching how local buyers reach out.",
        ],
        outcomes: [
          "Shipped a live business presence and mobile-friendly specification catalogue tailored to local power-backup buyers.",
        ],
        note: "The contact form server action is structured for a future email-provider integration; primary live inquiries route via WhatsApp.",
      },
    },
  ],
  earlierWork: [
    {
      id: "ai-hub",
      title: "Artificial Intelligence Hub",
      category: "Earlier Full-Stack Work",
      description:
        "An application combining a chatbot, email writer, text-to-speech and text-to-image workflows using Google Gemini, ElevenLabs and Stable Diffusion over a React / Redux Toolkit frontend and Node.js / Express / Socket.IO / MongoDB backend.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "Socket.IO",
        "MongoDB",
      ],
      github: "https://github.com/matthew110703/artificial-intelligence-hub",
      thumbnail: "/projects/ai_hub.webp",
    },
    {
      id: "clinic-management-system",
      title: "Clinic Management System",
      category: "Earlier Full-Stack Work",
      description:
        "A clinic workflow application providing separate dashboards for doctors and receptionists with role-based authorisation, token generation, billing and patient-history tracking on the MERN stack.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material UI",
        "JWT",
      ],
      github: "https://github.com/matthew110703/Clinic-Management-System",
      thumbnail: "/projects/cms.webp",
    },
  ],
  capabilities: {
    groups: [
      {
        title: "Frontend engineering",
        cadence: "daily use",
        items: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Redux Toolkit",
          "Tailwind CSS",
          "Module Federation",
          "API integration",
          "Responsive interfaces",
        ],
      },
      {
        title: "Architecture & design systems",
        cadence: "daily use",
        items: [
          "Microfrontend architecture",
          "Host / remotes design",
          "Frontend feature architecture",
          "Storybook",
          "Reusable component libraries",
          "Design tokens",
          "Theming",
          "Component variants",
        ],
      },
      {
        title: "Mobile engineering",
        cadence: "project & production",
        items: [
          "Capacitor",
          "React Native",
          "Expo",
          "Deep linking",
          "Android & iOS builds",
        ],
      },
      {
        title: "Backend & data",
        cadence: "project experience",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "REST APIs",
          "PostgreSQL",
          "Prisma",
          "MongoDB",
          "Redis",
          "Cloudflare R2",
        ],
      },
      {
        title: "AI-assisted engineering",
        cadence: "daily use",
        items: [
          "Agent Skills",
          "Coding-agent workflows",
          "Harness integrations",
          "Workflow documentation",
          "Developer tooling",
        ],
      },
      {
        title: "Tools & delivery",
        cadence: "daily use",
        items: [
          "Git",
          "GitHub",
          "pnpm",
          "Docker",
          "Vercel",
          "Render",
          "BullMQ",
        ],
      },
    ],
    learning: "Rust",
    additionalExposure:
      "Go — basic familiarity; not a primary professional specialisation.",
  },
  contact: {
    heading: "Have a product problem worth solving? Let’s talk.",
    description:
      "I’m open to software engineering opportunities and conversations around frontend architecture, product engineering, design systems and developer tooling.",
  },
  seo: {
    title: "Mathew R — Software Development Engineer | Frontend Architecture",
    description:
      "Portfolio of Mathew R, a frontend-focused Software Development Engineer working on React, microfrontend architecture, design systems, cross-platform apps and developer tooling.",
    ogTitle: "Mathew R — Frontend-focused Software Development Engineer",
    ogDescription:
      "Selected engineering work across product interfaces, microfrontends, design systems, mobile applications and agentic developer tooling.",
    keywords: [
      "Mathew R",
      "Software Development Engineer",
      "Frontend Engineer",
      "React Developer",
      "TypeScript",
      "Module Federation",
      "Microfrontends",
      "Design Systems",
      "Capacitor",
      "Developer Tooling",
    ],
  },
};

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return portfolio.featuredProjects.find((project) => project.slug === slug);
}
