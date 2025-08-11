import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Technical Difference Between Tuple and List",
      excerpt: "A comprehensive analysis of the key differences between tuples and lists in Python, covering mutability, performance, memory usage, and use cases.",
      tags: ["Python", "Data Structures", "Tuples", "Lists", "Programming"],
      date: "2024-12-19",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      link: "https://asbshdhs.blogspot.com/2025/07/technical-difference-between-tuple-and.html",
      featured: true,
    },
    {
      id: 2,
      title: "Why Leading Firms Are Adopting Linux: The Force Behind New Businesses",
      excerpt: "Exploring why major companies like Google, Amazon, and Netflix choose Linux for their infrastructure, covering cost-effectiveness, security, and scalability benefits.",
      tags: ["Linux", "Enterprise", "Open Source", "Cloud Computing", "DevOps"],
      date: "2025-07-28",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://asbshdhs.blogspot.com/2025/07/blog-post-on-companies-using-linux.html",
      featured: false,
    },
    {
      id: 3,
      title: "Graphical User Interface: What Really Happens Behind GUI Programs in Linux",
      excerpt: "A deep dive into how Linux GUI applications work behind the scenes, revealing the command-line commands that power every graphical action.",
      tags: ["Linux", "GUI", "CLI", "System Administration", "DevOps"],
      date: "2025-07-25",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      link: "https://asbshdhs.blogspot.com/2025/07/graphical-user-interface.html",
      featured: false,
    },
    {
      id: 4,
      title: "Why Top Companies Use Linux: Benefits and Real-World Applications",
      excerpt: "Understanding Linux adoption in enterprise environments, from supercomputers to cloud infrastructure, and why it's the foundation of modern computing.",
      tags: ["Linux", "Enterprise", "Supercomputers", "Cloud Infrastructure", "Technology"],
      date: "2025-07-16",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      link: "https://asbshdhs.blogspot.com/2025/07/what-is-linux-which-companies-using.html",
      featured: false,
    },
    {
      id: 5,
      title: "The Descent: A Guide to Neural Network Optimizers",
      excerpt: "A comprehensive guide to neural network optimizers including Gradient Descent, Adam, SGD, RMSprop, and AdaGrad. Learn how these algorithms navigate the loss landscape to find optimal solutions.",
      tags: ["Machine Learning", "Neural Networks", "Optimization", "Deep Learning", "AI"],
      date: "2025-08-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://asbshdhs.blogspot.com/2025/08/the-descent-guide-to-neural-network.html",
      featured: false,
    },
    {
      id: 6,
      title: "Weight of Dropped Category in Categorical Variables",
      excerpt: "Understanding how dropped categories in one-hot encoding affect model interpretation and the role of intercept terms in linear models when handling categorical variables.",
      tags: ["Machine Learning", "Data Science", "Categorical Variables", "One-Hot Encoding", "Linear Models"],
      date: "2025-08-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      link: "https://asbshdhs.blogspot.com/2025/08/weight-of-dropped-category-in.html",
      featured: false,
    },
    {
      id: 7,
      title: "Data Imputation Techniques",
      excerpt: "A comprehensive overview of data imputation methods including univariate techniques, multivariate approaches, and advanced methods for handling missing values in datasets.",
      tags: ["Data Science", "Machine Learning", "Data Preprocessing", "Missing Data", "Statistics"],
      date: "2025-08-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      link: "https://asbshdhs.blogspot.com/2025/08/imputation-techniques-data-imputation.html",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  return (
    <section id="blog" className="py-20 relative">
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
            Blog & <span className="text-neon-teal">Research</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights on DevOps practices, backend development, and emerging technologies
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300"
              />
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </motion.div>



        {/* Featured Blog Post */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="relative group">
                <div className="relative bg-midnight-navy/90 backdrop-blur-md border border-neon-teal/20 rounded-2xl overflow-hidden hover:border-neon-teal/40 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="px-3 py-1 bg-neon-teal/20 border border-neon-teal/30 rounded-full text-neon-teal">
                          Featured
                        </span>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white group-hover:text-neon-teal transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-neon-teal/10 border border-neon-teal/30 rounded text-xs text-neon-teal">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-neon-teal hover:text-cyber-blue transition-colors duration-300"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight size={16} />
                      </motion.a>
                    </div>
                    
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.filter(post => !post.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              More Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <motion.a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer block"
                >

                  
                  <div className="relative bg-midnight-navy/90 backdrop-blur-md border border-neon-teal/20 rounded-xl overflow-hidden hover:border-neon-teal/40 transition-all duration-300">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white group-hover:text-neon-teal transition-colors duration-300">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-neon-teal/10 border border-neon-teal/30 rounded text-xs text-neon-teal">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center pt-2">
                        <span className="text-neon-teal text-sm font-medium group-hover:text-cyber-blue transition-colors duration-300">
                          Click to read full article →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                No Articles Found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or browse all articles.
              </p>
              <motion.button
                onClick={() => setSearchTerm('')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy font-bold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300"
              >
                Clear Search
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-midnight-navy/50 backdrop-blur-md border border-neon-teal/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified about new articles on DevOps, backend development, and emerging technologies.
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
      </div>
    </section>
  );
};

export default Blog;
