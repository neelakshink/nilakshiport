import React from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "SMS Automation",
      description: "Python-based SMS automation system for sending and managing text messages programmatically. Features include bulk messaging, scheduling, and delivery tracking.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      technologies: ["Python", "SMS API", "Automation", "Twilio"],
      github: "https://github.com/neelakshink/sms",
      demo: "#",
      featured: true,
      stats: { messages: "1000+", delivery: "99%", automation: "24/7" }
    },
    {
      id: 2,
      title: "Email Automation System",
      description: "Python email automation tool for sending bulk emails, managing email campaigns, and automating email workflows with advanced features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "SMTP", "Email API", "Automation"],
      github: "https://github.com/neelakshink/emaill",
      demo: "#",
      featured: false,
      stats: { emails: "500+", delivery: "98%", campaigns: "10+" }
    },
    {
      id: 3,
      title: "WhatsApp Bot",
      description: "Python WhatsApp automation bot for sending messages, managing contacts, and automating WhatsApp workflows with advanced features.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      technologies: ["Python", "WhatsApp API", "Automation", "Bot"],
      github: "https://github.com/neelakshink/Whatsapp",
      demo: "#",
      featured: false,
      stats: { messages: "200+", contacts: "50+", automation: "Real-time" }
    },
    {
      id: 4,
      title: "Instagram Automation",
      description: "Python Instagram automation tool for managing posts, stories, and engagement. Features include auto-posting, analytics, and content management.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Instagram API", "Automation", "Social Media"],
      github: "https://github.com/neelakshink/Insata",
      demo: "#",
      featured: true,
      stats: { posts: "100+", followers: "1K+", engagement: "85%" }
    },
    {
      id: 5,
      title: "LinkedIn Automation",
      description: "Python LinkedIn automation tool for networking, content management, and professional outreach with advanced analytics and scheduling features.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      technologies: ["Python", "LinkedIn API", "Automation", "Networking"],
      github: "https://github.com/neelakshink/linkedIn",
      demo: "#",
      featured: false,
      stats: { connections: "500+", posts: "50+", outreach: "200+" }
    },
    {
      id: 6,
      title: "Call Automation System",
      description: "Python-based call automation system for making automated phone calls, managing call schedules, and handling call responses programmatically.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      technologies: ["Python", "Voice API", "Automation", "Call Center"],
      github: "https://github.com/neelakshink/Call",
      demo: "#",
      featured: false,
      stats: { calls: "1000+", duration: "5min avg", success: "95%" }
    },
    {
      id: 7,
      title: "JavaScript Email System",
      description: "JavaScript-based email sending system with modern web interface, supporting HTML emails, attachments, and advanced email management features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["JavaScript", "Node.js", "Email API", "Web Interface"],
      github: "https://github.com/neelakshink/send_mail_using_js",
      demo: "#",
      featured: false,
      stats: { emails: "300+", templates: "10+", delivery: "99%" }
    },
    {
      id: 8,
      title: "Legal Documents Generator",
      description: "Python application for generating and managing legal documents with templates, automation, and compliance features for legal professionals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Document Generation", "Legal Tech", "Templates"],
      github: "https://github.com/neelakshink/legaldocs",
      demo: "#",
      featured: false,
      stats: { documents: "100+", templates: "25+", accuracy: "99%" }
    },
    {
      id: 9,
      title: "Linear Prediction ML Model",
      description: "Machine learning model for linear prediction using Python, featuring data preprocessing, model training, and prediction capabilities with visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Machine Learning", "Linear Regression", "Data Science"],
      github: "https://github.com/neelakshink/linearprediction",
      demo: "#",
      featured: true,
      stats: { accuracy: "92%", predictions: "500+", features: "10+" }
    },
    {
      id: 10,
      title: "Love Guru AI",
      description: "AI-powered love advice and relationship analysis system using machine learning algorithms to provide personalized relationship insights and recommendations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "AI", "Machine Learning", "NLP"],
      github: "https://github.com/neelakshink/loveguru2",
      demo: "#",
      featured: false,
      stats: { users: "1000+", advice: "500+", accuracy: "88%" }
    },
    {
      id: 11,
      title: "Gradio Web Interface",
      description: "Web-based interface built with Gradio for machine learning models, featuring interactive demos, real-time predictions, and user-friendly design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Gradio", "Web Interface", "ML Demo"],
      github: "https://github.com/neelakshink/gradio",
      demo: "#",
      featured: false,
      stats: { demos: "10+", users: "500+", models: "5+" }
    },
    {
      id: 12,
      title: "Travel Prediction System",
      description: "Machine learning system for predicting travel patterns, costs, and recommendations using historical data and advanced prediction algorithms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Machine Learning", "Travel Tech", "Predictions"],
      github: "https://github.com/neelakshink/travellingprediction",
      demo: "#",
      featured: false,
      stats: { predictions: "200+", accuracy: "85%", destinations: "50+" }
    },
    {
      id: 13,
      title: "CI/CD Pipeline",
      description: "Complete CI/CD pipeline implementation for automated testing, building, and deployment of applications with GitHub Actions and modern DevOps practices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["CI/CD", "GitHub Actions", "DevOps", "Automation"],
      github: "https://github.com/neelakshink/CI-CD-pipeline",
      demo: "#",
      featured: true,
      stats: { deployments: "50+", tests: "100%", uptime: "99.9%" }
    },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy/50 to-deep-space/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neon-teal">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my diverse portfolio of projects across DevOps, cloud infrastructure, and backend development
          </p>
        </motion.div>



        {/* Featured Projects with 3D Flip Effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial={{ opacity: 0, rotateY: -90, y: 50 }}
              animate={{ opacity: 1, rotateY: 0, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                y: -15,
                rotateY: 5,
                rotateX: 5,
                boxShadow: `0 30px 60px rgba(255, 20, 147, 0.4)`,
                transition: { duration: 0.6 }
              }}
              className="group relative transform-style-preserve-3d"
            >
              {/* Enhanced Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-hot-pink via-electric-yellow to-neon-cyan rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-glow-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-midnight-navy/95 to-deep-space/95 backdrop-blur-md border-2 border-hot-pink/30 rounded-2xl overflow-hidden hover:border-hot-pink/60 transition-all duration-300 transform-style-preserve-3d h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/80 via-transparent to-transparent"></div>
                  
                  {/* Featured Badge with Flip Effect */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    whileHover={{ 
                      rotateY: 180,
                      scale: 1.2,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <span className="px-3 py-1 bg-gradient-to-r from-hot-pink to-electric-yellow text-midnight-navy text-sm font-bold rounded-full animate-glow-pulse">
                      Featured
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <motion.h3 
                    className="text-2xl font-bold text-white group-hover:text-hot-pink transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      rotateX: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-400 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Stats with 3D Effects */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    {Object.entries(project.stats).map(([key, value], index) => (
                      <motion.div 
                        key={key} 
                        className="text-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotateZ: index % 2 === 0 ? 5 : -5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="text-xl font-bold text-electric-yellow animate-neon-flicker">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies with Flip Effects */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, rotateY: -90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5, type: "spring" }}
                        whileHover={{ 
                          rotateY: 180,
                          scale: 1.2,
                          transition: { duration: 0.4 }
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-hot-pink/20 to-electric-yellow/20 border-2 border-hot-pink/40 rounded-full text-xs text-hot-pink font-semibold transform-style-preserve-3d"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Button with 3D Effects */}
                  <div className="pt-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 180,
                        transition: { duration: 0.4 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-midnight-navy/80 to-deep-space/80 border-2 border-hot-pink/30 rounded-lg text-hot-pink hover:bg-hot-pink/10 transition-all duration-300 transform-style-preserve-3d w-full"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.filter(project => !project.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 20px 40px rgba(20, 255, 236, 0.2)`
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-2xl overflow-hidden hover:border-neon-teal/40 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-teal transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-neon-teal">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-neon-teal/10 border border-neon-teal/30 rounded text-xs text-neon-teal">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-midnight-navy/50 border border-neon-teal/20 rounded-lg text-neon-teal hover:bg-neon-teal/10 transition-all duration-300 text-sm w-full"
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project. I bring expertise in DevOps, cloud infrastructure, 
              and backend development to help you build scalable, reliable solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300"
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;