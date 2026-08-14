import {
  DraftingCompass,
  FlaskConical,
  Sun,
  Layers,
  Leaf,
  Cpu,
  GraduationCap,
  Sprout,
  Droplets,
  Gauge,
  Users,
  BadgeDollarSign,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const SITE_NAME = "RootedUp Hydroponics Co.";
export const SITE_URL = "https://rootedup-hydroponics-co.amsitservices.com";
export const TAGLINE = "Hydroponic systems designed around your space, your crops, and your goals.";
export const CONTACT = {
  phone: "(888) 555-0168",
  email: "hello@rooteduphydro.com",
  address: "2180 Growers Lane, Suite 200, Denver, CO 80216",
  hours: "Mon–Fri 8:00am–6:00pm MT · Sat 9:00am–1:00pm MT",
};

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "system-design-and-setup",
    name: "System Design & Setup",
    short:
      "Custom hydroponic systems engineered around your space, crops, and budget — from blueprint to first harvest.",
    description:
      "Every great hydroponic grow starts with the right system for the right space. We design NFT, DWC, drip, and ebb-and-flow layouts sized to your facility, your crop mix, and your labor model — then oversee installation, commissioning, and the first successful grow cycle so nothing is left to guesswork.",
    image: "/images/system-design.jpg",
    icon: DraftingCompass,
    features: [
      "Site assessment & facility layout planning",
      "NFT, DWC, drip & ebb-and-flow system design",
      "Equipment lists with honest cost comparisons",
      "Installation oversight & commissioning",
      "First-cycle grow support to full harvest",
    ],
  },
  {
    slug: "nutrient-and-ph-management",
    name: "Nutrient & pH Management",
    short:
      "Crop-specific nutrient recipes and pH programs that keep every plant fed, balanced, and thriving.",
    description:
      "Healthy hydroponic crops live and die by their nutrient solution. We build stage-by-stage feeding programs — germination, vegetative, and flowering — with precise EC and pH targets, and we train your team to read the telltale signs of deficiency, lockout, and imbalance before they cost you a harvest.",
    image: "/images/nutrient-ph.jpg",
    icon: FlaskConical,
    features: [
      "Crop-specific nutrient recipes",
      "EC & pH target programs for every growth stage",
      "Water-quality testing & source analysis",
      "Deficiency & lockout troubleshooting",
      "Staff training on solution management",
    ],
  },
  {
    slug: "greenhouse-hydroponics",
    name: "Greenhouse Hydroponics",
    short:
      "Gutter systems, climate control, and greenhouse layouts that blend natural light with dependable yields.",
    description:
      "Greenhouses multiply the challenge — light, temperature, humidity, and airflow all shift with the seasons. We design gutter systems and Dutch-bucket layouts that pair with your greenhouse climate, tune ventilation and shade strategies, and help you hit year-round production targets even through winter light dips.",
    image: "/images/greenhouse.jpg",
    icon: Sun,
    features: [
      "Gutter & Dutch-bucket system layouts",
      "Climate, ventilation & shade strategy",
      "Seasonal light & temperature planning",
      "Supplemental lighting design",
      "Year-round production scheduling",
    ],
  },
  {
    slug: "vertical-farming-systems",
    name: "Vertical Farming Systems",
    short:
      "Stacked growing systems that multiply your yield per square foot — indoors or in retrofit facilities.",
    description:
      "When floor space is scarce, the answer is up. We design multi-tier vertical farms with even light distribution, efficient irrigation, and realistic labor workflows. From a single shipping container to a full warehouse retrofit, we right-size the stack to your power budget and your target yield.",
    image: "/images/vertical-farming.jpg",
    icon: Layers,
    features: [
      "Multi-tier rack & tower layouts",
      "Uniform LED light distribution design",
      "Irrigation & drainage engineering",
      "Power & HVAC load planning",
      "Container & warehouse retrofits",
    ],
  },
  {
    slug: "crop-consulting-and-troubleshooting",
    name: "Crop Consulting & Troubleshooting",
    short:
      "Fast, science-based diagnosis when growth stalls — plus ongoing crop walks and yield reviews.",
    description:
      "Yellowing leaves, stalled roots, tip burn, algae, pest pressure — problems in hydroponics compound fast. Our consultants diagnose from photos, lab results, and on-site visits, then give you a prioritized action plan in plain language. Ongoing clients get scheduled crop walks and monthly yield reviews.",
    image: "/images/crop-consulting.jpg",
    icon: Leaf,
    features: [
      "Rapid photo & lab-based diagnosis",
      "On-site crop walkthroughs",
      "Pest, disease & algae management plans",
      "Root-zone & environment audits",
      "Monthly yield & quality reviews",
    ],
  },
  {
    slug: "automation-and-grow-lighting",
    name: "Automation & Grow Lighting",
    short:
      "Controllers, sensors, and LED lighting plans that take the guesswork out of daily growing.",
    description:
      "Consistency is what automation buys you. We specify and configure dosing controllers, climate sensors, irrigation timers, and data dashboards that keep your nutrient and environment parameters locked in 24/7. And we design LED layouts — spectrum, intensity, and photoperiod — matched to your crops and your electricity budget.",
    image: "/images/automation-lighting.jpg",
    icon: Cpu,
    features: [
      "Nutrient dosing & pH controllers",
      "Climate, irrigation & sensor integration",
      "Data dashboards & alerting setup",
      "LED spectrum & intensity design",
      "Energy-cost optimization",
    ],
  },
  {
    slug: "training-and-workshops",
    name: "Training & Workshops",
    short:
      "Hands-on training for your team — from first-day basics to advanced nutrient and system mastery.",
    description:
      "The best system in the world underperforms in untrained hands. We deliver on-site and virtual training for growers, technicians, and business owners: system operation, solution chemistry, crop scouting, food-safety protocols, and harvest handling. Every workshop ends with your team confident to run the grow without us.",
    image: "/images/training.jpg",
    icon: GraduationCap,
    features: [
      "On-site & virtual team training",
      "System operation & maintenance courses",
      "Solution chemistry & crop scouting labs",
      "Food-safety & harvest-handling protocols",
      "Custom curriculum for your facility",
    ],
  },
];

