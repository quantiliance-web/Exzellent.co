/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const courses = [
  // Language Lab Courses
  {
    id: "business-english",
    lab: "language",
    title: "Business English Mastery",
    language: "English",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 1240,
    instructor: "Sarah Jenkins",
    price: 2999,
    icon: "🇬🇧",
    description: "Master the nuances of professional communication. From high-stakes meetings to persuasive emails, this course covers the essential language skills needed for the modern global workplace.",
    whatYoullLearn: [
      "Professional email etiquette and structure",
      "Effective presentation techniques",
      "Negotiation strategies in English",
      "Cross-cultural communication skills",
      "Industry-specific vocabulary",
      "Confident public speaking"
    ],
    modules: [
      {
        title: "The Art of Professional Correspondence",
        lessons: ["Formal vs Informal Tone", "Structuring Complex Emails", "Requesting and Providing Feedback"]
      },
      {
        title: "Meetings and Discussions",
        lessons: ["Leading a Meeting", "Expressing Agreement and Disagreement", "Summarizing Action Items"]
      },
      {
        title: "Presentations with Impact",
        lessons: ["Opening and Closing Hooks", "Describing Data and Trends", "Handling Q&A Sessions"]
      }
    ]
  },
  {
    id: "conversational-french",
    lab: "language",
    title: "Conversational French",
    language: "French",
    level: "Beginner",
    duration: "6 weeks",
    enrolled: 850,
    instructor: "Jean-Pierre Blanc",
    price: 0,
    icon: "🇫🇷",
    description: "Start speaking French from day one. This course focuses on practical, everyday conversations that will help you navigate life in a French-speaking country with confidence.",
    whatYoullLearn: [
      "Basic greetings and introductions",
      "Ordering food and drinks",
      "Asking for directions",
      "Shopping and handling money",
      "Talking about hobbies and interests",
      "Essential French pronunciation"
    ],
    modules: [
      {
        title: "First Encounters",
        lessons: ["Greetings and Salutations", "Introducing Yourself", "Numbers 1-100"]
      },
      {
        title: "Daily Life",
        lessons: ["At the Café", "Navigating the City", "Telling Time"]
      }
    ]
  },
  {
    id: "spanish-professionals",
    lab: "language",
    title: "Spanish for Professionals",
    language: "Spanish",
    level: "Advanced",
    duration: "10 weeks",
    enrolled: 620,
    instructor: "Elena Rodriguez",
    price: 3499,
    icon: "🇪🇸",
    description: "Take your Spanish to a professional level. Ideal for those working with Spanish-speaking clients or teams, focusing on business terminology and advanced grammar.",
    whatYoullLearn: [
      "Advanced business vocabulary",
      "Complex grammatical structures",
      "Writing professional reports",
      "Nuanced cultural etiquette",
      "Legal and financial terminology",
      "Advanced listening comprehension"
    ],
    modules: [
      {
        title: "Corporate Spanish",
        lessons: ["Business Hierarchy", "Market Analysis", "Strategic Planning"]
      }
    ]
  },
  {
    id: "mandarin-basics",
    lab: "language",
    title: "Mandarin Basics",
    language: "Mandarin",
    level: "Beginner",
    duration: "12 weeks",
    enrolled: 2100,
    instructor: "Wei Chen",
    price: 0,
    icon: "🇨🇳",
    description: "An introduction to the most spoken language in the world. Learn Pinyin, basic characters, and essential phrases for daily interaction.",
    whatYoullLearn: [
      "Introduction to Pinyin and Tones",
      "Basic Chinese characters",
      "Daily greetings",
      "Family and relationships",
      "Food and dining",
      "Chinese cultural basics"
    ],
    modules: [
      {
        title: "The Four Tones",
        lessons: ["Mastering Pronunciation", "Basic Pinyin", "Simple Greetings"]
      }
    ]
  },
  {
    id: "german-grammar",
    lab: "language",
    title: "German Grammar Mastery",
    language: "German",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 940,
    instructor: "Hans Müller",
    price: 2499,
    icon: "🇩🇪",
    description: "Demystify German grammar. This course dives deep into cases, sentence structure, and verb conjugations to build a solid foundation for fluency.",
    whatYoullLearn: [
      "The four German cases",
      "Sentence structure (Word Order)",
      "Modal verbs and their usage",
      "Prepositions and cases",
      "Relative clauses",
      "Passive voice"
    ],
    modules: [
      {
        title: "Cases and Articles",
        lessons: ["Nominative and Accusative", "Dative Deep Dive", "Genitive Usage"]
      }
    ]
  },
  {
    id: "japanese-script",
    lab: "language",
    title: "Japanese Script & Speak",
    language: "Japanese",
    level: "Beginner",
    duration: "10 weeks",
    enrolled: 1500,
    instructor: "Yuki Tanaka",
    price: 0,
    icon: "🇯🇵",
    description: "Learn to read and write Hiragana and Katakana while building basic speaking skills for travel and daily life in Japan.",
    whatYoullLearn: [
      "Hiragana and Katakana scripts",
      "Basic Kanji introduction",
      "Self-introductions",
      "Asking for help and directions",
      "Polite vs Casual speech",
      "Japanese cultural etiquette"
    ],
    modules: [
      {
        title: "The Scripts",
        lessons: ["Hiragana Basics", "Katakana Practice", "Writing Your Name"]
      }
    ]
  },
  {
    id: "portuguese-fast-track",
    lab: "language",
    title: "Portuguese Fast Track",
    language: "Portuguese",
    level: "Intermediate",
    duration: "6 weeks",
    enrolled: 430,
    instructor: "Ricardo Silva",
    price: 1999,
    icon: "🇧🇷",
    description: "Accelerate your Portuguese learning. Designed for those with some basic knowledge who want to reach conversational fluency quickly.",
    whatYoullLearn: [
      "Past and future tenses",
      "Expressing opinions and feelings",
      "Travel and tourism vocabulary",
      "Brazilian vs European Portuguese",
      "Common idioms and slang",
      "Advanced pronunciation"
    ],
    modules: [
      {
        title: "Beyond the Basics",
        lessons: ["The Past Tense", "Future Plans", "Conditional Sentences"]
      }
    ]
  },
  {
    id: "arabic-standard",
    lab: "language",
    title: "Modern Standard Arabic",
    language: "Arabic",
    level: "Advanced",
    duration: "12 weeks",
    enrolled: 310,
    instructor: "Amira Al-Farsi",
    price: 3999,
    icon: "🇦🇪",
    description: "Master Modern Standard Arabic (MSA) for media, literature, and formal communication across the Arab world.",
    whatYoullLearn: [
      "Advanced Arabic grammar",
      "Reading news and literature",
      "Formal writing styles",
      "Political and social terminology",
      "Listening to complex broadcasts",
      "Root system mastery"
    ],
    modules: [
      {
        title: "The Root System",
        lessons: ["Understanding Verb Roots", "Derived Forms", "Advanced Vocabulary"]
      }
    ]
  },

  // Skills Lab Courses
  {
    id: "ai-fundamentals",
    lab: "skills",
    type: "Course",
    title: "AI Fundamentals & Prompt Engineering",
    skill: "AI",
    level: "Beginner",
    duration: "4 weeks",
    enrolled: 4500,
    instructor: "Dr. Aris Thorne",
    price: 0,
    icon: "🤖",
    description: "Unlock the power of Generative AI. Learn how to craft perfect prompts and understand the underlying technology of LLMs.",
    whatYoullLearn: [
      "History and basics of AI",
      "How LLMs work",
      "The anatomy of a perfect prompt",
      "Iterative prompting techniques",
      "AI ethics and limitations",
      "Practical AI tools for productivity"
    ],
    modules: [
      {
        title: "Introduction to GenAI",
        lessons: ["What is an LLM?", "The AI Landscape", "Setting up your AI Toolkit"]
      },
      {
        title: "Prompt Engineering 101",
        lessons: ["Context and Constraints", "Few-Shot Prompting", "Chain of Thought"]
      }
    ]
  },
  {
    id: "langchain-agents",
    lab: "skills",
    type: "Bootcamp",
    title: "Building AI Agents with LangChain",
    skill: "AI",
    level: "Advanced",
    duration: "8 weeks",
    enrolled: 1200,
    instructor: "Marcus Vibe",
    price: 4999,
    icon: "⛓️",
    description: "Go beyond simple chat. Build autonomous AI agents that can use tools, browse the web, and perform complex tasks using LangChain.",
    whatYoullLearn: [
      "LangChain architecture",
      "Building custom tools for agents",
      "Memory and state management",
      "Multi-agent systems",
      "Deploying AI applications",
      "Vector databases and RAG"
    ],
    modules: [
      {
        title: "LangChain Basics",
        lessons: ["Chains and Prompts", "Models and Parsers", "Memory Types"]
      }
    ]
  },
  {
    id: "no-code-automation",
    lab: "skills",
    type: "Course",
    title: "No-Code Automation with Make & Zapier",
    skill: "Automation",
    level: "Intermediate",
    duration: "5 weeks",
    enrolled: 2800,
    instructor: "Lisa Flow",
    price: 2499,
    icon: "⚡",
    description: "Automate your repetitive tasks without writing a single line of code. Connect your favorite apps and build powerful workflows.",
    whatYoullLearn: [
      "Zapier basics and triggers",
      "Complex scenarios in Make (Integromat)",
      "Webhooks and API basics for no-coders",
      "Data transformation and filtering",
      "Error handling in automation",
      "Building a personal productivity engine"
    ],
    modules: [
      {
        title: "The Automation Mindset",
        lessons: ["Identifying Manual Tasks", "Mapping Workflows", "Choosing the Right Tool"]
      }
    ]
  },
  {
    id: "web3-dev",
    lab: "skills",
    type: "Bootcamp",
    title: "Blockchain & Web3 Development",
    skill: "Web3",
    level: "Advanced",
    duration: "10 weeks",
    enrolled: 950,
    instructor: "Alex Block",
    price: 5999,
    icon: "🌐",
    description: "Build the future of the internet. Learn Solidity, smart contracts, and how to build decentralized applications (dApps).",
    whatYoullLearn: [
      "Blockchain fundamentals",
      "Solidity programming",
      "Smart contract security",
      "Interacting with Ethereum",
      "Building a dApp frontend",
      "NFTs and DeFi protocols"
    ],
    modules: [
      {
        title: "Solidity 101",
        lessons: ["Data Types", "Functions and Modifiers", "Events and Errors"]
      }
    ]
  },
  {
    id: "product-mgmt",
    lab: "skills",
    type: "Course",
    title: "Product Management for Tech Products",
    skill: "Product",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 1800,
    instructor: "David Chen",
    price: 3499,
    icon: "📦",
    description: "Learn the end-to-end product lifecycle. From discovery and user research to roadmap execution and growth.",
    whatYoullLearn: [
      "Product discovery techniques",
      "User research and interviewing",
      "Prioritization frameworks",
      "Agile and Scrum for PMs",
      "Product analytics and metrics",
      "Stakeholder management"
    ],
    modules: [
      {
        title: "Discovery",
        lessons: ["Problem Validation", "User Personas", "MVP Definition"]
      }
    ]
  },
  {
    id: "data-analysis",
    lab: "skills",
    type: "Bootcamp",
    title: "Data Analysis with Python & SQL",
    skill: "Data",
    level: "Intermediate",
    duration: "12 weeks",
    enrolled: 3200,
    instructor: "Dr. Maria Data",
    price: 4499,
    icon: "📊",
    description: "Turn raw data into actionable insights. Master SQL for data extraction and Python for analysis and visualization.",
    whatYoullLearn: [
      "SQL for data querying",
      "Python for data science (Pandas, NumPy)",
      "Data cleaning and preparation",
      "Exploratory Data Analysis (EDA)",
      "Data visualization (Matplotlib, Seaborn)",
      "Statistical foundations"
    ],
    modules: [
      {
        title: "SQL Mastery",
        lessons: ["Joins and Aggregations", "Subqueries", "Window Functions"]
      }
    ]
  },
  {
    id: "vibe-coding",
    lab: "skills",
    type: "Course",
    title: "Vibe Coding: Build Apps with AI",
    skill: "Vibe Coding",
    level: "Beginner",
    duration: "4 weeks",
    enrolled: 5600,
    instructor: "The Vibe Master",
    price: 0,
    icon: "✨",
    description: "The new way to build. Use AI as your primary coding partner to go from idea to functional app in record time.",
    whatYoullLearn: [
      "The Vibe Coding philosophy",
      "Using Cursor and Replit effectively",
      "Prompting for code generation",
      "Debugging with AI",
      "Rapid prototyping",
      "Deploying with one click"
    ],
    modules: [
      {
        title: "The Vibe Shift",
        lessons: ["What is Vibe Coding?", "Setting up your Environment", "Your First AI-Built App"]
      }
    ]
  },
  {
    id: "systems-thinking",
    lab: "skills",
    type: "Course",
    title: "Thinking in Systems",
    skill: "Systems",
    level: "Advanced",
    duration: "6 weeks",
    enrolled: 780,
    instructor: "Prof. Linda Meadows",
    price: 2999,
    icon: "🔄",
    description: "Understand the hidden patterns that run the world. Apply systems thinking to business, technology, and life.",
    whatYoullLearn: [
      "Feedback loops (Reinforcing & Balancing)",
      "Stocks and flows",
      "Identifying leverage points",
      "Systems archetypes",
      "Mental models for complexity",
      "Problem solving in complex systems"
    ],
    modules: [
      {
        title: "Foundations",
        lessons: ["What is a System?", "The Iceberg Model", "Causal Loop Diagrams"]
      }
    ]
  },
  {
    id: "ai-business",
    lab: "skills",
    type: "Bootcamp",
    title: "AI for Business Automation",
    skill: "Automation",
    level: "Intermediate",
    duration: "6 weeks",
    enrolled: 1450,
    instructor: "James Tech",
    price: 3999,
    icon: "🏢",
    description: "Combine AI and automation to transform business operations. Build custom AI workflows that save hundreds of hours.",
    whatYoullLearn: [
      "AI-driven content pipelines",
      "Automated customer support with AI",
      "Data extraction with LLMs",
      "Connecting AI to business tools",
      "ROI analysis of AI automation",
      "Security and privacy in business AI"
    ],
    modules: [
      {
        title: "Business Use Cases",
        lessons: ["Marketing Automation", "Sales Ops with AI", "HR & Recruiting Workflows"]
      }
    ]
  },

  // Career Lab Courses
  {
    id: "360-career-guidance",
    lab: "career",
    type: "Bootcamp",
    title: "360° Career Catalyst",
    skill: "Career Strategy",
    level: "Advanced",
    duration: "6 weeks",
    enrolled: 890,
    instructor: "Elena Vance",
    price: 4999,
    icon: "🎯",
    description: "A comprehensive guide to positioning yourself in the global market. From personal branding and portfolio building to high-stakes networking and interview strategies.",
    whatYoullLearn: [
      "Personal brand positioning & storytelling",
      "High-impact CV & Resume architecture",
      "Digital portfolio & case study building",
      "Strategic networking on LinkedIn",
      "Advanced interview psychology & techniques",
      "Salary negotiation & offer evaluation"
    ],
    modules: [
      {
        title: "Brand Positioning",
        lessons: ["Defining Your Unique Value", "Storytelling for Professionals", "LinkedIn Profile Optimization"]
      },
      {
        title: "The Portfolio",
        lessons: ["Selecting Your Best Work", "Building a Web Portfolio", "Writing Compelling Case Studies"]
      }
    ]
  },
  {
    id: "european-cv-mastery",
    lab: "career",
    type: "Course",
    title: "European CV & Application Mastery",
    skill: "Job Search",
    level: "Intermediate",
    duration: "3 weeks",
    enrolled: 1200,
    instructor: "Marcus Weber",
    price: 1999,
    icon: "🇪🇺",
    description: "Navigate the European job market with precision. Master the Europass format, understand regional nuances, and build a winning application strategy for EU-based companies.",
    whatYoullLearn: [
      "European CV standards (Europass & beyond)",
      "Regional market analysis (DACH, Nordics, etc.)",
      "Cover letter tailoring for EU recruiters",
      "Understanding visa & work permit basics",
      "Application tracking & follow-up strategy",
      "Cultural nuances in European interviews"
    ],
    modules: [
      {
        title: "The European Standard",
        lessons: ["Europass vs Modern EU Formats", "Country-Specific Nuances", "Photo & Personal Info Rules"]
      }
    ]
  }
];
