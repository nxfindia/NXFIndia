import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const exhibitionImages = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c1/India_-_Delhi_portrait_of_a_man_-_4780.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/India_-_Koyambedu_Market_-_Faces_30_%283987092094%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Teastall_%283911467773%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/63/A_Beautiful_photo_capturing_the_life_of_people_at_Chandampet_village%2C_Telangana.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/73/Jaipur%2C_India%2C_Market.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mamallapuram%2C_Shore_Temple%2C_India.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Indian_villagers_by_Coates.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/16/Wheel_engraved_in_the_13th_century_built_Konark_Sun_Temple_in_Orissa%2C_India.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fb/Indian_pigments.jpg"
];

const Banyan: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Slideshow interval
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % exhibitionImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Subtle scroll-reveal animation setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.banyan-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const revealClass = "banyan-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out";

  return (
    <div className="pt-24 pb-16 min-h-screen bg-paper">
      
      {/* 1. Hero */}
      <section className="px-6 lg:px-12 py-20 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in-up">
            A NilgiriNext Foundation Initiative
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-slate-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            BANYAN
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-serif leading-relaxed max-w-3xl mx-auto italic animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            "A banyan tree never stops growing. It spreads, shelters, and stands for centuries - rooted in the past, alive in the present. That is exactly who our senior citizens are."
          </p>
        </div>
      </section>

      {/* 2. What is BANYAN? */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-12 ${revealClass}`}>
            What is BANYAN?
          </h2>
          <div className={`text-xl md:text-2xl text-slate-700 leading-relaxed space-y-8 ${revealClass}`} style={{ transitionDelay: '200ms' }}>
            <p>
              All your life you worked. You raised a family. You kept the house running. You put everyone else first.
            </p>
            <p>
              And somewhere along the way, the painting you always wanted to do, the photographs you always wanted to take, the song you always wanted to sing - they waited.
            </p>
            <p className="font-bold text-brand-purple">
              They are still waiting.
            </p>
            <p>
              Now the children are settled. The job is done. The mornings are yours. BANYAN is a NilgiriNext Foundation initiative that says <strong className="font-serif font-bold text-3xl">"this is your time."</strong> Not to slow down. To begin. Art and culture are not for the young. They are for anyone who has something to say. And after a life fully lived, you have more to say than most.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The First Chapter & Details */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-y border-slate-200">
        <div className={`max-w-5xl mx-auto text-center mb-20 ${revealClass}`}>
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-4">The First Chapter</span>
          <h2 className="font-serif font-bold text-5xl md:text-6xl text-slate-900 mb-6">
            My Love, My Place
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium tracking-wide uppercase">
            A Photography Competition and Travelling Exhibition
          </p>
        </div>

        <div className={`max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-slate-800 text-center mb-20 ${revealClass}`} style={{ transitionDelay: '200ms' }}>
          <p className="mb-6 font-medium">
            We are calling every Indian above the age of 60.
          </p>
          <p className="mb-6">
            Pick up your camera - phone or otherwise - and photograph what you love.
          </p>
          <p>
            The theme is <strong className="font-serif text-brand-dark text-3xl md:text-4xl font-bold px-2 italic">My Love, My Place.</strong> It could be a portrait of someone you have loved for decades. The town you grew up in. Your front door. A old temple. Your grandchild's hands. A market you have visited every week for forty years. People, places, or things - anything that holds a piece of your heart belongs here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group ${revealClass}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900 group-hover:text-brand-purple transition-colors">What to submit</h3>
            <p className="text-lg text-slate-600">3 to 5 photographs.<br/>That is all.</p>
          </div>
          <div className={`bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group ${revealClass}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900 group-hover:text-brand-teal transition-colors">Eligibility</h3>
            <p className="text-lg text-slate-600">Any Indian, aged 60 and above. No experience needed. No prizes for technical perfection. Only honesty.</p>
          </div>
          <div className={`bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group ${revealClass}`} style={{ transitionDelay: '500ms' }}>
            <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900 group-hover:text-brand-gold transition-colors">Entry Fee</h3>
            <p className="text-lg text-slate-600">Entry is completely free.</p>
          </div>
        </div>
        
        <div className={`mt-16 text-center ${revealClass}`} style={{ transitionDelay: '600ms' }}>
          <a 
            href="https://forms.gle/58sBUFWCJEQkd1Sw9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-purple hover:bg-brand-purple/90 text-white px-10 py-5 text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-full font-bold tracking-wide"
          >
            Submit Your Photographs
          </a>
        </div>
      </section>

      {/* 4. The Exhibition */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className={`w-full lg:w-1/2 aspect-video lg:aspect-square relative bg-slate-100 rounded-2xl shadow-inner border border-slate-200 overflow-hidden flex items-center justify-center ${revealClass}`}>
            {exhibitionImages.map((img, index) => (
              <img
                key={img}
                src={img}
                alt="BANYAN Exhibition placeholder"
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className={`w-full lg:w-1/2 ${revealClass}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Promise</span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-8">
              The Exhibition
            </h2>
            <div className="text-xl leading-relaxed text-slate-700 mb-8 space-y-6">
              <p>Your photographs will not sit in a folder.</p>
              <p>Every selected work will be professionally printed, framed, and hung in a proper gallery - the kind with white walls, good lighting, and your name on the wall beside your photograph.</p>
              <p>We open in Coimbatore. Then we travel - to cities across India where our participants live, on personal invitation. Your work moving from city to city. Your name going with it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Partner With Us */}
      <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6">
        <section className="bg-brand-dark text-white p-8 md:p-16 lg:p-24 relative overflow-hidden rounded-[2.5rem] w-full border border-slate-800">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={revealClass}>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6 block">Support the Journey</span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-8 text-white">
              Partner With Us
            </h2>
            <div className="text-lg md:text-xl leading-relaxed mb-12 text-slate-300 space-y-6 max-w-3xl mx-auto">
              <p>
                Retired associations. Senior citizen communities. Residents welfare associations. Hospitals. Cultural organisations. Corporate CSR teams.
              </p>
              <p>
                BANYAN grows stronger with every partner. A venue, a community, funding, or simply opening your doors to bring the exhibition to your city. Whatever you can offer, we will put it to meaningful use.
              </p>
            </div>
            <Link 
              to="/contact?intent=banyan-partner"
              className="inline-block bg-white text-brand-dark hover:bg-slate-100 px-10 py-4 text-lg transition-colors shadow-lg hover:shadow-xl rounded-full font-bold"
            >
              Let us talk
            </Link>
          </div>
        </div>
        </section>
      </div>

    </div>
  );
};

export default Banyan;
