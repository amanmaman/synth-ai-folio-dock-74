
declare module '*.mdx' {
  import type { ComponentType } from 'react';
  
  export const frontmatter: {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image?: string;
  };
  
  const MDXContent: ComponentType;
  export default MDXContent;
}
