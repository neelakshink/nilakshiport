import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, ExternalLink, Brain, FileText } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech Computer Science & Engineering",
      institution: "DAV University",
      location: "Jalandhar, Punjab",
      duration: "2023 - 2027",
      description: "Currently pursuing Bachelor of Technology in Computer Science and Engineering. Building strong foundation in programming, algorithms, data structures, and software engineering principles.",
      gpa: "Pursuing",
      achievements: [
        "Computer Science Fundamentals",
        "Programming & Algorithms",
        "Data Structures",
        "Software Engineering"
      ],
      technologies: ["Programming", "Algorithms", "Data Structures", "Software Engineering"],
      featured: true
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Machine Learning with Python",
      issuer: "YHills",
      date: "Nov 2024 - Jan 2025",
      credential: "Internship Certificate",
      description: "Successfully completed internship in Machine Learning with Python, gaining hands-on experience in ML algorithms, data preprocessing, and model development.",
      icon: <Brain className="text-neon-teal" />,
      certificateUrl: "/ml-python-certificate.jpeg"
    }
  ];

  const researchPapers = [
    {
      id: 1,
      title: "NEURODOCK: A CONTAINERIZED FRAMEWORK FOR SCALABLE AND REPRODUCIBLE AI AND LLM DEPLOYMENTS IN MODERN DEVOPS ENVIRONMENTS",
      authors: "Research Paper",
      date: "2025",
      description: "A comprehensive research paper on containerized AI/LLM deployment frameworks for modern DevOps environments, focusing on scalability and reproducibility.",
      icon: <FileText className="text-cyber-blue" />,
      pdfUrl: "/ijrrr-Special-Issue-2-2025-paper24.pdf"
    }
  ];

  const skills = [];

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
    <section id="education" className="py-20 relative">
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
            Education & <span className="text-neon-teal">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic foundation and professional certifications that shape my expertise in DevOps and backend development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Education Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <GraduationCap size={28} className="text-neon-teal" />
              <span>Academic Journey</span>
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neon-teal/30"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-neon-teal rounded-full border-4 border-midnight-navy"></div>
                  
                  <div className="ml-12">
                    <div className="bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-6 hover:border-neon-teal/40 transition-all duration-300">
                      {edu.featured && (
                        <span className="inline-block px-3 py-1 bg-neon-teal/20 border border-neon-teal/30 rounded-full text-xs text-neon-teal mb-4">
                          Featured
                        </span>
                      )}
                      
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-cyber-blue font-semibold mb-2">{edu.institution}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">{edu.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-neon-teal font-semibold">GPA: {edu.gpa}</span>
                        <Award size={20} className="text-cyber-blue" />
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-white">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-neon-teal rounded-full"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {edu.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-neon-teal/10 border border-neon-teal/30 rounded text-xs text-neon-teal">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <BookOpen size={28} className="text-cyber-blue" />
              <span>Professional Certifications</span>
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: `0 20px 40px rgba(20, 255, 236, 0.2)`
                  }}
                  className="bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-6 hover:border-neon-teal/40 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(cert.certificateUrl, '_blank')}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                      <p className="text-cyber-blue font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-400 mb-2">{cert.date} • {cert.credential}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                      <p className="text-neon-teal text-xs mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view certificate
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-neon-teal/20 border border-neon-teal/40 rounded-lg text-neon-teal group-hover:bg-neon-teal/30 transition-all duration-300 cursor-pointer"
                      title="View Certificate"
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Research Papers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-3">
            <FileText size={28} className="text-cyber-blue" />
            <span>Research <span className="text-neon-teal">Publications</span></span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: `0 20px 40px rgba(59, 130, 246, 0.2)`
                }}
                className="bg-midnight-navy/80 backdrop-blur-md border border-cyber-blue/20 rounded-2xl p-8 hover:border-cyber-blue/40 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(paper.pdfUrl, '_blank')}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl text-cyber-blue">{paper.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">{paper.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="text-cyber-blue font-semibold">{paper.authors}</span>
                      <span>•</span>
                      <span>{paper.date}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{paper.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-cyber-blue text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view research paper
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-cyber-blue/20 border border-cyber-blue/40 rounded-lg text-cyber-blue group-hover:bg-cyber-blue/30 transition-all duration-300"
                        title="View Research Paper"
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technical <span className="text-neon-teal">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-xl p-6 hover:border-neon-teal/40 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-neon-teal rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I believe in lifelong learning and staying updated with the latest technologies and best practices. 
              My academic background combined with professional certifications provides a strong foundation for 
              delivering cutting-edge solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300"
            >
              View My Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;