import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night-900 py-8 border-t border-night-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-display font-bold bg-gradient-to-r from-accent-300 to-twilight-300 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-night-400 mt-2">
              © {year} Mateo Schubert. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/BigfootonWheels" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-night-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mateoschubert/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-night-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              //href="https://twitter.com" 
              //target="_blank" 
              //rel="noopener noreferrer"
              //className="text-night-400 hover:text-white transition-colors"
              //aria-label="Twitter"
            >
            </a>
            <a 
          
            >
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;