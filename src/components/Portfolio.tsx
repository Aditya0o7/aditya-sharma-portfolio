import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import ThemeToggle from "./ui/ThemeToggle";
import CursorTrail from "./ui/CursorTrail";
import ParticleBackground from "./ui/ParticleBackground";
import NavigationSidebar from "./ui/NavigationSidebar";

const Portfolio = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [easterEggSequence, setEasterEggSequence] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = useCallback((isOpen: boolean) => {
    setSidebarOpen(isOpen);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.className = initialTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  // Easter egg: typing "007" triggers special effect
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = easterEggSequence + e.key;
      setEasterEggSequence(newSequence.slice(-3)); // Keep only last 3 characters
      
      if (newSequence.slice(-3) === "007") {
        // Trigger special effect
        document.body.style.animation = "pulse-rainbow 2s ease-in-out";
        toast({
          title: "🕵️ Agent 007 Detected!",
          description: "Welcome, secret agent. Your mission: explore this portfolio.",
        });
        
        // Remove animation after completion
        setTimeout(() => {
          document.body.style.animation = "";
        }, 2000);
        
        setEasterEggSequence("");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [easterEggSequence]);

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "KeyB", "KeyA"
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Easter egg activated!
          document.body.style.filter = "hue-rotate(180deg)";
          setTimeout(() => {
            document.body.style.filter = "";
          }, 3000);
          konamiIndex = 0;
          
          toast({
            title: "🎮 Konami Code Activated!",
            description: "The classic cheat code still works! Respect the legends.",
          });
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <CursorTrail />
      
      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </motion.div>

      {/* Navigation Sidebar */}
      <NavigationSidebar onToggle={handleSidebarToggle} />

      {/* Main Content */}
      <main className={`relative z-10 transition-all duration-300 ${sidebarOpen ? 'sm:ml-72 md:ml-80 lg:ml-80' : ''}`}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Floating Connect Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="fixed bottom-6 left-6 z-50 bg-gradient-primary rounded-full p-4 shadow-glow hover:shadow-float transition-all duration-300 group"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white font-medium"
        >
          💬
        </motion.div>
      </motion.button>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 glass rounded-full p-3 glow hover:shadow-float transition-all duration-300"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Portfolio;