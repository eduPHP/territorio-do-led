import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  { name: "Aline Beerli",    text: "Melhores preços e atendimento" },
  { name: "Fabio Rezende",   text: "Excelente atendimento, Ótimo Produtos. Recomendo!!!" },
  { name: "Ricardo Robetti", text: "Atendimento nota 1000. Grande variedade de produtos e preços excelentes" },
  { name: "Bruna Matté",     text: "Atendimento excelente, com agilidade...produtos de qualidade!!" },
];

const Reviews = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.review-card', {
      y: 40,
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
    <section id="reviews" ref={container} className="py-24 bg-[#161610] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-[#1A1A1A] border border-[#F5C800]/20 text-[#E8E0CC] font-mono text-sm px-6 py-2 rounded-full mb-6 flex items-center gap-2 shadow-[0_0_20px_rgba(245,200,0,0.05)]">
            <span className="text-[#F5C800]">⭐</span> 4.8 / 5 — 40 avaliações
          </div>
          <h2 className="font-heading text-5xl md:text-7xl">O que nossos clientes dizem</h2>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 snap-x snap-mandatory scroll-smooth hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="review-card shrink-0 w-[85vw] md:w-auto snap-center bg-[#1A1A1A] p-8 rounded-[2rem] border-t-2 border-[#F5C800] hover:shadow-[0_0_60px_rgba(245,200,0,0.12)] transition-shadow duration-500 flex flex-col justify-between min-h-[250px]"
            >
              <p className="font-body text-[#E8E0CC] text-lg lg:text-base xl:text-lg mb-8 italic opacity-90">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#161610] border border-white/10 flex items-center justify-center text-[#9A9080] font-heading text-xl">
                  {review.name.charAt(0)}
                </div>
                <span className="font-body font-medium text-[#9A9080]">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
