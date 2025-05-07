import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Heart } from 'lucide-react';
import Section from '../components/ui/Section';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24">
      {/* About Hero */}
      <section className="py-12 md:py-20 bg-night-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden"
              >
                <img 
                  src="/MidjourneyPhoto.png" 
                  alt="Profile" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-night-950/70 to-transparent"></div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/3"
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                About Me
              </h1>
              <p className="text-night-200 text-lg mb-6 leading-relaxed">
               A biotechnology graduate who has transitioned to a tech-oriented skill set, utilising AI
               learned through specialized certifications in AI, automation, content development. I am 
               a certified AI automation specialist with expertise in building intelligent systems through 
               LangChain, Flowise, and no-code automation platforms like Make.com. My technical foundation 
               spans generative AI implementation, chatbot development, process automation, and content creation 
               using cutting-edge tools and frameworks.
              </p>
              <p className="text-night-200 text-lg mb-6 leading-relaxed">
               Recently certified in AI-Agent development with LangChain and advanced Make.com implementation, I 
               specialise in creating solutions that leverage the latest AI technologies, including LLMs, diffusion
               models, generative models, and automation tools. My technical toolkit includes prompt engineering, 
               Retrieval-Augmented Generation (RAG), web-hook integration, API implementation, and more.  
              </p>
              <p className="text-night-200 text-lg leading-relaxed">
                When I'm not coding, you can find me hiking or sending it on the trails, lifting weights, or cooking something up.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <Section 
        title="My Skills"
        subtitle="Technologies and tools I work with on a regular basis"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Development Skills */}
          <motion.div 
            variants={itemVariants}
            className="bg-night-900 border border-night-800 rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center mb-4 text-primary-400">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4 text-white">
              Development and Generation
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <SkillTag label="ChatGPT" level={95} />
              <SkillTag label="Claude" level={85} />
              <SkillTag label="Replit" level={70} />
              <SkillTag label="Cursor" level={75} />
              <SkillTag label="Lovable.dev" level={65} />
              <SkillTag label="Bolt.new" level={95} />
            </div>
          </motion.div>
          
          {/* Design Skills */}
          <motion.div 
            variants={itemVariants}
            className="bg-night-900 border border-night-800 rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-900/50 flex items-center justify-center mb-4 text-accent-400">
              <PaintBucket size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4 text-white">
              Generative Design and Automation
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <SkillTag label="Sora" level={95} color="accent" />
              <SkillTag label="Midjourney" level={90} color="accent" />
              <SkillTag label="Dall-E 3" level={80} color="accent" />
              <SkillTag label="Flowise" level={80} color="accent" />
              <SkillTag label="Make" level={95} color="accent" />
              <SkillTag label="LangGraph" level={80} color="accent" />
            </div>
          </motion.div>
        </motion.div>
      </Section>
      
      {/* Experience & Education */}
      <Section
        title="Background"
        subtitle="My professional journey and educational background"
        className="bg-night-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center mr-4 text-primary-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <TimelineItem 
                title="English Language Data Annotator"
                organization="Transperfect"
                duration="2024"
                description="Leading the frontend development team, implementing new features, and improving the overall user experience."
              />
              
              <TimelineItem 
                title="Online Sales Assistant"
                organization="Dynamic Energy Crystals"
                duration="2021"
                description="Aided the store owner in managing the online store and transaction services."
              />
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary-900/50 flex items-center justify-center mr-4 text-secondary-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
            <TimelineItem 
                title="Completed AI-Agents: Automation & Business with LangChain & LLM Apps by Arnold Oberleiter"
                organization="Udemy"
                duration="2025"
              />
              <TimelineItem 
                title="Completed Make Advanced"
                organization="Make"
                duration="2025"
              />
              <TimelineItem 
                title="Completed Make Intermediate"
                organization="Make"
                duration="2025"
              />
              <TimelineItem 
                title="Completed ChatGPT, Midjourney, DALL-E 3 & APIs - The Complete Guide by Maximilian Schwarzmüller and Manuel Lorenz"
                organization="Make"
                duration="2025"
              />
              <TimelineItem 
                title="Advanced Diploma in Biotechnology"
                organization="Centennial College"
                duration="2021 - 2024"
                description="Specialized in Biotechnology and Microbiological Techniques."
              />
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Personal Interests */}
      <Section
        title="Interests & Hobbies"
        subtitle="What I enjoy outside of work"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <InterestCard 
            icon={<Camera size={24} />}
            title="Mountain Biking"
            description="Getting out and sending it on the trails."
            delay={0}
          />
          <InterestCard 
            icon={<Hiking size={24} />}
            title="Weightlifting"
            description="Seeing how hard I can push myself before I feel like I'm going to collapse."
            delay={0.1}
          />
          <InterestCard 
            icon={<Book size={24} />}
            title="Hiking"
            description="Alone, with people, but especially with my dog."
            delay={0.2}
          />
          <InterestCard 
            icon={<Music size={24} />}
            title="Cooking"
            description="I like to see how well I can feed myself."
            delay={0.3}
          />
        </motion.div>
      </Section>
    </div>
  );
};

