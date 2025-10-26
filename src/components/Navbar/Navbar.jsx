import React, { useState } from 'react';

const links = ['About', 'News', 'Services', 'Our Team', 'Make Enquiry'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ContactUsButton = ({ className = '' }) => (
    <a
      href="#"
      className={`flex items-center gap-2 border border-gray-800 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-gray-800 hover:text-white ${className}`}
    >
      Contact us
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
      </svg>
    </a>
  );

  return (
    <nav className="flex items-center justify-between py-4 px-4 lg:py-4 lg:px-8 border-b border-gray-200 bg-white relative">
      
      <div className="hidden lg:flex items-center justify-between w-full">
        
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-800">
          {links.map((label) => (
            <li key={label}>
              <a href="#" className="hover:text-gray-500 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ContactUsButton />
      </div>

      {/* -------------------- MOBILE -------------------- */}
      <div className="flex lg:hidden items-center justify-between w-full">
        
        <div className="text-xl font-bold text-gray-900">
            <ContactUsButton className="w-full justify-center" />
        </div> 
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-300 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {/* SVG for the three-line hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 z-50 transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2 text-base font-medium text-gray-800">
          {links.map((label) => (
            <li key={label} className="py-2 border-b border-gray-100">
              <a href="#" className="block hover:text-gray-500 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;