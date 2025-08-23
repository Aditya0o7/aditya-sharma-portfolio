import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Code2, Zap } from "lucide-react";
import { Button } from "../ui/button";
import heroBackground from "../../assets/hero-bg.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Engineer. Problem Solver. Creative Technologist.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement("a");
    link.href = "/adityasharmao371_res.pdf"; // Replace with actual resume path
    link.download = "Aditya_Sharma_Resume.pdf";
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-lg opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-accent-secondary/30 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Name with special effects */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6 select-none cursor-default"
            onDoubleClick={() => {
              // Easter egg - double click name for special effect
              const element = document.querySelector("h1");
              if (element) {
                element.classList.add("animate-pulse-glow");
                setTimeout(() => {
                  element.classList.remove("animate-pulse-glow");
                }, 1500);
              }
            }}
          >
            <span className="gradient-text">Aditya</span>{" "}
            <span className="text-foreground">Sharma</span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6 h-8"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin className="w-4 h-4" />
            <span>Ghaziabad, India</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            B.Tech CSE undergrad passionate about building intelligent and
            scalable software solutions. Adept in web dev, system design, and
            solving real-world problems through code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
              size="lg"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <Zap className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
