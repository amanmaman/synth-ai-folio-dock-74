
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, type BlogPost } from "@/lib/mdx";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Blog</h1>
      
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <div key={post.slug} className="grid md:grid-cols-3 gap-6 items-start">
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
