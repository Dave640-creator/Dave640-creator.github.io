// Project data: one object per card + its details modal.
// `shot` is a path inside /public (null = card has no screenshot area).
export const projects = [
  {
    "slug": "prompt-engineering-learning-guide",
    "title": "Prompt Engineering Learning Guide",
    "tag": "PDF Guide",
    "icon": "bi-file-earmark-pdf-fill",
    "iconColor": "",
    "featured": false,
    "summary": "A repository of structured PDF lesson guides covering prompt basics through advanced techniques like few-shot prompting and chain-of-thought.",
    "tech": [
      "Markdown",
      "PDF",
      "Documentation"
    ],
    "shot": "assets/shots/promptlab/1-overview.png",
    "shotAlt": "Prompt Engineering Learning Guide overview page",
    "github": "https://github.com/Dave640-creator/Prompt-Engineering-Learning-Guide",
    "description": "A GitHub repository of structured PDF guides for learning prompt engineering, from the basics of writing a clear prompt to advanced techniques like few-shot prompting and chain-of-thought.",
    "features": [
      "8 downloadable PDF guides, from Prompt Basics to Real-world Examples",
      "Covers the full prompt formula: Role, Context, Task, Constraints, Output",
      "Dedicated lessons on Role Prompting, Few-shot Prompting, and Chain-of-Thought",
      "Beginner → Intermediate → Advanced learning roadmap",
      "Practical templates and real-world prompt examples included"
    ]
  },
  {
    "slug": "learning-github-guide",
    "title": "Learning GitHub Guide",
    "tag": "PDF Guide",
    "icon": "bi-github",
    "iconColor": "violet",
    "featured": false,
    "summary": "A repository of structured PDF lesson guides covering Git and GitHub fundamentals, branching, pull requests, and GitHub Actions.",
    "tech": [
      "Markdown",
      "PDF",
      "Documentation"
    ],
    "shot": "assets/shots/githubguide/1-overview.png",
    "shotAlt": "Learning GitHub Guide overview page",
    "github": "https://github.com/Dave640-creator/github-feature-demo",
    "description": "A GitHub repository of structured PDF guides covering everything from Git basics to GitHub Actions and open-source workflows, built as a self-paced learning library.",
    "features": [
      "8 downloadable PDF guides, from GitHub Fundamentals to the Open Source Guide",
      "Covers repos, branching & merging, pull requests, and GitHub Actions",
      "Beginner → Intermediate → Advanced learning roadmap",
      "Dedicated chapters on commits, collaboration, and GitHub Pages",
      "Written for developers learning Git and GitHub from scratch"
    ]
  },
  {
    "slug": "ai-code-assistant",
    "title": "AI Code Assistant",
    "tag": "Mobile App",
    "icon": "bi-terminal-fill",
    "iconColor": "",
    "featured": false,
    "summary": "A Flutter app powered by Gemini 2.0 Flash that debugs, explains, writes, and converts code through a terminal-style chat interface.",
    "tech": [
      "Flutter",
      "Dart",
      "Gemini API"
    ],
    "shot": "assets/shots/codeassistant/0-cover.jpg",
    "shotAlt": "AI Code Assistant promotional overview",
    "github": "https://github.com/Dave640-creator/code-assistant",
    "description": "An AI-powered coding companion built with Flutter and the Gemini 2.0 Flash API, ask coding questions, debug errors, generate code, and convert between languages, all in a dark terminal-inspired chat UI.",
    "features": [
      "Chat-based coding assistant powered by Gemini 2.0 Flash",
      "Debug & fix, paste an error and get an explained fix",
      "Write & generate widgets, functions, and unit tests",
      "Convert code between languages (e.g. Python → Dart)",
      "API key stored locally on-device, nothing sent anywhere else",
      "Dark, terminal-inspired chat interface"
    ]
  },
  {
    "slug": "claude-skills",
    "title": "Claude Skills",
    "tag": "Dev Tools",
    "icon": "bi-stars",
    "iconColor": "violet",
    "featured": false,
    "summary": "Custom, reusable AI workflows and skills for Claude, covering coding, research, documentation, and automation tasks.",
    "tech": [
      "Markdown",
      "Claude",
      "Automation"
    ],
    "shot": "assets/shots/claudeskills/0-cover.jpg",
    "shotAlt": "Claude Skills promotional overview",
    "github": "https://github.com/Dave640-creator/claude-skills",
    "description": "A collection of custom, reusable skills built for Claude, modular workflows covering coding, research, documentation, and automation to extend what Claude can do on repeated tasks.",
    "features": [
      "Modular skill structure, coding, research, docs, and automation folders",
      "Custom skills built via Claude's /skill-creator workflow (humanizer, programmer, ui-designer)",
      "Reusable, write a skill once, use it across projects",
      "Simple, developer-friendly file structure that's easy to extend",
      "Open-source and shareable via GitHub"
    ]
  },
  {
    "slug": "visitor-management-system",
    "title": "Visitor Management System",
    "tag": "Full-Stack",
    "icon": "bi-shield-lock-fill",
    "iconColor": "",
    "featured": true,
    "summary": "Built for Tangub City Global College, QR check-in, role-based admin/security access, blacklist control, and auto-generated visit certificates.",
    "tech": [
      "Flutter",
      "Role-Based Auth",
      "QR Codes"
    ],
    "shot": "assets/shots/vms/0-cover.jpg",
    "shotAlt": "Visitor Management System promotional overview",
    "github": "https://github.com/Dave640-creator/Visitor-Management-System",
    "description": "A complete visitor management platform built for Tangub City Global College, replacing manual logbooks with a digital, role-based system for admins and security staff.",
    "features": [
      "QR code check-in/check-out for fast, contactless logging",
      "Role-based access, separate Admin and Security dashboards",
      "Visitor blacklist system to flag repeat offenders",
      "Auto-generated, verifiable Certificate of Visit",
      "Visitor pre-registration form for guests before arrival",
      "Real-time dashboard, total visitors, inside-campus count, pending approvals"
    ]
  },
  {
    "slug": "smart-seat-planner",
    "title": "Smart Seat Planner",
    "tag": "Mobile App",
    "icon": "bi-grid-3x3-gap-fill",
    "iconColor": "pink",
    "featured": false,
    "summary": "Offline-first classroom companion for teachers, manages class rosters, seating arrangements, attendance, and flags at-risk students automatically.",
    "tech": [
      "Flutter",
      "SQLite",
      "Offline-First"
    ],
    "shot": "assets/shots/smartseat/0-cover.jpg",
    "shotAlt": "SmartSeat Planner promotional overview",
    "github": "https://github.com/Dave640-creator/Smart-seat-planner",
    "description": "An offline-first companion app for teachers to manage multiple classes without needing an internet connection, everything is stored locally on-device.",
    "features": [
      "Manage multiple classes with section, room, and schedule details",
      "Per-session attendance tracking",
      "Configurable at-risk threshold that flags students after set absences",
      "Class reports and analytics per section",
      "100% offline, all data stored on-device via SQLite",
      "Dark mode support"
    ]
  },
  {
    "slug": "goalsave",
    "title": "GoalSave",
    "tag": "Mobile App",
    "icon": "bi-piggy-bank-fill",
    "iconColor": "violet",
    "featured": false,
    "summary": "A savings-goal tracker that lets users set peso targets with deadlines, quick-save presets, and visual monthly progress charts.",
    "tech": [
      "Flutter",
      "SQLite",
      "Charts"
    ],
    "shot": "assets/shots/goalsave/0-cover.jpg",
    "shotAlt": "GoalSave promotional overview",
    "github": "https://github.com/Dave640-creator/Savings-Goal",
    "description": "A personal savings tracker that helps users set peso-denominated goals with deadlines and visualize their progress over time.",
    "features": [
      "Set savings goals with target amount and deadline",
      "Quick-save presets (₱50, ₱100, ₱500) plus custom amounts",
      "Daily saving streak tracker to build consistent habits",
      "Monthly savings chart, last 6 months of activity",
      "Full transaction history (money in, out, net savings)",
      "Goal completion tracking (e.g. 5/7 goals done)"
    ]
  },
  {
    "slug": "my-health-fitness",
    "title": "My Health Fitness",
    "tag": "Mobile App",
    "icon": "bi-heart-pulse-fill",
    "iconColor": "",
    "featured": false,
    "summary": "Fitness tracker with activity rings, step/distance/calorie logging, workout history, and BMI-based profile stats.",
    "tech": [
      "Flutter",
      "Charts",
      "Local Storage"
    ],
    "shot": "assets/shots/fitness/0-cover.jpg",
    "shotAlt": "My Health Fitness promotional overview",
    "github": "https://github.com/Dave640-creator/My-Health-Fitness",
    "description": "A fitness tracking app that logs workouts and daily activity, giving users a clear picture of their steps, distance, and calories burned.",
    "features": [
      "Activity rings for steps, calories, and distance goals",
      "Workout history filterable by type, running, cycling, walking",
      "BMI calculator with height/weight-based status",
      "All-time stats, total workouts, distance, steps, calories",
      "Daily step goal tracking with progress bar"
    ]
  },
  {
    "slug": "ojt-time-tracker",
    "title": "OJT Time Tracker",
    "tag": "Mobile App",
    "icon": "bi-stopwatch-fill",
    "iconColor": "pink",
    "featured": false,
    "summary": "Logs time-in/time-out sessions toward a required OJT hour quota, with a live completion ring and session history.",
    "tech": [
      "Flutter",
      "SQLite",
      "Timer"
    ],
    "shot": "assets/shots/ojt/0-cover.jpg",
    "shotAlt": "OJT Time Tracker promotional overview",
    "github": "https://github.com/Dave640-creator/Ojt-Tracker",
    "description": "A simple time-logging app for OJT/internship students to track hours worked toward a required quota.",
    "features": [
      "One-tap Time In / Time Out logging",
      "Live completion ring, hours done vs. hours required (e.g. 26.4h / 500h)",
      "Full session history with per-day logs",
      "Automatic duration calculation per session",
      "Designed for offline, on-device use"
    ]
  },
  {
    "slug": "adshield",
    "title": "AdShield",
    "tag": "Web Tool",
    "icon": "bi-shield-fill-check",
    "iconColor": "violet",
    "featured": false,
    "summary": "System-wide ad and tracker blocker using a local VPN, blocks display ads, video ads, trackers, and social widgets across all apps.",
    "tech": [
      "Flutter",
      "Local VPN",
      "DNS Filtering"
    ],
    "shot": "assets/shots/adshield/0-cover.jpg",
    "shotAlt": "AdShield promotional overview",
    "github": "https://github.com/Dave640-creator/AdShield",
    "description": "A system-wide ad and tracker blocker for Android that works across all apps using a local, on-device VPN, no external servers involved.",
    "features": [
      "Blocks display ads, video ads (YouTube, TikTok, CapCut, and more), and social widgets",
      "System-wide protection via local VPN, works across all installed apps",
      "Tracker & analytics blocking for privacy",
      "Live stats, ads blocked, trackers blocked, domains filtered",
      "Toggle individual blocking rules on/off"
    ]
  },
  {
    "slug": "ai-writing-assistant",
    "title": "AI Writing Assistant",
    "tag": "Mobile App",
    "icon": "bi-robot",
    "iconColor": "",
    "featured": false,
    "summary": "A Flutter app that calls the Claude API to rewrite AI-sounding or robotic text into natural, human-like writing.",
    "tech": [
      "Flutter",
      "Claude API",
      "Dart"
    ],
    "shot": null,
    "shotAlt": null,
    "github": "https://github.com/Dave640-creator/Ai-Assistant",
    "description": "A Flutter app that connects to the Claude API to rewrite AI-sounding or overly formal text into natural, human-sounding writing.",
    "features": [
      "Paste any text and get a rewritten, more natural version",
      "Powered by the Claude API for high-quality rewriting",
      "Built for students and writers who want AI-assisted drafts to read naturally",
      "Simple, distraction-free interface"
    ]
  },
  {
    "slug": "youtube-ad-blocker",
    "title": "YouTube Ad Blocker",
    "tag": "Chrome Extension",
    "icon": "bi-youtube",
    "iconColor": "pink",
    "featured": false,
    "summary": "A lightweight Chrome extension that automatically blocks YouTube ads for a cleaner, uninterrupted viewing experience.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "shot": "assets/shots/ytadblocker/0-cover.png",
    "shotAlt": "YouTube Ad Blocker promotional overview",
    "github": "https://github.com/Dave640-creator/YouTube-Adds-Blocker",
    "description": "A lightweight Chrome extension that automatically blocks YouTube ads, video ads, banner ads, and sponsored overlays, for a cleaner, uninterrupted viewing experience.",
    "features": [
      "Blocks YouTube video ads, banners, and sponsored overlays automatically",
      "Fast & lightweight, minimal code that runs smoothly in the background",
      "One-click enable/disable through a clean popup interface",
      "Privacy-focused, no data collection, viewing habits stay local",
      "Seamless Chrome extension integration, works instantly after install"
    ]
  },
  {
    "slug": "file-processing-api",
    "title": "File Processing API",
    "tag": "REST API",
    "icon": "bi-file-earmark-arrow-up-fill",
    "iconColor": "",
    "featured": false,
    "summary": "A RESTful API for uploading, converting, and extracting data from files, returning clean, structured JSON.",
    "tech": [
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "shot": "assets/shots/fileapi/0-cover.png",
    "shotAlt": "File Processing API promotional overview",
    "github": "https://github.com/Dave640-creator/File-Processing-REST-API",
    "description": "A RESTful API for fast, reliable file processing, upload, convert, and extract data from files (PDF, DOCX, XLSX, TXT) with just a few API calls, returning clean, structured JSON.",
    "features": [
      "File upload endpoint with secure handling",
      "Format conversion between PDF, DOCX, XLSX, and TXT",
      "Text extraction (OCR) from images and scanned documents",
      "Clean, structured JSON response for every request",
      "Easy integration, works with any platform that can call a REST API"
    ]
  },
  {
    "slug": "invoice-receipt-generator-api",
    "title": "Invoice / Receipt Generator API",
    "tag": "REST API",
    "icon": "bi-receipt",
    "iconColor": "violet",
    "featured": false,
    "summary": "A lightweight PHP API that generates professional invoices and receipts in PDF format from a simple JSON request.",
    "tech": [
      "PHP",
      "REST API",
      "DOMPDF"
    ],
    "shot": "assets/shots/invoiceapi/0-cover.png",
    "shotAlt": "Invoice / Receipt Generator API promotional overview",
    "github": "https://github.com/Dave640-creator/Invoice-Receipt-Generator-API",
    "description": "A lightweight PHP REST API that generates professional invoices and receipts in PDF format from JSON data, no database required, fully file-based.",
    "features": [
      "Generate invoices or receipts as PDF from a single JSON request",
      "API key authentication to secure requests",
      "Instant download, returns the finished PDF directly",
      "Customizable business info, line items, totals, tax, and notes",
      "No database needed, 100% file-based",
      "Works with any language that can make HTTP requests"
    ]
  }
];

export default projects;
