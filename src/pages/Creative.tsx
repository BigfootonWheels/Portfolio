import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import CreativeCard, { CreativeWork } from '../components/ui/CreativeCard';

// Sample creative works data
const creativeWorksData: CreativeWork[] = [
  {
    id: 'creative-1',
    title: 'Image Blending',
    caption: '',
    image: '/MidjourneyPhoto.png',
    category: 'Midjourney',
  },
  {
    id: 'creative-2',
    title: 'A Cartoon Rendition of Fido',
    caption: '',
    image: '/Fido.png',
    category: 'Sora—Art',
  },
  {
    id: 'creative-3',
    title: 'A Black Hole',
    caption: '',
    image: 'BlackHoleGif.gif',
    category: 'Sora—Video',
  },
  // {
  //   id: 'creative-4',
  //   title: '3D Character Design',
  //   caption: 'Character modeling for animation project',
  //   image: 'https://images.pexels.com/photos/939807/pexels-photo-939807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: '3D Design',
  // },
  // {
  //   id: 'creative-5',
  //   title: 'Typography Exploration',
  //   caption: 'Playing with fonts and typographic layouts',
  //   image: 'https://images.pexels.com/photos/5708064/pexels-photo-5708064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'Typography',
  // },
  // {
  //   id: 'creative-6',
  //   title: 'Branding Concept',
  //   caption: 'Visual identity design for a fictional cafe',
  //   image: 'https://images.pexels.com/photos/1293006/pexels-photo-1293006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'Branding',
  // },
  // {
  //   id: 'creative-7',
  //   title: 'Urban Sketching',
  //   caption: 'Quick architectural drawings from city explorations',
  //   image: 'https://images.pexels.com/photos/1037991/pexels-photo-1037991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'Sketching',
  // },
];

// Get unique categories
const categories = ['All', ...new Set(creativeWorksData.map(work => work.category))];

const Creative = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredWorks = activeCategory === 'All' 
    ? creativeWorksData 
    : creativeWorksData.filter(work => work.category === activeCategory);

  return (
    <div className="pt-24">
      <Section
        title="Creative Explorations"
        subtitle="Personal projects and creative experiments beyond professional work"
      >
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-accent-600 text-white'
                  : 'bg-night-800 text-night-200 hover:bg-night-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Creative Works Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredWorks.map((work, index) => (
            <CreativeCard
              key={work.id}
              work={work}
              index={index}
            />
          ))}
        </motion.div>
        
        {filteredWorks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-night-400 text-lg">
              No creative works found in this category.
            </p>
          </motion.div>
        )}
      </Section>
      
      {/* Creative Process
      <Section
        title="My Creative Process"
        subtitle="How I approach creative work and exploration"
        className="bg-night-900/50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProcessStep
              number="01"
              title="Inspiration"
              description="Drawing inspiration from nature, art, music, and everyday experiences."
              delay={0}
            />
            <ProcessStep
              number="02"
              title="Experimentation"
              description="Playing with tools, techniques, and concepts without expectations."
              delay={0.2}
            />
            <ProcessStep
              number="03"
              title="Refinement"
              description="Iterating and improving on promising ideas and directions."
              delay={0.4}
            />
          </div>
        </div>
      </Section> */}
    </div>
  );
};

// Process Step Component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ number, title, description, delay }: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-night-900 border border-night-800 rounded-xl p-6 relative overflow-hidden group"
  >
    <span className="absolute top-0 right-0 font-display text-8xl font-bold text-accent-500/10 transform translate-x-4 -translate-y-4 group-hover:text-accent-500/20 transition-colors">
      {number}
    </span>
    <h3 className="text-xl font-display font-semibold text-white mb-3 relative z-10">
      {title}
    </h3>
    <p className="text-night-200 relative z-10">
      {description}
    </p>
  </motion.div>
);

export default Creative;