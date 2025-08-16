import { Home, Eye, Gamepad2, Glasses } from 'lucide-react';

const ZanoWhatsIncluded = () => {
  const features = [
    {
      icon: Home,
      title: "1 планировка / шоу-квартира",
      description: "Полная реализация одной планировки"
    },
    {
      icon: Eye,
      title: "Вид сверху",
      description: "Обзор планировки с высоты птичьего полёта"
    },
    {
      icon: Gamepad2,
      title: "Вид от первого лица",
      description: "Интерактивное перемещение как в игре"
    },
    {
      icon: Glasses,
      title: "VR-режим",
      description: "Полное погружение в виртуальную реальность"
    }
  ];

  return (
    <section id="whats-included" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-zano-charcoal mb-16 fade-in-up">
          Что входит в пилот
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-orange transition-all hover-scale fade-in-up"
            >
              <div className="w-16 h-16 bg-gradient-orange rounded-xl flex items-center justify-center mb-4 hover-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-zano-charcoal mb-3">
                {feature.title}
              </h3>
              
              <p className="text-zano-gray-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZanoWhatsIncluded;