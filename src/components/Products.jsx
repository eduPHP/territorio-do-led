import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    "id": 1,
    "category": "PENDENTES / LUSTRES",
    "name": "Lustre Sputnik Dourado",
    "desc": "Estilo mid-century, 12 hastes, acabamento dourado",
    "image": "https://loremflickr.com/800/600/lighting/all"
  },
  {
    "id": 2,
    "category": "PENDENTES / LUSTRES",
    "name": "Pendente Globo Fosco",
    "desc": "Vidro opalino, para mesas e bancadas",
    "image": "https://loremflickr.com/800/600/pendant,glass,lamp/all"
  },
  {
    "id": 3,
    "category": "PENDENTES / LUSTRES",
    "name": "Lustre Crystal Cascata",
    "desc": "Cristais translúcidos, elegância clássica",
    "image": "https://loremflickr.com/800/600/chandelier/all"
  },
  {
    "id": 4,
    "category": "ARANDELAS",
    "name": "Arandela Cone Preto",
    "desc": "Foco direcional, ideal para leitura",
    "image": "https://loremflickr.com/800/600/wall-sconce,black/all"
  },
  {
    "id": 5,
    "category": "ARANDELAS",
    "name": "Arandela Dourada Minimal",
    "desc": "Braço articulado, acabamento champagne",
    "image": "https://loremflickr.com/800/600/wall-lamp,gold/all"
  },
  {
    "id": 6,
    "category": "ARANDELAS",
    "name": "Arandela Globo Duplo",
    "desc": "Duas esferas opacas, visual contemporâneo",
    "image": "https://loremflickr.com/800/600/modern-sconce/all"
  },
  {
    "id": 7,
    "category": "LUMINÁRIAS DE TETO",
    "name": "Plafon LED Redondo",
    "desc": "Embutido, luz difusa, 18W",
    "image": "https://loremflickr.com/800/600/ceiling-light,led/all"
  },
  {
    "id": 8,
    "category": "LUMINÁRIAS DE TETO",
    "name": "Spot Trilho Preto",
    "desc": "Direcionável, perfil slim, conjunto de 3",
    "image": "https://loremflickr.com/800/600/track-lighting/all"
  },
  {
    "id": 9,
    "category": "LUMINÁRIAS DE TETO",
    "name": "Painel LED Quadrado",
    "desc": "Embutir, 24W, temperatura ajustável",
    "image": "https://loremflickr.com/800/600/office-lighting,led/all"
  },
  {
    "id": 10,
    "category": "FITAS LED / PERFIS",
    "name": "Fita LED 2700K Warm",
    "desc": "5 metros, alta densidade, IP20",
    "image": "https://loremflickr.com/800/600/led-strip/all"
  },
  {
    "id": 11,
    "category": "FITAS LED / PERFIS",
    "name": "Perfil Alumínio Embutir",
    "desc": "Para marcenaria e sancas, 2 metros",
    "image": "https://loremflickr.com/800/600/led-profile/all"
  },
  {
    "id": 12,
    "category": "FITAS LED / PERFIS",
    "name": "Kit Fita + Perfil + Fonte",
    "desc": "Solução completa para nichos e painéis",
    "image": "https://loremflickr.com/800/600/interior-lighting/all"
  }
];

const CATEGORIES = ['TODOS', 'PENDENTES / LUSTRES', 'ARANDELAS', 'LUMINÁRIAS DE TETO', 'FITAS LED / PERFIS'];

const Products = () => {
  const [activeTab, setActiveTab] = useState('TODOS');
  const [displayedProducts, setDisplayedProducts] = useState(PRODUCTS);
  const container = useRef(null);
  const gridRef = useRef(null);
  const isFirstRender = useRef(true);

  useGSAP(() => {
    gsap.fromTo('.product-card', 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
      }
    );
  }, { scope: container });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!gridRef.current) return;
    
    gsap.to('.product-item', {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        const filtered = activeTab === 'TODOS' 
          ? PRODUCTS 
          : PRODUCTS.filter(p => p.category === activeTab);
        
        setDisplayedProducts(filtered);
        
        setTimeout(() => {
          gsap.fromTo('.product-item', 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
          );
        }, 50);
      }
    });
  }, [activeTab]);

  return (
    <section id="products" ref={container} className="py-24 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-heading text-5xl md:text-7xl text-center mb-12">Nosso Catálogo</h2>

        <div className="sticky top-[72px] z-10 bg-dark/80 backdrop-blur-md py-4 mb-8 -mx-4 px-4 border-b border-white/5 md:mx-0 md:px-0">
          <div className="flex overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory pb-2">
            <div className="flex gap-6 mx-auto">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`snap-center shrink-0 uppercase font-mono text-sm pb-2 transition-all duration-300 ${
                    activeTab === category 
                      ? 'text-gold border-b-2 border-gold' 
                      : 'text-text-muted hover:text-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[50vh]">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card product-item bg-dark rounded-[2rem] overflow-hidden border border-white/5 hover:-translate-y-1 hover:shadow-glow-soft transition-all duration-500 flex flex-col group"
            >
              <div className="aspect-4/3 bg-dark flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 font-mono text-[10px] bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded-full uppercase">
                  {product.category}
                </div>

                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,200,0,0.05)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle,rgba(245,200,0,0.1)_0%,transparent_70%)] transition-colors duration-500"></div>
                    <Lightbulb className="w-12 h-12 text-gold opacity-40 animate-pulse group-hover:opacity-80 transition-opacity duration-300" />
                  </>
                )}
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="font-body font-semibold text-gold mb-2 leading-tight">{product.name}</h3>
                <p className="font-body text-gold text-sm mb-6 grow">{product.desc}</p>
                
                <a 
                  href={`https://wa.me/554720334594?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-body text-sm hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Ver no WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-gold font-body mb-6">Não encontrou o que procura?</p>
          <a 
            href="https://wa.me/554720334594" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-gold border border-white/10 hover:border-gold/30 hover:text-gold font-heading text-lg px-8 py-4 rounded-full hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center gap-3"
          >
            Ver Catálogo Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
