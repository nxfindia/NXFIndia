import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, X, Film, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';

const Home: React.FC = () => {
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show modal after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setShowSubmissionModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const partners = [
    // NGO Partners (List A)
    { name: "PSBT", src: "https://arknetimages.com/wp-content/uploads/2026/02/PSBT-Logo-white-bg-1.png" },
    { name: "Mahasakti Seva Kendra", src: "https://arknetimages.com/wp-content/uploads/2026/02/Mahasakti-Seva-Kendra.png" },
    { name: "KV", src: "https://arknetimages.com/wp-content/uploads/2026/02/KV-logo-new-1.jpg" },
    { name: "Green Hub", src: "https://arknetimages.com/wp-content/uploads/2026/02/Green-Hub-2.png" },
    { name: "Dusty Foot Foundation", src: "https://arknetimages.com/wp-content/uploads/2026/02/Dusty-Foot-Foundation-2.png" },
    { name: "BNHS", src: "https://arknetimages.com/wp-content/uploads/2026/02/BNHS-GREEN-LOGO-1-2.png" },
    { name: "Toxics Link", src: "https://arknetimages.com/wp-content/uploads/2026/02/toxicslink-logo-6.jpg" },
    { name: "Srishti Films", src: "https://arknetimages.com/wp-content/uploads/2026/02/Srishti-Films-logo-Kalpavriksh-scaled.png" },
    { name: "Vikalp", src: "https://arknetimages.com/wp-content/uploads/2026/02/Vikalp-Logo.png" },
    // Institutional Partners (List B)
    { name: "Avinashilingam Institute", src: "https://arknetimages.com/wp-content/uploads/2026/02/avinashilingam_institute_for_home_science_and_high_logo.jpeg" },
    { name: "RCAS", src: "https://arknetimages.com/wp-content/uploads/2026/02/logo-rcas.jpg" },
    { name: "WCC", src: "https://arknetimages.com/wp-content/uploads/2026/02/WCC.png" },
    { name: "Partner", src: "https://arknetimages.com/wp-content/uploads/2026/02/Logo-1-scaled.png" },
    { name: "KSA", src: "https://arknetimages.com/wp-content/uploads/2026/02/KSA.jpg" }
  ];

  const testimonials = [
    // OSFF Reviews
    {
      id: 1,
      text: "It was a great experience watching my short film on the big screen. The festival was filled with lots of wonderful short films. Happy to be a part of this Festival.",
      author: "Vishal TR",
      role: "Filmmaker",
      festival: "OSFF"
    },
    {
      id: 2,
      text: "A festival with a detailed program and information along with respect for the filmmaker; I hope I will have the chance to attend the festival in the following years.",
      author: "Salahaddien Noori",
      role: "Filmmaker",
      festival: "OSFF"
    },
    {
      id: 3,
      text: "Awesome festival with great communication and professionalism. So grateful to have my short film, Salvation, screened at a beautiful cinema with new audience.",
      author: "Zane",
      role: "Filmmaker",
      festival: "OSFF"
    },
    {
      id: 6,
      text: "The festival's impeccable organization, warm hospitality, and dedication to celebrating diverse voices in filmmaking have left a lasting impression on me.",
      author: "Ravindra Mani",
      role: "Filmmaker",
      festival: "OSFF"
    },
    // ATOM Reviews
    {
      id: 101,
      text: "Didn't know documentaries about the downfall of a textile industry would be so thought provoking, on how the act of consumerism can remake or break the industry.",
      author: "Audience Member",
      role: "The T-Shirt Industry",
      festival: "ATOM"
    },
    {
      id: 103,
      text: "It inspired a sense of responsibility, encouraging individuals to take small but meaningful steps towards a healthier and more sustainable environment.",
      author: "Faculty Review",
      role: "India’s Climate Fever",
      festival: "ATOM"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-paper pt-28 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

         <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* REMOVED SUBTITLE: Celebrating Cinema & Culture */}
            
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

      {/* IMPACT METRICS SECTION (Clean & Static) */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               {/* REMOVED SUBTITLE: Our Reach */}
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Impact & Legacy</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               
               {/* ATOM Block */}
               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col h-full relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                      <div className="p-3 bg-brand-teal/10 rounded-2xl">
                         <img src="https://arknetimages.com/wp-content/uploads/2026/02/Atom-Logo-Final.jpg" alt="ATOM" className="h-12 w-auto mix-blend-multiply" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900">Atom Film Festival</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     <div className="text-center sm:text-left">
                        <div className="text-4xl font-bold text-slate-900 mb-1">
                            5
                        </div>
                        <p className="text-sm font-medium text-slate-500">Colleges Hosted</p>
                     </div>
                     <div className="text-center sm:text-left">
                        <div className="text-4xl font-bold text-slate-900 mb-1">
                            400+
                        </div>
                        <p className="text-sm font-medium text-slate-500">Documentaries</p>
                     </div>
                     <div className="text-center sm:text-left">
                        <div className="text-4xl font-bold text-slate-900 mb-1">
                            10,000+
                        </div>
                        <p className="text-sm font-medium text-slate-500">Students Impacted</p>
                     </div>
                  </div>
               </div>

               {/* OSFF Block */}
               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col h-full relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                      <div className="p-3 bg-brand-red/10 rounded-2xl">
                         <img src="https://arknetimages.com/wp-content/uploads/2026/02/OSFF-Logo-scaled.jpg" alt="OSFF" className="h-12 w-auto object-contain" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900">Ooty Short Film Festival</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     <div className="text-center sm:text-left">
                        <div className="text-4xl font-bold text-slate-900 mb-1">
                            10
                        </div>
                        <p className="text-sm font-medium text-slate-500">Years Running</p>
                     </div>
                     <div className="text-center sm:text-left">
                        <div className="text-4xl font-bold text-slate-900 mb-1">
                            1,300+
                        </div>
                        <p className="text-sm font-medium text-slate-500">Short Films</p>
                     </div>
                     <div className="text-center sm:text-left">
                        <div className="text-4xl font-bold text-slate-900 mb-1">
                            60+
                        </div>
                        <p className="text-sm font-medium text-slate-500">Countries</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* LOGO SHOWCASE: Partners Marquee */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="w-full">
          <PartnerMarquee title="Our Esteemed Partners" partners={partners} />
        </div>
      </section>

      {/* FESTIVALS: Colorful Cards */}
      <section className="py-24 px-6 bg-white">
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
                   src="https://arknetimages.com/wp-content/uploads/2026/02/03jpg.jpg" 
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
                    A unique traveling documentary film festival, hosted exclusively at educational institutions
                  </p>
                  <div className="flex justify-between items-center">
                    <img src="https://arknetimages.com/wp-content/uploads/2026/02/Atom-Logo-Final.jpg" className="h-10 w-auto opacity-50 mix-blend-multiply" alt="Atom Logo" />
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
                   src="https://arknetimages.com/wp-content/uploads/2026/02/IMG_5359-scaled.jpg" 
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
                    Celebrating global short-format storytelling amidst the unique majesty of the Blue Mountains.
                  </p>
                  <div className="flex justify-between items-center">
                    <img src="https://arknetimages.com/wp-content/uploads/2026/02/OSFF-Logo-scaled.jpg" className="h-10 w-auto object-contain opacity-70" alt="OSFF Logo" />
                    <Link to="/osff" className="text-brand-purple font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      Visit Page <ArrowRight size={18} />
                    </Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION (Single Auto Rotate) */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-10">
               <div className="inline-block bg-brand-purple/10 text-brand-purple p-3 rounded-full mb-6">
                 <Quote size={32} />
               </div>
               <h2 className="text-4xl font-serif font-bold mb-4 text-slate-900">Community Voices</h2>
               <p className="text-slate-500">What people are saying about our festivals</p>
            </div>

            <div className="relative min-h-[300px] flex items-center justify-center">
               {/* Testimonial Card */}
               <div 
                  className={`bg-white p-10 md:p-14 rounded-[2rem] shadow-2xl transition-all duration-500 transform ${
                     isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
                  }`}
               >
                  <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif italic mb-8">
                     "{testimonials[currentTestimonialIndex].text}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-red rounded-full mb-4"></div>
                     <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonialIndex].author}</h4>
                     <p className="text-slate-500 text-sm mb-2">{testimonials[currentTestimonialIndex].role}</p>
                     <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        testimonials[currentTestimonialIndex].festival === 'ATOM' 
                        ? 'bg-brand-teal/10 text-brand-teal' 
                        : 'bg-brand-red/10 text-brand-red'
                     }`}>
                        {testimonials[currentTestimonialIndex].festival}
                     </span>
                  </div>
               </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
               {testimonials.map((_, idx) => (
                  <button
                     key={idx}
                     onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                           setCurrentTestimonialIndex(idx);
                           setIsAnimating(false);
                        }, 300);
                     }}
                     className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentTestimonialIndex ? 'w-8 bg-brand-purple' : 'w-2 bg-slate-300 hover:bg-slate-400'
                     }`}
                     aria-label={`Go to testimonial ${idx + 1}`}
                  />
               ))}
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
                 
                 {/* Floating Logo - No Frame/Box */}
                 <div className="absolute -top-14 left-6 w-28 h-28 z-10 transform hover:scale-105 transition-transform">
                    <img 
                       src="https://arknetimages.com/wp-content/uploads/2026/02/Atom-Logo-Final.jpg" 
                       alt="ATOM Logo" 
                       className="w-full h-full object-contain"
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