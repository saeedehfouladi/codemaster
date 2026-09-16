"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Google",
    avatar: "SC",
    avatarBg: "from-violet-500 to-purple-600",
    quote:
      "CodeMaster Academy transformed my career. I went from knowing basic HTML to landing a job at Google in just 8 months. The curriculum is incredible and the instructors are world-class.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Full-Stack Engineer at Stripe",
    avatar: "MJ",
    avatarBg: "from-cyan-500 to-blue-600",
    quote:
      "The hands-on projects and real-world focus set CodeMaster apart from every other platform I've tried. The community support is amazing — I never felt stuck.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer at Netflix",
    avatar: "ER",
    avatarBg: "from-pink-500 to-rose-600",
    quote:
      "I tried multiple online platforms before finding CodeMaster. The structured learning paths and AI-powered feedback made all the difference. Worth every penny!",
    rating: 5,
  },
  {
    name: "Alex Kim",
    role: "DevOps Lead at Amazon",
    avatar: "AK",
    avatarBg: "from-green-500 to-emerald-600",
    quote:
      "The DevOps and Cloud Engineering course was exactly what I needed to level up. Within 3 months, I got promoted to a lead role. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "React Developer at Shopify",
    avatar: "PP",
    avatarBg: "from-amber-500 to-orange-600",
    quote:
      "The React & Next.js Mastery course is by far the best React course I've ever taken. The projects are genuinely challenging and prepared me for real work.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Tech Lead at Microsoft",
    avatar: "DT",
    avatarBg: "from-blue-500 to-indigo-600",
    quote:
      "As someone who's been coding for years, I was impressed by the depth of the TypeScript Deep Dive course. It filled gaps I didn't even know I had.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-dark-900 to via-dark-800 to-dark-900"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <SectionHeading
          badge="Student Reviews"
          title="Loved by Developers"
          highlightedTitle="Worldwide"
          description="Join thousands of successful graduates who transformed their careers with CodeMaster Academy."
        />
      </div>
      <div className="grid sm;grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative p-7 rounded-2xl bg-surface border-surface-border hover:border-primary/30 transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover:shadow-dark-900/50 hover:translate-y-1"
          >
            {/*Quote icon*/}
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            {/*Stars*/}
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/*Quote text*/}
            <p className="text-sm text-text-secondary mb-6">&quot;{t.quote}</p>
            {/*Author*/}
            <div className="flex items-center gap-3 pt-5 border-t border-surface-border">
              <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.avatarBg} flex items-center justify-center text-text-white text-sm font-bold`}>{t.avatar}</div>
              <div>
                <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                <div className="text-xs text-text-muted">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
