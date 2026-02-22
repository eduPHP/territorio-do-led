import { Truck, Store, ShoppingBag, Wifi, CreditCard, CalendarCheck } from 'lucide-react';

const About = () => {
  const services = [
    { icon: <Truck size={24} />, label: "Entrega" },
    { icon: <Store size={24} />, label: "Retirada na loja" },
    { icon: <ShoppingBag size={24} />, label: "Compras na loja" },
    { icon: <Wifi size={24} />, label: "Wi-Fi gratuito" },
    { icon: <CreditCard size={24} />, label: "Cartão de crédito, débito e NFC" },
    { icon: <CalendarCheck size={24} />, label: "Planejamento / Visita rápida" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <h2 className="font-heading text-5xl md:text-7xl mb-8">Sobre Nós</h2>
            <div className="font-body text-[#E8E0CC] text-lg md:text-xl leading-relaxed mb-12 opacity-90">
              <p>
                Na Território do Led, cada ambiente conta uma história de luz. Encontre luminárias, arandelas, pendentes e soluções completas em LED para transformar qualquer espaço. Venha viver nosso novo showroom em Itapema.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((svc, i) => (
                <div key={i} className="flex items-center gap-4 text-[#9A9080] group hover:text-[#F5C800] transition-colors duration-300">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/5 group-hover:border-[#F5C800]/30 transition-colors">
                    {svc.icon}
                  </div>
                  <span className="font-body text-sm font-medium">{svc.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <svg className="w-full h-full  opacity-30 text-[#F5C800]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8"/>
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5"/>
                <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2"/>
                <circle cx="100" cy="100" r="10" fill="currentColor"/>
                
                <path d="M100 0 V40 M100 160 V200 M0 100 H40 M160 100 H200" stroke="currentColor" strokeWidth="1" />
                <path d="M29 29 L58 58 M171 171 L142 142 M171 29 L142 58 M29 171 L58 142" stroke="currentColor" strokeWidth="1" />
              </svg>
              
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,200,0,0.1)_0%,transparent_60%)]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
