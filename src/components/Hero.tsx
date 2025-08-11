import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "DevOps Engineer",
    "Backend Developer", 
    "Cloud Architect",
    "CI/CD Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/neelakshink", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:neelakshikaundal89@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 3D Rotating Cubes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-neon-teal/30 rounded-lg animate-rotate-3d-x transform-style-preserve-3d"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-hot-pink/30 rounded-lg animate-rotate-3d-y transform-style-preserve-3d" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-electric-yellow/30 rounded-lg animate-rotate-3d-z transform-style-preserve-3d" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating 3D Orbs with Glow */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-neon-teal rounded-full animate-float-3d animate-glow-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-hot-pink rounded-full animate-float-3d animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-electric-yellow rounded-full animate-float-3d animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full animate-matrix-rain text-neon-cyan text-xs font-mono"></div>
        </div>
        
        {/* Holographic Grid */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neon-teal font-source-code text-lg"
            >
              👋 Hello, I'm
            </motion.div>

            {/* Name with 3D Flip Effects */}
            <motion.h1
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight transform-style-preserve-3d"
            >
              <motion.span
                className="block text-neon-teal"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 180,
                  transition: { duration: 0.6 }
                }}
              >
                Neelakshi
              </motion.span>
              <motion.span 
                className="block text-neon-teal"
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 180,
                  transition: { duration: 0.6 }
                }}
              >
                Kaundal
              </motion.span>
            </motion.h1>

            {/* Animated Role Text with Flip Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-300 font-space-grotesk"
            >
              I'm a{' '}
              <motion.span 
                key={currentTextIndex}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: 90, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-neon-teal font-bold relative inline-block transform-style-preserve-3d"
              >
                {texts[currentTextIndex]}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-teal animate-pulse"></span>
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400 max-w-2xl leading-relaxed"
            >
              Passionate about building scalable infrastructure, automating deployments, 
              and creating robust backend systems. Specialized in Docker, Kubernetes, 
              AWS, and modern DevOps practices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold py-4 px-8 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300 animate-pulse-glow"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-neon-teal text-neon-teal font-bold py-4 px-8 rounded-lg hover:bg-neon-teal hover:text-midnight-navy transition-all duration-300"
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Links with 3D Flip Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6, type: "spring" }}
                  whileHover={{ 
                    scale: 1.3,
                    y: -10,
                    rotateY: 180,
                    rotateX: 10,
                    transition: { duration: 0.4 }
                  }}
                  className="w-14 h-14 bg-gradient-to-br from-hot-pink/20 to-electric-yellow/20 backdrop-blur-sm border-2 border-hot-pink/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-hot-pink transition-all duration-300 transform-style-preserve-3d shadow-lg hover:shadow-2xl"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative transform-style-preserve-3d"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Enhanced Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-hot-pink via-electric-yellow to-neon-cyan rounded-2xl blur-xl opacity-40 animate-glow-pulse"></div>
              
              {/* Main Card with 3D Effects */}
              <motion.div
                whileHover={{ 
                  rotateY: 15, 
                  rotateX: 10,
                  scale: 1.05,
                  transition: { duration: 0.6 }
                }}
                className="relative bg-gradient-to-br from-midnight-navy/90 to-deep-space/90 backdrop-blur-md border-2 border-hot-pink/30 rounded-2xl p-8 shadow-2xl transform-style-preserve-3d"
              >
                {/* Profile Image with Flip Effect */}
                <motion.div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-hot-pink to-electric-yellow p-1"
                  whileHover={{ 
                    rotateY: 180,
                    scale: 1.1,
                    transition: { duration: 0.8 }
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden transform-style-preserve-3d">
                    <img 
                      src="/profile-image.jpg" 
                      alt="Neelakshi Kaundal Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Stats with 3D Effects */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    className="text-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="text-2xl font-bold text-electric-yellow animate-neon-flicker">Fresher</div>
                    <div className="text-sm text-gray-400">Status</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="text-2xl font-bold text-neon-cyan animate-glow">Ready</div>
                    <div className="text-sm text-gray-400">To Work</div>
                  </motion.div>
                </div>

                {/* Tech Stack with Flip Effects */}
                <div className="space-y-3">
                  <h3 className="text-hot-pink font-semibold animate-glow">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Python', 'Node.js'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 1.6 + index * 0.1, duration: 0.5, type: "spring" }}
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neon-teal/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-teal rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;