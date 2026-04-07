export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "6+", label: "Years Experience", detail: "Since 2019" },
  { value: "348+", label: "Projects Delivered", detail: "Across 21+ industries" },
  { value: "4.9", label: "Client Rating", detail: "Based on 348 reviews" },
  { value: "21+", label: "Industries Served", detail: "Global clientele" },
];

export const services = [
  {
    id: "pitch-decks",
    title: "Pitch Decks",
    tagline: "Persuasive presentations that close deals",
    description:
      "From startup fundraising to corporate investor relations, I craft pitch decks that tell your story with clarity and visual impact. Every slide is designed to build conviction and drive action.",
    icon: "pitch-decks",
    features: ["Investor Pitch Decks", "Startup Fundraising", "Sales Presentations", "Business Proposals", "Keynote Decks"],
  },
  {
    id: "corporate",
    title: "Corporate Presentations",
    tagline: "Professional slides for enterprise teams",
    description:
      "Elevate your company's visual communication with polished corporate presentations. Quarterly reviews, board meetings, training materials — designed for clarity at scale.",
    icon: "corporate",
    features: ["Quarterly Reviews", "Board Presentations", "Training Decks", "Company Profiles", "Annual Reports"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    tagline: "Visual systems that define your brand",
    description:
      "Beyond presentations, I create cohesive brand identities including logos, color systems, typography, and visual guidelines that ensure consistency across all touchpoints.",
    icon: "brand-identity",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography Selection", "Visual Identity"],
  },
  {
    id: "infographics",
    title: "Infographics & Data Viz",
    tagline: "Complex data made beautifully simple",
    description:
      "Transform complex data and processes into engaging infographics and visual stories. Charts, diagrams, and illustrations that make information memorable.",
    icon: "infographics",
    features: ["Data Visualization", "Process Diagrams", "Statistical Infographics", "Timeline Graphics", "Comparison Charts"],
  },
  {
    id: "social-media",
    title: "Social & Marketing",
    tagline: "Scroll-stopping visual content",
    description:
      "Eye-catching designs for social media, digital marketing campaigns, flyers, posters, and brochures that capture attention and drive engagement across every platform.",
    icon: "social-media",
    features: ["Social Media Graphics", "Flyer Design", "Poster Design", "Brochure Design", "Marketing Collateral"],
  },
  {
    id: "consultation",
    title: "Design Consultation",
    tagline: "Strategic design guidance",
    description:
      "Expert guidance on visual strategy, presentation structure, and design direction. I help teams elevate their visual communication with actionable insights and best practices.",
    icon: "consultation",
    features: ["Presentation Audits", "Template Systems", "Style Guides", "Design Direction", "Team Workshops"],
  },
];

const img = (hash: string) =>
  `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_large/v1/attachments/project_item/attachment/${hash}`;

const imgFull = (hash: string) =>
  `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/${hash}`;

function project(title: string, client: string, category: string, hash: string) {
  return { title, client, category, image: img(hash), fullImage: imgFull(hash) };
}

export const projects = [
  project("Securing Growth and Compliance", "Cloudflare", "Pitch Deck", "2e4faa37b601183c63b901a481b674ec-1752174508559/Slide1.jpg"),
  project("Empowering Women Through Wellness", "Mind the Crown", "Brand Pitch", "09d323fd68ba92a85779b16d7b17036d-1752174642565/Slide2.jpg"),
  project("AI-Driven Technology Solutions", "CoreTechX", "Corporate Deck", "b9508cba21ad76396b97eb600bb70678-1752174892942/Slide5.jpg"),
  project("Blockchain Investment Strategy", "Compounding World Consortium", "Investor Deck", "adb9632b3daf10cbd03ef08cc8f7a8e7-1752175247898/Slide7.jpg"),
  project("Corporate Wellness Program", "iLegacy Consulting", "Corporate Deck", "9eb0db4f48f863770c31f75e308c6f8c-1752175533093/Slide6.jpg"),
  project("Web Agency Pitch Deck", "My Company Site", "Pitch Deck", "dc1260317b2067a1dc138cda97051692-1752175960995/Slide3.jpg"),
  project("Navigating School Policies", "Education Sector", "Presentation", "f1b5bcd4845b710bed1baec1b1b5b6e2-1725065861845/Slide1.PNG"),
  project("Streamlining Success", "Corporate Client", "Corporate Deck", "77ee3b437aace8b38cdc735cc9c4e667-1725066288260/Slide1.PNG"),
  project("Essential Skills for a Successful Corporate DJ", "Entertainment", "Presentation", "a8cbca4af292c74300a470645d5464db-1725066793087/Slide1.PNG"),
  project("Exploring Innovative Game Features", "Gaming Industry", "Pitch Deck", "7aedcb3739d56171dc66c786cb675ca7-1725066570389/Slide1.PNG"),
  project("Effective Strategies for Investor Action", "Investment Firm", "Investor Deck", "d94597f3562c513d681d62947f6cb203-1725067019110/Slide1.PNG"),
  project("Human Communication Suite", "Cisco", "Corporate Deck", "7589eae9880a18ab60e4a7b3ec156c80-1723052755506/Slide1.PNG"),
  project("Innovative Digital Marketing Strategies", "Marketing Agency", "Pitch Deck", "caa6b5faa420f0d3e9ea7460c41542e4-1725067235074/Slide1.PNG"),
  project("Investment in Property", "Real Estate", "Investor Deck", "e9b0cdd2f6f2c0228ecad1a836cdb0b5-1723104165686/Slide1.PNG"),
  project("Grand Affairs Event Management", "Grand Affairs Events", "Brand Pitch", "fe2a8ecf3568df5aa7ae986d2fe09079-1723103878532/Slide1.PNG"),
  project("Business Case Analysis of the UFC", "Sports & Entertainment", "Presentation", "d98fab0dc1e8538f1d4e97250e0027a8-1723108000206/Slide1.PNG"),
  project("The Power of Likes on Social Media", "Social Media", "Presentation", "e708bf0843bd8c59eafda68119ba3597-1723104799743/Slide1.PNG"),
  project("Laxis Exhibition Presentation", "Fizco", "Brand Pitch", "6b873fdd261500df4e530e616b2f3747-1723105533700/Slide1.PNG"),
  project("Quarterly Business Review", "Turmeric.co", "QBR Deck", "d3e788b4ca283a8994f91511dc22463c-1723106297077/Slide1.PNG"),
  project("Cultural Aspects of Depressive Disorder", "Healthcare Research", "Presentation", "b76bc116d8503e91508141097b49fa38-1723104507038/Slide1.PNG"),
  project("Algorithmic Trading Platform", "Quantix Trading Solutions", "Pitch Deck", "15b942ebc9df6d3be84d39c449f3846c-1723106836281/Slide1.PNG"),
];

export const testimonials = [
  {
    quote: "This was our second project with Zara and I came to her in a pinch. She delivered incredible work under pressure — professional, creative, and exactly what we needed.",
    name: "Dustin H.",
    title: "Repeat Client, United States",
    rating: 5,
  },
  {
    quote: "Excellent experience all round. Zara supported me in developing a slide deck for a personal project. The quality and attention to detail exceeded all expectations.",
    name: "Marc A.",
    title: "Entrepreneur, United Kingdom",
    rating: 5,
  },
  {
    quote: "Incredible work! The professionalism and creativity are unmatched. I will continue to work with this designer — highly recommended for any presentation needs.",
    name: "Tyler S.",
    title: "Repeat Client, United States",
    rating: 5,
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Discover",
    description: "I learn about your brand, audience, goals, and existing materials to understand exactly what your presentation needs to achieve.",
  },
  {
    num: "02",
    title: "Design",
    description: "I craft a tailored visual direction with custom layouts, typography, color palettes, and graphics that bring your content to life.",
  },
  {
    num: "03",
    title: "Refine",
    description: "We collaborate on revisions until every slide is pixel-perfect. Your feedback shapes the final result.",
  },
  {
    num: "04",
    title: "Deliver",
    description: "You receive polished, editable files in your preferred format — ready to present with confidence.",
  },
];

export const notableClients = [
  "Red Hat",
  "Cisco",
  "TikTok",
  "Cloudflare",
  "McDonald's",
];

export const profileImage =
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/4a42fc7e11bba584c297dcc297ada124-1750926986904/9fbf5544-3a58-44d2-a588-b6f1c7120e26.png";
