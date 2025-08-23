import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  FolderOpen, 
  Briefcase, 
  Code, 
  Mail, 
  Menu, 
  X,
  ChevronRight 
} from "lucide-react";
import { Button } from "./button";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home, href: "#hero" },
  { id: "projects", label: "Projects", icon: FolderOpen, href: "#projects" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "skills", label: "Skills", icon: Code, href: "#skills" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

interface NavigationSidebarProps {
  onToggle?: (isOpen: boolean) => void;
}

const NavigationSidebar = ({ onToggle }: NavigationSidebarProps) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open
  const [activeSection, setActiveSection] = useState("hero");

  const toggleSidebar = useCallback(() => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  }, [isOpen, onToggle]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle sidebar with Ctrl+/ (or Cmd+/ on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleSidebar();
      }
      // Close sidebar with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        onToggle?.(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, onToggle, toggleSidebar]);

  // Notify parent component on initial mount
  useEffect(() => {
    onToggle?.(true); // Always notify that sidebar starts open
  }, [onToggle]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    // Don't close sidebar - keep it open
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed top-6 left-20 z-50"
      >
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="glass rounded-full p-3 hover:shadow-float transition-all duration-300 border border-primary/20 hover:border-primary/40"
        >
          <motion.div
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.div>
        </Button>
      </motion.div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - only on very small mobile screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-72 sm:w-80 md:w-80 lg:w-80 glass border-r border-primary/20 z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold gradient-text">
                    Navigation
                  </h3>
                  <Button
                    onClick={toggleSidebar}
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Quick access to all sections
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Press Ctrl+/ to toggle • ESC to close
                </p>
              </div>

              {/* Navigation Items */}
              <div className="p-3 sm:p-4">
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    const IconComponent = item.icon;

                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all duration-300 text-left group
                          ${isActive 
                            ? "bg-gradient-primary text-white shadow-lg" 
                            : "hover:bg-muted/50 hover:scale-105"
                          }
                        `}
                      >
                        <div className={`
                          p-1.5 sm:p-2 rounded-lg transition-all duration-300
                          ${isActive 
                            ? "bg-white/20" 
                            : "bg-primary/10 group-hover:bg-primary/20"
                          }
                        `}>
                          <IconComponent className={`
                            w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300
                            ${isActive ? "text-white" : "text-primary"}
                          `} />
                        </div>
                        
                        <span className={`
                          text-sm sm:text-base font-medium transition-colors duration-300
                          ${isActive ? "text-white" : "text-foreground"}
                        `}>
                          {item.label}
                        </span>

                        <motion.div
                          animate={{ 
                            x: isActive ? 0 : -10,
                            opacity: isActive ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                          className="ml-auto"
                        >
                          <ChevronRight className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Quick Actions */}
                <div className="mt-8 space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="w-full p-3 glass rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
                  >
                    <span className="text-sm font-medium text-muted-foreground">
                      Back to Top ↑
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSidebar;
