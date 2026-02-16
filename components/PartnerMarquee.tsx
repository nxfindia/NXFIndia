import React from 'react';

interface Partner {
  name: string;
  src: string;
}

interface PartnerMarqueeProps {
  title?: string;
  partners: Partner[];
  className?: string;
}

const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ title, partners, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">{title}</p>
      )}
      
      {/* 
        Marquee Container 
        mask-image creates the fade effect on left and right edges.
        Inline styles are used for cross-browser mask support.
      */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
         {/* 
            Scrolling Track 
            We duplicate the list 4 times ([...p, ...p, ...p, ...p]) to ensure:
            1. The list is long enough to fill wide screens.
            2. The animation (0% to -50%) loops seamlessly because the first half [p, p] is identical to the second half [p, p].
         */}
         <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
               <div key={index} className="mx-8 md:mx-12 flex items-center justify-center">
                 <img 
                   src={partner.src} 
                   alt={partner.name} 
                   className="h-16 md:h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500" 
                 />
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;