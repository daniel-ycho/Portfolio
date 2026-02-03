import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <div className="col-span-12 md:col-span-3 border-t border-black pt-4 mb-8 md:mb-0">
      <div className="flex flex-col font-sans text-xs tracking-widest uppercase text-gray-500 mb-2">
        <span>Section {number}</span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl leading-tight font-medium">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;