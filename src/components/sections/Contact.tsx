import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, Send, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const email = "adityasharmao371@gmail.com";
  const github = "https://github.com/Aditya0o7";
  const linkedin = "https://linkedin.com/in/aditya-sharma-4b94052a2";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "📧 Email Copied!",
        description: "Email address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };


  const socialLinks = [
    {
      name: "LinkedIn", 
      url: linkedin,
      icon: Linkedin,
      color: "hover:text-blue-400",
      description: "Let's connect professionally"
    },
    {
      name: "GitHub",
      url: github,
      icon: Github,
      color: "hover:text-gray-400",
      description: "Check out my code"
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just say hi? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="glass rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                >
                  {email}
                </a>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="shrink-0 hover:bg-primary/10 group"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  )}
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-float transition-all duration-300 block group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass rounded-xl p-6 border border-accent/20 bg-gradient-to-r from-accent/10 to-accent-secondary/10"
            >
              <h4 className="font-bold mb-2 text-accent">
                🚀 Ready to build something amazing?
              </h4>
              <p className="text-sm text-muted-foreground">
                Whether it's a complex web application, an AI-powered solution, 
                or just a creative idea that needs technical expertise -
                let's make it happen together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;