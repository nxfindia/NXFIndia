import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/about' },
  { 
    label: 'Festivals', 
    path: '/film-festivals',
    children: [
      { label: 'ATOM Film Festival', path: '/atom' },
      { label: 'Ooty Short Film Festival', path: '/osff' }
    ]
  },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleMouseEnter = (label: string) => setActiveDropdown(label);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md transition-all duration-300">
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center bg-white/95">
        
        {/* Brand - Logo Only */}
        <Link to="/" className="flex items-center group relative z-50" onClick={() => setIsOpen(false)}>
           <img 
             src="https://arknetimages.com/wp-content/uploads/2026/02/NNF-logo-scaled.png" 
             alt="NilgirisNext Foundation" 
             className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-md"
           />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center h-full gap-8">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative h-full flex items-center"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`relative px-4 py-2 text-base font-bold tracking-wide transition-colors rounded-full hover:bg-slate-50 ${
                  location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
                    ? 'text-brand-purple' 
                    : 'text-slate-700 hover:text-brand-purple'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={16} className="inline ml-1 mb-0.5 stroke-[3px]" />}
              </Link>

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-[85%] left-0 w-64 bg-white border border-slate-100 rounded-xl shadow-xl p-2 animate-in fade-in zoom-in-95 duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-3 text-sm font-bold text-slate-600 rounded-lg hover:text-brand-purple hover:bg-purple-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors relative z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-32 px-6 overflow-y-auto h-screen w-screen">
          <div className="flex flex-col gap-6 pb-20">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-4">
                 <Link 
                   to={item.path}
                   onClick={() => setIsOpen(false)}
                   className="text-3xl font-serif font-bold text-slate-900 block mb-3"
                 >
                   {item.label}
                 </Link>
                 {item.children && (
                   <div className="pl-4 flex flex-col gap-3">
                      {item.children.map(child => (
                        <Link 
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-slate-500 hover:text-brand-purple transition-colors block"
                        >
                          {child.label}
                        </Link>
                      ))}
                   </div>
                 )}
              </div>
            ))}

            <div className="mt-8 text-slate-400 text-sm">
                <p className="font-bold uppercase tracking-widest mb-2">Connect</p>
                <p>Coimbatore & The Nilgiris</p>
                <p>contact@nxfindia.org</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;