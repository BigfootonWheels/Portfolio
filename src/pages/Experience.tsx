import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ExperienceCard, { Experience as ExperienceType } from '../components/ui/ExperienceCard';

// Sample experience data
const experienceData: ExperienceType[] = [
  {
    id: 'exp-1',
    role: 'Data Annotator',
    company: 'Transperfect',
    duration: '2024',
    description: 'Leading the frontend development team, implementing new features, and improving user experience.',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    id: 'exp-2',
    role: 'Online Sales Assistant',
    company: 'Dynamic Energy Crystals',
    duration: '2021',
    description: 'Aided the store owner in managing the online store and transaction services.',
    skills: ['UI/UX Design', 'React', 'SCSS', 'Figma'],
  },
];

// Sample certification data
const certifications = [
  {
    id: 'cert-1',
    title: 'AI-Agents: Automation & Business with LangChain & LLM Apps by Arnold Oberleiter',
    issuer: 'Udemy',
    date: 'April 2025',
  },
  {
    id: 'cert-2',
    title: 'Make Advanced',
    issuer: 'Make (Integromat)',
    date: 'March 2025',
  },
  {
    id: 'cert-3',
    title: 'Make Intermediate',
    issuer: 'Make (Integromat)',
    date: 'March 2025',
  },
  {
    id: 'cert-4',
    title: 'ChatGPT, Midjourney, DALL-E 3 & APIs - The Complete Guide by Maximilian Schwarzmüller and Manuel Lorenz',
    issuer: 'Udemy',
    date: 'February 2025',
  },
];

const Experience = () => {
  return (
    <div className="pt-24">
      {/* Professional Experience */}
      <Section
        title="Work Experience"
        subtitle="My professional journey and roles"
      >
        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              total={experienceData.length}
            />
          ))}
        </div>
      </Section>
      
      {/* Certifications */}
      <Section
        title="Certifications"
        subtitle="Professional certifications and achievements"
        className="bg-night-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-night-900 border border-night-800 rounded-xl p-5 hover:border-secondary-800 transition-all duration-300"
            >
              <div className="mb-4 h-10 flex items-center">
                <span className="text-4xl font-display font-bold text-secondary-500/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-secondary-400 mb-1">{cert.issuer}</p>
              <p className="text-night-400 text-sm mb-3">{cert.date}</p>
              <div className="pt-2 border-t border-night-800 text-night-300 text-sm">
                Credential: {cert.credential}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Skills Overview */}
      <Section
        title="Technical Skills"
        subtitle="Tools and technologies I use in my workflow"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <SkillCategory
              title="LLMS"
              skills={['ChatGPT', 'Claude', 'Perplexity']}
              delay={0}
            />
            <SkillCategory
              title="IDEs"
              skills={['Bolt.new', 'V0', 'Replit', 'Lovable.dev', 'Cursor']}
              delay={0.1}
            />
            <SkillCategory
              title="Automative Processes"
              skills={['Make', 'Flowise']}
              delay={0.2}
            />
            <SkillCategory
              title="Design"
              skills={['Figma', 'Sora', 'Midjourney', 'SquareSpace']}
              delay={0.3}
            />
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

// Skill Category Component
interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-night-900 border border-night-800 rounded-xl p-5"
  >
    <h3 className="text-lg font-display font-semibold text-white mb-4">
      {title}
    </h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center text-night-200">
          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Experience;