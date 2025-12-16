import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {SECTIONS} from '../data/sections'; 
import {COLOR} from "../colors/color"; 

const smoothScroll = (id) => {
  const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

const Navbar = ({activeSection}) => {
  const [isOpen, setIsOpen] = useState(false); 

    const handleNavigate = (id) => {
    smoothScroll(id);
    setIsOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition duration-300 ${COLOR.PRIMARY_COLOR} shadow-xl backdrop-blur-sm bg-opacity-95`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
           
          <div className="shrink-0 text-3xl font-extrabold tracking-tight">
            <a href="#" onClick={(e) => {
                          e.preventDefault();
                          handleNavigate('home');
                        }}
                className="text-white hover:text-amber-400 transition duration-300">
                <span className={COLOR.ACCENT_COLOR}>&lt;</span>
                N<span className={COLOR.SECONDARY_COLOR}>.M</span>engaw
                <span className={COLOR.ACCENT_COLOR}>/&gt;</span>
            </a>
          </div>
 
          <div className="hidden md:flex space-x-8">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href="#"
                onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(section.id);
                    }}
                className={`text-lg font-medium py-2 transition duration-300 ${
                  activeSection === section.id
                    ? `${COLOR.ACCENT_COLOR} border-b-2 border-amber-400`
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500/50'
                }`}
              >
                {section.name}
              </a>
            ))}
          </div>
 
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
 
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-start">
            {SECTIONS.map((section) => (
               <a
                  key={section.id}
                  href="#"
                  onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(section.id);
                    }}
                  className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                    activeSection === section.id
                      ? `bg-gray-800 ${COLOR.ACCENT_COLOR}`
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;