export const FEATURES = [
  {
    icon: Sprout,
    title: "Crop-First Design",
    text: "We engineer every system around the crops you actually grow — not a one-size-fits-all catalog layout.",
  },
  {
    icon: Droplets,
    title: "Precision Nutrition",
    text: "Crop-specific recipes and pH programs, tuned stage by stage, so your plants never want for anything.",
  },
  {
    icon: Gauge,
    title: "Data-Driven Decisions",
    text: "We measure EC, pH, VPD, and light so you can manage by numbers — not by hope.",
  },
  {
    icon: Users,
    title: "Hands-On Support",
    text: "One dedicated consultant from the first site visit to harvest day — no call centers, no runaround.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    text: "Fixed-fee consulting with no long-term lock-in. You know exactly what you pay and what you get.",
  },
  {
    icon: ShieldCheck,
    title: "Troubleshooting You Can Trust",
    text: "When something goes wrong, we diagnose fast and give you a prioritized fix plan in plain language.",
  },
];

export const STATS = [
  { value: "120+", label: "Hydroponic systems designed" },
  { value: "3.1M+", label: "Plants grown under our programs" },
  { value: "97%", label: "Crop success rate" },
  { value: "4.9/5", label: "Average client rating" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "RootedUp designed our 2,000-square-foot lettuce room from an empty warehouse shell. First cycle came in 11% over our projected yield. The ROI math they promised actually held up.",
    name: "Elena V.",
    role: "Vertical farm owner · Denver, CO",
  },
  {
    quote:
      "Our pH swings were killing basil every third week. Their nutrient program and one controller install fixed it — we haven’t lost a tray since, eight months and counting.",
    name: "Marcus J.",
    role: "Greenhouse grower · Fort Collins, CO",
  },
  {
    quote:
      "They told us our water source was the problem before we ever planted. Lab-tested, rebalanced, and our arugula has never looked better. Worth every penny.",
    name: "Priya & Alan S.",
    role: "Commercial hydroponic farm",
  },
  {
    quote:
      "The training workshop paid for itself in a month. My whole team can now read a nutrient chart and spot a deficiency before it spreads.",
    name: "Robert K.",
    role: "Farm manager · Boulder, CO",
  },
  {
    quote:
      "RootedUp walked our retrofit from lighting layout to harvest schedule. Winter production is up 40% over our old system — in a climate that used to shut us down.",
    name: "Danielle R.",
    role: "Greenhouse hydroponics client",
  },
  {
    quote:
      "They diagnosed a root-zone issue in 48 hours from photos and one water sample, when two equipment vendors had us chasing ghosts. Straight answers, fast.",
    name: "James & Carla W.",
    role: "Crop consulting client",
  },
];

