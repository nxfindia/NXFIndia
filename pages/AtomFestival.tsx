import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Leaf, Users, Globe, BookOpen, Target, Film, Handshake, ArrowRight, Building, X, Info } from 'lucide-react';

const AtomFestival: React.FC = () => {
  const location = useLocation();
  const [showVisionModal, setShowVisionModal] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showVisionModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVisionModal]);

  return (
    <div className="bg-paper min-h-screen pt-28">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 overflow-hidden bg-brand-dark text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
           <img 
             src="https://nxfindia.org/wp-content/uploads/2025/06/Atom-Logo-1.jpg" 
             alt="ATOM Film Festival" 
             className="h-32 md:h-40 w-auto object-contain mx-auto mb-8 mix-blend-screen filter brightness-150 contrast-125"
           />
           
           <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
             Illuminating Realities,<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-gold">Igniting Dialogue.</span>
           </h1>
           
           <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
             NXF's groundbreaking documentary series exploring the vital intersection of Ecology, Culture, and Society.
           </p>

           <button 
             onClick={() => setShowVisionModal(true)}
             className="inline-flex items-center gap-2 border border-brand-teal text-brand-teal px-8 py-3 rounded-full hover:bg-brand-teal hover:text-white transition-all font-bold tracking-wide"
           >
             Discover the Vision <ArrowRight size={18}/>
           </button>
        </div>
      </section>

      {/* CALL FOR ENTRIES BANNER */}
      <section className="bg-gradient-to-r from-brand-red to-rose-600 text-white py-16 px-6 text-center shadow-lg relative z-20">
         <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
               Global Call for Entries
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Submit Your Documentary</h2>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
               ATOM Film Festival is now open for submissions. We invite filmmakers from around the world to share their stories.
            </p>
            <a href="https://filmmakers.festhome.com/f/9456" target="_blank" className="inline-flex items-center gap-2 bg-white text-brand-red px-10 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-brand-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
               <Film size={20} /> Submit via Festhome
            </a>
         </div>
      </section>

      {/* INTRODUCTION / VISION (Keeping the cards for visual structure, but detailed text is in modal) */}
      <section id="vision" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
           <span className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4 block">An NXF Initiative</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-brand-dark">More Than A Festival</h2>
           <p className="text-lg text-slate-600 leading-relaxed mb-12">
             Welcome to ATOM, a forward-thinking initiative by NilgirisNext Foundation where documentary film becomes a powerful tool for change. ATOM is not a one-time event; it is a <strong className="text-brand-dark">multi-edition, multi-institutional traveling festival</strong> designed to spark vital conversations on the pressing truths of our time.
           </p>
        </div>

        {/* The Three Pillars */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
           {/* Ecology */}
           <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 hover:shadow-xl transition-all group">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Ecology</h3>
              <p className="text-emerald-800/80 leading-relaxed">
                Confronting the climate crisis, exploring conservation, and championing environmental justice for a sustainable future.
              </p>
           </div>

           {/* Culture */}
           <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 hover:shadow-xl transition-all group">
              <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-rose-600" size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-rose-900 mb-4">Culture</h3>
              <p className="text-rose-800/80 leading-relaxed">
                Preserving heritage, examining identity, and amplifying the stories of indigenous and marginalized communities.
              </p>
           </div>

           {/* Society */}
           <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all group">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Society</h3>
              <p className="text-blue-800/80 leading-relaxed">
                Investigating social inequities, technological disruption, and the future of our interconnected world.
              </p>
           </div>
        </div>
      </section>

      {/* LEADERSHIP & PARTNERS */}
      <section className="py-24 px-6 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            {/* Leadership & Knowledge Partner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Arun Vaddi */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden h-full">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Target size={120} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold mb-2">Visionary Leadership</h3>
                   <p className="text-brand-purple font-bold mb-6">Chaired by Mr. Arun Vaddi</p>
                   <p className="text-slate-600 leading-relaxed mb-6">
                     An internationally acclaimed filmmaker recognized at Cannes and Tribeca, and a pioneering environmental leader. His unique expertise ensures a curatorial vision that challenges perspectives and champions the intersection of art and ecology.
                   </p>
                </div>

                {/* Knowledge Partnerships */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden h-full">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <BookOpen size={120} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold mb-4">Knowledge Partnerships</h3>
                   <p className="text-slate-600 leading-relaxed mb-6">
                     NXFindia collaborates with respected national and international non-governmental organizations, educational institutions, research bodies, and government agencies to ensure that our programs are grounded in intellectual rigor and real-world relevance.
                   </p>
                </div>
            </div>

         </div>
      </section>

      {/* PARTNER / GET INVOLVED */}
      <section id="partner" className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden scroll-mt-20">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Partner with ATOM</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Be part of a new wave of documentary engagement. Whether you are a corporation or an institution, let's create impact together.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Become a Sponsor */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                 <div className="bg-brand-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-gold/30">
                    <Handshake size={32} className="text-brand-dark" />
                 </div>
                 <h3 className="text-3xl font-serif font-bold mb-4">Become a Sponsor</h3>
                 <p className="text-slate-300 leading-relaxed mb-8">
                   Align your brand with thought leadership and youth engagement. Partnering with ATOM means investing in a future of social and environmental responsibility. Support specific awards, screenings, or the entire festival tour.
                 </p>
                 <Link to="/contact?intent=sponsor" className="inline-block bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                   Inquire Sponsorship
                 </Link>
              </div>

              {/* Become a Host */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                 <div className="bg-brand-teal w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-teal/30">
                    <Building size={32} className="text-white" />
                 </div>
                 <h3 className="text-3xl font-serif font-bold mb-4">Become a Host</h3>
                 <p className="text-slate-300 leading-relaxed mb-8">
                   Bring the ATOM experience to your campus or institution. As a host partner, you provide the venue and audience, and we bring world-class documentaries, filmmakers, and expert panels to spark meaningful dialogue in your community.
                 </p>
                 <Link to="/contact?intent=host" className="inline-block bg-brand-teal text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-colors">
                   Host a Festival Edition
                 </Link>
              </div>

           </div>
        </div>
      </section>

      {/* VISION MODAL */}
      {showVisionModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md transition-opacity" 
            onClick={() => setShowVisionModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col">
             
             {/* Sticky Close Header */}
             <div className="sticky top-0 right-0 left-0 bg-white/95 backdrop-blur-sm p-4 flex justify-between items-center border-b border-slate-100 z-20 px-6 md:px-10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Vision Statement</span>
                <button 
                  onClick={() => setShowVisionModal(false)} 
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-brand-red"
                >
                  <X size={24} />
                </button>
             </div>

             <div className="p-8 md:p-16 space-y-12">
                
                {/* Header */}
                <div className="text-center space-y-4">
                   <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">ATOM Film Festival</h2>
                   <p className="text-xl md:text-2xl text-brand-purple font-serif italic">Ecology, Culture, and Society</p>
                   <div className="w-16 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
                   <p className="text-sm font-bold uppercase tracking-widest text-slate-500 pt-4">An initiative of NilgirisNext Foundation for Art & Culture (NXF)</p>
                </div>

                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-center md:text-left">
                   <p>
                     Welcome to <strong className="text-brand-dark">ATOM</strong> — a platform where the pressing truths of our time are explored through the powerful medium of non-fiction filmmaking. Conceived in India and envisioned as a global movement, ATOM responds to the defining challenges of our era: ecological collapse, species extinction, technological disruption, and widening social inequities.
                   </p>
                   <p>
                     As the climate crisis accelerates and misinformation obscures public understanding, ATOM offers a vital space for clarity, reflection, and transformation. More than a film festival, ATOM is a catalyst for conversation, a vehicle for empathy, and a springboard for action.
                   </p>
                   <p>
                     The name “ATOM” symbolizes both the smallest building block of matter and the indivisible core of truth. Just as atoms shape the physical world, documentaries shape our understanding revealing realities and reimagining possibilities.
                   </p>
                </div>

                {/* Aim */}
                <div className="bg-brand-dark text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
                   <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="text-brand-gold" size={24} />
                        <h3 className="text-2xl font-serif font-bold">Our Aim</h3>
                      </div>
                      <p className="text-lg leading-relaxed text-slate-200">
                        To harness the transformative potential of non-fiction cinema in uncovering fundamental truths and inspiring collective action on urgent global themes—ranging from climate change and AI ethics to cultural heritage and social justice.
                      </p>
                   </div>
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                </div>

                {/* Objectives */}
                <div>
                   <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Objectives</h3>
                   <p className="text-slate-600 mb-8">ATOM’s mission is to distill complex realities and mobilize meaningful change. The festival seeks to:</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: 'Showcase Truth', desc: 'Present non-fiction films that examine global challenges—ecological, technological, social, and cultural—with depth, urgency, and integrity.' },
                        { title: 'Amplify Voices', desc: 'Center communities whose lived experiences are often excluded from mainstream narratives, fostering empathy through authentic storytelling.' },
                        { title: 'Build Community', desc: 'Unite students, filmmakers, academics, and activists through screenings, panel discussions, and workshops that move beyond awareness into action.' },
                        { title: 'Celebrate Innovation', desc: 'Promote experimentation across formats, platforms, and interdisciplinary collaboration to advance the language of documentary film.' }
                      ].map((obj, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                           <div className="text-brand-purple font-bold text-lg mb-2">0{i+1}.</div>
                           <p className="text-slate-700">{obj.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Structure */}
                <div className="border-t border-slate-200 pt-10">
                   <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Festival Structure</h3>
                   <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                      <p>
                        ATOM is designed as a <strong className="text-brand-teal">multi-edition, multi-institutional documentary festival</strong> in partnership with educational institutions across India. Each edition is hosted by a different college or university, ensuring regional relevance and national visibility.
                      </p>
                      <p className="mt-4">
                        Structured as a two-day festival, each edition features custom-curated non-fiction films aligned with urgent global and local themes while also being tailored to the unique social, cultural, and environmental context of the host city and institution. The primary audience is the student community.
                      </p>
                   </div>
                </div>

                {/* Film Selection */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-10 rounded-3xl border border-slate-200">
                   <h3 className="text-2xl font-serif font-bold text-brand-dark mb-8 flex items-center gap-3">
                     <Film className="text-brand-red" /> Film Selection Model
                   </h3>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                         <h4 className="font-bold text-lg text-brand-dark mb-3">1. International Submissions via Festhome</h4>
                         <p className="text-slate-600 text-sm leading-relaxed mb-4">
                           In collaboration with Festhome, NXF invites filmmakers worldwide to submit their documentaries. Selected entries are evaluated by an independent jury and become contenders for the <strong>Green Elephant Awards</strong>.
                         </p>
                      </div>
                      <div>
                         <h4 className="font-bold text-lg text-brand-dark mb-3">2. Curated Documentaries from Indian NGOs</h4>
                         <p className="text-slate-600 text-sm leading-relaxed mb-4">
                           NXF partners with grassroots Indian NGOs to source powerful community-based documentaries. These films emerge directly from the lived experiences of marginalized and frontline communities.
                         </p>
                      </div>
                   </div>

                   <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                      <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-dark px-4 py-2 rounded-lg text-sm font-bold border border-brand-gold/20">
                         <Info size={16} /> Student Choice Award
                      </div>
                      <p className="text-slate-600 text-sm mt-3 max-w-2xl mx-auto">
                        All films are eligible for the Student Choice Award, a cash prize sponsored by the host institution and awarded by student vote.
                      </p>
                   </div>
                </div>

             </div>
             
             {/* Footer of Modal */}
             <div className="bg-slate-50 p-6 text-center rounded-b-[2rem] border-t border-slate-100">
                <button 
                  onClick={() => setShowVisionModal(false)}
                  className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
                >
                  Close Vision
                </button>
             </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AtomFestival;