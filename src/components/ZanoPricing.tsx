import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ZanoPricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const includes = [
    "1 планировка / шоу-квартира",
    "Вид сверху и от первого лица",
    "VR-режим для Meta Quest и ПК",
    "Интерактивное управление",
    "Техническая поддержка"
  ];

  return (
    <section id="pricing" className="py-20 bg-zano-gray-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-zano-charcoal mb-16 fade-in-up">
          Стоимость
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-orange transition-all fade-in-up">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-zano-orange mb-2">
                60 000 ₽
              </div>
              <div className="text-xl text-zano-gray-light">
                Пилот для первых 5 проектов
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-zano-orange rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-zano-charcoal">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="w-full bg-gradient-orange text-white font-semibold text-lg py-4 rounded-xl shadow-orange hover-scale transition-all"
            >
              Забронировать пилот
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZanoPricing;