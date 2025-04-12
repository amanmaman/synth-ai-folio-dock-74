
import { useEffect, useState } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content?: string;
}

export const useMDXFile = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        const module = await import(`../content/blog/${slug}.mdx`);
        
        // Extract frontmatter
        const { title, excerpt, date, category, readTime, image } = module.frontmatter;
        
        setPost({
          slug,
          title, 
          excerpt, 
          date, 
          category, 
          readTime,
          image: image || "/placeholder.svg",
          content: module.default
        });
      } catch (err) {
        console.error("Error loading MDX file:", err);
        setError(err instanceof Error ? err : new Error('Failed to load post'));
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  return { post, isLoading, error };
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const modules = import.meta.glob('../content/blog/*.mdx', { eager: true });
  
  return Object.entries(modules)
    .map(([filePath, module]) => {
      const { frontmatter } = module as any;
      const slug = filePath.split('/').pop()?.replace('.mdx', '') || '';
      
      return {
        slug,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        date: frontmatter.date,
        category: frontmatter.category,
        readTime: frontmatter.readTime,
        image: frontmatter.image || "/placeholder.svg"
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
