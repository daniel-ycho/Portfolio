import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: '01. Expertise', id: 'expertise' },
    { label: '02. Experience', id: 'experience' },
    { label: '03. Projects', id: 'projects' },
    { label: '04. Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 h-16 flex items-center justify-between">
        <div 
          className="font-helvetica font-bold text-xl tracking-tight uppercase cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          DANIEL CHO
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-helvetica text-xs uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleScroll(e, item.id)}
              className="hover:text-wsj-blue transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-wsj-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-premium-black p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-black shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleScroll(e, item.id)}
                className="font-helvetica text-lg uppercase tracking-widest font-bold text-premium-black hover:text-wsj-blue flex items-center justify-between group"
              >
                {item.label}
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-wsj-blue">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;