export const FAQS = [
  {
    q: "What exactly does a hydroponics consultant do?",
    a: "A hydroponics consultant is an independent expert who designs, optimizes, and troubleshoots soilless growing systems. We assess your space, design the right system, build nutrient and environmental programs, train your team, and diagnose problems when they appear. You own the farm; we make sure it grows.",
  },
  {
    q: "How much does RootedUp cost?",
    a: "Our first consultation is free. Design and setup engagements are a fixed flat fee quoted up front, and ongoing crop-management plans start at $490 per month. There are no long-term contracts — you can scale down or walk away anytime. See our Pricing page for full details.",
  },
  {
    q: "Do I need an existing hydroponic system to hire you?",
    a: "Not at all. About half of our clients come to us with an empty space and a crop goal. We design from a blank slate — including equipment selection, layout, power and water planning — while the other half hire us to fix or upgrade systems that are underperforming.",
  },
  {
    q: "Which crops do you work with?",
    a: "Leafy greens, herbs, microgreens, vine crops like tomatoes and cucumbers, strawberries, and a range of specialty crops. We tailor nutrient recipes, spacing, and lighting to the specific cultivars you grow rather than forcing your crop into a generic program.",
  },
  {
    q: "Can you help us remotely, or only on site?",
    a: "Both. Design work, nutrient programs, and troubleshooting are delivered remotely every day — most of our clients are outside Colorado. On-site visits are available for installation oversight, crop walks, and team training, and we schedule them efficiently to keep travel costs low.",
  },
  {
    q: "How fast will we see results?",
    a: "Many clients see measurable improvements within two weeks of a nutrient or environmental change. A new system from design to first harvest typically takes 8–14 weeks depending on your crop, and troubleshooting engagements usually deliver a fix plan within 48 hours.",
  },
  {
    q: "Do you work with commercial farms only?",
    a: "No — we serve everyone from backyard and container growers to multi-acre commercial operations. The depth of the work scales with your goals, and our free consultation will tell you honestly whether you need us at all.",
  },
];

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  outcome: string;
  image: string;
  metrics: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "warehouse-vertical-farm",
    title: "Empty Warehouse to 1,200-Square-Foot Vertical Farm",
    client: "Urban greens producer, Denver",
    category: "Vertical Farming",
    summary:
      "A restaurant-supply startup wanted consistent local greens year-round but had zero growing experience and a tight budget. We designed a three-tier vertical layout with a 12,000-watt LED plan, recirculating NFT channels, and a single dosing controller — then oversaw installation and the first full cycle.",
    outcome:
      "First cycle harvested 11% above projected yield at 31 days; the client now supplies 14 restaurants and is adding a second room.",
    image: "/images/project-1.jpg",
    metrics: [
      { label: "Growing area", value: "1,200 sq ft" },
      { label: "First harvest", value: "31 days" },
      { label: "Yield vs. forecast", value: "+11%" },
    ],
  },
  {
    slug: "greenhouse-retrofit",
    title: "Winter-Proofing a 5,000-Square-Foot Greenhouse",
    client: "Family farm, Fort Collins",
    category: "Greenhouse Hydroponics",
    summary:
      "A family farm growing in soil gutters lost 60% of winter production to cold, low light, and nutrient drift. We converted them to closed-loop gutter hydroponics, added supplemental LED strips and a climate controller, and rebalanced their water source with a filtration and dosing system.",
    outcome:
      "Winter production up 40% in the first season, water use down 65%, and the system now runs unattended between crop walks.",
    image: "/images/project-2.jpg",
    metrics: [
      { label: "Winter output", value: "+40%" },
      { label: "Water use", value: "-65%" },
      { label: "System", value: "Closed-loop gutters" },
    ],
  },
  {
    slug: "nutrient-automation-rollout",
    title: "Nutrient Automation for a 40-Tray Basil Operation",
    client: "Commercial herb grower, Boulder",
    category: "Automation & Nutrition",
    summary:
      "A basil operation was losing a tray every few weeks to pH swings and manual dosing errors. We installed a dosing controller with per-room pH and EC setpoints, connected it to a dashboard with alerting, and rewrote their nutrient schedule around their specific cultivars.",
    outcome:
      "Zero crop losses from nutrition in eight months, labor on solution management down 90%, and shelf life of harvested basil measurably improved.",
    image: "/images/project-3.jpg",
    metrics: [
      { label: "Losses since rollout", value: "0 trays" },
      { label: "Labor saved", value: "90%" },
      { label: "Rooms automated", value: "3" },
    ],
  },
];

export const PRICING = [
  {
    name: "Essential",
    price: "$0",
    period: "free consultation",
    description: "A clear picture of your space, water, and goals before you commit to anything.",
    features: [
      "60-minute strategy consultation",
      "Space & water source review",
      "Honest fit assessment for hydroponics",
      "Personalized action plan",
    ],
    cta: "Book a free call",
    highlight: false,
  },
  {
    name: "Design & Setup",
    price: "$2,900",
    period: "flat fee per project",
    description: "Full system design, equipment planning, and installation oversight — our most popular engagement.",
    features: [
      "Everything in Essential",
      "Complete system design & layout",
      "Equipment list with cost comparison",
      "Installation oversight & commissioning",
      "Nutrient program for your first cycle",
      "Team training day",
    ],
    cta: "Start your design",
    highlight: true,
  },
  {
    name: "Crop Care",
    price: "$490",
    period: "per month · ongoing",
    description: "Continuous crop management, monitoring, and troubleshooting for growing operations.",
    features: [
      "Everything in Design & Setup",
      "Monthly crop walks & yield reviews",
      "Nutrient & pH program management",
      "Remote monitoring & alert response",
      "Priority troubleshooting (48h)",
      "No long-term contract",
    ],
    cta: "Talk to a consultant",
    highlight: false,
  },
];
