import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. I can help you learn more about Neelakshi's skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "Tell me about your skills",
    "Show me your projects",
    "What's your experience?",
    "How can I contact you?"
  ];

  const botResponses = {
    skills: "I specialize in DevOps and Backend Development with expertise in Docker, Kubernetes, AWS, Jenkins, Python, and Node.js. I'm a fresher with strong academic foundation and hands-on project experience in building scalable infrastructure and automating deployments.",
    projects: "I've worked on various academic and personal projects including microservices architecture, CI/CD pipelines, cloud automation, and backend systems. My recent work includes containerized applications and cloud-native solutions.",
    experience: "I'm a fresher with strong academic background in DevOps and Backend Development. I've completed projects implementing CI/CD pipelines, managing cloud infrastructure, and developing scalable backend systems.",
    contact: "You can reach me via email at neelakshikaundal89@gmail.com, LinkedIn, or through the contact form on this website. I'm always open to discussing new opportunities and collaborations!",
    default: "I'm here to help! You can ask me about my skills, projects, experience, or how to get in touch. Feel free to ask anything specific about my work or background."
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let response = botResponses.default;
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('skill')) {
        response = botResponses.skills;
      } else if (lowerText.includes('project')) {
        response = botResponses.projects;
      } else if (lowerText.includes('experience') || lowerText.includes('background')) {
        response = botResponses.experience;
      } else if (lowerText.includes('contact') || lowerText.includes('reach') || lowerText.includes('email')) {
        response = botResponses.contact;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-neon-teal to-cyber-blue rounded-full shadow-lg hover:shadow-xl hover:shadow-neon-teal/50 transition-all duration-300 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-midnight-navy" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} className="text-midnight-navy" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-neon-teal/30 animate-pulse"></div>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-midnight-navy/95 backdrop-blur-md border border-neon-teal/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-teal/20 to-cyber-blue/20 border-b border-neon-teal/20 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-teal to-cyber-blue rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-midnight-navy" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-xs text-gray-400">Ask me anything about Neelakshi</p>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  <div className="w-2 h-2 bg-neon-teal rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-electric-orange rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[350px]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-electric-orange to-plasma-purple' 
                        : 'bg-gradient-to-r from-neon-teal to-cyber-blue'
                    }`}>
                      {message.sender === 'user' ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-midnight-navy" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-electric-orange to-plasma-purple text-white'
                        : 'bg-midnight-navy/50 border border-neon-teal/20 text-gray-300'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-teal to-cyber-blue rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-midnight-navy" />
                    </div>
                    <div className="bg-midnight-navy/50 border border-neon-teal/20 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neon-teal rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-electric-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-neon-teal/20">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-neon-teal/10 border border-neon-teal/30 rounded-full text-xs text-neon-teal hover:bg-neon-teal/20 transition-all duration-300"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-midnight-navy/80 backdrop-blur-md border border-neon-teal/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal/50 transition-all duration-300 text-sm"
                />
                <motion.button
                  onClick={() => handleSendMessage(inputValue)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-neon-teal to-cyber-blue text-midnight-navy rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
