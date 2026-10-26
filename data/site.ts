// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mughees Khan",
  firstName: "Mughees",
  initials: "MK",
  role: "Software Engineer",
  title: "Frontend Developer",
  company: "Crown Group",
  url: "https://mughees-khan.vercel.app",
  email: "mugheesk180@gmail.com",
  whatsapp: "923267086081",
  whatsappLabel: "+92 326 7086081",
  github: "https://github.com/mughees-khan",
  linkedin: "https://www.linkedin.com/in/mugheeskhan",
  resume: "/Mughees-Khan-Resume.pdf",
  introVideo: "/videos/intro.mp4",
  introPoster: "/images/intro-poster.jpg",
  badgePhoto: "/images/badge.webp",
};

export const whatsappUrl = `https://wa.me/${profile.whatsapp}`;

export type Project = {
  title: string;
  category: string;
  color: string;
  description: string;
  points: string[];
  tags: string[];
  image: string;
  /** Shown as a badge, e.g. "In progress" for unfinished work */
  status?: string;
  /** Website projects */
  website?: string;
  domain?: string;
  /** Button text for the website link (defaults to "Visit website") */
  websiteLabel?: string;
  /** App projects */
  playStore?: string;
  appStore?: string;
};

export const projects: Project[] = [
  {
    title: "Kinder Pilot",
    category: "DAYCARE ERP · NEXT.JS",
    color: "#FF6A3D",
    status: "In progress",
    website: "https://daycare-erp-inky.vercel.app/dashboard",
    domain: "daycare-erp-inky.vercel.app",
    websiteLabel: "Live demo",
    image: "/images/projects/kinder-pilot.webp",
    description: "Multi-branch ERP that runs daycares and schools, from admissions to fees, payroll and head-office approvals.",
    points: ["Admissions pipeline, enrollment wizard and student records", "Attendance, staff-to-child ratios, incidents and health logs", "Billing, payroll, HR, stock and procurement"],
    tags: ["Next.js", "React", "Recharts"],
  },
  {
    title: "Crown Electric Mobility",
    category: "WEBSITE · NEXT.JS",
    color: "#FF7A1A",
    website: "https://crownelectricmobility.com/",
    domain: "crownelectricmobility.com",
    image: "/images/projects/crown-electric-mobility.webp",
    description: "Website for one of Pakistan's leading electric bike brands.",
    points: ["Model pages and a fuel-savings calculator", "Dealer finder map across 110+ stores", "Blog and test-ride booking"],
    tags: ["Next.js", "React"],
  },
  {
    title: "Crown Group",
    category: "CORPORATE WEBSITE",
    color: "#E5484D",
    website: "https://crowngroup.com.pk/",
    domain: "crowngroup.com.pk",
    image: "/images/projects/crown-group.webp",
    description: "Corporate website for Pakistan's largest motorcycle spare parts manufacturer.",
    points: ["23+ year brand story and 250,000+ partner network", "Automotive, solar and tech businesses", "Vendor onboarding"],
    tags: ["React", "Website"],
  },
  {
    title: "Crownsoft",
    category: "WEBSITE · NEXT.JS",
    color: "#E52424",
    website: "https://crownsoft.co/",
    domain: "crownsoft.co",
    image: "/images/projects/crownsoft.webp",
    description: "Website for a US-based mobile app development company.",
    points: ["Services and a six-phase delivery process", "Case studies and industries", "Free consultation booking"],
    tags: ["Next.js", "React"],
  },
  {
    title: "Crown One",
    category: "APP LANDING · NEXT.JS",
    color: "#FF7A1A",
    website: "https://crownone.app/",
    domain: "crownone.app",
    image: "/images/projects/crown-one.webp",
    description: "Landing site for a B2B app used by retailers and mechanics.",
    points: ["70,000+ mechanics and 25,000+ retailers", "100K+ app downloads", "App Store and Google Play links"],
    tags: ["Next.js", "React"],
  },
  {
    title: "Rider Pro",
    category: "WEBSITE · NEXT.JS",
    color: "#6B5CFF",
    website: "https://riderpro.io/",
    domain: "riderpro.io",
    image: "/images/projects/rider-pro.webp",
    description: "Website for a rider app that finds nearby mechanics and EV charging stations.",
    points: ["Live map of nearby service providers", "Filter by service type", "App download funnel"],
    tags: ["Next.js", "React"],
  },
  {
    title: "Dr. Sofia's Daycare",
    category: "WEBSITE · NEXT.JS",
    color: "#FFA62B",
    website: "https://www.drsofiasdaycare.com/",
    domain: "drsofiasdaycare.com",
    image: "/images/projects/dr-sofias-daycare.webp",
    description: "Website for Karachi's first private 12-hour daycare and learning center.",
    points: ["Programs and campus details", "Inquiry, admission and job application forms", "Campus tour booking"],
    tags: ["Next.js", "React"],
  },
  {
    title: "Clutr",
    category: "PERSONAL PROJECT · REACT NATIVE",
    color: "#E11D8A",
    playStore: "https://play.google.com/store/apps/details?id=com.clutrlabs.clutr",
    appStore: "https://apps.apple.com/us/app/clutr-shared-life-organizer/id6782153567",
    image: "/images/projects/clutr.webp",
    description: "Shared calendars, tasks and to-do lists that keep couples, families and roommates in sync.",
    points: ["Shared calendar, tasks and todos", "Friend requests and personal network", "Built-in AI assistant"],
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "GoBro",
    category: "SILICONPLEX · REACT NATIVE",
    color: "#5DBB46",
    playStore: "https://play.google.com/store/apps/details?id=com.spcom.gobrocustomer",
    image: "/images/projects/gobro.webp",
    description: "Customer app for booking trusted local pros for home services.",
    points: ["Live booking status", "Google Maps and Places API for service discovery", "Social login onboarding"],
    tags: ["React Native", "Android"],
  },
  {
    title: "GoBro Pro",
    category: "SILICONPLEX · REACT NATIVE",
    color: "#5DBB46",
    playStore: "https://play.google.com/store/apps/details?id=com.spcom.gobroserviceprovider",
    image: "/images/projects/gobro-pro.webp",
    description: "Companion app for professionals to manage bookings and grow their business.",
    points: ["Dashboard for services, orders and earnings", "Upcoming orders list", "Pro profile and ratings"],
    tags: ["React Native", "Android"],
  },
];

