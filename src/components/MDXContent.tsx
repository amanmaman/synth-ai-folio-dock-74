
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MDXContentProps {
  content: React.ComponentType<any> | string;
}

const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
  // If content is a React component (MDX), render it directly
  if (typeof content === 'function') {
    const MDXComponent = content;
    return (
      <article className="prose prose-lg max-w-none">
        <MDXComponent />
      </article>
    );
  }
  
  // If content is a string (markdown), render it with ReactMarkdown
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-semibold mb-6" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="mb-4 ml-6 list-disc" {...props} />,
          ol: ({ node, ...props }) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
          li: ({ node, ...props }) => <li className="mb-2" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
          code: ({ node, inline, className, children, ...props }: any) => 
            inline ? 
              <code className="bg-gray-100 text-gray-800 p-1 rounded" {...props}>{children}</code> : 
              <pre className="bg-gray-100 p-4 rounded overflow-auto mb-4"><code {...props}>{children}</code></pre>,
          blockquote: ({ node, ...props }) => 
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
        }}
      >
        {content as string}
      </ReactMarkdown>
    </article>
  );
};

export default MDXContent;
