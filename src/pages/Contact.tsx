import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Section from '../components/ui/Section';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  return (
    <div className="pt-24">
      <Section
        title="Get In Touch"
        subtitle="Have a question or want to work together? Reach out to me."
      >
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-2/5"
          >
            <div className="bg-night-900 border border-night-800 rounded-xl p-6 md:p-8 shadow-lg h-full">
              <h3 className="text-2xl font-display font-semibold mb-6 text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<MapPin size={20} />}
                  title="Location"
                  value="Planet Earth, The Solar System, The Milky Way Galaxy"
                  href="#"
                />
              </div>
              
              <div className="mt-8 pt-6 border-t border-night-800">
                <h4 className="text-sm font-medium text-night-300 mb-4">
                  CONNECT WITH ME
                </h4>
                <div className="flex space-x-4">
                  <SocialLink 
                    href="https://github.com/BigfootonWheels" 
                    icon={<Github size={18} />}
                    label="GitHub"
                  />
                  <SocialLink 
                    href="https://www.linkedin.com/in/mateoschubert/" 
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                  />
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-night-800">
                <h4 className="text-sm font-medium text-night-300 mb-3">
                  AVAILABILITY
                </h4>
                <p className="text-night-200">
                  Currently studying and roaming the Earth, but available for freelance work and collaborations.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <div className="md:w-3/5">
            <ContactForm />
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        className="bg-night-900/50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <FaqItem
              question="What services do you offer?"
              answer="I specialise in leveraging AI and automative processes to develop and build creative digital solutions. This includes building responsive websites, applications, systems, graphic design, and helping with brand identity."
              delay={0}
            />
            
            <FaqItem
              question="What is your typical process for working with a new client?"
              answer="I start with a discovery call to understand your project needs, goals, and timeline. Then, I provide a proposal outlining scope, deliverables, and timeline. Once approved, I move into design and development phases with regular check-ins and feedback sessions."
              delay={0.1}
            />
            
            <FaqItem
              question="How do you charge for your services?"
              answer="I offer both project-based and hourly pricing models. For well-defined projects, I typically charge a fixed project fee. For ongoing work or projects with evolving scope, an hourly rate is often more suitable."
              delay={0.2}
            />
            
            <FaqItem
              question="How long does a typical project take?"
              answer="Project timelines vary based on complexity and scope. A simple website might take 5-10 days, while a complex web application could take 4-6 weeks. I'll provide a more accurate timeline after our initial consultation."
              delay={0.3}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

// Contact Info Item Component
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactInfoItem = ({ icon, title, value, href }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400 mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-night-300 mb-1">
        {title}
      </h4>
      <a 
        href={href}
        className="text-white hover:text-primary-400 transition-colors"
      >
        {value}
      </a>
    </div>
  </div>
);

// Social Link Component
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-night-800 flex items-center justify-center text-night-400 hover:bg-primary-900/30 hover:text-primary-400 transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

// FAQ Item Component
interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FaqItem = ({ question, answer, delay }: FaqItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-night-900 border border-night-800 rounded-xl p-6 hover:border-primary-800 transition-all duration-300"
  >
    <h3 className="text-lg font-display font-semibold mb-3 text-white">
      {question}
    </h3>
    <p className="text-night-200">
      {answer}
    </p>
  </motion.div>
);

function ContactForm() {
  const [state, handleSubmit] = useForm("xbloybab");
  if (state.succeeded) {
      return <p className="text-green-500 text-lg font-semibold">Thanks for reaching out!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="bg-night-900 border border-night-800 rounded-xl p-8 shadow-lg flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-night-200 font-medium">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg bg-night-800 border border-night-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-night-200 font-medium">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          className="px-4 py-3 rounded-lg bg-night-800 border border-night-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-night-200 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          rows={6}
          className="px-4 py-3 rounded-lg bg-night-800 border border-night-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all resize-none"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {state.submitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}

export default Contact;