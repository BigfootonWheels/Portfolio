import { motion } from 'framer-motion';
import { ArrowDown, Code, PaintBucket, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/BgImage.png')" }}
          ></div>
          
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/30 overflow-hidden mb-8 shadow-xl animate-float">
              <img 
                src="/MidjourneyPhoto.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold mb-4 text-white"
            >
              Mateo Schubert
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8"
            >
              Professional Prompt Wrangler & Generative Troubleshooter
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/projects" 
                className="bg-white/90 text-night-950 hover:bg-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border border-white/70 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ArrowDown className="text-white/70" size={24} />
        </div>
      </section>
      
      {/* Featured Sections Preview */}
      <section className="py-20 bg-night-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Do</h2>
            <p className="text-night-200 max-w-2xl mx-auto">
              Leveraging creativity with generative AI to build the change we want to see.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Development Card */}
            <FeatureCard 
              icon={<Code size={32} />}
              title="The Promptshop"
              description="A repository of all things developed (or in development) from or with the use of prompt engineering and generative AI."
              link="/projects"
              linkText="View Past and Current Projects"
              delay={0}
            />
            
            {/* Design Card */}
            <FeatureCard 
              icon={<PaintBucket size={32} />}
              title="The Prompt Bin"
              description="A space for the Kicks-n-Giggles of generative responses and things that have been generated against all odds."
              link="/creative"
              linkText="See My Genrated Shenanigans"
              delay={0.2}
            />
            
            {/* Experience Card */}
            <FeatureCard 
              icon={<Briefcase size={32} />}
              title="Professional Experience"
              description="A couple of years working in a variety of industries."
              link="/experience"
              linkText="My Experience"
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, link, linkText, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-night-900 border border-night-800 rounded-xl p-6 hover:border-primary-800 transition-all duration-300 group"
  >
    <div className="w-16 h-16 rounded-lg bg-primary-900/50 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-display font-semibold mb-3 text-white">{title}</h3>
    <p className="text-night-200 mb-6">{description}</p>
    <Link 
      to={link}
      className="text-primary-400 font-medium hover:text-primary-300 transition-colors"
    >
      {linkText} →
    </Link>
  </motion.div>
);

export default Home;