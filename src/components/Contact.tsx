import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'neelakshikaundal89@gmail.com',
      link: 'mailto:neelakshikaundal89@gmail.com',
      color: 'neon-teal'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9056103909',
      link: 'tel:+919056103909',
      color: 'cyber-blue'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jalandhar, Punjab, India',
      link: '#',
      color: 'electric-orange'
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space/50 to-midnight-navy/50"></div>
      
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
            Get In <span className="text-neon-teal">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborations, and innovative projects. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    boxShadow: `0 10px 30px rgba(20, 255, 236, 0.2)`
                  }}
                  className="flex items-center space-x-4 p-6 bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-xl hover:border-neon-teal/40 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r from-${info.color} to-${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={24} className="text-midnight-navy" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">What I Offer</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-teal rounded-full"></div>
                  <span className="text-gray-400">DevOps & CI/CD Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                  <span className="text-gray-400">Cloud Infrastructure Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full"></div>
                  <span className="text-gray-400">Backend Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-plasma-purple rounded-full"></div>
                  <span className="text-gray-400">System Architecture</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-teal via-cyber-blue to-electric-orange rounded-2xl blur-xl opacity-30"></div>
            
            <div className="relative bg-midnight-navy/90 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-gray-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                
                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-neon-green"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-electric-orange"
                  >
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-midnight-navy border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
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
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can optimize your DevOps processes, scale your applications, 
              and build robust backend systems that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:neelakshikaundal89@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300"
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neon-teal text-neon-teal font-bold rounded-lg hover:bg-neon-teal hover:text-midnight-navy transition-all duration-300"
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;