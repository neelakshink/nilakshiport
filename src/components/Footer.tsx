import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp, Heart, Zap } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/neelakshink", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:neelakshikaundal89@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'DevOps Implementation',
    'CI/CD Pipeline Setup',
    'Cloud Infrastructure',
    'Backend Development',
    'System Architecture',
    'Performance Optimization',
  ];

  return (
    <footer className="relative bg-deep-space border-t border-neon-teal/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy to-deep-space"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-teal to-cyber-blue rounded-lg flex items-center justify-center">
                <span className="text-midnight-navy font-bold text-lg">NK</span>
              </div>
              <span className="text-neon-teal font-space-grotesk font-bold text-xl">
                Neelakshi Kaundal
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              DevOps & Backend Engineer passionate about building scalable infrastructure, 
              automating deployments, and creating robust systems that drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    color: '#14FFEC'
                  }}
                  className="w-10 h-10 bg-midnight-navy/50 backdrop-blur-sm border border-neon-teal/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-teal transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-teal transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-neon-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-neon-teal transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <Zap size={12} className="text-neon-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-neon-teal" />
                <span className="text-gray-400">neelakshikaundal89@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cyber-blue" />
                <span className="text-gray-400">+91 9056103909</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-electric-orange" />
                <span className="text-gray-400">Jalandhar, Punjab, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-neon-teal rounded-full"></div>
                <span className="text-gray-400">Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-cyber-blue rounded-full animate-pulse"></div>
                <span className="text-gray-400">Response within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified about new articles, project updates, and insights on DevOps, 
              cloud infrastructure, and backend development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-teal/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>© 2024 Neelakshi Kaundal. All rights reserved.</span>
              <Heart size={16} className="text-electric-orange animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a href="#" className="text-gray-400 hover:text-neon-teal transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-teal transition-colors duration-300">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gradient-to-r from-neon-teal to-cyber-blue rounded-full shadow-lg hover:shadow-xl hover:shadow-neon-teal/50 transition-all duration-300 flex items-center justify-center"
      >
        <ArrowUp size={20} className="text-midnight-navy" />
      </motion.button>
    </footer>
  );
};

export default Footer;