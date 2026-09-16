'use client'
import { motion } from "framer-motion";
import {
  Code2,
  Users,
  BookOpen,
  Trophy,
  Zap,
  Shield,
  Laptop,
  Rocket,
  MessageCircle,
} from "lucide-react";

import SectionHeading from "./ui/SectionHeading";
import { section } from "framer-motion/client";

const features = [
  {
    icon: Code2,
    title: "Interactive Coding Labs",
    description:
      "Practice coding in real-time with our browser-based IDE. Get instant feedback and learn by doing.",
    color: "text-primary-light",
    bg: "bg-primary/10",
    borderColor: "hover:border-primary/40",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from senior developers at top tech companies who bring real-world experience to every lesson.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
    borderColor: "hover:border-accent-cyan/40",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "Follow a carefully designed learning path from fundamentals to advanced topics with clear milestones.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    borderColor: "hover:border-accent-green/40",
  },
  {
    icon: Trophy,
    title: "Certificates & Badges",
    description:
      "Earn industry-recognized certificates and badges to showcase your skills to employers.",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
    borderColor: "hover:border-accent-orange/40",
  },
  {
    icon: Zap,
    title: "AI-Powered Learning",
    description:
      "Get personalized learning recommendations and AI-assisted code reviews for faster progress.",
    color: "text-accent-pink",
    bg: "bg-accent-pink/10",
    borderColor: "hover:border-accent-pink/40",
  },
  {
    icon: Shield,
    title: "Job Guarantee",
    description:
      "Complete our career track programs and land a job within 6 months, or get your money back.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
    borderColor: "hover:border-accent-blue/40",
  },
  {
    icon: Laptop,
    title: "Real-World Projects",
    description:
      "Build portfolio-ready projects that solve actual problems. Stand out to employers with practical skills.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/40",
  },
  {
    icon: Rocket,
    title: "Career Support",
    description:
      "Resume reviews, interview prep, and direct connections to hiring partners at top companies.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    borderColor: "hover:border-cyan-500/40",
  },
  {
    icon: MessageCircle,
    title: "Community Access",
    description:
      "Join a thriving community of 50K+ developers. Collaborate, network, and grow together.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/40",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* BackGround */}
      <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-500 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Everything You Need to"
          highlightedTitle="Succeed"
          description="Our platform combines cutting-edge technology with expert instruction to provide the most comprehensive learning experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div key={feature.title}
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative p-7 rounded-2xl bg-surface border border-surface-border ${feature.borderColor} transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover: shadow-dark-900/50 hover: -translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`}/>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
