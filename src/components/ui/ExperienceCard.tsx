import { motion } from 'framer-motion';

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  total: number;
}

const ExperienceCard = ({ experience, index, total }: ExperienceCardProps) => {
  const isOdd = index % 2 !== 0;
  const isLast = index === total - 1;

  return (
    <div className={`flex flex-col md:flex-row relative ${!isLast ? 'pb-8' : ''}`}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 md:left-1/2 top-8 bottom-0 w-0.5 bg-primary-800/50 -ml-px"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 top-5 -ml-2.5 md:-ml-3 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-primary-500 bg-night-950 z-10"></div>
      
      {/* Content card */}
      <motion.div 
        initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`bg-night-900 border border-night-800 p-5 rounded-xl ml-10 md:ml-0 w-full md:w-5/12 ${
          isOdd ? 'md:ml-auto' : 'md:mr-auto'
        }`}
      >
        <h3 className="text-lg font-display font-semibold text-white">
          {experience.role}
        </h3>
        <div className="flex justify-between items-center mb-3">
          <p className="text-primary-400 font-medium">
            {experience.company}
          </p>
          <span className="text-night-400 text-sm">
            {experience.duration}
          </span>
        </div>
        <p className="text-night-200 mb-4">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span 
              key={skill} 
              className="bg-night-800 text-night-100 text-xs px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;