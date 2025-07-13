import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Brain, ArrowRight, Zap, Users, Database } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import chatbotImage from "../../assets/project-chatbot.jpg";
import stackshifterImage from "../../assets/project-stackshifter.jpg";
import registrationImage from "../../assets/project-registration.jpg";

const projects = [
  {
    id: 1,
    title: "Mental Health Assistant ChatBot",
    description: "GPT-3 based fine-tuned chatbot built by team of 4",
    stack: ["Python", "GPT-3", "TensorFlow", "React", "Node.js"],
    highlights: [
      "Fine-tuned on 10,000+ conversational samples",
      "30% faster response time",
      "20% more accurate replies",
      "Real-time emotional analysis"
    ],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Aditya0o7",
    live: "#",
    image: chatbotImage,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "StackShifter",
    description: "CLI tool to migrate CRA/Vite apps to Next.js",
    stack: ["TypeScript", "Node.js", "AST", "CLI", "Babel"],
    highlights: [
      "AST-based code transformation",
      "Handles routing, CSS modularization",
      "90% accuracy migration",
      "80% reduction in manual effort"
    ],
    icon: ArrowRight,
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/Aditya0o7",
    live: "#",
    image: stackshifterImage,
    category: "Developer Tools",
    status: "CLI coming soon via NPM"
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
      "Supports 100+ active registrations"
    ],
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/Aditya0o7",
    live: "#",
    image: registrationImage,
    category: "Web Development"
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI/ML", "Developer Tools", "Web Development"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            Innovative solutions built with passion, precision, and cutting-edge technology
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
                ${filter === category 
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full hover:shadow-float transition-all duration-500 border border-primary/10 hover:border-primary/30">
                  {/* Project Icon & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    {project.status && (
                      <Badge variant="outline" className="text-xs border-accent text-accent">
                        {project.status}
                      </Badge>
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.stack.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.stack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    onClick={() => 
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                    className="w-full mb-4 hover:bg-primary/10 transition-colors"
                  >
                    {expandedProject === project.id ? "Show Less" : "View Details"}
                    <motion.span
                      animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      ↓
                    </motion.span>
                  </Button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border pt-4 mb-4"
                      >
                        {/* Project Preview Image */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="mb-6 rounded-lg overflow-hidden border border-border"
                        >
                          <img 
                            src={project.image} 
                            alt={`${project.title} preview`}
                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>

                        <h4 className="font-semibold mb-3 text-sm text-primary">
                          ✨ Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <Zap className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>

                        {/* All Tech Stack */}
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2 text-sm text-primary">
                            🛠 Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;