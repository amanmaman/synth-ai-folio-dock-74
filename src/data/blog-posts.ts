
import { ReactNode } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

// Blog posts collection
export const blogPosts: BlogPost[] = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    excerpt: 'This is my first blog post',
    date: '2025-04-12',
    category: 'General',
    readTime: '2 min read',
    image: '/placeholder.svg',
    content: `
# Hello World!

This is my first blog post using **Markdown**. 

## What is Markdown?

Markdown is a lightweight markup language with plain text formatting syntax.

### Features

- **Write in plain text** but get formatted output
- **Simple syntax** that's easy to learn
- **Portable** across many platforms

\`\`\`javascript
// Example code block
function greeting(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> Markdown is really powerful for content-heavy sites!

Visit [Markdown Guide](https://www.markdownguide.org/) for more information.
    `
  },
  {
    slug: 'transformer-architecture',
    title: 'Understanding Transformer Architecture',
    excerpt: 'A deep dive into the transformer architecture that powers modern language models',
    date: '2025-04-10',
    category: 'Machine Learning',
    readTime: '8 min read',
    image: '/placeholder.svg',
    content: `
# Understanding Transformer Architecture

The transformer architecture has revolutionized natural language processing and other fields since its introduction in the "Attention Is All You Need" paper.

## Key Components

### Self-Attention Mechanism

The self-attention mechanism allows the model to focus on different parts of the input sequence when producing outputs:

1. **Query, Key, and Value vectors** are created for each token
2. **Attention scores** are computed between all tokens
3. **Weighted sum** of value vectors creates the context-aware representation

### Multi-Head Attention

Instead of a single attention function, transformers use multiple attention heads in parallel:

- Each head can focus on different aspects of the input
- Results are concatenated and projected to the final dimension

### Position Encodings

Since transformers process all tokens simultaneously (unlike RNNs), position information must be explicitly added:

- Sinusoidal position encodings
- Learned position embeddings

## Applications

Transformers power many state-of-the-art models including:

- **BERT** for natural language understanding
- **GPT** series for text generation
- **Vision Transformers** for image processing
- **T5** for text-to-text tasks

> "Attention is all you need" - The mantra of modern NLP

The transformer architecture continues to evolve with innovations like sparse attention, efficient transformers, and domain-specific adaptations.
    `
  }
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Get all posts
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
