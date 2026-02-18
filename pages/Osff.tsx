import React, { useState } from 'react';
import { MapPin, Trophy, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Osff: React.FC = () => {
  // --- Data ---
  const juryMembers = [
    {
      name: "Afzal Khan",
      country: "Nepal",
      bio: "Afzal Khan is a multidisciplinary creative professional with over two decades of experience. His work spans creative direction, advertising films, art direction, photography, graphic design, writing, interior design, and marketing communication.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Afzal-Khan.jpg"
    },
    {
      name: "Akshay Prakash Vaskar",
      country: "Mumbai (Dadar), India",
      bio: "Akshay Prakash Vaskar is an Indian film director working across short films, ad films, and television serials. He has directed over 35 short films and multiple advertising projects.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Akshay-Prakash-Vaskar.jpg"
    },
    {
      name: "Amol Bhagat",
      country: "Maharashtra, India",
      bio: "Amol Bhagat is an Indian filmmaker, writer, and film marketing professional with more than twelve years of experience. He is among the youngest writer-directors working in Bollywood.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Amol-Bhagat.png"
    },
    {
      name: "Armin Azizi",
      country: "Sanandaj, Iran",
      bio: "Born in 1993, Armin Azizi is an actor, director, writer, and producer. He began working in film in 2005 and has been professionally active since 2017.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Armin-Azizi.jpeg"
    },
    {
      name: "Arunansh Bhatt",
      country: "Lucknow / New Delhi, India",
      bio: "Arunansh Bhatt is a filmmaker and music composer from Lucknow. He has composed for advertising films, documentaries, short films, and feature projects.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Arunansh-Bhatt.png"
    },
    {
      name: "Carlos Dóniz Álamo",
      country: "Tenerife, Spain",
      bio: "Carlos Dóniz Álamo is a filmmaker and screenwriter with a strong passion for storytelling. He began his creative journey through poetry, which led him to discover cinema.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Carlos-Doniz-Alamo.jpg"
    },
    {
      name: "Dheeraj Jindal",
      country: "Mumbai, India",
      bio: "Dheeraj Jindal is a Mumbai-based filmmaker working across fiction, non-fiction, and advertising. His debut short film The School Bag was screened at 106 international festivals.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Dheeraj-Jindal.jpg"
    },
    {
      name: "Dinu Dinesh Kumar",
      country: "Tamil Nadu, India",
      bio: "Dinu Dinesh Kumar is an award-winning filmmaker and academician. He has directed acclaimed short films, documentaries, PSAs, and music videos.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Dinu-Dinesh-Kumar-2.jpeg"
    },
    {
      name: "Dr. C Guna Sekaran",
      country: "Coimbatore, India",
      bio: "Dr. C Guna Sekaran is the Campus Head of Rathinam Group of Institutions. With a career spanning over four decades, he has held leadership positions at companies such as Royal Enfield.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Dr-C-Guna-Sekaran.jpg"
    },
    {
      name: "Hamid Vatanparast",
      country: "Iran",
      bio: "Hamid Vatanparast is a writer, director, and producer known for his narrative-driven approach to filmmaking. His films emphasize character development and structured storytelling.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Logo-1-scaled.png" 
    },
    {
      name: "Mani Natarajan",
      country: "Chennai, India",
      bio: "Mani Natarajan is a cinematographer, film director, short story writer, and street dramatist with over 25 years of experience in the Tamil film industry.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Maninatarajan.jpg"
    },
    {
      name: "Md Ashraful Alam (Ashraf Shishir)",
      country: "Dhaka, Bangladesh",
      bio: "Md Ashraful Alam, professionally known as Ashraf Shishir, is a Bangladeshi filmmaker, scriptwriter, and human rights advocate. He has served as a juror at more than 50 international film festivals.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Md-Ashraful-Alam-Ashraf-Shishir.jpg"
    },
    {
      name: "Merve Betül Dural (Betty Güler)",
      country: "Turkey / Germany",
      bio: "Merve Betül Dural, also known as Betty Güler, is an architect and visual storyteller. She is currently pursuing professional photography training in Germany.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Merve-Betul-Dural-scaled.jpeg"
    },
    {
      name: "MinSeok Jeon",
      country: "South Korea",
      bio: "MinSeok Jeon is a Professor of Cartoon Animation at Joongbu University. He holds a BFA in Animation from Hongik University and an MFA in Computer Art from SVA.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/MinSeok-Jeon.jpg"
    },
    {
      name: "Nithya Gopalakrishnan",
      country: "Chennai, India",
      bio: "Nithya Gopalakrishnan is a filmmaker and storyteller with expertise in short films, documentaries, and digital media. She has contributed to multiple international and national film projects.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Logo-1-scaled.png"
    },
    {
      name: "Orangel Manuel Lugo Valles",
      country: "Península de Paraguaná, Venezuela",
      bio: "Orangel Manuel Lugo Valles graduated from the National Film School in 2015. He directed and wrote short films including Guasare, Mireyita, Agua Potable, and La Bejuca.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Orangel-Manuel-Lugo-Valles.jpg"
    },
    {
      name: "Ram Arunachalam",
      country: "Chennai, India",
      bio: "Ram Arunachalam is an actor, filmmaker, and writer with extensive experience in Tamil cinema, web series, short films, and commercials.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Ram-Arunachalam.jpg"
    },
    {
      name: "Ravindran Mani D",
      country: "Bangalore, India",
      bio: "Ravindran Mani D is a filmmaker and creative professional based in Bangalore with more than a decade of experience. He has worked in feature films, shorts, commercials, and digital content.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/RAVINDRAN-MANI-D.jpg"
    },
    {
      name: "Rostam Nazar",
      country: "Iran",
      bio: "Rostam Nazar is an Iranian director with experience in short films and documentaries. He has created twelve films that have been screened at more than fifty international festivals.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/Rostam-Nazar.png"
    },
    {
      name: "Salaheedin Nooori",
      country: "Iran",
      bio: "Born in 1983, Salaheedin Nooori is a director, writer, and producer. In addition to filmmaking, he holds a law degree and practices as a legal professional.",
      image: "https://arknetimages.com/wp-content/uploads/2026/02/SALAHEEDIN-NOOORI.jpg"
    }
  ];

  const galleryImages = [
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5359-scaled.jpg", caption: "The Screening Hall" },
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5385-scaled.jpg", caption: "Festival Highlights" },
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5364-scaled.jpg", caption: "Audience Engagement" },
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5352-scaled.jpg", caption: "Cinematic Moments" },
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5322-scaled.jpg", caption: "Cultural Exchange" },
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5230-scaled.jpg", caption: "Short Film Celebration" },
    { src: "https://arknetimages.com/wp-content/uploads/2026/02/IMG_5228-scaled.jpg", caption: "In the Blue Mountains" }
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
                src="https://arknetimages.com/wp-content/uploads/2026/02/OSFF-Logo-scaled.jpg" 
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
                     src="https://arknetimages.com/wp-content/uploads/2026/02/DSC_8087-scaled.jpg" 
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

           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {juryMembers.map((member, i) => (
                 <div key={i} className="group text-center">
                    <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-md bg-white">
                       <img 
                         src={member.image} 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                         alt={member.name}
                       />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-2">{member.country}</p>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{member.bio}</p>
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