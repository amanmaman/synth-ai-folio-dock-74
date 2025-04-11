
const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">About Me</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Alex Chen" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <p>
            I'm a Computer Science student specializing in Machine Learning and Artificial Intelligence. 
            My journey in tech started when I was 15, building simple games and experimenting with algorithms.
          </p>
          
          <p>
            Currently pursuing my Master's degree, I focus on deep learning architectures and their applications
            in computer vision and natural language processing. I'm particularly interested in how AI can be used
            to solve real-world problems and improve human-computer interaction.
          </p>
          
          <p>
            When I'm not coding or researching, I enjoy immersing myself in the challenging world of Elden Ring
            or strategizing my next move in chess. I find that gaming enhances my problem-solving abilities and
            provides valuable insights that I can apply to my technical work.
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-medium mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium">MSc in Computer Science</div>
                <div className="text-gray-600">Stanford University, 2022-Present</div>
              </li>
              <li>
                <div className="font-medium">BSc in Computer Science</div>
                <div className="text-gray-600">MIT, 2018-2022</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
