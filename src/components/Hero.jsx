import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Only select actual path elements for the stroke drawing calculation
    const drawingPaths = gsap.utils.toArray('#bulb-lines path');
    const texts = gsap.utils.toArray('.neon-text');
    
    // Set initial dasharray for drawing effect
    drawingPaths.forEach(path => {
      // Only call getTotalLength on SVG Geometry elements
      if(path.getTotalLength) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      }
    });

    // Make the grouped `<use>` elements initially hidden
    gsap.set('.neon-path', { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.5 });
    
    // Hide text initially
    tl.to(texts, { opacity: 0, duration: 0.1 }); 

    // Draw the source neon paths
    tl.to(drawingPaths, {
      strokeDashoffset: 0,
      duration: 2.5,
      stagger: 0.2,
      ease: 'power2.inOut'
    });

    // Make the <use> wrappers visible for the rest of the animations
    tl.set('.neon-path', { opacity: 0.1 }); // dim "off" state

    // Flickering "on" effect for everything
    tl.to(['.neon-path', texts], {
      opacity: 1,
      duration: 0.05,
      stagger: 0.02,
      repeat: 5,
      yoyo: true,
      ease: 'none'
    });

    // Stay on and pulse
    tl.to(['.neon-path', texts], {
      opacity: 1,
      duration: 0.2,
      onComplete: () => {
        // Continuous neon pulse
        gsap.to('.neon-glow-filter', {
          attr: { stdDeviation: "12" }, 
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

    // Reveal logo in corner
    gsap.fromTo('.logo-neon', { opacity: 0, scale: 0.8 }, { opacity: 0.9, scale: 1, duration: 1.5, delay: 3.5, ease: 'back.out(1.5)' });

  }, { scope: containerRef });

  // Pure CSS Brick Background
  const brickBackground = `url("data:image/svg+xml,%3Csvg width='160' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='160' height='80' fill='%23131313'/%3E%3Cline x1='0' y1='0' x2='160' y2='0' stroke='%23080808' stroke-width='4'/%3E%3Cline x1='80' y1='0' x2='80' y2='40' stroke='%23080808' stroke-width='4'/%3E%3Cline x1='0' y1='40' x2='160' y2='40' stroke='%23080808' stroke-width='4'/%3E%3Cline x1='0' y1='40' x2='0' y2='80' stroke='%23080808' stroke-width='4'/%3E%3C/svg%3E")`;

  return (
    <section ref={containerRef} className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden" style={{ backgroundImage: brickBackground }}>
      {/* Visually hidden h1 for SEO — screen-reader accessible, invisible to sighted users */}
      <h1 className="sr-only">Território do Led Iluminação — Showroom de luminárias e soluções em LED em Itapema, SC. Seja luz onde estiver!</h1>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        .font-neon { font-family: 'Caveat', cursive; }
        .neon-shadow {
          text-shadow: 0 0 10px rgba(245, 200, 0, 0.8), 
                       0 0 20px rgba(245, 200, 0, 0.8), 
                       0 0 40px rgba(245, 200, 0, 0.6), 
                       0 0 80px rgba(245, 200, 0, 0.4);
        }
        .logo-shadow {
          filter: drop-shadow(0 0 15px rgba(245,200,0,0.4));
        }
      `}</style>

      {/* Spotlight overlay to make edges darker and focus on neon */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)] z-0 pointer-events-none"></div>

      {/* Main Container - SVG scales automatically */}
      <div className="relative z-10 w-full max-w-2xl px-4 flex items-center justify-center pb-5 mt-10">
        
        <svg viewBox="0 0 600 560" className="w-full h-auto overflow-visible" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" className="neon-glow-filter" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur3" />
              <feMerge>
                <feMergeNode in="blur3" />
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Curved path for text: Starts left, swings up much rounder and higher, ends right */}
            <path id="textPath" d="M 60,300 C 60,-20 540,-20 540,300" />
            
            {/* Paths used for drawing and glowing */}
            <g id="bulb-lines">
              {/* Outer Bulb Shape */}
              <path d="M 230,400 C 100,310 120,130 300,130 C 480,130 500,310 370,400 C 350,420 350,450 350,460 L 250,460 C 250,450 250,420 230,400 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Internal Filament Loop */}
              <path d="M 300,460 L 300,340 C 300,300 240,280 260,240 C 280,200 340,210 350,250 C 360,290 320,310 290,290 C 260,270 280,240 310,240" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Base Rings */}
              <path d="M 260,490 L 340,490" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 265,510 L 335,510" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 275,530 C 290,550 310,550 325,530" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </defs>

          {/* Curved Text - duplicated for stronger glow effect */}
          <text opacity="0" className="neon-text font-neon text-[56px] font-semibold tracking-wide neon-shadow" fill="#F5C800">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              Seja luz onde estiver
            </textPath>
          </text>
          <text opacity="0" className="neon-text font-neon text-[56px] font-semibold tracking-wide" fill="#FFF9E6">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              Seja luz onde estiver
            </textPath>
          </text>

          {/* Golden Glow Layer for Bulb */}
          <use href="#bulb-lines" className="neon-path" stroke="#F5C800" strokeWidth="8" filter="url(#neon)" />
          
          {/* White Core Layer for Bulb to look like actual lit tubes */}
          <use href="#bulb-lines" className="neon-path" stroke="#FFF9E6" strokeWidth="3" />
        </svg>

      </div>

      {/* Logo absolute bottom right */}
      <div className="logo-neon w-xs opacity-0 logo-shadow p-2">
        <a href="#gallery">
          <img src="/logo.svg" alt="Território do Led" className="w-full h-auto drop-shadow-lg" />
        </a>
      </div>

    </section>
  );
};

export default Hero;