// Skill Tag Component
interface SkillTagProps {
  label: string;
  level: number;
  color?: 'primary' | 'accent';
}

const SkillTag = ({ label, level, color = 'primary' }: SkillTagProps) => {
  const getColorClasses = () => {
    return color === 'primary'
      ? 'bg-primary-900/30 border-primary-700/50 text-primary-300'
      : 'bg-accent-900/30 border-accent-700/50 text-accent-300';
  };
  
  return (
    <div className={`border ${getColorClasses()} rounded-lg p-3 relative overflow-hidden group`}>
      <div 
        className={`absolute bottom-0 left-0 h-1 ${
          color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
        }`}
        style={{ width: `${level}%` }}
      ></div>
      <span className="font-medium">{label}</span>
    </div>
  );
};

// Timeline Item Component
interface TimelineItemProps {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const TimelineItem = ({ title, organization, duration, description }: TimelineItemProps) => (
  <div className="border-l-2 border-night-700 pl-4 pb-1">
    <h4 className="text-lg font-display font-medium text-white mb-1">{title}</h4>
    <div className="flex justify-between items-center mb-2">
      <p className="text-primary-400">{organization}</p>
      <span className="text-night-400 text-sm">{duration}</span>
    </div>
    <p className="text-night-200">{description}</p>
  </div>
);

// Interest Card Component
interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const InterestCard = ({ icon, title, description, delay }: InterestCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay }
      }
    }}
    className="bg-night-900 border border-night-800 rounded-xl p-5 flex flex-col items-center text-center"
  >
    <div className="w-12 h-12 rounded-full bg-twilight-900/50 flex items-center justify-center mb-4 text-twilight-400">
      {icon}
    </div>
    <h3 className="font-display font-semibold mb-2 text-white">{title}</h3>
    <p className="text-night-200 text-sm">{description}</p>
  </motion.div>
);

// Icon Components
const PaintBucket = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M19 11h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2"></path>
    <path d="M4 5v-.5A1.5 1.5 0 0 1 5.5 3h12A1.5 1.5 0 0 1 19 4.5v.5"></path>
    <path d="M4 18.5A1.5 1.5 0 0 0 5.5 20h7"></path>
    <path d="M9 3v17"></path>
    <path d="M4 12h7"></path>
    <path d="M4 16h4"></path>
    <path d="M4 8h7"></path>
    <path d="m19 16 2 2v-2"></path>
  </svg>
);

const Camera = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
);

const Hiking = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m18 10 2 9"></path>
    <path d="m14 4 2 9 2-4"></path>
    <path d="m10 4-2 12-2-4"></path>
    <path d="m4 12 3 8"></path>
    <path d="M10 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
  </svg>
);

const Book = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
  </svg>
);

const Music = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

export default About;