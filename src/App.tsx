/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Terminal, 
  Globe2, 
  Layers, 
  Cpu, 
  Zap, 
  ChevronRight, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Menu, 
  X,
  Smartphone,
  Database,
  ShieldCheck,
  Rocket,
  Award,
  Sun,
  Moon,
  Linkedin,
  MessageSquare,
  Users,
  Briefcase,
  GraduationCap,
  Clock,
  TrendingUp,
  Gamepad2,
  PenTool,
  Box,
  UserPlus
} from "lucide-react";

// --- Components ---

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who It's For", href: "#who-it-is-for" },
    { name: "Learning Path", href: "#approach" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="https://imgur.com/1xFHxvk.png" 
            alt="Textocode Academy Logo" 
            className="w-16 h-16 object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-all border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all shadow-sm"
            >
              Join Textocode Academy
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Button + Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-gray-900 dark:text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-900 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-purple-600 text-white w-full py-4 rounded-xl text-lg font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Textocode Academy
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-50" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-30" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-100 dark:border-purple-800">
            Learn with AI-powered "Vibe Coding"
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Learn AI-Powered Coding — Build Real Applications from <span className="text-purple-600 dark:text-purple-400">Scratch to Deployment</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Learn using free AI tools, master prompt engineering, and build real-world apps. We teach you how to think, build, and <strong>deploy to your own custom domain on Hostinger.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact" className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/30 flex items-center gap-2 group">
              Join Textocode Academy <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#curriculum" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
              Get Started
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-black bg-gray-200 dark:bg-zinc-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="text-gray-900 dark:text-white font-bold">1,200+</span> Students across multiple countries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  const regions = ["UK", "Canada", "USA", "Germany", "Africa", "Middle East"];
  
  return (
    <section id="global" className="py-20 bg-gray-50/50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">We train globally competitive developers</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our graduates are building the future across the globe. From major tech hubs to emerging digital markets, we bridge the gap between education and industry.
            </p>
          </motion.div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {regions.map((region, idx) => (
              <motion.div 
                key={region}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(147, 51, 234, 0.05)" }}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm flex items-center gap-3 hover:border-purple-200 dark:hover:border-purple-900 transition-all group"
              >
                <div className="group-hover:rotate-12 transition-transform">
                  <Globe2 className="text-gray-400 dark:text-gray-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-200 italic">{region}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LearningApproach = () => {
  const steps = [
    { 
      title: "System Thinking & Design", 
      desc: "We start with system thinking and design, breaking down complex ideas into architectural blueprints.",
      icon: <Box className="w-6 h-6" />
    },
    { 
      title: "UML & Use Case Diagrams", 
      desc: "Visualize systems using Unified Modeling Language (UML) to define logic and interactions before using AI tools to code.",
      icon: <PenTool className="w-6 h-6" />
    },
    { 
      title: "AI-assisted coding", 
      desc: "Leverage free AI tools to accelerate development while maintaining full control over the system design.",
      icon: <Cpu className="w-6 h-6" />
    },
    { 
      title: "Build real features", 
      desc: "Implement authentication, database models, and scalable APIs from day one.",
      icon: <Database className="w-6 h-6" />
    },
    { 
      title: "Version control with GitHub", 
      desc: "Establish professional habits using industry-standard collaboration workflows.",
      icon: <Github className="w-6 h-6" />
    },
    { 
      title: "Go Live on Your Own Domain", 
      desc: "Take your project live on your own custom domain using Hostinger, Vercel, or Netlify.",
      icon: <Rocket className="w-6 h-6" />
    },
  ];

  return (
    <section id="approach" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">How We Learn</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A structured flow designed to take you from a curious beginner to a professional full-stack developer.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-purple-500/5 transition-all cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoThisIsFor = () => {
  const categories = [
    {
      title: "Beginners with no coding experience",
      desc: "You don’t need any background in programming. We start from the basics and guide you step-by-step until you can build real applications using AI.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Office workers who want to automate tasks",
      desc: "If you’re tired of repetitive work like reports, emails, data entry, or spreadsheets, this program will show you how to use AI tools to save hours every day.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Students and recent graduates",
      desc: "Learn in-demand skills that can help you stand out, build projects, and even start earning online.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Entrepreneurs and business owners",
      desc: "Build your own apps, automate your business processes, and reduce costs using powerful AI tools.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Freelancers and side hustlers",
      desc: "Add AI and full-stack development to your skillset so you can offer high-paying services and attract better clients.",
      icon: <UserPlus className="w-6 h-6" />,
    },
    {
      title: "Tech enthusiasts who want to level up fast",
      desc: "If you’ve tried learning coding before but got stuck, this hands-on approach using AI will help you move faster and actually build real-world projects.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Young learners (Ages 10–16)",
      desc: "Parents can enroll their children to start learning coding, AI, and digital skills early in a fun, structured, and engaging way. This helps them build confidence, creativity, and problem-solving skills.",
      icon: <Gamepad2 className="w-6 h-6" />,
    },
  ];

  return (
    <section id="who-it-is-for" className="py-24 bg-gray-50 dark:bg-zinc-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Who This Is For</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            This AI Coding Bootcamp is designed for anyone who wants to build real tech skills without wasting years learning theory.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-[2.5rem] bg-white dark:bg-black border border-gray-100 dark:border-zinc-800 hover:border-purple-200 dark:hover:border-purple-900 transition-all group shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{cat.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-sm md:text-base">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-purple-950 text-white overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-purple-800/10 dark:bg-purple-900/5 skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-4 block underline-offset-8 underline decoration-purple-500/30">
            Key Differentiator
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Build Your Own Portfolio — <span className="text-purple-400 font-serif italic font-normal">Not Just Skills</span>
          </h2>
          <ul className="space-y-6 mb-10">
            {[
              "Students work on real-world projects from week two",
              "Each student builds a unique personal portfolio",
              "All applications are deployed live to production",
              "Finish with artifacts you can showcase to employers"
            ].map((item, idx) => (
              <motion.li 
                key={item} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-lg text-purple-50/80">{item}</p>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="p-8 bg-purple-900/40 dark:bg-black/40 rounded-3xl border border-purple-800/50 dark:border-zinc-800 backdrop-blur-sm"
          >
            <p className="text-2xl font-bold leading-relaxed">
              "Graduate with live, deployed applications — <span className="text-purple-400">not just certificates</span>."
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950 p-2 md:p-4">
            <div className="bg-gray-50 dark:bg-black rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 aspect-[16/10] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex justify-between w-full items-center">
                  <p className="font-bold text-white">Project Showcase: Food Delivery Dashboard</p>
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Project Example" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-purple-500 text-white p-6 rounded-3xl shadow-xl hidden md:block -rotate-3 border-4 border-purple-950"
          >
            <p className="font-bold text-xl">100% Deployed</p>
            <p className="text-purple-100 text-sm">Every project goes live</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatYouWillLearn = () => {
  const topics = [
    { title: "System Design & UML", desc: "Master system thinking and visualize logic with UML and Use Case diagrams.", icon: <Box /> },
    { title: "Prompt Engineering", desc: "Advanced techniques for high-quality code generation.", icon: <Zap /> },
    { title: "AI Workflows", desc: "Integrate AI tools into your daily professional coding cycle.", icon: <Cpu /> },
    { title: "Full-Stack Dev", desc: "Build both frontend and backend for scalable systems.", icon: <Layers /> },
    { title: "Auth Systems", desc: "Implement secure login and user management patterns.", icon: <ShieldCheck /> },
    { title: "Databases", desc: "Design and integrate modern NoSQL and SQL databases.", icon: <Database /> },
    { title: "Cloud & Custom Domains", desc: "Deploy your apps live to your own custom domain using Hostinger and modern cloud platforms.", icon: <Globe2 /> },
  ];

  return (
    <section id="curriculum" className="py-24 bg-gray-50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">What You Will Learn</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our curriculum is constantly updated to reflect the rapid pace of the AI era.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => (
            <motion.div 
              key={topic.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-zinc-800 flex gap-6 items-start hover:shadow-2xl hover:shadow-purple-500/5 transition-all group"
            >
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                {topic.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{topic.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 italic">{topic.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstructorSection = () => {
  return (
    <section id="instructor" className="py-24 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white dark:border-zinc-800 shadow-2xl"
            >
              <img 
                src="https://imgur.com/nCbQeFD.png" 
                alt="Subair Nurudeen Adewale" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              animate={{ 
                x: [0, 15, 0],
                y: [0, -15, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full -z-10" 
            />
            <motion.div 
              animate={{ 
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 w-64 h-64 bg-purple-50 dark:bg-purple-900/10 rounded-full -z-10 opacity-50" 
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-purple-600 dark:text-purple-400 w-6 h-6" />
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Lead Instructor & Founder</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Meet <span className="text-purple-600 dark:text-purple-400">Subair Nurudeen Adewale</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              <p>
                Subair Nurudeen Adewale is a <strong>Cloud/DevOps Engineer and AI Specialist</strong> with a strong background in building scalable systems, training developers, and contributing to the tech ecosystem through media and education.
              </p>
              <p>
                He holds a <strong>Diploma in Computer Science from Yaba College of Technology</strong> and is currently pursuing his <strong>BSc in Computer Science at the University of the People</strong> in Pasadena, California.
              </p>
              <p>
                He is a <strong>Microsoft Certified Azure DevOps Expert</strong> and a <strong>Micro1 Certified AI Evaluation Specialist</strong>, with hands-on experience in cloud infrastructure, automation, and modern development workflows.
              </p>
              <p>
                Subair is the Founder of <strong>Quotients Africa</strong> and <strong>Japamoves AI</strong>, a media and AI initiatives focused on technology, innovation, and digital transformation across Africa. Through these platforms, he has written and published numerous articles on cloud computing and emerging technologies, including contributions to BusinessDay Nigeria.
              </p>
              <p>
                He is also the Co-founder of <strong>Codesphere Hub</strong>, a growing community of tech professionals, and has trained a wide range of students over the years, starting from his early work with Codesphere Academy.
              </p>
              <p>
                Subair has been featured on major media platforms, including <strong>Silverbird Television (STV)</strong>, where he discussed the impact of AI on jobs, and <strong>LN247</strong>, where he spoke about how young Nigerians are building startups and shaping the future of technology.
              </p>
            </div>
            <div className="p-8 bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-800/30 italic text-gray-700 dark:text-gray-300 relative">
              <div className="absolute top-4 left-4 text-4xl text-purple-200 dark:text-purple-800/50 font-serif overflow-hidden h-8 w-8 leading-none">"</div>
              <p className="relative z-10 pl-4">
                "Through Textocode Academy, my mission is clear: To train the next generation of developers to think, build, and deploy real-world applications using AI and modern tools."
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://www.linkedin.com/in/subair-nurudeen-adewale-1b46aa28b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#006097] transition-all shadow-lg hover:shadow-[#0077b5]/20"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // To activate this form: 
      // 1. Go to https://formspree.io/
      // 2. Create a form and replace the ID below ('mlgzkrpd') with your new form ID
      const response = await fetch("https://formspree.io/f/mlgzkrpd", { 
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Let's Build Something <span className="text-purple-600 dark:text-purple-400">Great Together</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
              Have questions about our programs or want to discuss a potential partnership? Our team is here to help you navigate your journey into AI-powered development.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Direct Contact</h4>
                  <p className="text-gray-600 dark:text-gray-400">Reach out via email or WhatsApp.</p>
                  <a href="mailto:nuddywale@gmail.com" className="text-purple-600 dark:text-purple-400 font-bold hover:underline block">nuddywale@gmail.com</a>
                  <div className="mt-2 space-y-1">
                    <a href="https://wa.me/15878375845" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-2 italic">
                      <MessageSquare className="w-4 h-4" /> +1 (587) 8375-845
                    </a>
                    <a href="https://wa.me/2347033968648" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-2 italic">
                      <MessageSquare className="w-4 h-4" /> +234 703 396 8648
                    </a>
                    <a href="https://www.linkedin.com/company/textocode-academy/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-2 italic">
                      <Linkedin className="w-4 h-4" /> Textocode Academy
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Global Presence</h4>
                  <p className="text-gray-600 dark:text-gray-400">Active students in UK, Canada, USA, and Africa.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Free Consultation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Book a slot to discuss your career path in AI.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-zinc-800 shadow-xl shadow-gray-100 dark:shadow-none">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Thank you for reaching out. Subair or a member of the Textocode team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-purple-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">WhatsApp Number</label>
                  <input 
                    required
                    name="whatsapp"
                    type="tel" 
                    placeholder="+234..." 
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Topic</label>
                  <select 
                    name="topic"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all h-[58px]"
                  >
                    <option>General Inquiry</option>
                    <option>Enrollment Questions</option>
                    <option>Corporate Training</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>
              </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all resize-none"
                  ></textarea>
                </div>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email directly.</p>
                )}

                <button 
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full bg-purple-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 dark:shadow-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === "loading" ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const UniqueValue = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-purple-50 dark:bg-zinc-900 rounded-[3rem] p-12 md:p-20 relative border border-purple-100 dark:border-zinc-800 overflow-hidden"
        >
          <motion.div 
            animate={{ 
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 p-8"
          >
            <Code2 className="w-40 h-40 text-purple-200/50 dark:text-white/5" />
          </motion.div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
              We Don’t Teach Tutorials — <br />
              <span className="text-purple-600 dark:text-purple-400 underline underline-offset-4 decoration-purple-200 dark:decoration-purple-900">We Build Real Products</span>
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
              Students don’t just follow lessons — they design, build, and launch real applications. We simulate a true product development environment.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { val: "0%", label: "Fake Projects" },
                { val: "100%", label: "Real Deployment" },
                { val: "24/7", label: "AI Support" }
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <p className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-1">{stat.val}</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const outcomes = [
    { title: "Live Portfolio", desc: "A collection of 3-5 high-quality apps deployed to your own custom domain on Hostinger." },
    { title: "Technical Skills", desc: "Deep expertise in React, Node.js, and AI automation tools." },
    { title: "Job Ready", desc: "Confidence to interview for global roles with a solid proof of work." },
    { title: "Freelance Mastery", desc: "Skills to ship products independently for clients worldwide." },
  ];

  return (
    <section className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Student Outcomes</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, backgroundColor: "rgb(147, 51, 234)", color: "white" }}
                className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 transition-all shadow-sm"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-purple-600 dark:bg-purple-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-200 dark:shadow-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10">
            Ready to Build Your First <br className="hidden md:block" /> Real Application?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto relative z-10">
            Join Textocode Academy today and shift from following tutorials to building the future with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-zinc-900 text-purple-700 dark:text-white w-full sm:w-auto px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-50 transition-all shadow-xl"
            >
              Join Textocode Academy
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-700 text-white w-full sm:w-auto px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-800 transition-all shadow-lg"
            >
              Start Building
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black pt-24 pb-12 border-t border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img 
                src="https://imgur.com/1xFHxvk.png" 
                alt="Textocode Academy Logo" 
                className="w-16 h-16 object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed italic">
              We teach people how to become real-world developers using AI-powered coding.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Academy</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li><a href="mailto:nuddywale@gmail.com" className="hover:text-purple-600 transition-colors">nuddywale@gmail.com</a></li>
              <li><a href="https://wa.me/15878375845" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">+1 (587) 8375-845</a></li>
              <li><a href="https://wa.me/2347033968648" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">+234 703 396 8648</a></li>
              <li className="flex gap-4 mt-6">
                <a href="https://www.linkedin.com/in/subair-nurudeen-adewale-1b46aa28b/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all" title="Instructor LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/textocode-academy/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all" title="Textocode Academy LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all"><Github className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">© {new Date().getFullYear()} Textocode Academy. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-purple-100 selection:text-purple-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <GlobalPresence />
        <WhoThisIsFor />
        <LearningApproach />
        <PortfolioSection />
        <WhatYouWillLearn />
        <InstructorSection />
        <UniqueValue />
        <Outcomes />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
