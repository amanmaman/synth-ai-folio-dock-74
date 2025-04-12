
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useMDXFile } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, isLoading, error } = useMDXFile(slug || "");

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
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
      
      {post.content && <MDXContent content={post.content} />}
    </div>
  );
};

export default BlogPostPage;
