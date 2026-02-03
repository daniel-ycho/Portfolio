import { ExperienceItem, EducationItem, SkillCategory, ProjectItem } from './types';

export const CONTACT_INFO = {
  name: "DANIEL CHO",
  email: "daniel.ycho@outlook.com",
  location: "NY, CT, RI",
  linkedin: "linkedin.com/in/daniel-ycho",
  tagline: "Marketing Professional & Data Analyst"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "ExploreCapitals.com",
    role: "Founder & Lead Developer",
    location: "Remote",
    period: "July 2025 – Present",
    description: [
      "Engineered a full-stack educational platform using TypeScript and Firebase for real-time data integrity.",
      "Optimized information architecture based on Google Analytics behavior decoding to improve conversion.",
      "Built automated Python scripts to extract, clean, and populate database content.",
      "Live Platform: [ExploreCapitals.com](https://explorecapitals.com)"
    ]
  },
  {
    company: "NEMO | etc.",
    role: "Database Validator",
    location: "Oxford, CT",
    period: "Nov 2024 – July 2025",
    description: [
      "Organized and appended ~13,500 lab reports and ~1,400 legal entity records into PostgreSQL databases.",
      "Standardized metadata schemas to improve database integrity and accessibility according to ASTM/ISO standards.",
      "Performed data validation, deduplication, and quality control to maintain accuracy."
    ]
  },
  {
    company: "Cher®",
    role: "Marketing Associate",
    location: "Santa Monica, CA",
    period: "Sept 2024 – Feb 2025",
    description: [
      "Managed web content and metadata via WordPress; wrote SEO-driven real estate articles.",
      "Supported campaign tracking through Meta Ads Manager, coordinating content publishing schedules.",
      "Wrote SEO-optimized blog articles to increase Google rankings and build brand authority."
    ],
    articles: [
      { title: "Affordable Housing Assistance Resources", url: "https://cherahome.com/affordable-housing-assistance-resources/" },
      { title: "Understanding Property Taxes and Homeownership", url: "https://cherahome.com/understanding-property-taxes-and-homeownership/" },
      { title: "How to Share a Mortgage", url: "https://cherahome.com/how-to-share-a-mortgage/" },
      { title: "A Comprehensive Course on Co-Ownership", url: "https://cherahome.com/a-comprehensive-course-on-co-ownership-how-to-buy-your-first-home-with-friends-or-family-2/" },
      { title: "Renting vs Buying: Is Now the Right Time?", url: "https://cherahome.com/renting-vs-buying-is-now-the-right-time-for-you/" },
      { title: "How to Choose the Right Real Estate Agent", url: "https://cherahome.com/how-to-choose-the-right-real-estate-agent-for-your-first-home-purchase/" },
      { title: "The Home Inspection Process Explained", url: "https://cherahome.com/the-home-inspection-process-what-to-expect-and-what-to-look-for/" },
      { title: "Benefits of Cher's Unique Loan Products", url: "https://cherahome.com/the-benefits-of-chers-unique-loan-products-for-first-time-homebuyers/" },
      { title: "Mistakes First-Time Homebuyers Make", url: "https://cherahome.com/mistakes-first-time-homebuyers-make-avoid/" },
      { title: "Myth Busting: Affordable Homeownership", url: "https://cherahome.com/myth-busting-facts-affordable-homeownership/" },
      { title: "Improve Credit Score for Better Options", url: "https://cherahome.com/improve-credit-score-for-better-home-buying-options/" },
      { title: "First-Time Homebuyer Grants & Assistance", url: "https://cherahome.com/first-time-homebuyer-grants-and-assistance-programs-how-to-qualify-and-apply/" }
    ],
    media: [
      { type: 'video', title: "Cher® Ad", url: "/cher-portfolio/CHER AD.mp4" },
      { type: 'video', title: "Cher® Homebuyer Course Ad", url: "/cher-portfolio/CHER HOMEBUYER COURSE.mp4" },
      { type: 'video', title: "Cher® Realtor Program Ad", url: "/cher-portfolio/CHER REALTOR PROGRAM.mp4" },
      { type: 'video', title: "Learn, Earn & Achieve Homeownership Ad", url: "/cher-portfolio/Learn, Earn, & Achieve Homeownership.mp4" },
      { type: 'social', title: "Cher® Ed - FAQ for Homebuyers (PDF)", url: "/cher-portfolio/Cher® Ed - FAQ for Homebuyers.pdf" }
    ]
  },
  {
    company: "Storydoor",
    role: "Digital Marketing Intern",
    location: "Seattle, WA",
    period: "Aug 2023 – May 2024",
    description: [
      "Assisted in data organization for marketing pages and user segmentation strategies.",
      "Supported campaign optimization using keyword analytics and ad performance data.",
      "Published SEO-driven blog articles and optimized existing web pages for better visibility."
    ],
    articles: [
      { title: "Healing Together: Navigating Death and the Probate Process", url: "https://storydoor.com/healing-together-navigating-death-and-the-probate-process/" },
      { title: "The Future of Subto Investing: Tomorrow’s Real Estate Landscape", url: "https://storydoor.com/the-future-of-subto-investing-tomorrows-real-estate-landscape/" },
      { title: "Creative Financing: The Power of Peer-to-Peer Lending in Real Estate", url: "https://storydoor.com/creative-financing-the-power-of-peer-to-peer-lending-in-real-estate/" },
      { title: "The Legal Implications of Failed Mortgage Payments", url: "https://storydoor.com/the-legal-implications-of-failed-mortgage-payments/" },
      { title: "Flooded with Choices: Tackling Home Water Damage and Extensive Repairs", url: "https://storydoor.com/flooded-with-choices-tackling-home-water-damage-and-extensive-repairs/" },
      { title: "Home Inheritance", url: "https://storydoor.com/home-inheritance/" }
    ]
  },
  {
    company: "Kite",
    role: "Graphic Designer",
    location: "Hartford, CT",
    period: "Aug 2023 – Feb 2024",
    description: [
      "Created brand assets and interface icons to support product marketing and UI/UX consistency."
    ],
    media: [
      { type: 'repo', title: "Kite iOS App Repository (UI/UX Assets)", url: "https://github.com/PanicGecko/Kite" }
    ]
  },
  {
    company: "eBay",
    role: "E-Commerce Manager",
    location: "Remote",
    period: "May 2021 – Present",
    description: [
      "Orchestrated full-cycle e-commerce operations, including SEO-optimized listings and customer relations management.",
      "Managed international fulfillment processes and complex customs documentation for global shipments."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "University of Connecticut",
    degree: "Bachelor of Arts, Communication & Data Analytics",
    location: "Storrs, CT",
    period: "Aug 2019 – Dec 2023",
    gpa: "3.5"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Data Architecture",
    skills: ["SQL (PostgreSQL, MySQL)", "Python (Pandas, Automation)", "Excel (Adv. Cleaning)", "ETL Pipelines", "Database Normalization"]
  },
  {
    title: "Development Stack",
    skills: ["TypeScript / JavaScript", "React.js", "HTML5 / CSS3", "PHP", "Firebase"]
  },
  {
    title: "Marketing Systems",
    skills: ["SEO Optimization", "Google Analytics", "Meta Ads Manager", "Metadata Management", "WordPress / Elementor"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "ExploreCapitals.com",
    role: "Lead Developer",
    url: "https://explorecapitals.com",
    tech: "TypeScript, Firebase, Google Analytics",
    description: "A full-stack educational platform optimized for conversion through rigorous user behavior analysis."
  },
  {
    name: "Kite",
    role: "UI/UX Designer",
    url: "https://github.com/PanicGecko/Kite",
    tech: "Designed with Figma",
    description: "Designed the complete user interface and visual identity for this iOS application, focusing on intuitive navigation and visual consistency."
  }
];