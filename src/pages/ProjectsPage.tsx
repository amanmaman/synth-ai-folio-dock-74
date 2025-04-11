
const projects = [
  {
    id: 1,
    title: "Neural Network Visualization Tool",
    description: "An interactive web application for visualizing neural network architectures and training processes.",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Chess AI Engine",
    description: "A chess engine using minimax algorithm with alpha-beta pruning, enhanced with machine learning for position evaluation.",
    tech: ["Python", "PyTorch", "C++"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Game Behavior Analysis",
    description: "Analyzing player behavior in Elden Ring using machine learning to identify patterns and predict player decisions.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "NLP for Academic Research",
    description: "A tool to analyze and categorize academic papers using natural language processing techniques.",
    tech: ["Python", "BERT", "spaCy", "Flask"],
    image: "/placeholder.svg"
  }
];

const ProjectsPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={`/projects/${project.id}`} 
                className="text-black font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
