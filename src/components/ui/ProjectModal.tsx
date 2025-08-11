import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Zap,
  Target,
  Code2,
  Lightbulb,
  TrendingUp,
  FileText,
  Settings,
  ChevronRight,
  Play,
  Star,
} from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  stack: string[];
  highlights: string[];
  technicalFeatures: string[];
  impact: string;
  gradient: string;
  github: string;
  live: string;
  icon: React.ElementType;
  image: string;
  category: string;
  status?: string;
  screenshots?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  // Placeholder screenshots from project
  const screenshots = project.screenshots ?? [];

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "features", label: "Key Features", icon: Zap },
    { id: "technical", label: "Technical Details", icon: Code2 },
    { id: "gallery", label: "Gallery", icon: Play },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-12 z-50 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-full overflow-hidden border border-primary/30 shadow-2xl backdrop-blur-xl">
              {/* Enhanced Header */}
              <div className="relative overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10`}
                />

                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 lg:p-8 border-b border-border/50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${project.gradient} shadow-2xl`}
                    >
                      <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight"
                      >
                        {project.title}
                      </motion.h2>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                      >
                        <Badge variant="secondary" className="text-xs sm:text-sm w-fit">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            Featured Project
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="hover:bg-destructive/10 hover:text-destructive rounded-full p-2 sm:p-3 mt-2 sm:mt-0 self-end sm:self-auto"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-1 p-2 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0
                        ${
                          activeTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:block sm:block">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-250px)] md:max-h-[calc(100vh-300px)]">
                <AnimatePresence mode="wait">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6 md:space-y-8"
                    >
                      {/* Project Description */}
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                          Project Overview
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                          {project.detailedDescription}
                        </p>
                      </div>

                      {/* Impact Section */}
                      <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-primary/20">
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                          Project Impact
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {project.impact}
                        </p>
                      </div>

                      {/* Technology Stack */}
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2">
                          <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                          Technology Stack
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                          {project.stack.map((tech, index) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Badge
                                variant="outline"
                                className="w-full justify-center py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Features Tab */}
                  {activeTab === "features" && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                        Key Features & Highlights
                      </h3>
                      <div className="grid gap-3 sm:gap-4">
                        {project.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl glass border border-primary/10 hover:border-primary/20 transition-all duration-300 group"
                          >
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            </div>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Technical Details Tab */}
                  {activeTab === "technical" && (
                    <motion.div
                      key="technical"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                        Technical Implementation
                      </h3>
                      <div className="grid gap-3 sm:gap-4">
                        {project.technicalFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/20 border border-muted hover:bg-muted/30 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 sm:mt-3" />
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Gallery Tab */}
                  {activeTab === "gallery" && (
                    <motion.div
                      key="gallery"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                        Project Gallery
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {screenshots.map((screenshot, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-lg sm:rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 group"
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full object-contain max-h-[250px] sm:max-h-[300px] md:max-h-[400px] rounded-lg sm:rounded-2xl group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="border-t border-border/50 p-3 sm:p-4 md:p-6 bg-background/50 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 group/btn hover:bg-muted/50 border-primary/20 hover:border-primary/40 h-10 sm:h-12 text-xs sm:text-sm"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">View Source Code</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 h-10 sm:h-12 group/btn text-xs sm:text-sm"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <span className="font-medium">Live Demo</span>
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:scale-110 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
