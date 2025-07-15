import { motion } from "framer-motion";
import { Building, Trophy, Target, Users, Calendar, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExperienceItem = {
  type: "experience";
  title: string;
  organization: string;
  date: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  color: string;
};

type AchievementItem = {
  type: "achievement";
  title: string;
  description: string;
  metric: string;
  icon: LucideIcon;
  color: string;
};

const experiences: ExperienceItem[] = [
  {
    type: "experience",
    title: "Goldman Sachs Virtual Internship",
    organization: "Goldman Sachs",
    date: "Sep 2024",
    description:
      "Simulated investment banking project with hands-on data modeling, scenario analysis, and risk assessment",
    highlights: [
      "Data modeling and scenario analysis",
      "Risk assessment methodologies",
      "Investment banking workflows",
      "Decision-making and interpretation",
    ],
    icon: Building,
    color: "from-blue-500 to-indigo-600",
  },
  {
    type: "experience",
    title: "Smart India Hackathon - Internal Round",
    organization: "SIH 2024",
    date: "Aug 2024",
    description:
      "Ranked 12th out of 100+ teams, built scalable prototype in 36 hours",
    highlights: [
      "Ranked 12th out of 100+ teams",
      "36-hour intensive development",
      "Scalable prototype development",
      "Team collaboration and rapid prototyping",
    ],
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
];

const achievements: AchievementItem[] = [
  {
    type: "achievement",
    title: "LeetCode Rating Achievement",
    description: "1950+ rating - Top 3.1% globally",
    metric: "500+ DSA problems solved",
    icon: Target,
    color: "from-green-500 to-emerald-500",
  },
  {
    type: "achievement",
    title: "Competitive Programming Excellence",
    description: "Top 10 in Code-Asitis intra-college event",
    metric: "150+ participants",
    icon: Award,
    color: "from-orange-500 to-red-500",
  },
];

const Experience = () => {
  const allItems = [...experiences, ...achievements];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Journey & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that shaped my growth as a developer and problem solver
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-12">
            {allItems.map((item, index) =>
              item.type === "experience" ? (
                /* EXPERIENCE ITEM */
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative flex gap-8 group"
                >
                  {/* Icon + connector */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>
                    <div className="absolute top-8 left-16 w-8 h-0.5 bg-border" />
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 glass rounded-2xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-float transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {item.organization}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.highlights.map((hl, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{hl}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                /* ACHIEVEMENT ITEM — now SIDE-BY-SIDE on mobile too */
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative flex gap-8 group"
                >
                  {/* Icon + connector */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>
                    <div className="absolute top-8 left-16 w-8 h-0.5 bg-border" />
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 glass rounded-2xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-float transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-sm font-medium text-accent">
                          {item.metric}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-0 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Problems Solved", value: "500+", icon: Target },
            { label: "LeetCode Rating", value: "1950+", icon: Trophy },
            { label: "Team Projects", value: "10+", icon: Users },
            { label: "Global Rank", value: "Top 3.1%", icon: Award },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
