import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-vr-apartment.jpg';

const ZanoHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="VR Apartment Visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-zano-charcoal mb-6 fade-in-up">
          VR-приложение для отдела продаж новостроек
        </h1>
        
        <div className="text-2xl md:text-3xl font-semibold text-zano-orange mb-6 fade-in-up">
          Пилот для первых 5 проектов — 60 000 ₽
        </div>
        
        <p className="text-xl md:text-2xl text-zano-gray-light mb-8 max-w-2xl mx-auto fade-in-up">
          1 планировка: вид сверху, вид от первого лица, VR-режим
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="bg-gradient-orange text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-orange hover-scale transition-all fade-in-up"
        >
          Забронировать пилот
        </Button>
      </div>
    </section>
  );
};

export default ZanoHero;