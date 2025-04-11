
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  content?: string;
}

// In a real application, you would dynamically import the MDX content
// For this demo, we're simulating the content
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Transformer Architecture in NLP",
    excerpt: "A deep dive into how transformers work and why they've revolutionized natural language processing tasks.",
    date: "April 2, 2025",
    category: "Machine Learning",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "transformer-architecture",
    content: "# Understanding Transformer Architecture in NLP\n\nThe Transformer architecture has revolutionized the field of Natural Language Processing (NLP) and has become the foundation for many state-of-the-art language models, including BERT, GPT, and T5.\n\n## What Makes Transformers Special?\n\nUnlike traditional sequence models like RNNs (Recurrent Neural Networks) and LSTMs (Long Short-Term Memory networks), Transformers process all words in a sentence simultaneously, using a mechanism called self-attention to understand relationships between words regardless of their position in the sentence."
  },
  {
    id: 2,
    title: "Game Mechanics and AI: Lessons from Elden Ring",
    excerpt: "How modern games like Elden Ring implement AI systems and what we can learn from them as AI researchers.",
    date: "March 18, 2025",
    category: "Gaming & AI",
    readTime: "6 min read",
    image: "/placeholder.svg",
    slug: "game-mechanics-ai",
    content: "# Game Mechanics and AI: Lessons from Elden Ring\n\nModern video games like Elden Ring represent some of the most sophisticated AI systems that everyday consumers interact with. As both a gamer and an AI researcher, I find the intersection fascinating.\n\n## Emergent Complexity in Elden Ring\n\nElden Ring's enemy AI creates challenging and dynamic combat scenarios through several mechanisms:\n\n1. **Context-Aware Decision Trees**: Enemies react differently based on player distance, health status, and recent actions\n2. **Semi-Random Response Patterns**: Designed unpredictability that prevents players from exploiting repetitive patterns\n3. **Environmental Awareness**: Enemies use the terrain and coordinate with other nearby enemies"
  },
  {
    id: 3,
    title: "Chess Strategies That Improved My Programming",
    excerpt: "The surprising ways that chess thinking patterns can enhance your approach to algorithm design and problem-solving.",
    date: "March 5, 2025",
    category: "Problem Solving",
    readTime: "5 min read",
    image: "/placeholder.svg",
    slug: "chess-strategies",
    content: "# Chess Strategies That Improved My Programming\n\nChess and programming might seem like distinct disciplines, but they share fundamental thinking patterns that can enhance your skills in both areas. I've found that my background in chess has significantly improved my approach to software development.\n\n## Pattern Recognition\n\nIn chess, recognizing board patterns is essential for quickly identifying threats and opportunities. Similarly, in programming:\n\n- Identifying common code structures helps you understand new codebases faster\n- Recognizing algorithmic patterns makes it easier to select appropriate data structures\n- Pattern matching helps spot potential bugs before they occur"
  },
  {
    id: 4,
    title: "Implementing a Neural Network from Scratch",
    excerpt: "A step-by-step guide to building a neural network without using any frameworks.",
    date: "February 20, 2025",
    category: "Programming",
    readTime: "12 min read",
    image: "/placeholder.svg",
    slug: "neural-network-scratch",
    content: "# Implementing a Neural Network from Scratch\n\nWhile powerful frameworks like TensorFlow and PyTorch have made building neural networks more accessible, implementing one from scratch offers invaluable insights into how they actually work. In this post, I'll walk through the process step by step.\n\n## The Building Blocks\n\nA basic neural network consists of:\n\n1. **Neurons**: Computational units that perform weighted sums of inputs and apply activation functions\n2. **Layers**: Collections of neurons that transform data\n3. **Weights and Biases**: Parameters that are adjusted during training\n4. **Activation Functions**: Non-linear functions that allow the network to learn complex patterns\n5. **Loss Function**: Measures how far the network's predictions are from the actual values"
  },
  {
    id: 5,
    title: "The Future of AI in Scientific Research",
    excerpt: "How machine learning and AI tools are transforming the way scientists approach complex problems.",
    date: "February 8, 2025",
    category: "AI Ethics",
    readTime: "7 min read",
    image: "/placeholder.svg",
    slug: "ai-scientific-research",
    content: "# The Future of AI in Scientific Research\n\nArtificial intelligence is revolutionizing scientific research across disciplines, enabling new discoveries and accelerating the pace of innovation. Let's explore how AI is changing the scientific landscape and what challenges lie ahead.\n\n## Current Applications\n\nAI is already making significant contributions in several scientific domains:\n\n### 1. Drug Discovery\n\nMachine learning models can:\n- Screen millions of potential compounds in silico\n- Predict protein folding with unprecedented accuracy (AlphaFold)\n- Identify novel drug targets from biological data"
  }
];

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Post not found</h1>
          <Link to="/blog" className="text-black hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link to="/blog" className="text-gray-500 hover:text-black mb-6 flex items-center gap-2 transition-colors">
        <ArrowLeft size={16} />
        <span>Back to Blog</span>
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">{post.title}</h1>
        <div className="flex gap-3 text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
      
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 mb-10">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <article className="prose prose-lg max-w-none">
        {/* In a real application, you would render MDX content here */}
        <div className="markdown">
          {post.content?.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return <h1 key={i} className="text-3xl font-semibold mb-6">{line.substring(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">{line.substring(3)}</h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>;
            } else if (line.startsWith('- ')) {
              return <li key={i} className="ml-6 mb-2">{line.substring(2)}</li>;
            } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
              return <li key={i} className="ml-6 mb-2">{line.substring(3)}</li>;
            } else if (line === '') {
              return <br key={i} />;
            } else {
              return <p key={i} className="mb-4">{line}</p>;
            }
          })}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
