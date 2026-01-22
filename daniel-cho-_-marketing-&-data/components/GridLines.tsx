import React from 'react';

const GridLines: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 max-w-[1920px] mx-auto w-full opacity-[0.03]">
        {/* Render 12 column lines for visual structure */}
      {Array.from({ length: 13 }).map((_, i) => (
        <div key={i} className="h-full w-px bg-black hidden md:block" />
      ))}
      {/* Mobile lines */}
      <div className="h-full w-px bg-black block md:hidden left-4 absolute" />
      <div className="h-full w-px bg-black block md:hidden right-4 absolute" />
    </div>
  );
};

export default GridLines;