import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const container = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    // Parallax background glow
    gsap.to(glowRef.current, {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Word reveal
    gsap.from('.reveal-word', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      }
    });
  }, { scope: container });

  const text1 = "A maioria das lojas vende produtos.".split(' ');
  const text2 = "Nós transformamos ambientes.".split(' ');

  return (
    <section ref={container} className="relative py-32 md:py-48 px-4 md:px-8 bg-[#161610] overflow-hidden flex flex-col items-center justify-center min-h-[70vh] text-center border-y border-white/5">
      <div 
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(245,200,0,0.12) 0%, transparent 70%)',
          backgroundSize: '100% 200%',
          backgroundPosition: '50% 0%'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        <p className="font-body text-[#9A9080] uppercase tracking-widest text-sm md:text-base flex flex-wrap justify-center gap-[0.25em]">
          {text1.map((word, i) => (
            <span key={`t1-${i}`} className="reveal-word inline-block">{word}</span>
          ))}
        </p>
        
        <h2 className="font-display italic text-5xl md:text-7xl lg:text-8xl leading-none flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
          {text2.map((word, i) => {
            const isTransform = word.toLowerCase().includes('transformamos');
            return (
              <span key={`t2-${i}`} className={`reveal-word inline-block ${isTransform ? 'text-[#F5C800]' : 'text-[#E8E0CC]'}`}>
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
};

export default Manifesto;
