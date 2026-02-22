import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Manifesto from './components/Manifesto';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-[#E8E0CC] font-body selection:bg-[#F5C800]/30 selection:text-[#F5C800]">
      <Navbar />
      <Hero />
      <Gallery />
      <Manifesto />
      <Products />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
