"use client";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { div, li } from "framer-motion/client";

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners starting their coding journey",
    price: "$19",
    period: "/month",
    popular: false,
    features: [
      { name: "Access to 50+ courses", included: true },
      { name: "Basic coding exercises", included: true },
      { name: "Community forum access", included: true },
      { name: "Mobile app access", included: true },
      { name: "Course certificates", included: false },
      { name: "AI code reviews", included: false },
      { name: "1-on-1 mentoring", included: false },
      { name: "Career support", included: false },
    ],
    buttonVariant: "outline",
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    description: "Most popular plan for serious developers",
    price: "$49",
    period: "/month",
    popular: true,
    features: [
      { name: "Access to all 200+ courses", included: true },
      { name: "Advanced coding labs", included: true },
      { name: "Priority community support", included: true },
      { name: "Mobile app access", included: true },
      { name: "Verified certificates", included: true },
      { name: "AI-powered code reviews", included: true },
      { name: "1-on-1 mentoring (2x/month)", included: true },
      { name: "Career support", included: false },
    ],
    buttonVariant: "primary",
    buttonText: "Start Pro Plan",
  },
  {
    name: "Enterprise",
    description: "For teams and organizations seeking growth",
    price: "$99",
    period: "/month",
    popular: false,
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Team management dashboard", included: true },
      { name: "Custom learning paths", included: true },
      { name: "SSO & advanced security", included: true },
      { name: "Unlimited certificates", included: true },
      { name: "Unlimited AI code reviews", included: true },
      { name: "Unlimited 1-on-1 mentoring", included: true },
      { name: "Dedicated career coaching", included: true },
    ],
    buttonVariant: "outline",
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div>
        <SectionHeading
          badge="Pricing Plans"
          title="Simple, Transparent"
          highlightedTitle="Pricing"
          description="Choose the plan that fits your learning goals. All plans include a 7-day free trial. No credit card required."
          className="relative mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover: -translate-y-1 ${plan.popular ? "bg-linear-to-b from-primary/10 to-surface border-2 border-primary/40 shadow-xl shadow-primary/10 scale-[1.02] lg:scale-105" : "bg-surface border border-surface-border hover:border-primary/20  hover:shadow-xl hover:shadow-dark-900/50"}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-linear-to-r from-primary to-accent-blue text-white shadow-lg shadow-primary/30">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-text-muted text-lg">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3 ">
                    {feature.included ? (
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-green opacity-10 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-dark-600 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? "text-text-secondary" : "text-text-muted"}`}>{feature.name}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button variant={plan.buttonVariant}>{plan.buttonText}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
