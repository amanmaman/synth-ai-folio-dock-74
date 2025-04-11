
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-thin mb-4">
          Hello, I'm <span className="font-normal">Alex Chen</span>
        </h1>
        <h2 className="text-2xl font-light text-gray-600 mb-8">
          Machine Learning Engineer & AI Enthusiast
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Exploring the intersection of artificial intelligence, 
          machine learning, and creative problem-solving.
          When not training models, you'll find me in Elden Ring
          or plotting my next chess move.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10">
          <a 
            href="mailto:alex.chen@example.com" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link 
            to="/projects" 
            className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            View Work
          </Link>
          <Link 
            to="/gaming" 
            className="px-8 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Play Games
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
