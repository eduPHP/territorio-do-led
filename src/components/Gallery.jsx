import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.gallery-img', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });
  }, { scope: container });

  return (
    <section id="gallery" ref={container} className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="bg-[#F5C800]/10 border border-[#F5C800]/30 text-[#F5C800] text-xs font-mono uppercase px-4 py-1.5 rounded-full mb-6">
          🆕 Novo espaço inaugurado!
        </span>
        <h2 className="font-heading text-5xl md:text-7xl">Nosso Novo Espaço</h2>
      </div>

      <div className="columns-1 sm:columns-2 gap-6 space-y-6">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="gallery-img relative overflow-hidden rounded-[2rem] break-inside-avoid group border border-white/5 shadow-lg">
            <img 
              src={`/images/store-${num}.jpeg`} 
              alt={`Território do Led Store ${num}`} 
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
            />
            {/* Hover Gold Sweep Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-[#F5C800]/20 before:to-transparent before:-translate-x-full group-hover:before:animate-[sweep_1.5s_ease-in-out_forwards] after:content-[''] after:absolute after:inset-0 after:bg-[#F5C800]/10"/>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}} />
    </section>
  );
};

export default Gallery;
