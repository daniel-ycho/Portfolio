import React, { useState } from 'react';
import { ArrowRight, Download, ExternalLink, Mail, Phone, MapPin, ChevronDown, ChevronUp, Video, Share2, FileText, Github, Globe } from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import Navigation from './components/Navigation';
import { CONTACT_INFO, EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDetails = (idx: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const renderTextWithLinks = (text: string) => {
    // Regex for markdown-style links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = text.split(linkRegex);
    
    if (parts.length === 1) return text;

    const elements = [];
    for (let i = 0; i < parts.length; i += 3) {
      // Normal text
      if (parts[i]) {
        elements.push(<span key={`text-${i}`}>{parts[i]}</span>);
      }
      // Link (i+1 is text, i+2 is url)
      if (i + 1 < parts.length && i + 2 < parts.length) {
        elements.push(
          <a 
            key={`link-${i}`} 
            href={parts[i + 2]} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-wsj-blue underline hover:text-premium-black transition-colors"
          >
            {parts[i + 1]}
          </a>
        );
      }
    }
    
    return <>{elements}</>;
  };

  return (
    <div className="min-h-screen bg-white text-premium-black font-sans selection:bg-wsj-blue selection:text-white relative">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-12 max-w-[1920px] mx-auto border-b-2 border-black">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
              Marketing <br />
              <span className="italic font-light text-gray-600">&</span> Data Analytics
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-end">
             <div className="border-t border-black pt-4 mt-8 md:mt-0">
               <p className="font-sans text-sm md:text-base leading-relaxed text-gray-800 mb-6">
                 Specializing in data-driven marketing strategies, database management, and full-stack development.
               </p>
               <a 
                 href="#contact" 
                 onClick={scrollToContact}
                 className="group inline-flex items-center gap-2 font-serif italic text-lg hover:text-wsj-blue transition-colors duration-300 cursor-pointer"
               >
                 Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
          </div>
        </div>
      </header>

      {/* 01. Expertise */}
      <section id="expertise" className="scroll-mt-16 px-4 md:px-12 max-w-[1920px] mx-auto py-24 border-b border-gray-200">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <SectionHeader number="01" title="Skills" />
          
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            {SKILLS.map((category, idx) => (
              <div key={idx} className="border-t border-gray-300 pt-4">
                <h3 className="font-sans font-bold uppercase tracking-wider text-xs mb-6 text-wsj-blue">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="font-serif text-lg md:text-xl border-b border-dotted border-gray-300 pb-2 last:border-0 text-gray-800">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. Experience */}
      <section id="experience" className="scroll-mt-16 px-4 md:px-12 max-w-[1920px] mx-auto py-24 border-b border-gray-200">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <SectionHeader number="02" title="Experience" />

          <div className="col-span-12 md:col-span-9 mt-8 md:mt-0">
            {EXPERIENCE.map((job, idx) => {
              const hasContent = (job.articles && job.articles.length > 0) || (job.media && job.media.length > 0);
              
              return (
              <div key={idx} className="group mb-12 last:mb-0 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-black pt-6">
                  {/* Role & Date (Swapped to first position) */}
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl font-bold w-fit relative">
                      {job.role}
                      <span className="absolute left-0 -bottom-1 w-full h-1 bg-wsj-blue origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h3>
                    <p className="font-serif italic text-sm text-gray-500 mt-1">{job.period}</p>
                  </div>
                  
                  {/* Company & Location (Swapped to second position) */}
                  <div className="md:col-span-3">
                    <p className="font-sans font-bold text-base border-l-2 border-gray-200 pl-3 md:pl-0 md:border-0">{job.company}</p>
                    <p className="font-sans text-xs uppercase tracking-widest mt-1 text-gray-500 pl-3 md:pl-0">{job.location}</p>
                  </div>

                  <div className="md:col-span-5">
                    <ul className="space-y-2">
                      {job.description.map((desc, dIdx) => (
                        <li key={dIdx} className="font-sans text-sm leading-relaxed text-gray-700 relative pl-4">
                          <span className="absolute left-0 top-1.5 w-1 h-1 bg-black rounded-full"></span>
                          {renderTextWithLinks(desc)}
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Content (Articles & Media) */}
                    {hasContent && (
                      <div className="mt-4">
                        <button
                          onClick={() => toggleDetails(idx)}
                          className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-wsj-blue hover:text-premium-black transition-colors"
                        >
                          {expandedItems[idx] ? 'Hide Work Samples' : 'View Work Samples'}
                          {expandedItems[idx] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                        
                        {expandedItems[idx] && (
                          <div className="mt-4 pl-4 border-l border-gray-200 animate-in fade-in slide-in-from-top-1 duration-200">
                            
                            {/* Articles Section */}
                            {job.articles && job.articles.length > 0 && (
                              <div className="mb-4">
                                <h4 className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
                                  <FileText size={12} /> Published Articles
                                </h4>
                                <div className="space-y-2">
                                  {job.articles.map((article, aIdx) => (
                                    <a
                                      key={aIdx}
                                      href={article.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block font-serif text-sm text-gray-600 hover:text-wsj-blue transition-colors"
                                    >
                                      {article.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Media Section */}
                            {job.media && job.media.length > 0 && (
                              <div>
                                <h4 className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
                                  <Video size={12} /> Multimedia & Campaigns
                                </h4>
                                <div className="space-y-2">
                                  {job.media.map((item, mIdx) => (
                                    <a
                                      key={mIdx}
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group/media flex items-center gap-3 font-serif text-sm text-gray-600 hover:text-wsj-blue transition-colors p-2 -ml-2 rounded hover:bg-gray-50"
                                    >
                                      <div className="text-gray-400 group-hover/media:text-wsj-blue">
                                        {item.type === 'video' ? <Video size={16} /> : 
                                         item.type === 'repo' ? <Github size={16} /> :
                                         item.type === 'website' ? <Globe size={16} /> :
                                         <Share2 size={16} />}
                                      </div>
                                      <span>{item.title}</span>
                                      <ExternalLink size={12} className="opacity-0 group-hover/media:opacity-100 transition-opacity" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* 03. Projects */}
      <section id="projects" className="scroll-mt-16 px-4 md:px-12 max-w-[1920px] mx-auto py-24 border-b border-gray-200 bg-premium-gray/30">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <SectionHeader number="03" title="Projects" />

          <div className="col-span-12 md:col-span-9 mt-8 md:mt-0">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {PROJECTS.map((project, idx) => (
                 <div key={idx} className="bg-white border border-gray-200 p-8 hover:border-black transition-colors duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-2xl mb-1">{project.name}</h3>
                        <span className="font-sans text-xs bg-black text-white px-2 py-1 uppercase tracking-widest">{project.role}</span>
                      </div>
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-400 hover:text-wsj-blue transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="font-sans text-sm text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100 font-sans text-xs font-mono text-gray-500">
                      Stack: {project.tech}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 04. Education & Contact */}
      <section id="contact" className="scroll-mt-16 px-4 md:px-12 max-w-[1920px] mx-auto py-24">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
           <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
             <h2 className="font-serif text-5xl mb-8">Education</h2>
             {EDUCATION.map((edu, idx) => (
               <div key={idx} className="border-l-4 border-black pl-6 py-2">
                  <h3 className="font-sans font-bold text-lg">{edu.school}</h3>
                  <p className="font-serif italic text-gray-600 mb-2">{edu.degree}</p>
                  <div className="flex gap-4 font-sans text-xs uppercase tracking-wider text-gray-500">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
               </div>
             ))}
           </div>

           <div className="col-span-12 md:col-start-7 md:col-span-6">
              <h2 className="font-serif text-5xl mb-8">Contact</h2>
              <div className="border border-black p-8 md:p-12">
                 <div className="grid grid-cols-1 gap-8">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                       <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-wsj-blue transition-colors">
                          <Mail size={20} />
                       </div>
                       <div>
                          <span className="block font-sans text-xs uppercase tracking-widest text-gray-500">Email</span>
                          <span className="font-serif text-xl md:text-2xl">{CONTACT_INFO.email}</span>
                       </div>
                    </a>
                    
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                       <div className="w-12 h-12 bg-white border border-black text-black flex items-center justify-center group-hover:border-wsj-blue group-hover:text-wsj-blue transition-colors">
                          <Phone size={20} />
                       </div>
                       <div>
                          <span className="block font-sans text-xs uppercase tracking-widest text-gray-500">Phone</span>
                          <span className="font-serif text-xl md:text-2xl">{CONTACT_INFO.phone}</span>
                       </div>
                    </a>

                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-gray-100 text-gray-400 flex items-center justify-center">
                          <MapPin size={20} />
                       </div>
                       <div>
                          <span className="block font-sans text-xs uppercase tracking-widest text-gray-500">Location</span>
                          <span className="font-serif text-xl md:text-2xl">{CONTACT_INFO.location}</span>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <a 
                      href={`https://${CONTACT_INFO.linkedin}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-wsj-blue font-sans font-bold hover:underline"
                    >
                      LINKEDIN PROFILE
                    </a>
                    <button className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">
                      <Download size={14} /> Download Resume
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <footer className="bg-premium-black text-white py-12 px-4 md:px-12">
         <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6 font-sans text-xs text-gray-500">
               © 2025 Daniel Cho. All Rights Reserved.
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;