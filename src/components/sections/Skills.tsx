import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "C++", "Python", "TypeScript", "SQL"],
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Web Development",
    icon: Code,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
    color: "from-green-500 to-cyan-500",
  },
  {
    title: "Databases & Backend",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "Firebase",
      "Cloud Firestore",
      "SQLite",
      "RESTful APIs",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "Google Cloud",
      "Postman",
      "VS Code",
      "Figma",
      "Docker",
      "Webpack",
      "Babel",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI/ML & Data",
    icon: Cloud,
    skills: [
      "TensorFlow",
      "GPT-3",
      "Natural Language Processing",
      "AssemblyAI",
      "LanguageTool API",
      "Machine Learning",
    ],
    color: "from-cyan-500 to-blue-500",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit forged through hands-on experience and continuous
            learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6 hover:shadow-float transition-all duration-500 border border-primary/10 hover:border-primary/30"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Animated Progress Indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: categoryIndex * 0.1 + 0.5,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className={`mt-6 h-1 bg-gradient-to-r ${category.color} rounded-full origin-left`}
              />
            </motion.div>
          ))}
        </div>

        {/* Professional skill showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Core <span className="gradient-text">Technologies</span>
            </h3>
            <p className="text-muted-foreground">
              Technologies I work with daily to build exceptional software
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "C++",
              "React",
              "Node.js",
              "Python",
              "TypeScript",
              "MongoDB",
              "Git",
              "JavaScript",
              "Express.js",
              "Firebase",
              "TensorFlow",
              "GPT-3",
              "Tailwind CSS",
              "Next.js",
              "Vite",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="glass px-6 py-3 rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 cursor-pointer group"
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
