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
          Согласуйте решения в 2 раза быстрее. Продавайте квартиры до строительства.
        </h1>
        
        <p className="text-xl md:text-2xl text-zano-gray-light mb-6 max-w-3xl mx-auto fade-in-up">
          ZANO — VR-приложение в реальном времени для отдела продаж: вид сверху, прогулка от первого лица и VR-режим. Пилот для первых 5 проектов — 60 000 ₽.
        </p>
        
        <p className="text-lg md:text-xl text-zano-orange font-semibold mb-8 fade-in-up">
          Возврат денег 50%, если не увеличите конверсию в продажи
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="bg-gradient-orange text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-orange hover-scale transition-all fade-in-up animate-pulse hover:animate-none hover:shadow-lg hover:shadow-orange/30 transform hover:-translate-y-1"
        >
          Забронировать пилот
        </Button>
      </div>
    </section>
  );
};

export default ZanoHero;