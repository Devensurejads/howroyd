export type ServiceDetail = {
  slug: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  subtitle: string;
  intro: string[];
  howWeCanHelp: string[];
  approachIntro: string[];
  approachQuestions: string[];
  approachOutro?: string;
  outcomesLead?: string;
  outcomesItems: string[];
  closing: string;
};

export const projectImages: ServiceDetail[] = [
  {
    slug: "digital-strategy",
    src: "/images/digital-strategy.png",
    alt: "Digital Strategy",
    title: "Digital Strategy",
    description:
      "Clear direction for successful digital projects and long-term growth",
    subtitle: "Better decisions lead to better digital projects",
    intro: [
      "Every successful digital project begins long before the first page is designed or the first line of code is written. The right questions, asked early, can save significant time, cost and complexity later.",
      "Our role is to help organisations understand their objectives, challenge assumptions where appropriate and develop a clear, practical strategy before committing to a solution. Whether planning a new website, reviewing an existing platform or considering a wider digital initiative, we provide independent advice based on experience rather than trends.",
    ],
    howWeCanHelp: [
      "Website planning and specification",
      "Digital roadmaps",
      "Stakeholder workshops",
      "Functional requirements",
      "Platform selection",
      "Information architecture",
      "Content planning",
      "User journey mapping",
      "Technical feasibility reviews",
      "AI opportunity assessments",
      "Procurement support",
    ],
    approachIntro: [
      "Digital strategy isn't about producing lengthy reports that sit on a shelf. It's about creating clarity.",
      "We believe good strategy should answer a small number of important questions:",
    ],
    approachQuestions: [
      "What problem are we trying to solve?",
      "Who are we designing for?",
      "What does success look like?",
      "What should we build?",
      "Just as importantly, what shouldn't we build?",
    ],
    approachOutro:
      "By establishing clear priorities from the outset, projects become easier to manage, budgets are used more effectively and technical decisions become far simpler.",
    outcomesLead: "Clients typically leave the strategy phase with:",
    outcomesItems: [
      "Clear project objectives.",
      "Agreed priorities.",
      "A realistic scope.",
      "Technical recommendations.",
      "Budget confidence.",
      "Reduced project risk.",
      "A practical roadmap for delivery.",
    ],
    closing:
      "Not every organisation needs a new website. Sometimes the best advice we can give is how to make the most of the one you already have.",
  },
  {
    slug: "technical-consultancy",
    src: "/images/technical-strategy.png",
    alt: "Technical Consultancy",
    title: "Technical Consultancy",
    description:
      "Independent technical advice for confident, informed digital decisions",
    subtitle: "Independent advice for confident technical decisions",
    intro: [
      "Technology should support your organisation, not dictate it. Whether you're reviewing an existing website, selecting a new platform or planning a complex digital project, independent technical advice can help avoid costly mistakes and ensure every decision is made with confidence.",
      "Our role is to assess your requirements objectively, explain the options in plain English and recommend practical solutions that meet your business needs. We help organisations understand the technical implications of their decisions before committing to a platform, supplier or development approach.",
    ],
    howWeCanHelp: [
      "Technical reviews and audits",
      "Platform selection",
      "CMS and framework advice",
      "Hosting and infrastructure guidance",
      "Website performance reviews",
      "Accessibility and compliance advice",
      "Third-party integrations",
      "Security and resilience planning",
      "AI and automation opportunities",
      "Technology procurement support",
      "Independent second opinions",
    ],
    approachIntro: [
      "Good technical consultancy isn't about recommending the latest technology. It's about selecting the most appropriate solution.",
      "We believe every recommendation should answer a small number of important questions:",
    ],
    approachQuestions: [
      "Is this the right solution for the organisation?",
      "Will it remain suitable in the future?",
      "Can it be maintained effectively?",
      "Does it provide value for money?",
      "Is there a simpler alternative?",
    ],
    approachOutro:
      "By focusing on long-term sustainability rather than short-term trends, we help organisations make technical decisions that remain effective long after a project has been delivered.",
    outcomesItems: [
      "Clear technical recommendations.",
      "Greater confidence in key decisions.",
      "Reduced technical risk.",
      "A realistic implementation plan.",
      "Improved long-term sustainability.",
      "Better value from technology investment.",
      "Confidence before committing to a solution.",
    ],
    closing:
      "Technology should never be adopted simply because it's new. The right solution is the one that best supports your organisation today and continues to do so tomorrow.",
  },
  {
    slug: "design-development",
    src: "/images/design-development.png",
    alt: "Design & Development",
    title: "Design & Development",
    description: "Professional websites designed to engage, perform and evolve.",
    subtitle: "Well-designed websites built to perform and evolve",
    intro: [
      "A successful website should do more than look good. It should reflect your organisation, support your objectives and provide a reliable platform that can evolve as your business grows.",
      "We combine thoughtful design with robust development to create websites that are intuitive, responsive and easy to manage. Every project is approached with the same attention to detail, ensuring the finished website is visually engaging, technically sound and built for long-term success.",
    ],
    howWeCanHelp: [
      "Bespoke website design",
      "Responsive website development",
      "WordPress development",
      "Wagtail CMS development",
      "User experience design",
      "Content management systems",
      "Front-end development",
      "Back-end development",
      "Third-party integrations",
      "Website migrations",
      "AI-assisted development where appropriate",
    ],
    approachIntro: [
      "We believe successful websites are built around people, not technology.",
      "Every project begins by understanding the organisation, its audience and its objectives before considering design or development. We focus on creating websites that are:",
    ],
    approachQuestions: [
      "Easy to use.",
      "Straightforward to manage.",
      "Accessible across all devices.",
      "Built to recognised standards.",
      "Flexible enough to grow over time.",
    ],
    approachOutro:
      "By combining considered design with dependable development, we create websites that continue to deliver value long after launch.",
    outcomesLead: "Every project results in:",
    outcomesItems: [
      "A professionally designed website.",
      "A fully responsive user experience.",
      "An intuitive content management system.",
      "Reliable, maintainable code.",
      "Improved user engagement.",
      "A platform designed for future growth.",
      "Confidence in the long-term sustainability of their website.",
    ],
    closing:
      "A website shouldn't simply meet today's requirements. It should provide a solid foundation for tomorrow.",
  },
  {
    slug: "project-leadership",
    src: "/images/project-leadership.png",
    alt: "Project Leadership",
    title: "Project Leadership",
    description:
      "Experienced management from planning through to successful project delivery.",
    subtitle: "Experienced leadership from planning through to delivery",
    intro: [
      "Successful digital projects rely on more than good design and development. They require clear communication, careful planning and experienced leadership to ensure people, priorities and timescales remain aligned throughout the project.",
      "Our role is to provide a single point of accountability, coordinating stakeholders, suppliers and technical teams while keeping projects focused on their objectives. By identifying risks early, managing expectations and maintaining clear communication, we help projects progress smoothly from initial planning through to successful delivery.",
    ],
    howWeCanHelp: [
      "Digital project management",
      "Stakeholder coordination",
      "Requirements gathering",
      "Project planning and scheduling",
      "Budget and scope management",
      "Supplier and contractor management",
      "Risk identification and mitigation",
      "Quality assurance",
      "Acceptance testing",
      "Client representation",
      "Post-launch planning",
    ],
    approachIntro: [
      "Good project leadership is about enabling successful outcomes, not simply managing tasks.",
      "We believe every project should answer a small number of important questions throughout its lifecycle:",
    ],
    approachQuestions: [
      "Are we still solving the right problem?",
      "Are priorities still aligned?",
      "Are risks being managed proactively?",
      "Are decisions being made at the right time?",
      "Are we delivering real value?",
    ],
    approachOutro:
      "By maintaining oversight from beginning to end, we help ensure projects remain focused, controlled and aligned with the organisation's objectives.",
    outcomesLead: "Benefits:",
    outcomesItems: [
      "A single point of accountability.",
      "Better communication between all parties.",
      "Clear project visibility.",
      "Reduced delivery risk.",
      "Improved control of scope and budgets.",
      "Faster, more confident decision making.",
      "Successful project delivery.",
    ],
    closing:
      "Successful projects are rarely the result of chance. They are the result of clear leadership, effective communication and informed decision making.",
  },
  {
    slug: "support-maintenance",
    src: "/images/support-maintanance.png",
    alt: "Support & Maintenance",
    title: "Support & Maintenance",
    description: "Keeping your website secure, reliable and performing at its best.",
    subtitle: "Ongoing support for long-term digital success",
    intro: [
      "A website should continue to evolve as your organisation grows. Regular maintenance, timely updates and responsive support help ensure your website remains secure, reliable and effective long after it has been launched.",
      "Whether we built your website or inherited it from another supplier, we provide practical, ongoing support tailored to your organisation's needs. From routine maintenance to technical advice and future enhancements, we help protect your investment and keep your digital platforms performing at their best.",
    ],
    howWeCanHelp: [
      "Website maintenance",
      "Security updates",
      "Content management support",
      "Performance optimisation",
      "Hosting management",
      "Website monitoring",
      "Backups and disaster recovery",
      "Technical troubleshooting",
      "Feature enhancements",
      "CMS upgrades",
      "Ongoing technical advice",
    ],
    approachIntro: [
      "Support isn't simply about fixing problems. It's about helping your website remain secure, relevant and effective.",
      "We believe ongoing support should provide:",
    ],
    approachQuestions: [
      "Confidence that your website is well maintained.",
      "Timely responses when assistance is needed.",
      "Proactive recommendations for improvement.",
      "A trusted point of contact.",
      "Long-term technical continuity.",
    ],
    approachOutro:
      "By building long-term relationships with our clients, we become familiar with their organisation, systems and objectives, allowing us to provide more effective support over time.",
    outcomesLead: "Clients benefit from:",
    outcomesItems: [
      "A secure and reliable website.",
      "Reduced downtime and technical issues.",
      "Faster resolution of problems.",
      "A website that continues to evolve.",
      "Expert advice when it's needed.",
      "Greater peace of mind.",
      "Long-term technical support from a trusted partner.",
    ],
    closing:
      "A successful website isn't defined by its launch date. It's measured by how well it continues to support your organisation in the years that follow.",
  },
  {
    slug: "accessibility-seo",
    src: "/images/accesibility.png",
    alt: "Accessibility & SEO",
    title: "Accessibility & SEO",
    description:
      "Improving accessibility, visibility and search engine performance.",
    subtitle: "Building websites that everyone can find and use",
    intro: [
      "A successful website should be accessible to all users, easy to find through search engines and fast enough to provide a positive experience across every device. These aren't optional extras—they're fundamental to creating a website that delivers long-term value.",
      "We incorporate accessibility, search engine optimisation and performance best practices throughout the design and development process, helping organisations improve visibility, reach a wider audience and provide an inclusive experience for every visitor.",
    ],
    howWeCanHelp: [
      "Accessibility reviews",
      "WCAG best practice",
      "Technical SEO",
      "On-page SEO",
      "Site performance optimisation",
      "Core Web Vitals improvements",
      "Structured data implementation",
      "Mobile optimisation",
      "Website audits",
      "Content optimisation guidance",
      "Ongoing monitoring and recommendations",
    ],
    approachIntro: [
      "Accessibility and search optimisation work best when they're considered from the beginning of a project rather than added afterwards.",
      "We believe every website should answer a small number of important questions:",
    ],
    approachQuestions: [
      "Can everyone use this website?",
      "Is the content easy to find?",
      "Does the website load quickly?",
      "Is it easy for search engines to understand?",
      "Will it continue to perform as the website grows?",
    ],
    approachOutro:
      "By considering accessibility, search visibility and performance together, we help organisations build websites that remain effective, discoverable and inclusive over the long term.",
    outcomesItems: [
      "Improved search visibility.",
      "A more accessible website.",
      "Faster page loading.",
      "Better user experience.",
      "Improved mobile performance.",
      "Greater compliance with recognised standards.",
      "A stronger foundation for future growth.",
    ],
    closing:
      "The best websites are those that are easy to find, easy to use and accessible to everyone.",
  },
];
