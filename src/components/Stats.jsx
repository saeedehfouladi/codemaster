"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: 50000,
    suffix: "+",
    label: "Students Enrolled",
    description: "Active learners worldwide",
    color: "text-primary-light",
    bg: "bg-primary/10",
  },
  {
    icon: BookOpen,
    value: 200,
    suffix: "+",
    label: "Expert Courses",
    description: "Across 15+ technologies",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Completion Rate",
    description: "Industry-leading engagement",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: Globe,
    value: 120,
    suffix: "+",
    label: "Countries Reached",
    description: "Global learning community",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
  },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const Stats = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-dark-800 to-accent-cyan/5 "></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group text-center p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-dark-900/50">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`}/>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-text-primary mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-base font-semibold text-text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-text-muted">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
