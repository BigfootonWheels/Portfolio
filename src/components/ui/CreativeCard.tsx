import { motion } from 'framer-motion';

export interface CreativeWork {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: string;
}

interface CreativeCardProps {
  work: CreativeWork;
  index: number;
}

const CreativeCard = ({ work, index }: CreativeCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <img 
        src={work.image} 
        alt={work.title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 to-transparent flex flex-col justify-end p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-xs font-medium py-1 px-2 bg-accent-600/80 text-white rounded self-start mb-2">
          {work.category}
        </div>
        <h3 className="text-lg font-display font-semibold text-white">
          {work.title}
        </h3>
        <p className="text-night-100 text-sm">
          {work.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default CreativeCard;