export type Job = {
  when: string;
  role: string;
  org: string;
  color: string;
  current?: boolean;
  text: string;
  points: { lead?: string; text: string }[];
  tags: string[];
};

export const experience: Job[] = [
  {
    when: "AUG 2025 — PRESENT",
    role: "Frontend Developer",
    org: "Crown Group",
    color: "#FF7A1A",
    current: true,
    text: "Build and maintain production websites for Crown Group brands with Next.js and React, taking features from design to deployment.",
    points: [
      { lead: "Crown Electric Mobility:", text: "dealer finder with interactive map and list views across 110 stores, model pages, fuel-savings calculator and test-ride booking." },
      { lead: "Charge Pro:", text: "admin panel to manage EV charging devices and monitor their performance, on a scalable, secure cloud architecture." },
      { text: "Shipped crownelectricmobility.com, crowngroup.com.pk, crownsoft.co, crownone.app and riderpro.io." },
    ],
    tags: ["Next.js", "React", "TypeScript", "Google Maps"],
  },
  {
    when: "DEC 2023 — AUG 2025",
    role: "Associate Frontend Engineer",
    org: "Siliconplex",
    color: "#5DBB46",
    text: "Built cross-platform mobile apps for a home-services marketplace.",
    points: [
      { lead: "GoBro & GoBro Pro:", text: "customer and service-provider React Native apps with live booking status, orders and earnings dashboards." },
      { text: "Integrated Google Maps, Places API and social login to streamline onboarding and service discovery." },
    ],
    tags: ["React Native", "Google Maps", "Places API", "Social Login"],
  },
  {
    when: "JUN 2023 — AUG 2023",
    role: "Intern",
    org: "Folio3 Software",
    color: "#6E9BFF",
    text: "Contributed to a React JS web application and gained hands-on experience with modern frontend workflows.",
    points: [],
    tags: ["React JS"],
  },
];

export const education = {
  when: "2019 — 2023",
  degree: "Bachelor's in Software Engineering",
  school: "University of Karachi, UBIT",
};

export const certifications = [
  { name: "Web Development", from: "Saylani Mass IT Training" },
  { name: "Summer Internship", from: "Folio3 Software" },
];

export const skillFamilies = [
  { id: "all", label: "All", color: "#E6E6EE" },
  { id: "lang", label: "Languages", color: "#6E9BFF" },
  { id: "front", label: "Frontend", color: "#A06BFF" },
  { id: "mobile", label: "Mobile", color: "#3EC8B5" },
  { id: "cms", label: "CMS", color: "#FF8A3D" },
  { id: "int", label: "Integrations", color: "#F2C94C" },
] as const;

export type FamilyId = (typeof skillFamilies)[number]["id"];

export const skills: { sym: string; name: string; fam: Exclude<FamilyId, "all">; tag: string }[] = [
  { sym: "Js", name: "JavaScript", fam: "lang", tag: "LANG" },
  { sym: "Ts", name: "TypeScript", fam: "lang", tag: "LANG" },
  { sym: "Ht", name: "HTML5", fam: "lang", tag: "WEB" },
  { sym: "Cs", name: "CSS3", fam: "lang", tag: "WEB" },
  { sym: "Re", name: "React.js", fam: "front", tag: "UI" },
  { sym: "Nx", name: "Next.js", fam: "front", tag: "UI" },
  { sym: "Ws", name: "Websites", fam: "front", tag: "BUILD" },
  { sym: "Rn", name: "React Native", fam: "mobile", tag: "MOB" },
  { sym: "Ma", name: "Mobile Apps", fam: "mobile", tag: "BUILD" },
  { sym: "St", name: "App Store & Play", fam: "mobile", tag: "SHIP" },
  { sym: "Wp", name: "WordPress", fam: "cms", tag: "CMS" },
  { sym: "Gm", name: "Google Maps", fam: "int", tag: "API" },
  { sym: "Pa", name: "Places API", fam: "int", tag: "API" },
  { sym: "Sl", name: "Social Login", fam: "int", tag: "AUTH" },
];

/** Background "main character" camera: one pose + camera shot per section. */
export const cameraShots = [
  { section: "about", pose: "/images/poses/pose1.webp", originY: 26, scale: 0.78, x: 0.2, y: 0.08, brightness: 0.4, blur: 4 },
  { section: "works", pose: "/images/poses/pose2.webp", originY: 30, scale: 0.92, x: 0, y: 0.1, brightness: 0.22, blur: 10 },
  { section: "experience", pose: "/images/poses/pose3.webp", originY: 30, scale: 1, x: 0.28, y: 0.06, brightness: 0.36, blur: 5 },
  { section: "stack", pose: "/images/poses/pose1.webp", originY: 26, scale: 1.25, x: 0, y: 0.04, brightness: 0.28, blur: 9 },
  { section: "contact", pose: "/images/poses/pose5.webp", originY: 30, scale: 1.05, x: -0.18, y: 0.06, brightness: 0.4, blur: 4 },
];
