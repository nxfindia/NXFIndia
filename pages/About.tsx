import React from 'react';
import { 
  Users, Handshake, ShieldCheck, Lightbulb, GraduationCap, Megaphone, 
  Palette, Globe, Video, Layout, Heart, Target, FileText 
} from 'lucide-react';

const About: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'journey', label: '01. Our Journey' },
    { id: 'mission', label: '02. Mission & Vision' },
    { id: 'values', label: '03. Core Values' },
    { id: 'objectives', label: '04. Key Objectives' },
    { id: 'governance', label: '05. Governance' },
  ];

  return (
    <div className="bg-paper pt-28 min-h-screen">
      
      {/* HEADER */}
      <section className="px-6 lg:px-12 py-20 border-b border-slate-200 bg-white">
         <div className="max-w-5xl mx-auto">
            <span className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in-up">Institutional Profile</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-slate-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              A Decade of Dedication<br/>
              <span className="text-slate-400">to Arts & Community.</span>
            </h1>
            <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-3xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              From a small film club in the Blue Mountains to a registered foundation fostering cultural and ecological dialogue across India.
            </p>
         </div>
      </section>

      {/* CONTENT GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 py-12">
         
         {/* Sidebar Navigation (Sticky) */}
         <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-40 space-y-2 border-l-2 border-slate-100 pl-6">
               {menuItems.map((item) => (
                 <button 
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   className="block text-left w-full text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-purple hover:pl-2 transition-all py-2"
                 >
                   {item.label}
                 </button>
               ))}
            </div>
         </div>

         {/* Main Content */}
         <div className="lg:col-span-9 space-y-24 pb-24">
            
            {/* 01. JOURNEY */}
            <div id="journey" className="scroll-mt-32">
               <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6 block">01. The Origin</span>
               <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Our Journey</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8">
                  <div className="prose prose-lg text-slate-600 leading-relaxed">
                     <p>
                        NilgirisNext Foundation for Art & Culture (NXF) evolved from a deep-seated commitment to community engagement and the transformative power of the arts. This journey began with the legacy of the <strong className="text-brand-dark">Nilgiri Film Club</strong> and the internationally recognized <strong className="text-brand-dark">Ooty Short Film Festival</strong>.
                     </p>
                     <p>
                        This evolution has been consistently inspired and guided by the vision of a noted photographer and art curator, whose passion for cultural heritage and community-led initiatives motivated a small club to grow into a formal foundation.
                     </p>
                  </div>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-all duration-500">
                     <div className="absolute inset-0 bg-brand-purple/20 mix-blend-multiply z-10"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000" 
                       alt="Community Gathering" 
                       className="w-full h-full object-cover"
                     />
                  </div>
               </div>
               
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <p className="text-slate-700 italic text-lg">
                     "Officially registered as a Section 8 non-profit organization (License No: 167439) and based in Coimbatore, NXF is inspired by the unique ecological and cultural tapestry of the Nilgiris bioregion."
                  </p>
                  <p className="mt-4 text-slate-600">
                     Our foundation strives to be a dynamic incubator for creative ideas, connecting artists, filmmakers, educators, and changemakers in the shared pursuit of a more conscious, connected, and creative world.
                  </p>
               </div>
            </div>

            {/* 02. MISSION & VISION */}
            <div id="mission" className="scroll-mt-32">
               <span className="text-brand-purple font-bold uppercase tracking-widest text-xs mb-6 block">02. Purpose</span>
               
               <div className="bg-brand-dark text-white p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-[80px]"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[80px]"></div>

                  <div className="relative z-10 space-y-12">
                     <div>
                        <div className="flex items-center gap-3 mb-4 text-brand-gold">
                           <Lightbulb size={24} />
                           <h3 className="font-bold uppercase tracking-widest text-sm">Our Vision</h3>
                        </div>
                        <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                           To create a more conscious, connected, and creative world, where art and storytelling are central to fostering ecological sustainability, cultural understanding, and social equity.
                        </p>
                     </div>

                     <div className="border-t border-white/10 pt-10">
                        <div className="flex items-center gap-3 mb-4 text-brand-teal">
                           <Target size={24} />
                           <h3 className="font-bold uppercase tracking-widest text-sm">Our Mission</h3>
                        </div>
                        <p className="text-xl text-slate-300 leading-relaxed">
                           To be a leading catalyst in India for creating meaningful impact. We are more than just an organization; we are a movement guided by a clear and dedicated purpose enshrined in our official charter.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* 03. VALUES */}
            <div id="values" className="scroll-mt-32">
               <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-6 block">03. Ethos</span>
               <h2 className="text-4xl font-serif font-bold text-slate-900 mb-10">Core Values</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                     { 
                        icon: Users, 
                        color: 'text-blue-500', 
                        bg: 'bg-blue-50',
                        title: "Inclusivity & Diversity", 
                        desc: "We are committed to championing diverse voices and centering the stories of indigenous and marginalized communities." 
                     },
                     { 
                        icon: Handshake, 
                        color: 'text-teal-500', 
                        bg: 'bg-teal-50',
                        title: "Collaboration & Partnership", 
                        desc: "We believe in the power of building strategic partnerships with artists, institutions, NGOs, and communities to amplify our collective impact." 
                     },
                     { 
                        icon: ShieldCheck, 
                        color: 'text-emerald-500', 
                        bg: 'bg-emerald-50',
                        title: "Integrity & Transparency", 
                        desc: "We operate with the highest standards of ethical governance and financial transparency, as mandated by our Section 8 status." 
                     },
                     { 
                        icon: Lightbulb, 
                        color: 'text-yellow-500', 
                        bg: 'bg-yellow-50',
                        title: "Innovation & Creativity", 
                        desc: "We foster experimentation across artistic formats and support innovative, sustainable practices in the creative sectors." 
                     },
                     { 
                        icon: GraduationCap, 
                        color: 'text-purple-500', 
                        bg: 'bg-purple-50',
                        title: "Education & Empowerment", 
                        desc: "We are dedicated to nurturing emerging talent and developing media literacy and storytelling skills, especially among youth." 
                     },
                     { 
                        icon: Megaphone, 
                        color: 'text-red-500', 
                        bg: 'bg-red-50',
                        title: "Impact & Engagement", 
                        desc: "We strive to create experiences that are not just immersive and educational, but also serve as a springboard for meaningful public dialogue." 
                     }
                  ].map((val, i) => (
                     <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                        <div className={`w-12 h-12 ${val.bg} ${val.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                           <val.icon size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{val.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{val.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* 04. OBJECTIVES */}
            <div id="objectives" className="scroll-mt-32">
               <span className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-6 block">04. The Mandate</span>
               <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Objectives</h2>
               <p className="text-lg text-slate-600 mb-10">
                 Mandated by the Ministry of Corporate Affairs (Licence No: 167439) to pursue the following for public benefit:
               </p>

               <div className="space-y-4">
                  {[
                     { icon: Palette, title: "Promote & Preserve Heritage", desc: "To promote and preserve Indian arts, crafts, and cultural heritage by organizing programs that engage traditional artisans." },
                     { icon: GraduationCap, title: "Advance Creative Education", desc: "To advance education in creative arts, media, and filmmaking through workshops, fellowships, and mentorship schemes." },
                     { icon: Globe, title: "Support Intercultural Collaboration", desc: "To facilitate creative exchanges and projects between Indian and international artists, researchers, and creative professionals." },
                     { icon: Video, title: "Encourage Impactful Media", desc: "To encourage the production and dissemination of socially impactful films that raise awareness on social and environmental issues." },
                     { icon: Layout, title: "Establish Creative Spaces", desc: "To establish and operate creative spaces, media labs, and digital platforms for artistic research and innovation." },
                     { icon: Users, title: "Develop Media Literacy", desc: "To undertake participatory activities to develop media literacy and storytelling skills among young learners and educators." },
                     { icon: Heart, title: "Organize Public Events", desc: "To organize cultural festivals, exhibitions, film screenings, and workshops that enhance public appreciation and access to the arts." }
                  ].map((obj, i) => (
                     <div key={i} className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-purple/30 transition-colors">
                        <div className="bg-slate-50 p-3 rounded-full text-brand-dark mt-1">
                           <obj.icon size={20} />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 mb-2">{obj.title}</h3>
                           <p className="text-slate-600">{obj.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* 05. GOVERNANCE */}
            <div id="governance" className="scroll-mt-32">
               <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-14 text-center">
                  <div className="inline-block bg-white/10 p-4 rounded-full mb-6">
                     <FileText size={32} className="text-brand-gold" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Governance & Trust</h2>
                  <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
                     NilgirisNext Foundation for Art and Culture is a registered Section 8 non-profit company in India (Licence No: 167439). We are committed to the highest standards of governance, transparency, and ethical operations as outlined in our Memorandum of Association.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                     <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Section 8 Company</span>
                     <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Ministry of Corporate Affairs</span>
                     <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Coimbatore, TN</span>
                  </div>
               </div>
            </div>

         </div>
      </section>
    </div>
  );
};

export default About;