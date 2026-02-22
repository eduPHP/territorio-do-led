import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop: floating pill ── */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4 w-full pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-dark/60 backdrop-blur-xl border border-gold/20 shadow-lg'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <div className="flex items-center gap-6 text-sm font-body text-gold">
            <a href="#gallery" className="hover:-translate-y-px transition-transform">Novo Espaço</a>
            <a href="#products" className="hover:-translate-y-px transition-transform">Produtos</a>
            <a href="#about" className="hover:-translate-y-px transition-transform">Sobre</a>
            <a href="#reviews" className="hover:-translate-y-px transition-transform">Avaliações</a>
          </div>

          <a
            href="#contact"
            className="bg-gold text-dark font-heading text-lg px-6 py-2 rounded-full hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gold/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
            <span className="relative z-10 flex items-center tracking-wide">Fale Conosco</span>
          </a>
        </nav>
      </div>

      {/* ── Mobile: traditional top bar ── */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-dark/90 backdrop-blur-xl border-b border-gold/20 shadow-lg'
            : 'bg-dark/70 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-heading text-gold text-xl tracking-widest leading-none">
          <img src="./logo.svg" alt="Território do LED" className="w-24" />
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
          className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] group"
        >
          <span
            className={`block h-[2px] w-6 bg-gold rounded-full transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-gold rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-gold rounded-full transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* ── Mobile: slide-down drawer ── */}
      <div
        className={`md:hidden fixed top-[56px] left-0 right-0 z-40 bg-dark/95 backdrop-blur-xl border-b border-gold/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen py-6' : 'max-h-0 py-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-5 text-base font-body text-gold">
          <a href="#gallery" onClick={handleLinkClick} className="hover:text-gold transition-colors">Novo Espaço</a>
          <a href="#products" onClick={handleLinkClick} className="hover:text-gold transition-colors">Produtos</a>
          <a href="#about" onClick={handleLinkClick} className="hover:text-gold transition-colors">Sobre</a>
          <a href="#reviews" onClick={handleLinkClick} className="hover:text-gold transition-colors">Avaliações</a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 bg-gold text-dark font-heading text-base px-8 py-2 rounded-full hover:bg-gold/80 transition-colors duration-300 tracking-wide"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
