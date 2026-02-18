import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent inline-block">NilgirisNext.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              Uniting art, culture, and earth for a sustainable human future.
            </p>
            <div className="flex gap-4">
               {[
                 { i: Instagram, l: 'https://instagram.com/nxfindia' }, 
                 { i: Facebook, l: 'https://www.facebook.com/nxfindia' }, 
                 { i: Youtube, l: 'https://youtube.com/@nilgirifilmclub' }, 
                 { i: Mail, l: 'mailto:contact@nxfindia.org' }
               ].map((s, i) => (
                 <a key={i} href={s.l} target={s.i !== Mail ? "_blank" : undefined} rel={s.i !== Mail ? "noreferrer" : undefined} className="bg-slate-800 p-3 rounded-full hover:bg-brand-purple hover:-translate-y-1 transition-all">
                   <s.i size={20} />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Mission</Link></li>
              <li><Link to="/film-festivals" className="hover:text-brand-gold transition-colors">All Festivals</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Connect</h3>
            <p className="text-slate-400 mb-2">Coimbatore & The Nilgiris</p>
            <p className="text-slate-400">Tamil Nadu, India</p>
            <a href="mailto:contact@nxfindia.org" className="text-brand-purple font-bold mt-4 inline-block">contact@nxfindia.org</a>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NilgirisNext Foundation.</p>
          <p>Designed with ❤️ for Culture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;