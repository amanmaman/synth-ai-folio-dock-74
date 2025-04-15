
import { useState, useEffect } from 'react';
import { getPostBySlug, getAllPosts, BlogPost } from '../data/blog-posts';

// Export BlogPost interface for reuse
export type { BlogPost };

export const useMDXFile = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        const foundPost = getPostBySlug(slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          throw new Error(`Post with slug "${slug}" not found`);
        }
      } catch (err) {
        console.error("Error loading post:", err);
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

export { getAllPosts } from '../data/blog-posts';
