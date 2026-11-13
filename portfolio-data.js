/**
 * ==============================================================================
 * CENTRALIZED PERSONAL INFORMATION CONFIGURATION
 * Personal Portfolio Configuration • SSGMCE Shegaon
 * ==============================================================================
 * Student: Gajanan Sanjay Kadam
 * Branch: Computer Science & Engineering (2nd Year)
 * Institution: Shri Sant Gajanan Maharaj College of Engineering, Shegaon
 * Background: Ex-Navodayan, Jawahar Navodaya Vidyalaya (JNV) Parbhani
 * ==============================================================================
 */

const portfolioData = {
  // ----------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION (REAL RESUME DATA - ACCURATELY UPDATED)
  // ----------------------------------------------------------------------------
  personal: {
    name: "Gajanan Sanjay Kadam",
    shortName: "Gajanan",
    initials: "GK",
    avatarUrl: "https://i.ibb.co/bjdYtYzL/gajuk.jpg", // Hosted authentic portrait photograph of Gajanan Sanjay Kadam
    
    // Academic & Professional Titles
    role: "Second-Year Computer Science & Engineering Student",
    headline: "Second-Year CSE Student | Ex-Navodayan | Problem Solver & C Programmer",
    headlineBadge1: "Second-Year CSE Student",
    headlineBadge2: "Ex-Navodayan (JNV Parbhani)",
    headlineBadge3: "SSGMCE Shegaon",
    
    college: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
    collegeShort: "SSGMCE, Shegaon",
    branch: "Computer Science and Engineering",
    academicYear: "Second Year (Class of 2028)",
    
    // Semester-wise SGPA (Accurate)
    sem1Sgpa: "8.14 / 10",
    sem2Sgpa: "8.32 / 10",
    hscPercentage: "83.5%",
    
    location: "Shegaon, Maharashtra, India",
    statusBadge: "Seeking Technical Internships & Fellowships",
    portfolioTag: "Second-Year CSE Student • SSGMCE Shegaon",
    schoolBackground: "Jawahar Navodaya Vidyalaya (JNV) Parbhani Alumnus",
    
    // Bio & Story from Resume
    tagline: "2nd-year CSE student at SSGMCE Shegaon (Ex-Navodayan, JNV Parbhani) with a strong foundation in C programming, web development (HTML/CSS), and analytical problem solving, currently learning Core Java in depth and OOP.",
    shortBio: "2nd-year Computer Science & Engineering student (Ex-Navodayan, JNV Parbhani) at SSGMCE Shegaon with a strong foundation in C programming, web development (HTML/CSS), and Microsoft Excel. Currently learning Core Java in depth and Object-Oriented Programming (OOP). Seeking an entry-level technical role or fellowship to apply my skills, gain hands-on experience, and learn new technologies.",
    
    aboutParagraphs: [
      "Hello! I am Gajanan Sanjay Kadam, a second-year Computer Science & Engineering undergraduate at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon, and a proud alumnus of Jawahar Navodaya Vidyalaya (JNV), Parbhani.",
      "I have built a strong foundational understanding in C programming, structured algorithmic logic, and web development using semantic HTML and CSS. I am currently learning Core Java in depth, exploring programming fundamentals, syntax, classes, and objects, while developing a deeper understanding of Object-Oriented Programming (OOP) concepts including inheritance, polymorphism, encapsulation, and abstraction.",
      "My academic journey at SSGMCE is driven by a passion for software engineering, structured problem-solving, and continuous learning. With a First Semester SGPA of 8.14 / 10 and Second Semester SGPA of 8.32 / 10, I am actively seeking an entry-level technical role, internship, or fellowship to apply my skills, gain hands-on production experience, and collaborate on impactful engineering projects."
    ],
    
    // Highlights & Metrics for Hero & About (Semester-wise scores, no HSC year)
    highlights: [
      { label: "Semester 1 SGPA", value: "8.14 / 10", detail: "First Semester Result" },
      { label: "Semester 2 SGPA", value: "8.32 / 10", detail: "Second Semester Result" },
      { label: "HSC (Science)", value: "83.5%", detail: "JNV Parbhani" },
      { label: "Core Foundation", value: "C & Core Java", detail: "OOP in Progress" }
    ],

    // Languages known
    languages: [
      { name: "English", level: "Professional Working" },
      { name: "Marathi", level: "Native / Mother Tongue" },
      { name: "Hindi", level: "Fluent / Conversational" }
    ],

    // Soft Skills from Resume
    softSkills: [
      "Logical Reasoning",
      "Quick Learning Ability",
      "Attention to Detail",
      "Analytical Thinking",
      "Team Collaboration",
      "Problem-Solving Mindset"
    ]
  },

  // ----------------------------------------------------------------------------
  // 2. CONTACT INFORMATION
  // ----------------------------------------------------------------------------
  contact: {
    phone: "9309241434",
    phoneDisplay: "+91 93092 41434",
    email: "gajanan.kadam2004@gmail.com",
    location: "Shegaon, Maharashtra, India",
    github: "https://github.com/gajukadam",
    linkedin: "https://www.linkedin.com/in/gajanan-sanjay-kadam",
    resumeUrl: "#",
    responseNote: "Usually responds within 24 hours"
  },

  // ----------------------------------------------------------------------------
  // 3. TECHNICAL SKILLS
  // ----------------------------------------------------------------------------
  skills: [
    {
      category: "Programming Languages",
      items: [
        { 
          name: "C Language", 
          level: "Strong Foundation", 
          desc: "Structured programming, Pointers, Memory management, Control flow, Modular functions", 
          icon: "code" 
        },
        { 
          name: "Core Java", 
          level: "Currently Learning in Depth", 
          desc: "Actively strengthening my understanding of Core Java, exploring programming fundamentals, syntax, methods, classes, objects, and writing practical Java programs.", 
          icon: "coffee" 
        },
        { 
          name: "Object-Oriented Programming (OOP)", 
          level: "Currently Learning", 
          desc: "Developing a deeper understanding of object-oriented programming concepts, including classes, objects, encapsulation, inheritance, polymorphism, and abstraction.", 
          icon: "box" 
        }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML5", level: "Proficient", desc: "Semantic markup, Document structuring, Accessible forms, Web standards", icon: "layout" },
        { name: "CSS3", level: "Proficient", desc: "Flexbox, CSS Grid, Responsive design, Custom media galleries, Animations", icon: "palette" },
        { name: "Web Basics & Interactivity", level: "Intermediate", desc: "DOM fundamentals, Client-side structure, Responsive layouts", icon: "globe" }
      ]
    },
    {
      category: "Productivity & Data Management",
      items: [
        { name: "Microsoft Excel", level: "Proficient", desc: "Data entry, Mathematical & statistical formulas, Data formatting, Tabular analysis", icon: "file-spreadsheet" },
        { name: "Microsoft Word", level: "Proficient", desc: "Technical documentation, Report formatting, Structured layouts", icon: "file-text" }
      ]
    },
    {
      category: "Core Computer Science Competencies",
      items: [
        { name: "Problem-Solving & Algorithmic Logic", level: "Active Practice", desc: "Decomposing complex problems into step-by-step algorithmic solutions", icon: "cpu" },
        { name: "Data Structuring", level: "In Progress", desc: "Arrays, Linear structures, Data organization, Algorithm efficiency", icon: "binary" },
        { name: "Team Collaboration", level: "Proficient", desc: "Group project execution, Peer communication, Collective brainstorming", icon: "users" }
      ]
    },
    {
      category: "Developer Tools & Systems",
      items: [
        { name: "Git & GitHub", level: "Familiar", desc: "Version control, Repositories, Commits, Project hosting", icon: "git-branch" },
        { name: "VS Code Editor", level: "Proficient", desc: "Code editing, Syntax formatting, Extensions, GCC debugging", icon: "terminal" },
        { name: "GCC Compiler / Terminal", level: "Intermediate", desc: "C compilation, Shell commands, Executable management", icon: "terminal" }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. CURRENT LEARNING & GROWTH ROADMAP
  // ----------------------------------------------------------------------------
  currentlyLearning: [
    {
      title: "Core Java",
      focus: "Actively strengthening my understanding of Core Java, exploring programming fundamentals, syntax, methods, classes, objects, and writing practical Java programs.",
      platform: "Self-Paced & Coursework",
      progress: "Currently Learning in Depth",
      icon: "coffee"
    },
    {
      title: "Object-Oriented Programming (OOP)",
      focus: "Developing a deeper understanding of object-oriented programming concepts, including classes, objects, encapsulation, inheritance, polymorphism, and abstraction.",
      platform: "Academic Curriculum & Practice",
      progress: "Currently Learning",
      icon: "box"
    },
    {
      title: "Data Structures in C",
      focus: "Arrays, Linked Lists, Stacks, Queues, Searching & Sorting algorithms",
      platform: "B.E. CSE Coursework & Lab",
      progress: "In Active Practice",
      icon: "binary"
    },
    {
      title: "Modern Frontend Web Engineering",
      focus: "CSS Flexbox/Grid, Responsive web design, Interactive UI components",
      platform: "Practical Project Building",
      progress: "Actively Building",
      icon: "layout"
    },
    {
      title: "Database Management Systems (DBMS)",
      focus: "Relational models, SQL queries, Table relationships & Normalization basics",
      platform: "Academic Curriculum",
      progress: "Active Study",
      icon: "database"
    },
    {
      title: "Version Control with Git & GitHub",
      focus: "Repository management, Code versioning & Open source collaboration",
      platform: "Daily Developer Practice",
      progress: "Regular Use",
      icon: "git-branch"
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. PROJECTS & PRACTICAL WORK (4 FLAGSHIP VERIFIED PROJECTS)
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "lastlight",
      title: "Lastlight – Red Data Book Wildlife Archive",
      coverImage: "assets/projects/lastlight_cover.jpg",
      category: "Interactive Web Archive & Biodiversity",
      badge: "IUCN Red List Conservation Platform",
      description: "An interactive web archive highlighting endangered animals and plants from the IUCN Red List. Built with HTML5, CSS3, and Vanilla JavaScript featuring responsive grids, detailed species modals, and a localStorage conservation pledge tracker.",
      technologies: ["HTML5", "CSS3 (Modern Grid/Flexbox)", "Vanilla JavaScript (ES6+)", "LocalStorage API", "IUCN Data Model"],
      githubUrl: "https://github.com/gajukadam/Lastlight",
      liveUrl: "https://gajukadam.github.io/Lastlight/",
      featured: true,
      imageNote: "Red Data Book Wildlife Archive",
      isPlaceholder: false
    },
    {
      id: "suvidhax",
      title: "SuvidhaX – Privacy-Focused Client-Side Utility Platform",
      coverImage: "assets/projects/suvidhax_cover.jpg",
      category: "Client-Side Engineering & Privacy",
      badge: "Hosted on Render • Client-Side Processing",
      description: "SuvidhaX is a privacy-focused, client-side utility platform designed to handle various everyday computational and data-processing tasks securely in the browser. Features client-side processing, an all-in-one utility suite, and a clean, responsive frontend hosted on Render.",
      technologies: ["Client-Side Processing", "JavaScript (ES6+)", "Web Utilities", "Render Cloud", "Privacy Architecture"],
      githubUrl: "https://github.com/gajukadam",
      liveUrl: "https://suvidhax-frontend.onrender.com/",
      featured: true,
      imageNote: "Privacy-Focused Client-Side Utility Suite",
      isPlaceholder: false
    },
    {
      id: "stem-workbook",
      title: "Community Engagement Project (CEP): Rural STEM Awareness",
      category: "Rural EdTech & Community Leadership",
      badge: "Location: Z.P. Shala, Chincholi | Role: Team Leader (SSGMCE CSE)",
      location: "Zilla Parishad Shala, Chincholi",
      role: "Team Leader",
      institution: "CSE Department, Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
      mentors: "Prof. T. A. Puranik Madam and HOD Dr. J. M. Patil Sir",
      videoUrl: "https://youtu.be/5_O2UamVMfM?si=lwovgcOZZ5BywJJ5",
      youtubeEmbed: "https://www.youtube.com/embed/5_O2UamVMfM",
      description: "Led a Community Engagement Project (CEP) at Zilla Parishad Shala, Chincholi, dedicated to bridging the rural STEM education gap and inspiring 8th-grade students to explore career pathways in Science, Technology, Engineering, and Mathematics. Engineered an interactive bilingual quiz platform and delivered career mentorship under the guidance of Prof. T. A. Puranik Madam and HOD Dr. J. M. Patil Sir.",
      technologies: ["Bilingual Quiz App (HTML/CSS/JS)", "Agricultural Science Concepts", "STEM Career Mentorship", "Field Work Execution"],
      coverImage: "assets/projects/cep_cover.jpg",
      gallery: [
        { src: "assets/projects/cep_cover.jpg", caption: "Rural STEM Awareness Outreach Project Cover – Z.P. Shala Chincholi" },
        { src: "assets/cep/cep_presentation.jpg", caption: "Gajanan Kadam presenting interactive STEM session to 8th-grade students at digital screen" },
        { src: "assets/cep/cep_team_school.jpg", caption: "CEP Engineering Team outside Zilla Parishad Shala, Chincholi" },
        { src: "assets/cep/cep_felicitation.jpg", caption: "Felicitation and project recognition with school headmaster and teachers" },
        { src: "assets/cep/cep_classroom.jpg", caption: "Live classroom deployment and interactive learning session with rural students" }
      ],
      githubUrl: "https://github.com/gajukadam",
      liveUrl: "https://youtu.be/5_O2UamVMfM?si=lwovgcOZZ5BywJJ5",
      featured: true,
      imageNote: "Field Work at Z.P. Shala Chincholi",
      isPlaceholder: false
    },
    {
      id: "jnv-memories",
      title: "JNV Memories Photo Gallery",
      coverImage: "assets/projects/jnv_cover.jpg",
      category: "Media Showcase",
      badge: "Ex-Navodayan Heritage Tribute • Standalone Web Archive",
      description: "A responsive web-based photo gallery designed and built to archive and showcase memorable moments from my school days at Jawahar Navodaya Vidyalaya, Parbhani. Built from scratch using semantic HTML5 and modern CSS3, focusing on clean visual storytelling, intuitive layout, and seamless responsiveness across desktop and mobile devices.",
      technologies: ["HTML5", "CSS3 Grid & Flexbox", "Responsive Design", "Photo Gallery", "Semantic Markup"],
      githubUrl: "https://github.com/gajukadam",
      liveUrl: "jnv-memories.html",
      featured: true,
      imageNote: "JNV Parbhani Classmate Gallery",
      isPlaceholder: false
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. EDUCATION (CORRECTED SEMESTER SGPA - NO HSC YEAR)
  // ----------------------------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
      branch: "Computer Science & Engineering",
      institution: "Shri Sant Gajanan Maharaj College of Engineering",
      location: "Shegaon, Maharashtra, India",
      period: "2024 – 2028 (Currently in Second Year)",
      status: "In Progress",
      sem1Sgpa: "8.14 / 10",
      sem2Sgpa: "8.32 / 10",
      academicResults: [
        { label: "First Semester SGPA", score: "8.14 / 10" },
        { label: "Second Semester SGPA", score: "8.32 / 10" }
      ],
      description: "Enrolled in undergraduate engineering with strong academic results. Actively mastering core computer science subjects, algorithmic logic, C programming, Core Java, and laboratory coursework.",
      keyCoursework: [
        "Data Structures",
        "C Programming",
        "Object-Oriented Concepts",
        "Web Basics",
        "Computer Engineering Mathematics"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC / 12th)",
      branch: "Science Stream",
      institution: "Jawahar Navodaya Vidyalaya (JNV), Parbhani",
      location: "Parbhani, Maharashtra",
      period: "Completed",
      status: "Completed • Percentage: 83.5%",
      hscPercentage: "83.5%",
      description: "Completed higher secondary education at prestigious Jawahar Navodaya Vidyalaya with an impressive 83.5% score in Science stream. Built strong foundations in Mathematics, Physics, and analytical logic.",
      keyCoursework: ["Physics", "Chemistry", "Mathematics", "Computer Basics"]
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. ACHIEVEMENTS & MILESTONES (NO HSC YEAR)
  // ----------------------------------------------------------------------------
  certifications: [
    {
      id: "ai-unlock",
      title: "AI UNLOCK – Certificate of Completion",
      issuer: "ACM Student Chapter, Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)",
      event: "AI UNLOCK Hands-on Technical Workshop",
      topics: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Real-World Problem Solving"],
      facultySponsor: "Prof. P. A. Lod",
      hod: "Dr. S. D. Padiya (HOD IT)",
      coverImage: "assets/certificates/ai_unlock_cover.jpg",
      pdfUrl: "assets/certificates/ai_unlock_certificate.pdf",
      description: "Successfully participated in and completed 'AI UNLOCK', an intensive hands-on technical workshop on the basics of Artificial Intelligence, Machine Learning, Generative AI, and real-world problem solving organized by the ACM Student Chapter, SSGMCE."
    }
  ],

  achievements: [
    {
      title: "AI UNLOCK Workshop Certification (ACM SSGMCE)",
      issuer: "ACM Student Chapter, SSGMCE",
      type: "Technical Certification",
      date: "2026",
      description: "Completed hands-on technical workshop on Artificial Intelligence, Machine Learning, Generative AI, and practical problem solving under Prof. P. A. Lod and Dr. S. D. Padiya.",
      icon: "award",
      coverImage: "assets/certificates/ai_unlock_cover.jpg",
      certificatePdf: "assets/certificates/ai_unlock_certificate.pdf"
    },
    {
      title: "TECHNOVATE 2K26 Technical Project Exhibition Exhibitor",
      issuer: "SSGMCE Shegaon",
      type: "Technical Project Exhibition",
      date: "2026",
      description: "Selected and exhibited flagship engineering project SuvidhaX (Client-Side WebAssembly Utility Platform) at the TECHNOVATE 2K26 Project Expo at SSGMCE, demonstrating 100% in-browser document processing and privacy-first architecture.",
      icon: "award"
    },
    {
      title: "Strong Engineering Academic Results",
      issuer: "SSGMCE Shegaon",
      type: "Academic Excellence",
      date: "2024 – Present",
      description: "Achieved First Semester SGPA of 8.14 / 10 and Second Semester SGPA of 8.32 / 10 in Computer Science & Engineering coursework at SSGMCE Shegaon.",
      icon: "check-circle"
    },
    {
      title: "Jawahar Navodaya Vidyalaya (JNV) Alumnus Selection & 83.5% HSC",
      issuer: "Navodaya Vidyalaya Samiti (NVS), Ministry of Education, Govt of India",
      type: "Academic Selection Milestone",
      date: "Completed",
      description: "Selected through national merit-based entrance for Jawahar Navodaya Vidyalaya (JNV) Parbhani; graduated HSC with 83.5% in Science stream.",
      icon: "star"
    }
  ]
};

// Make accessible to browser scripts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = portfolioData;
}

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
