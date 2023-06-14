import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row items-center justify-between text-sm bg-slate-800 mb-20 font-mono text-gray-300">
      <p className="ml-5 bg-slate-800 text-white">Making Daily Updates :)</p>

      {/* Dropdown trigger button - only visible on small screens */}
      <button className="md:hidden bg-blue-500 text-white px-2 py-1 rounded" onClick={handleMenuClick}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Dropdown content - visible on small screens when isOpen is true, and always visible on medium and larger screens */}
      <div className={`dropdown-menu ${isOpen ? 'md:block' : 'hidden'} bg-slate-800 w-screen fixed top-0 right-0 z-10 flex flex-col gap-10 text-gray-300 px-10 py-5 overflow-y-auto max-h-screen`}>
        <button className="absolute top-2 right-2 bg-blue-500 text-white rounded p-1" onClick={handleMenuClick}>
          ✖
        </button>
        <div>
          <p className="font-mono" onClick={handleOptionClick}>
            <span className="text-blue-400 px-3">01.</span>About
          </p>
          <p onClick={handleOptionClick}>
            <span className="text-blue-400 px-3">02.</span>Professional Experience
          </p>
          <p onClick={handleOptionClick}>
            <span className="text-blue-400 px-3">03.</span>Projects
          </p>
          <a href="Nicholas_Vinokour_Resume.pdf" onClick={handleOptionClick}>
            <button className="animate-pulse rounded-none bg-slate-800 border-blue-400 border-solid border-2 px-3 w-auto">
              Resume
            </button>
          </a>
        </div>
      </div>

      {/* Navigation - only visible on medium and larger screens */}
      <div className="hidden md:flex flex-row py-5 gap-10 text-gray-300 px-10">
        <p className="font-mono">
          <span className="text-blue-400 px-3">01.</span>About
        </p>
        <p>
          <span className="text-blue-400 px-3">02.</span>Professional Experience
        </p>
        <p>
          <span className="text-blue-400 px-3">03.</span>Projects
        </p>
        <a href="Nicholas_Vinokour_Resume.pdf">
          <button className="animate-pulse rounded-none bg-slate-800 border-blue-400 border-solid border-2 px-3 w-auto">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

