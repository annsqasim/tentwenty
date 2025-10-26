import React from 'react'

const Navbar = () => {
  const links = ['About', 'News', 'Services', 'Our Team', 'Make Enquiry']

  return (
    <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-200 bg-white">
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-800">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="hover:text-gray-500 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="flex items-center gap-2 border border-gray-800 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200"
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
    </nav>
  )
}

export default Navbar;