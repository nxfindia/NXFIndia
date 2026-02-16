import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, X, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  useEffect(() => {
    // Show modal after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setShowSubmissionModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-paper pt-28 overflow-x-hidden">
      
      {/* HERO SECTION: Vibrant & Welcoming */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

         <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
              <Star className="w-4 h-4 text-brand-gold fill-current" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-600">Celebrating Cinema & Culture</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              Where <span className="text-gradient">Stories</span> Come<br/>To Life.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              NilgirisNext Foundation is a vibrant hub for art, ecology, and film. We foster creativity through world-class festivals and community initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
               <Link to="/film-festivals" className="bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-brand-dark/20 hover:transform hover:scale-105 transition-all">
                 Explore Festivals
               </Link>
               <Link to="/about" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center gap-2 justify-center">
                 Our Story <ArrowRight size={18} />
               </Link>
            </div>
         </div>
      </section>

      {/* LOGO SHOWCASE: Partners */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">Our Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90">
             
             {/* RCAS */}
             <div className="group text-center">
               <img 
                 src="https://nxfindia.org/wp-content/uploads/2025/06/logo-rcas.jpg" 
                 alt="RCAS" 
                 className="h-20 md:h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
               />
             </div>

             {/* Toxics Link */}
             <div className="group text-center">
               <img 
                 src="https://nxfindia.org/wp-content/uploads/2025/06/Toxics-Link-25-years-011.jpg" 
                 alt="Toxics Link" 
                 className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
               />
             </div>
          </div>
        </div>
      </section>

      {/* FESTIVALS: Colorful Cards */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Signature Festivals</h2>
             <p className="text-xl text-slate-600">Events that spark imagination and dialogue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* ATOM Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-100">
               <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent z-10"></div>
                 <img 
                   src="https://nxfindia.org/wp-content/uploads/2026/02/554779184_18044772803660685_3012708290004693332_n.webp.jpeg" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   alt="Atom Film Festival"
                 />
                 <div className="absolute bottom-6 left-8 z-20">
                   <span className="bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase mb-2 inline-block">Documentary & Sci-Fi</span>
                   <h3 className="text-3xl font-serif font-bold text-white">ATOM Film Festival</h3>
                 </div>
               </div>
               <div className="p-8">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    A unique traveling festival exploring the intersection of science, reality, and cinema.
                  </p>
                  <div className="flex justify-between items-center">
                    <img src="https://nxfindia.org/wp-content/uploads/2025/06/Atom-Logo-1.jpg" className="h-10 w-auto opacity-50 mix-blend-multiply" />
                    <Link to="/atom" className="text-brand-purple font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
               </div>
            </div>

            {/* OSFF Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-100">
               <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent z-10"></div>
                 <img 
                   src="https://nxfindia.org/wp-content/uploads/2025/06/IMG_5230-scaled.jpg" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   alt="OSFF"
                 />
                 <div className="absolute bottom-6 left-8 z-20">
                   <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-2 inline-block">Short Film</span>
                   <h3 className="text-3xl font-serif font-bold text-white">Ooty Short Film Festival</h3>
                 </div>
               </div>
               <div className="p-8">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Celebrating short-format storytelling in the heart of the Blue Mountains.
                  </p>
                  <div className="flex justify-between items-center">
                    <img src="https://nxfindia.org/wp-content/uploads/2025/09/OSFF-@-2-scaled.jpg" className="h-10 w-auto object-contain opacity-70" />
                    <Link to="/osff" className="text-brand-purple font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      Visit Page <ArrowRight size={18} />
                    </Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION: Vibrant Gradient */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-red opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
           <Heart className="w-16 h-16 mx-auto mb-6 text-white/80 animate-bounce" />
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Join the Movement</h2>
           <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
             Whether you're a filmmaker, artist, or art lover, there's a place for you at NilgirisNext.
           </p>
           <Link to="/contact" className="inline-block bg-white text-brand-purple px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-brand-gold hover:text-brand-dark transition-colors">
             Get In Touch
           </Link>
        </div>
      </section>

      {/* SUBMISSION POPUP - REDESIGNED */}
      {showSubmissionModal && (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 max-w-xs md:max-w-sm w-full animate-in slide-in-from-bottom-10 fade-in duration-700">
           <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative font-sans">
              
              {/* Close Button */}
              <button 
                onClick={() => setShowSubmissionModal(false)}
                className="absolute top-3 right-3 p-2 bg-black/10 hover:bg-black/20 text-white rounded-full transition-colors z-20 backdrop-blur-md"
              >
                <X size={16} />
              </button>

              {/* Header Image - Red Gradient */}
              <div className="h-28 bg-gradient-to-br from-brand-red to-rose-700 relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                 <Film className="text-white/10 w-32 h-32 absolute -bottom-8 -right-8 transform -rotate-12" />
              </div>

              {/* Body Content */}
              <div className="px-6 pb-6 pt-3 relative bg-white">
                 
                 {/* Floating Logo - No Frame, Bigger Size */}
                 <div className="absolute -top-14 left-6 w-28 h-28 z-10 filter drop-shadow-xl transform hover:scale-105 transition-transform">
                    <img 
                       src="https://nxfindia.org/wp-content/uploads/2025/06/Atom-Logo-1.jpg" 
                       alt="ATOM Logo" 
                       className="w-full h-full object-contain rounded-xl"
                    />
                 </div>

                 {/* Title Section (Aligned left next to logo space) */}
                 <div className="flex items-end mb-4 pt-1">
                     {/* Spacer for Logo */}
                     <div className="w-28 flex-shrink-0"></div> 
                     
                     <div className="pl-3 text-left">
                        <h3 className="font-serif font-bold text-slate-900 text-xl leading-none mb-1">Filmmakers!</h3>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-red">Global Call for Entries</p>
                     </div>
                 </div>
                 
                 <p className="text-slate-600 text-sm leading-relaxed mb-6 text-left">
                   ATOM Film Festival is now open. Submit your documentary and share your story with the world.
                 </p>

                 <div className="flex gap-3">
                   <a 
                     href="https://filmmakers.festhome.com/f/9456" 
                     target="_blank"
                     rel="noreferrer"
                     className="flex-1 bg-brand-dark text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-purple transition-all shadow-lg shadow-brand-dark/20 flex items-center justify-center gap-2 group"
                   >
                     Submit Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </a>
                   <button 
                     onClick={() => setShowSubmissionModal(false)}
                     className="px-4 py-3 text-slate-400 font-bold text-sm hover:bg-slate-50 hover:text-slate-600 rounded-xl transition-colors"
                   >
                     Later
                   </button>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default Home;