"use client";

import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
  StarIcon,
  CheckCircle2,
  Users2,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Document",
    description: "AI is the future. Do not miss out on your documents.",
    icon: GlobeIcon,
  },
  {
    name: "Analyze Documents",
    description:
      "Upload your documents, and our chatbot will analyze them for insights.",
    icon: BrainCogIcon,
  },
  {
    name: "Generate Insights",
    description:
      "Get suggestions and recommendations tailored to your business needs.",
    icon: EyeIcon,
  },
  {
    name: "Access Anywhere",
    description:
      "Access your insights and documents from anywhere in the world.",
    icon: MonitorSmartphoneIcon,
  },
  {
    name: "Secure Storage",
    description: "Your documents are stored securely with advanced encryption.",
    icon: ServerCogIcon,
  },
  {
    name: "Fast Processing",
    description:
      "Enjoy lightning-fast document processing with AI-powered tools.",
    icon: ZapIcon,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content:
      "Discover.AI has transformed how we handle our documentation. The insights generated are invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chang",
    role: "Data Analyst",
    content:
      "The speed and accuracy of the document analysis are incredible. It's saved us countless hours.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Product Manager",
    content:
      "A game-changer for our team's document management and analysis workflow.",
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    features: ["500 pages/month", "Basic Analytics", "24/7 Support", "1 User"],
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    features: [
      "2000 pages/month",
      "Advanced Analytics",
      "Priority Support",
      "5 Users",
      "Custom Integration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited pages",
      "Full Analytics Suite",
      "Dedicated Support",
      "Unlimited Users",
      "API Access",
      "Custom Training",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-bl from-purple-900 via-purple-800 to-black z-0" />

      <main className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6 py-24 px-4 text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-200 mb-4">
            Discover. AI
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-md sm:max-w-3xl">
            Transform your documents into actionable insights—upload, analyze,
            and unlock smarter solutions for your business with our AI-powered
            chatbot.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button
                variant="default"
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 shadow-lg shadow-purple-500/30"
              >
                Get Started
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-purple-400 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-800/30"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full py-12 mb-12 bg-purple-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">1M+</div>
              <div className="text-purple-200">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">
                50k+
              </div>
              <div className="text-purple-200">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">
                99.9%
              </div>
              <div className="text-purple-200">Uptime</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 max-w-7xl px-4 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center bg-purple-900/40 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-xl transition-shadow border-t-4 border-purple-400"
            >
              <feature.icon className="h-12 w-12 sm:h-14 sm:w-14 text-purple-400 mb-4 animate-pulse" />
              <h2 className="text-lg sm:text-xl font-bold text-purple-200 mb-2">
                {feature.name}
              </h2>
              <p className="text-sm sm:text-base text-purple-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full py-24 bg-purple-900/30 backdrop-blur-sm mb-24">
          <h2 className="text-3xl font-bold text-center text-purple-200 mb-12">
            What Our Users Say
          </h2>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-900/40 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-300 fill-yellow-300"
                    />
                  ))}
                </div>
                <p className="text-purple-200 mb-4">{testimonial.content}</p>
                <div className="text-purple-300 font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-purple-400 text-sm">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mb-24">
          <h2 className="text-3xl font-bold text-center text-purple-200 mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between h-full"
              >
                {/* Top section */}
                <div>
                  <h3 className="text-xl font-bold text-purple-200 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-purple-300 mb-4">
                    {plan.price}
                    <span className="text-sm text-purple-400">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-purple-200">
                        <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="default"
                  className="w-full bg-purple-500 text-white hover:bg-purple-600"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full py-24 bg-purple-900/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-purple-200 mb-6">
              Ready to Transform Your Document Workflow?
            </h2>
            <p className="text-purple-300 mb-8">
              Join thousands of satisfied users who have revolutionized their
              document management with Discover.AI
            </p>
            <Button
              variant="default"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-600 shadow-lg shadow-purple-500/30"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
