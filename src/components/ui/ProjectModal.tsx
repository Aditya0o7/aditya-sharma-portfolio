import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Zap } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
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

  // Placeholder screenshots from unsplash
  const screenshots = project.screenshots ?? [];

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-24 z-50 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-2xl w-full max-w-4xl max-h-full overflow-hidden border border-primary/20 shadow-float">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                  {project.status && (
                    <Badge
                      variant="outline"
                      className="border-accent text-accent"
                    >
                      {project.status}
                    </Badge>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                {/* Description */}
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Screenshots */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    🖼️ Screenshots & Demo
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full object-contain max-h-[500px] rounded-lg hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    ✨ Key Highlights
                  </h3>
                  <div className="grid gap-3">
                    {project.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg glass border border-primary/10"
                      >
                        <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    🛠 Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    className="flex-1 group/btn hover:bg-primary/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Source Code
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-primary hover:shadow-glow group/btn"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Live Demo
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
