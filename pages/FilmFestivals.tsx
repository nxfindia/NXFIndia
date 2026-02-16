import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Calendar, Globe } from 'lucide-react';

const FilmFestivals: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-28">
      
      {/* Header */}
      <div className="bg-brand-dark text-white py-24 px-6 lg:px-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/30 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"></div>
         
         <div className="max-w-7xl mx-auto relative z-10 text-center">
           <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6">Our Festivals</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
             We curate experiences that inspire, challenge, and entertain. Discover our premier film initiatives.
           </p>
         </div>
      </div>

      {/* ATOM Section */}
      <div id="atom" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
           <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                 <div className="flex gap-4 mb-8">
                   <div className="bg-brand-gold/20 text-brand-gold-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                     <Film size={14}/> Documentary
                   </div>
                   <div className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                     <Globe size={14}/> Sci-Fi
                   </div>
                 </div>
                 
                 <img 
                   src="https://arknetimages.com/wp-content/uploads/2026/02/Atom-Logo-Final.jpg" 
                   alt="ATOM Logo" 
                   className="h-20 w-auto object-contain self-start mb-8 mix-blend-multiply"
                 />
                 
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark">ATOM Film Festival</h2>
                 
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   ATOM (Art and Technology of Media) is a cutting-edge festival exploring the boundaries of reality. It serves as a bridge between scientific inquiry and cinematic storytelling, traveling across India to engage with students and creators.
                 </p>
                 
                 <div className="flex flex-wrap gap-6">
                    <Link to="/atom" className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-purple transition-colors flex items-center gap-2">
                      Explore Full Festival <ArrowRight size={18}/>
                    </Link>
                 </div>
              </div>
              
              <div className="bg-slate-900 relative min-h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974" 
                   className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                   alt="ATOM Vibes"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
                 <div className="absolute bottom-12 left-12 right-12 text-white">
                    <p className="text-2xl font-serif italic">"Illuminating realities through the lens."</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* OSFF Section */}
      <div id="osff" className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-brand-dark text-white rounded-[3rem] shadow-2xl overflow-hidden relative">
           {/* Decorative blobs */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="order-2 lg:order-1 relative min-h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2000" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80"
                   alt="OSFF Vibes"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 to-brand-dark"></div>
              </div>
              
              <div className="order-1 lg:order-2 p-12 lg:p-20 flex flex-col justify-center">
                 <div className="flex gap-4 mb-8">
                   <div className="bg-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                     <Film size={14}/> Short Film
                   </div>
                   <div className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                     <Globe size={14}/> International
                   </div>
                 </div>
                 
                 <div className="bg-white p-4 rounded-xl inline-block w-fit mb-8 shadow-lg">
                   <img 
                     src="https://arknetimages.com/wp-content/uploads/2026/02/OSFF-Logo-scaled.jpg" 
                     alt="OSFF Logo" 
                     className="h-16 w-auto object-contain"
                   />
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ooty Short Film Festival</h2>
                 
                 <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                   Set against the misty backdrop of the Blue Mountains, OSFF celebrates the art of brevity. We bring global independent cinema to local audiences, free of charge.
                 </p>
                 
                 <div className="flex flex-wrap gap-6">
                    <Link to="/osff" className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-gold transition-colors flex items-center gap-2">
                      Explore Festival Page <ArrowRight size={18} />
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FilmFestivals;