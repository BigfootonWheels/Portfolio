import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  inProgress?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-night-900 rounded-xl overflow-hidden shadow-lg border border-night-800 hover:border-primary-800 transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.inProgress === true && (
          <div className="absolute top-3 right-3 bg-primary-700 text-white text-xs px-2 py-1 rounded-md">
            In Progress
          </div>
        )}
        {project.inProgress === false && (
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
            Completed
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-display font-semibold mb-2 text-white">
          {project.title}
        </h3>
        
        <p className="text-night-200 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-night-800 text-night-100 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-night-400 hover:text-white flex items-center gap-1 text-sm transition-colors"
            >
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 flex items-center gap-1 text-sm transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;