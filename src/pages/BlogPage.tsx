
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

// In a real application, this would be fetched from an API or parsed from MDX files
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Transformer Architecture in NLP",
    excerpt: "A deep dive into how transformers work and why they've revolutionized natural language processing tasks.",
    date: "April 2, 2025",
    category: "Machine Learning",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "transformer-architecture"
  },
  {
    id: 2,
    title: "Game Mechanics and AI: Lessons from Elden Ring",
    excerpt: "How modern games like Elden Ring implement AI systems and what we can learn from them as AI researchers.",
    date: "March 18, 2025",
    category: "Gaming & AI",
    readTime: "6 min read",
    image: "/placeholder.svg",
    slug: "game-mechanics-ai"
  },
  {
    id: 3,
    title: "Chess Strategies That Improved My Programming",
    excerpt: "The surprising ways that chess thinking patterns can enhance your approach to algorithm design and problem-solving.",
    date: "March 5, 2025",
    category: "Problem Solving",
    readTime: "5 min read",
    image: "/placeholder.svg",
    slug: "chess-strategies"
  },
  {
    id: 4,
    title: "Implementing a Neural Network from Scratch",
    excerpt: "A step-by-step guide to building a neural network without using any frameworks.",
    date: "February 20, 2025",
    category: "Programming",
    readTime: "12 min read",
    image: "/placeholder.svg",
    slug: "neural-network-scratch"
  },
  {
    id: 5,
    title: "The Future of AI in Scientific Research",
    excerpt: "How machine learning and AI tools are transforming the way scientists approach complex problems.",
    date: "February 8, 2025",
    category: "AI Ethics",
    readTime: "7 min read",
    image: "/placeholder.svg",
    slug: "ai-scientific-research"
  }
];

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Blog</h1>
      
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <div className="flex gap-3 mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.category}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="text-black font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
