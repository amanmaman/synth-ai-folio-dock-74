
import { useEffect, useState } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content?: React.ComponentType<any> | string;
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
        const { frontmatter } = module;
        
        setPost({
          slug,
          title: frontmatter.title, 
          excerpt: frontmatter.excerpt, 
          date: frontmatter.date, 
          category: frontmatter.category, 
          readTime: frontmatter.readTime,
          image: frontmatter.image || "/placeholder.svg",
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
  try {
    const modules = import.meta.glob('../content/blog/*.mdx', { eager: true });
    
    return Object.entries(modules)
      .map(([filePath, module]) => {
        const moduleAny = module as any;
        
        // Check if frontmatter exists before accessing properties
        if (!moduleAny.frontmatter) {
          console.error(`No frontmatter found for file: ${filePath}`);
          return null;
        }
        
        const { frontmatter } = moduleAny;
        const slug = filePath.split('/').pop()?.replace('.mdx', '') || '';
        
        return {
          slug,
          title: frontmatter.title || 'Untitled',
          excerpt: frontmatter.excerpt || 'No excerpt available',
          date: frontmatter.date || new Date().toISOString().split('T')[0],
          category: frontmatter.category || 'Uncategorized',
          readTime: frontmatter.readTime || '1 min read',
          image: frontmatter.image || "/placeholder.svg"
        };
      })
      .filter(Boolean) // Filter out null entries
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
};
