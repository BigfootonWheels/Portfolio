import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ProjectCard, { Project } from '../components/ui/ProjectCard';

// Sample project data
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Portfolio',
    description: "A personal Portfolio that I've built using Bolt.new and Cursor with the aid of different tools.",
    image: './Demo2.png',
    tags: ['Bolt.new', 'Cursor', 'Sora', 'Tailwind.css', 'Claude', 'ChatGPT'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
    inProgress: true,
  },
  {
    id: 'project-2',
    title: 'Open Heart Healing',
    description: 'Less builfing, more renovating when it came to this project. Spent most of my time generating and fine-tuning the graphics.',
    image: './Demo1.png',
    tags: ['SquareSpace', 'Midjourney', 'Sora', 'CSS'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
    inProgress: false,
  },
  {
    id: 'project-3',
    title: 'Quantum Spaces',
    description: "A website I've built using Bolt.new and cursor with the aid of more tools. Offers BioGeometry services to clients and interested parties.",
    image: './Demo3.png',
    tags: ['Bolt.new', 'Cursor', 'Tailwind.css', 'Claude', 'ChatGPT'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
    inProgress: true,
  },
  // {
  //   id: 'project-4',
  //   title: 'Fitness Tracker',
  //   description: 'An app for tracking workouts, nutrition, and fitness progress with visualization.',
  //   image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['Vue.js', 'Vuex', 'Express', 'PostgreSQL'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   inProgress: false,
  // },
  // {
  //   id: 'project-5',
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website showcasing my work and skills with a dark mode design.',
  //   image: 'https://images.pexels.com/photos/13406108/pexels-photo-13406108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   inProgress: false,
  // },
  // {
  //   id: 'project-6',
  //   title: 'Recipe Sharing Platform',
  //   description: 'A community platform for sharing and discovering recipes with user ratings and comments.',
  //   image: 'https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   inProgress: false,
  // },
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'current' | 'completed'>('all');
  
  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'current') return project.inProgress === true;
    if (filter === 'completed') return project.inProgress === false;
    return true;
  });

  return (
    <div className="pt-24">
      <Section
        title="My Projects"
        subtitle="A collection of my recent work and ongoing projects"
      >
        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-night-700 p-1 bg-night-900">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'text-night-300 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('current')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === 'current'
                  ? 'bg-primary-600 text-white'
                  : 'text-night-300 hover:text-white'
              }`}
            >
              Current
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === 'completed'
                  ? 'bg-primary-600 text-white'
                  : 'text-night-300 hover:text-white'
              }`}
            >
              Completed
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-night-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </Section>
      
      {/* Call to Action */}
      <Section
        title="Let's Work Together"
        subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life."
        className="bg-night-900/50"
      >
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group"
          >
            <a
              href="/contact"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white py-4 px-8 rounded-lg font-medium text-lg inline-block transition-all"
            >
              Get in Touch
              <span className="ml-2">→</span>
            </a>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;