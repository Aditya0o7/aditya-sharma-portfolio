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
import stackshifterImage from "../../assets/stackshifter.jpg";
import registrationImage from "../../assets/course.png";
import registrationImage1 from "../../assets/course2.png";
import grammifyImage from "../../assets/grammify.png";
import grammifyImage1 from "../../assets/Screenshot 2025-07-14 112956.png";
const projects = [
  {
    id: 1,
    title: "Vitality: Mental Health Assistant ChatBot",
    description: "GPT-3 based fine-tuned chatbot built by team of 4",
    stack: ["Python", "GPT-3", "TensorFlow", "React", "Node.js"],
    highlights: [
      "Fine-tuned on 10,000+ conversational samples",
      "30% faster response time",
      "20% more accurate replies",
      "Real-time emotional analysis",
    ],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Aditya0o7/MentalHealtAsistant-chatbot",
    live: "../../pages/NotFound.tsx",
    image: chatbotImage,
    category: "AI/ML",
    screenshots: [chatbotImage, chatbotImage1],
  },
  {
    id: 2,
    title: "StackShifter",
    description: "CLI tool to migrate CRA/Vite apps to Next.js",
    stack: ["JavaScript", "Node.js", "AST", "CLI", "Babel"],
    highlights: [
      "AST-based code transformation",
      "Handles routing, CSS modularization",
      "90% accuracy migration",
      "80% reduction in manual effort",
    ],
    icon: ArrowRight,
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/Aditya0o7/stackshifter",
    live: "../../pages/NotFound.tsx",
    image: stackshifterImage,
    category: "Developer Tools",
    status: "CLI coming soon via NPM",
    screenshots: [stackshifterImage],
  },
  {
    id: 3,
    title: "Course Registration System",
    description: "Multi-step form with admin panel and real-time sync",
    stack: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    highlights: [
      "Responsive multi-step form",
      "Smooth Framer Motion transitions",
      "Real-time Firebase DB sync",
      "Supports 100+ active registrations",
    ],
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/Aditya0o7/Submission-form-multistep-firebase",
    live: "https://myabcin.netlify.app/",
    image: registrationImage,
    category: "Web Development",
    screenshots: [registrationImage, registrationImage1],
  },
  {
    id: 4,
    title: "Grammify: Score Your Grammar",
    description: "AI-powered grammar scoring tool",
    stack: ["python", "Flask", "API", "React"],
    highlights: [
      "Audio-to-Text Transcription: Converts uploaded audio files into accurate text using AssemblyAI.",
      "AI-Powered Grammar Analysis: Evaluates the transcript with LanguageTool and scores it out of 100.",
      "Error Highlighting: Pinpoints grammar mistakes with real-time suggestions for correction.",
      "Modern Tech Stack: Built with React + Vite for blazing-fast performance and developer efficiency.",
      "Full-Stack Integration: Seamless connection between frontend and Flask backend for a cohesive user experience.",
    ],
    icon: Brain,
    gradient: "from-yellow-500 to-orange-500",
    github: "https://github.com/Aditya0o7/Grammify-Score-your-grammar",
    live: "https://grammify-score-your-grammar-1.onrender.com/",
    image: grammifyImage,
    category: "AI/ML",
    screenshots: [grammifyImage, grammifyImage1],
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
                <div className="glass rounded-2xl p-6 flex flex-col hover:shadow-float transition-all duration-500 border border-primary/10 hover:border-primary/30 w-full">
                  {/* Project Icon & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    {project.status && (
                      <Badge
                        variant="outline"
                        className="text-xs border-accent text-accent"
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
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
                      className="w-full hover:bg-primary/10 transition-colors group"
                    >
                      View Details
                      <motion.span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </motion.span>
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
