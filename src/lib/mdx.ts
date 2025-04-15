
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
        
        // Extract metadata (previously frontmatter)
        const metadata = module.metadata || module.frontmatter || {};
        
        setPost({
          slug,
          title: metadata.title || 'Untitled', 
          excerpt: metadata.excerpt || 'No excerpt available', 
          date: metadata.date || new Date().toISOString().split('T')[0], 
          category: metadata.category || 'Uncategorized', 
          readTime: metadata.readTime || '1 min read',
          image: metadata.image || "/placeholder.svg",
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
        
        // Extract filename as slug
        const slug = filePath.split('/').pop()?.replace('.mdx', '') || '';
        
        // Handle case when metadata/frontmatter is missing
        const metadata = moduleAny.metadata || moduleAny.frontmatter || {};
        if (!metadata.title) {
          console.log(`Creating default metadata for: ${filePath}`);
        }
        
        return {
          slug,
          title: metadata.title || `Post: ${slug}`,
          excerpt: metadata.excerpt || 'Post content',
          date: metadata.date || new Date().toISOString().split('T')[0],
          category: metadata.category || 'Uncategorized',
          readTime: metadata.readTime || '1 min read',
          image: metadata.image || "/placeholder.svg"
        };
      })
      .filter(Boolean) // Filter out null entries
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
};
