import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark rounded-t-lg pt-20 border-t border-white/5 relative z-20 -mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <img src="/logo.svg" alt="Território do Led" className="h-12 w-auto opacity-90 filter brightness-110" />
          <p className="font-body text-text-muted tracking-[0.2em] uppercase text-sm">
            Seja luz onde estiver!
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-8">
          <div className="flex flex-wrap justify-center md:justify-end gap-6 font-body text-sm text-text-muted">
            <a href="#gallery" className="hover:text-gold transition-colors">Novo Espaço</a>
            <a href="#products" className="hover:text-gold transition-colors">Produtos</a>
            <a href="#about" className="hover:text-gold transition-colors">Sobre Nós</a>
          </div>
          
          <a filter="url(#glow)"
            href="https://instagram.com/territoriodoled" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-transparent transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© 2026 Território do Led Iluminação</p>
          
          <div className="flex items-center gap-2" title="Easter Egg">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-[ping_3s_ease-in-out_infinite]"></div>
            <span>by <a href="https://rdo.blog.br" target="_blank" rel="noopener noreferrer">edu@rdo</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
