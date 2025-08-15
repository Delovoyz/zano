import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ZanoHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-zano-charcoal">
          ZANO
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-zano-charcoal hover:text-zano-orange animated-underline transition-colors"
          >
            Как это работает
          </button>
          <button 
            onClick={() => scrollToSection('whats-included')}
            className="text-zano-charcoal hover:text-zano-orange animated-underline transition-colors"
          >
            Что входит
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-zano-charcoal hover:text-zano-orange animated-underline transition-colors"
          >
            Стоимость
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-zano-charcoal hover:text-zano-orange animated-underline transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-zano-charcoal hover:text-zano-orange animated-underline transition-colors"
          >
            Контакты
          </button>
        </div>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-zano-orange hover:bg-zano-orange-light text-white font-medium px-6 py-2 rounded-xl hover-scale transition-all"
        >
          Запросить демо
        </Button>
      </nav>
    </header>
  );
};

export default ZanoHeader;