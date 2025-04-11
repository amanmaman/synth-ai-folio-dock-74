
const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript/TypeScript", "C++", "Java", "SQL"]
  },
  {
    category: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI API", "Computer Vision", "NLP"]
  },
  {
    category: "Web Development",
    items: ["React", "Node.js", "Next.js", "HTML/CSS", "GraphQL", "REST APIs"]
  },
  {
    category: "Data Science",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Data Visualization", "Statistical Analysis"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Google Cloud", "VS Code", "Jupyter", "Linux"]
  }
];

const SkillsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Skills</h1>
      
      <div className="space-y-12">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h2 className="text-2xl font-light mb-4">{skill.category}</h2>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <div 
                  key={item} 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-light mb-6">Learning Journey</h2>
        <div className="space-y-4">
          <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="text-xl font-medium">Advanced Deep Learning</h3>
            <p className="text-gray-600">Currently exploring transformer architectures and reinforcement learning techniques</p>
          </div>
          <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
            <h3 className="text-xl font-medium">Game AI Development</h3>
            <p className="text-gray-600">Combining my passion for gaming with AI to create intelligent NPCs</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
            <h3 className="text-xl font-medium">Cloud Computing & Distributed Systems</h3>
            <p className="text-gray-600">Learning how to deploy ML models at scale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
