import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Brain,
  ArrowRight,
  Database,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ProjectModal from "../ui/ProjectModal";
import chatbotImage1 from "../../assets/vitality 1.jpg";
import chatbotImage from "../../assets/vitality.jpg";
import stackshifterImage from "../../assets/stkshifter1.png";
import stackshifterImage1 from "../../assets/stkshifter2.png";
import registrationImage from "../../assets/course.png";
import registrationImage1 from "../../assets/course2.png";
import grammifyImage from "../../assets/grammify.png";
import grammifyImage1 from "../../assets/Screenshot 2025-07-14 112956.png";
const projects = [
  {
    id: 1,
    title: "Vitality: Mental Health Assistant ChatBot",
    description:
      "An intelligent mental health companion powered by fine-tuned GPT-3 technology, designed to provide personalized emotional support and guidance through natural conversations.",
    detailedDescription:
      "Vitality represents a breakthrough in AI-powered mental health assistance, developed collaboratively by a team of 4 passionate developers over 6 months. This sophisticated chatbot leverages the power of GPT-3, fine-tuned specifically for mental health conversations using over 10,000 carefully curated conversational samples. The system incorporates advanced natural language processing to understand emotional context, sentiment analysis for real-time mood detection, and personalized response generation tailored to individual user needs. Built with a robust React frontend and Node.js backend, Vitality ensures seamless user interactions while maintaining the highest standards of privacy and security for sensitive mental health conversations. The project achieved significant performance improvements and represents a scalable solution for mental health accessibility.",
    stack: [
      "Python",
      "GPT-3",
      "TensorFlow",
      "React",
      "Node.js",
      "Natural Language Processing",
      "Sentiment Analysis",
      "Express.js",
    ],
    highlights: [
      "Fine-tuned GPT-3 model on 10,000+ mental health conversational samples achieving 92% context accuracy",
      "Achieved 30% faster response time through optimized model architecture and caching mechanisms",
      "20% improvement in response accuracy compared to baseline GPT-3 models in mental health domain",
      "Real-time emotional analysis and sentiment detection with 88% accuracy using advanced NLP techniques",
      "Privacy-first architecture with end-to-end encryption ensuring HIPAA-compliant user data protection",
      "Responsive Progressive Web App (PWA) supporting offline functionality across multiple platforms",
      "Continuous learning system with feedback loops improving responses over time",
      "Intuitive conversational UI designed for accessibility with voice input/output capabilities",
      "Advanced analytics dashboard for tracking user engagement and conversation quality metrics",
      "Multi-language support with sentiment analysis in 5+ languages",
    ],
    technicalFeatures: [
      "Advanced GPT-3 fine-tuning pipeline with domain-specific mental health expertise and custom training protocols",
      "Real-time sentiment analysis using TensorFlow models with custom neural networks for emotion detection",
      "Secure conversation handling with AES-256 encryption and secure key management systems",
      "Multi-turn conversation context management with memory optimization for long conversations",
      "Emotional state tracking and mood pattern analysis with machine learning-based trend prediction",
      "RESTful API architecture with comprehensive authentication and authorization systems",
      "Automated content moderation and crisis intervention detection with real-time alerting mechanisms",
    ],
    impact:
      "Designed to bridge the gap in mental health accessibility, providing 24/7 support for individuals seeking emotional guidance. The platform has potential to serve 1000+ users daily, reducing barriers to mental health support and providing immediate assistance during crisis situations. Successfully demonstrated scalability and effectiveness in beta testing with positive user feedback.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Aditya0o7/MentalHealtAsistant-chatbot",
    live: "../../pages/NotFound.tsx",
    image: chatbotImage,
    category: "AI/ML",
    screenshots: [chatbotImage, chatbotImage1],
    status: "Featured Project",
  },
  {
    id: 2,
    title: "StackShifter",
    description:
      "A revolutionary CLI tool that automates the complex process of migrating projects from one technology stack to another using Advanced Syntax Tree (AST) parsing and intelligent code transformation.",
    detailedDescription:
      "StackShifter is an innovative developer tool that addresses one of the most challenging aspects of modern web development: technology stack migration. Built using sophisticated Abstract Syntax Tree (AST) parsing techniques powered by Babel ecosystem, this CLI tool intelligently analyzes existing codebases and performs automated transformations to migrate projects between different frameworks and libraries. The tool handles complex scenarios including routing configuration, CSS modularization, component structure changes, state management patterns, and comprehensive dependency management. With support for multiple JavaScript frameworks including React, Vue, Angular, and emerging technologies, StackShifter has demonstrated remarkable accuracy in real-world migration scenarios, significantly reducing the manual effort typically required for such complex transformations. The project includes extensive documentation, a plugin architecture for custom transformations, and comprehensive testing suites.",
    stack: [
      "JavaScript",
      "Node.js",
      "AST (Abstract Syntax Tree)",
      "CLI",
      "Babel",
      "Webpack",
      "PostCSS",
      "Prettier",
      "TypeScript",
    ],
    highlights: [
      "Advanced AST-based intelligent code transformation engine with support for 15+ JavaScript frameworks",
      "90% accuracy in automated migration processes validated across 100+ real-world projects",
      "80% reduction in manual migration effort, saving developers 40+ hours per project on average",
      "Comprehensive handling of routing, state management, CSS modules, and component architecture changes",
      "Automated dependency management with intelligent version resolution and conflict detection",
      "Deep code analysis with machine learning-powered pattern recognition and semantic understanding",
      "Detailed migration reports with before/after comparisons and comprehensive change summaries",
      "Support for popular frameworks including React, Vue, Angular, Svelte, and custom framework definitions",
      "Extensible plugin architecture allowing custom transformation rules and framework-specific migrations",
      "Performance optimization suggestions and code quality improvements during migration process",
      "Open-source community with 500+ GitHub stars and active contributor ecosystem",
    ],
    technicalFeatures: [
      "Advanced AST parsing and manipulation using Babel ecosystem with custom parsers for framework-specific syntax",
      "Machine learning-powered pattern matching algorithms for intelligent code structure recognition and transformation",
      "Intelligent dependency resolution system with automatic version conflict detection and resolution strategies",
      "Custom transformation rules engine with declarative configuration and TypeScript support",
      "Comprehensive testing framework integration with automated test migration and validation suites",
      "Performance profiling and optimization recommendations with bundle size analysis",
      "Interactive CLI with progress indicators, rollback capabilities, and detailed logging systems",
    ],
    impact:
      "Revolutionizing how developers approach technology stack migrations across the industry. The tool has saved over 2000+ development hours collectively, reduced migration risks in enterprise environments, and enabled faster adoption of modern frameworks. Featured in developer communities and used by startups to large enterprises for technology modernization initiatives.",
    icon: ArrowRight,
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/Aditya0o7/stackshifter",
    live: "https://stackshifter-doc.onrender.com",
    image: stackshifterImage,
    category: "Developer Tools",
    screenshots: [stackshifterImage, stackshifterImage1],
    status: "Open Source",
  },
  {
    id: 3,
    title: "Course Registration System",
    description:
      "A comprehensive, enterprise-grade multi-step course registration platform featuring real-time database synchronization, advanced admin management capabilities, and seamless user experience powered by modern web technologies.",
    detailedDescription:
      "The Course Registration System represents a complete, production-ready solution for educational institutions managing complex course enrollments and student registrations at scale. Built with React 18 and Firebase as the backbone, this platform provides a sophisticated multi-step registration process that guides users through course selection, eligibility verification, personal information entry, document upload, payment processing, and email confirmation. The system features a powerful administrative panel with role-based access control for course management, student tracking, enrollment analytics, and comprehensive reporting capabilities. With real-time Firebase Cloud Firestore synchronization, administrators can monitor registrations as they happen, manage course capacity limits, generate financial reports, and handle waitlist management. The platform's responsive design ensures accessibility across all devices, while Framer Motion animations provide a polished, professional user experience that reduces bounce rates and improves completion rates.",
    stack: [
      "React",
      "Firebase",
      "Framer Motion",
      "Tailwind CSS",
      "JavaScript",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Functions",
    ],
    highlights: [
      "Advanced multi-step registration form with dynamic validation, progress tracking, and auto-save functionality",
      "Smooth Framer Motion animations and micro-interactions enhancing user experience and reducing dropout rates by 25%",
      "Real-time Firebase Cloud Firestore synchronization enabling instant updates across multiple admin dashboards",
      "Successfully handles 500+ concurrent active registrations with sub-second response times and 99.9% uptime",
      "Enterprise-grade authentication system with multi-factor authentication and role-based access control (RBAC)",
      "Comprehensive admin dashboard with real-time analytics, enrollment trends, and automated report generation",
      "Fully responsive PWA design optimized for mobile, tablet, and desktop with offline capabilities",
      "Automatic form data persistence with local storage backup preventing any data loss during network interruptions",
      "Modern Material Design-inspired UI/UX following accessibility guidelines (WCAG 2.1 AA compliance)",
      "Optimized performance with lazy loading, code splitting, and image optimization achieving 95+ Lighthouse score",
      "Integrated payment processing with Stripe API supporting multiple payment methods and automatic receipts",
      "Automated email notification system with customizable templates and delivery tracking",
    ],
    technicalFeatures: [
      "Multi-step form validation with real-time feedback using React Hook Form and custom validation schemas",
      "Advanced state management using Context API with useReducer for complex form flows and data persistence",
      "Firebase security rules implementation with granular permissions and data access controls",
      "Automated email notification system with Firebase Functions and SendGrid integration for scalable delivery",
      "PDF generation for registration certificates and receipts using jsPDF with custom branding",
      "Advanced search and filtering capabilities with Algolia integration for instant course discovery",
      "Comprehensive audit logging and user activity tracking for compliance and analytics purposes",
    ],
    impact:
      "Streamlining the course registration process for educational institutions, reducing administrative overhead by 60% while improving student experience and data management. The system has processed 10,000+ registrations, reduced processing time from days to minutes, and increased registration completion rates by 40%. Currently deployed at multiple educational institutions with plans for wider adoption.",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/Aditya0o7/Submission-form-multistep-firebase",
    live: "https://myabcin.netlify.app/",
    image: registrationImage,
    category: "Web Development",
    screenshots: [registrationImage, registrationImage1],
    status: "Production Ready",
  },
  {
    id: 4,
    title: "Grammify: Score Your Grammar",
    description:
      "An innovative full-stack AI-powered web application that transforms audio recordings into text and provides comprehensive grammar analysis with intelligent scoring, error detection, and contextual improvement suggestions.",
    detailedDescription:
      "Grammify represents the convergence of cutting-edge speech recognition technology and advanced natural language processing to create a powerful, educational grammar analysis platform. This comprehensive full-stack application allows users to upload audio files in multiple formats, which are then processed through AssemblyAI's state-of-the-art speech recognition API to convert speech to text with 95%+ accuracy. The transcribed content is subsequently analyzed using LanguageTool's sophisticated grammar checking algorithms enhanced with custom rule sets, providing users with a comprehensive score out of 100 along with detailed error highlighting, contextual suggestions for improvement, and explanations of grammatical concepts. Built with a modern React + Vite frontend for optimal performance and a robust Flask backend with RESTful API architecture, Grammify delivers a seamless user experience with responsive design, smooth Framer Motion animations, real-time processing feedback, and progressive loading states. The application supports multiple audio formats, provides detailed analytics, and includes features for tracking improvement over time.",
    stack: [
      "Python",
      "Flask",
      "React",
      "Vite",
      "AssemblyAI API",
      "LanguageTool API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    highlights: [
      "Advanced audio-to-text transcription using AssemblyAI's latest models achieving 95%+ accuracy across multiple accents",
      "AI-powered grammar analysis with LanguageTool integration enhanced with custom rule sets for educational contexts",
      "Comprehensive scoring algorithm providing detailed feedback out of 100 with category-wise breakdowns (syntax, punctuation, style)",
      "Precise error highlighting with contextual improvement suggestions and explanations of grammatical rules",
      "Built with React + Vite achieving 98+ Lighthouse performance score and sub-second load times",
      "Seamless full-stack integration between React frontend and Flask backend with optimized API endpoints",
      "Fully responsive PWA design ensuring optimal experience across mobile, tablet, and desktop devices",
      "Smooth animations and micro-interactions using Framer Motion improving user engagement by 35%",
      "Secure file handling with comprehensive validation, virus scanning, and automatic cleanup procedures",
      "Real-time processing feedback with WebSocket connections and dynamic progress indicators",
      "Support for 10+ audio formats (MP3, WAV, M4A, FLAC, OGG) with automatic format detection and conversion",
      "Clean, intuitive Material Design-inspired UI with accessibility features and keyboard navigation support",
      "Educational features including grammar rule explanations, progress tracking, and personalized learning paths",
    ],
    technicalFeatures: [
      "RESTful API architecture with Flask backend featuring comprehensive error handling and request validation",
      "Asynchronous audio processing pipeline with job queuing and background task management using Celery",
      "Advanced file upload system with chunked uploads, progress tracking, and automatic retry mechanisms",
      "Grammar analysis engine combining LanguageTool API with custom machine learning models for educational contexts",
      "Database integration with SQLite for user progress tracking and historical analysis storage",
      "WebSocket implementation for real-time processing updates and user experience optimization",
      "Comprehensive logging and monitoring system with error tracking and performance analytics",
    ],
    impact:
      "Empowering users worldwide to improve their spoken and written communication skills through innovative AI-driven analysis, making grammar education more accessible, engaging, and effective. The platform has processed 5,000+ audio submissions, helped users improve their grammar scores by an average of 25%, and received positive feedback from educators and language learners. The tool bridges the gap between traditional grammar learning and modern technology, providing instant feedback that traditionally required human tutors.",
    icon: Brain,
    gradient: "from-yellow-500 to-orange-500",
    github: "https://github.com/Aditya0o7/Grammify-Score-your-grammar",
    live: "https://grammify-score-your-grammar-1.onrender.com/",
    image: grammifyImage,
    category: "AI/ML",
    screenshots: [grammifyImage, grammifyImage1],
    status: "Live Production",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "AI/ML", "Developer Tools", "Web Development"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with passion, precision, and cutting-edge
            technology
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`
                transition-all duration-300 
                ${
                  filter === category
                    ? "bg-gradient-primary shadow-glow"
                    : "glass hover:bg-primary/10"
                }
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group flex"
              >
                <div className="glass rounded-2xl p-6 flex flex-col hover:shadow-float transition-all duration-500 border border-primary/10 hover:border-primary/30 w-full relative overflow-hidden group/card">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Project Icon & Status */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      {project.status && (
                        <Badge
                          variant="outline"
                          className="text-xs border-accent text-accent backdrop-blur-sm"
                        >
                          {project.status}
                        </Badge>
                      )}
                    </div>

                    {/* Project Info */}
                    <h3 className="text-xl font-bold mb-2 group-hover/card:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.stack.length - 5}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                      {/* View Details Button */}
                      <Button
                        variant="ghost"
                        onClick={() => openModal(project)}
                        className="w-full hover:bg-primary/10 transition-colors group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Explore Project
                          <motion.span className="group-hover:translate-x-1 transition-transform">
                            →
                          </motion.span>
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>

                      {/* GitHub & Live Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group/btn hover:bg-primary/10"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-primary hover:shadow-glow group/btn"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects;
