// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Balaji",
  title: "Senior Software Engineer",
  roles: [
    "Angular developer",
    "Ionic & hybrid app builder",
    "React enthusiast",
    "performance obsessive",
  ],
  email: "balajic3495@gmail.com",
  phone: "9042611793",
  location: "Bengaluru, India",
  summary:
    "Senior Software Engineer with 5+ years of experience designing, developing and maintaining scalable web and cross-platform mobile applications using Angular, Ionic and React. Strong focus on clean code, reusable components and scalable architectures that deliver seamless user experiences.",
  about: [
    "I build single-page applications and hybrid mobile apps for government, banking and consumer clients — from E-Visa and Passport systems for Bahrain to an attendance platform for a bank.",
    "I care about performance (lazy loading, bundle-size reduction, change-detection strategies), maintainable architecture and mentoring the developers around me. I work comfortably in Agile Scrum teams alongside designers, backend engineers and QA.",
  ],
  links: [
    { label: "Email", href: "mailto:balajic3495@gmail.com" },
    { label: "Phone", href: "tel:+919042611793" },
  ],
};

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 7, suffix: "", label: "Projects delivered" },
  { value: 3, suffix: "", label: "Frameworks: Angular, Ionic, React" },
  { value: 2, suffix: "", label: "Countries served: India & Bahrain" },
];

export const marquee = [
  "Angular",
  "TypeScript",
  "Ionic",
  "React",
  "RxJS",
  "Capacitor",
  "Cordova",
  "Firebase",
  "SCSS",
  "Angular Material",
  "REST APIs",
  "Jasmine & Karma",
];

export const skills = [
  {
    group: "Web & Frontend",
    items: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
      "Responsive Design",
      "Angular",
      "Angular Material",
      "Ionic",
      "React",
    ],
  },
  {
    group: "Programming & Mobile",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Capacitor",
      "Cordova",
      "Hybrid App Development",
      "Android",
    ],
  },
  {
    group: "API & Database",
    items: [
      "RESTful APIs",
      "HTTP Client",
      "RxJS",
      "Observables",
      "Firebase",
      "SQL",
      "MongoDB",
      "MongoDB Compass",
    ],
  },
  {
    group: "Testing & Version Control",
    items: ["Jasmine", "Karma", "Git", "GitHub", "CI/CD", "AWS"],
  },
  {
    group: "Tools",
    items: [
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Postman",
      "JIRA",
      "Mattermost",
      "TaskTracker",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Developer",
    company: "Clover Infotech",
    period: "Feb 2026 – Present",
    points: [
      "Develop scalable, responsive web applications using Angular, TypeScript, JavaScript, HTML5 and CSS3.",
      "Design reusable Angular components, services and modules following clean, modular architecture.",
      "Integrate REST APIs with HttpClient and manage async flows with RxJS, Observables and Promises.",
      "Optimize performance through lazy loading, code splitting and change-detection strategies.",
      "Review code, troubleshoot runtime and performance issues, and support junior developers.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Alo Infotech",
    period: "Feb 2022 – Sep 2025",
    points: [
      "Built web and cross-platform mobile apps with Angular, Ionic, Capacitor, Cordova and React.",
      "Worked on enterprise E-Visa, Passport and Golden Visa systems with a focus on security and performance.",
      "Integrated native capabilities — Camera, NFC, Geolocation, File System, Device and Network — via Capacitor and Cordova plugins.",
      "Cut bundle sizes and load times with lazy loading, modular architecture and code optimization.",
      "Wrote unit tests with Jasmine and Karma; managed Android builds and releases via Android Studio.",
      "Built with Angular 16+ (Standalone Components, Signals, Route Guards) and React (Hooks, Router, Context API).",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Spanglesh Infotech",
    period: "Feb 2020 – Feb 2021",
    points: [
      "Designed responsive web pages and implemented new UI screens from business requirements.",
      "Built reusable Angular components and integrated frontends with REST APIs.",
      "Used Git and JIRA, and debugged with Visual Studio and VS Code in Agile Scrum teams.",
    ],
  },
];

// type: "web" | "mobile"
export const projects = [
  {
    name: "E-Attendance",
    type: "web",
    client: "Karnataka Bank",
    role: "Senior Software Developer",
    period: "Feb 2026 – Present",
    tech: ["Angular", "TypeScript", "PrimeNG", "REST API"],
    description:
      "Employee check-in/check-out with real-time attendance tracking, validations for late entry, early exit, holidays and leave integration, branch-wise monitoring and role-based access.",
  },
  {
    name: "FastX — Food Ordering Platform",
    type: "web",
    client: "Alo Infotech",
    role: "Senior Front-End Developer",
    period: "Jan 2025 – Sep 2025",
    tech: ["Angular", "TypeScript", "Angular Material", "Firebase", "REST API"],
    description:
      "Full food-delivery platform with Admin, Vendor and Customer modules: menu browsing, cart, checkout, promo codes, Razorpay payments and real-time order tracking, secured with JWT and role-based access.",
  },
  {
    name: "NPRA — E-Visa & Passport App",
    type: "mobile",
    client: "NPRA, Bahrain",
    role: "Hybrid Mobile App Developer",
    period: "Feb 2024 – Dec 2024",
    tech: ["Ionic", "Angular", "Cordova", "Android Studio", "Xcode"],
    description:
      "Mobile app for processing eVisas and Golden Residence Permits with Camera and NFC plugins, OneSignal push notifications, BenefitPay payments, force updates and app versioning.",
  },
  {
    name: "CPP — Vehicle Management Admin",
    type: "web",
    client: "Court of the Crown Prince, Bahrain",
    role: "Frontend Developer",
    period: "Sep 2023 – Feb 2024",
    tech: ["Angular", "TypeScript", "Angular Material"],
    description:
      "Vehicle and stock management dashboard with real-time monitoring, inventory, role-based access, audit logging and exportable reports.",
  },
  {
    name: "Right Calories — Diet App",
    type: "mobile",
    client: "Right Calories",
    role: "Hybrid Mobile App Developer",
    period: "May 2022 – Sep 2023",
    tech: ["Ionic", "Angular", "Cordova", "Capacitor", "AWS Cognito"],
    description:
      "Meal-plan subscription app: custom diet plans, delivery preferences, discount codes, multiple payment methods and auto-renewal, with Google Maps/Places for live location and AWS Cognito auth.",
  },
  {
    name: "Johnson Lifts — Employee System",
    type: "web",
    client: "Johnson Lifts",
    role: "Frontend Developer",
    period: "Feb 2022 – May 2022",
    tech: ["Angular", "TypeScript", "Firebase", "Google Maps", "REST API"],
    description:
      "Employee management system with CRUD for profiles, departments and positions, plus attendance and profile modules backed by Firebase real-time data.",
  },
  {
    name: "Synod — Church ERP",
    type: "web",
    client: "Church of South India",
    role: "Frontend Developer",
    period: "Feb 2020 – Feb 2021",
    tech: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    description:
      "Church management system covering members, events, finances and donations, with GST calculation, data export, role-based dynamic views and real-time updates.",
  },
];

export const education = {
  degree: "Master of Computer Applications",
  school: "Anna University Regional Campus, Coimbatore",
  period: "2016 – 2019",
};
