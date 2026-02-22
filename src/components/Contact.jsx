import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const info = [
    { icon: <MapPin />, text: "Segunda Avenida 842, Meia Praia, Itapema - SC" },
    { icon: <Phone />, text: "(47) 2033-4594" },
    { icon: <Mail />, text: "contato@territoriodoled.com.br" },
    { icon: <Clock />, text: "Seg–Sex: 09h–18h | Sáb: 09h–13h" },
  ];

  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,200,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        
        <div className="mb-24 flex justify-center relative w-full group">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[60%] md:h-[150%] bg-[#F5C800]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#F5C800] via-[#FFD54F] to-[#F5C800] opacity-40 blur-md animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <a 
              href="https://wa.me/554720334594"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center bg-[#F5C800] text-[#0D0D0D] font-heading text-2xl md:text-4xl px-8 py-5 md:px-12 md:py-6 rounded-full overflow-hidden hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <span className="absolute inset-0 bg-[#FFD54F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
              <span className="relative z-10 flex items-center gap-4">
                💬 Fale Conosco no WhatsApp
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-5xl bg-[#1A1A1A] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative">
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-4xl mb-8">Informações de Contato</h3>
            <div className="space-y-8">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="text-[#F5C800] mt-1 shrink-0">{item.icon}</div>
                  <p className="font-body text-[#E8E0CC] text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] bg-[#0D0D0D] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%231A1A1A\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Cg fill=\\'%23161610\\'%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <a 
              href="https://maps.app.goo.gl/354RjtzwT16ZpXfNA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex flex-col items-center gap-4 text-[#9A9080] hover:text-[#F5C800] transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <MapPin size={28} className="text-[#F5C800]" />
              </div>
              <span className="font-body text-sm uppercase tracking-widest font-medium">Ver no Mapa</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
