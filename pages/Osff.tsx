import React, { useState } from 'react';
import { MapPin, Trophy, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Osff: React.FC = () => {
  // --- Data ---
  const juryMembers = [
    { name: "Merve Betül Dural", country: "Turkey", bio: "Architect & documenter.", image: "https://nxfindia.org/wp-content/uploads/2025/10/Betul-Dural.jpeg" },
    { name: "Rostam Nazar", country: "Iran", bio: "Director of 12 films.", image: "https://nxfindia.org/wp-content/uploads/2025/10/Rostam-Nazari.jpg" },
    { name: "Hamid Vatanparast", country: "Iran", bio: "Writer, director.", image: "https://nxfindia.org/wp-content/uploads/2025/10/Hamid-3-scaled-1.jpg" },
    { name: "Amol Bhagat", country: "India", bio: "Bollywood director.", image: "https://nxfindia.org/wp-content/uploads/2025/10/Amol-1-scaled-1.jpg" },
    { name: "Afzal Khan", country: "Nepal", bio: "Creative Director.", image: "https://nxfindia.org/wp-content/uploads/2025/10/AKNP-1.jpeg" },
    { name: "Arunansh Bhatt", country: "India", bio: "Netflix Composer.", image: "https://nxfindia.org/wp-content/uploads/2025/10/Arunansh-Bhatt.png" },
    { name: "Dheeraj Jindal", country: "India", bio: "Award-winning Director.", image: "https://nxfindia.org/wp-content/uploads/2025/10/dheeraj-scaled-1.jpg" },
    { name: "Carlos Dóniz", country: "Spain", bio: "Poet & Filmmaker.", image: "https://nxfindia.org/wp-content/uploads/2025/10/Carlos-Doniz-Alamo.jpg" },
  ];

  const galleryImages = [
    { src: "https://nxfindia.org/wp-content/uploads/2025/10/IMG_5359-scaled-1.jpg", caption: "The Screening Hall" },
    { src: "https://nxfindia.org/wp-content/uploads/2025/10/IF5A9696-scaled-2.jpg", caption: "Audience Engagement" },
    { src: "https://nxfindia.org/wp-content/uploads/2025/10/JOSH0029-scaled-1.jpg", caption: "Victory Moments" },
  ];

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const nextImage = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="bg-paper min-h-screen pt-28">
      
      {/* HERO: Cinematic Title - Matched to FilmFestivals Header */}
      <section className="relative bg-brand-dark text-white py-24 px-6 lg:px-12 overflow-hidden">
        {/* Abstract light effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 bg-white p-4 rounded-xl shadow-lg">
             <img 
                src="https://nxfindia.org/wp-content/uploads/2025/09/OSFF-@-2-scaled.jpg" 
                alt="OSFF Logo" 
                className="h-24 md:h-32 w-auto object-contain"
             />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Pure Cinema in the<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Blue Mountains.</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mb-10">
            Celebrating the art of the short film against the misty backdrop of the Nilgiris.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-brand-gold transition-colors flex items-center gap-2">
              <Play size={20} fill="currentColor" /> 9th Edition 2025
            </button>
            <a href="https://forms.gle/xchE46Dee3qWuMCH8" target="_blank" className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Delegate Registration
            </a>
          </div>
        </div>
      </section>

      {/* VENUE: Clean Card Style */}
      <section className="py-24 px-6">
         <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl border border-slate-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-sm font-bold uppercase tracking-widest text-brand-purple mb-4">The Venue</h2>
                   <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Shooting Spot (9th Mile)</h3>
                   <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                     Imagine watching cinema under the open sky, surrounded by the rolling hills of Ooty. 9th Mile is not just a location; it's a character in our festival.
                   </p>
                </div>
                <div className="rounded-2xl overflow-hidden h-80 relative shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                   <img 
                     src="https://nxfindia.org/wp-content/uploads/2026/02/DSC_8087-scaled.jpg" 
                     className="w-full h-full object-cover"
                     alt="9th Mile"
                   />
                </div>
             </div>
         </div>
      </section>

      {/* JURY: Light Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-center text-4xl font-serif font-bold mb-16 text-slate-900">
             The International Jury
           </h2>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {juryMembers.map((member, i) => (
                 <div key={i} className="group text-center">
                    <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-md">
                       <img 
                         src={member.image} 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                         alt={member.name}
                       />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-1">{member.country}</p>
                    <p className="text-xs text-slate-500">{member.bio.substring(0, 50)}...</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* AWARDS: Colorful Cards */}
      <section className="py-24 px-6 bg-white">
         <div className="max-w-5xl mx-auto text-center">
            <Trophy className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-slate-900">The Golden Elephant Awards</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
               {['Best Film', 'Best Director', 'Best Screenplay', 'Best Editor', 'Best Cinematography', 'Audience Choice'].map((award, i) => (
                 <div key={i} className="bg-slate-50 border border-slate-200 px-8 py-4 rounded-full font-bold text-slate-700 hover:bg-brand-gold hover:text-white hover:border-brand-gold hover:shadow-lg transition-all cursor-default">
                    {award}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* GALLERY: Full Width with Overlay */}
      <section className="relative h-[70vh] group overflow-hidden">
         <img 
            src={galleryImages[currentGalleryIndex].src} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Gallery"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-12 flex flex-col md:flex-row justify-between items-end text-white">
             <div className="mb-6 md:mb-0">
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">Festival Moments</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold">{galleryImages[currentGalleryIndex].caption}</h2>
             </div>
             
             <div className="flex gap-4">
                <button onClick={prevImage} className="bg-white/20 hover:bg-white text-white hover:text-black p-4 rounded-full backdrop-blur-md transition-all"><ChevronLeft/></button>
                <button onClick={nextImage} className="bg-white/20 hover:bg-white text-white hover:text-black p-4 rounded-full backdrop-blur-md transition-all"><ChevronRight/></button>
             </div>
         </div>
      </section>

    </div>
  );
};

export default Osff;