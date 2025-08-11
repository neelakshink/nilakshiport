import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Box,
  Package,
  FileCode,
  Globe,
  Settings,
  Activity
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('devops');

  // Debug logging
  useEffect(() => {
    console.log('Active Category:', activeCategory);
    console.log('Skills for category:', skills[activeCategory as keyof typeof skills]);
    console.log('Skills object:', skills);
  }, [activeCategory]);

  const skillCategories = [
    { id: 'devops', name: 'DevOps & CI/CD', icon: Server, color: 'neon-teal' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'cyber-blue' },
    { id: 'backend', name: 'Backend Development', icon: Code, color: 'electric-orange' },
    { id: 'database', name: 'Databases', icon: Database, color: 'plasma-purple' },
  ];

  const skills = {
    devops: [
      { name: 'Docker', icon: Box, level: 95, color: '#14FFEC' },
      { name: 'Jenkins', icon: Settings, level: 88, color: '#FF5F1F' },
      { name: 'Kubernetes', icon: Package, level: 90, color: '#00D4FF' },
      { name: 'Terraform', icon: Globe, level: 85, color: '#00FF88' },
      { name: 'Ansible', icon: Activity, level: 80, color: '#14FFEC' },
    ],
    cloud: [
      { name: 'AWS', icon: Cloud, level: 92, color: '#00D4FF' },
    ],
    backend: [
      { name: 'Python', icon: FileCode, level: 90, color: '#14FFEC' },
    ],
    database: [
      { name: 'MongoDB', icon: Database, level: 85, color: '#14FFEC' },
    ],
  };

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
    <section id="skills" className="py-20 relative">
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
            Technical <span className="text-neon-teal">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expertise across DevOps, cloud infrastructure, backend development, and modern technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-${category.color} text-midnight-navy shadow-lg shadow-${category.color}/50`
                  : 'bg-midnight-navy/50 text-gray-300 border border-neon-teal/20 hover:border-neon-teal/40'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Debug Info */}
        <div className="text-center mb-6 text-sm text-gray-500">
          <p>Current Category: {activeCategory}</p>
          <p>Skills Count: {skills[activeCategory as keyof typeof skills]?.length || 0}</p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-8 ${
            skills[activeCategory as keyof typeof skills]?.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto' 
              : skills[activeCategory as keyof typeof skills]?.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {skills[activeCategory as keyof typeof skills] && skills[activeCategory as keyof typeof skills].length > 0 ? (
            skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 20px 40px rgba(20, 255, 236, 0.2)`
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-6 h-full transition-all duration-300 hover:border-neon-teal/40">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-teal/20 to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-teal/20 to-cyber-blue/20 rounded-lg flex items-center justify-center">
                      <skill.icon size={24} className="text-neon-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">Expert Level</p>
                    </div>
                  </div>

                  {/* Progress Ring */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(20, 255, 236, 0.2)"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={skill.color}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-neon-teal">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Skill Description */}
                  <div className="text-center">
                    <p className="text-sm text-gray-400">
                      {skill.level >= 90 && 'Expert'}
                      {skill.level >= 80 && skill.level < 90 && 'Advanced'}
                      {skill.level >= 70 && skill.level < 80 && 'Intermediate'}
                      {skill.level < 70 && 'Beginner'}
                    </p>
                  </div>

                  {/* Animated Bars */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-neon-teal to-cyber-blue"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-12"
            >
              <div className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">No Skills Found</h3>
                <p className="text-gray-400">Skills for this category are being updated.</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              I'm constantly exploring new technologies and best practices in the DevOps ecosystem. 
              From containerization to cloud-native architectures, I stay updated with the latest 
              industry trends and tools to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-neon-teal/10 border border-neon-teal/30 rounded-full text-neon-teal text-sm">
                🚀 Always Learning
              </span>
              <span className="px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm">
                🔄 Continuous Improvement
              </span>
              <span className="px-4 py-2 bg-electric-orange/10 border border-electric-orange/30 rounded-full text-electric-orange text-sm">
                ⚡ Fast Adaptation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;