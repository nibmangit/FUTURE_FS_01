import { ChevronRight, Github } from 'lucide-react';
import { COLOR } from '../colors/color';
import AnimatedWraper from './AnimatedWrapper';

const ProjectCard = ({ project, index }) => {
  const { title, description, imagePlaceholder, techStack, githubLink, demoLink } = project;
  
  return (
    <AnimatedWraper delay={index * 150} animation="fadeInUp">
    <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-amber-500/20 transition duration-500 transform hover:scale-[1.02] border border-gray-700/50">
      <div className="h-48 bg-gray-700 p-4 flex items-center justify-center text-center">
        {imagePlaceholder ? (
            <img
            src={imagePlaceholder}
            alt={`${title} Screenshot`}
            className="object-cover w-full h-full rounded-lg"
            />
        ) : (
            <div className="text-gray-400 text-xl font-bold uppercase tracking-wider">
            <span className={COLOR.ACCENT_COLOR}>&lt;</span>{imagePlaceholder}<span className={COLOR.ACCENT_COLOR}>/&gt;</span>
            </div>
        )}
        </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition duration-300">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
         
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300 border border-blue-800">
              {tech}
            </span>
          ))}
        </div>
 
        <div className="flex space-x-4 pt-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center text-amber-400 hover:text-amber-300 transition duration-200"
          >
            Live Demo <ChevronRight className="w-4 h-4 ml-1" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center text-gray-400 hover:text-white transition duration-200"
          >
            <Github className="w-4 h-4 mr-1" /> Code
          </a>
        </div>
      </div>
    </div>
    </AnimatedWraper>
  );
};

export default ProjectCard;