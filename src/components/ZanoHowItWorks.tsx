import { FileText, Cog, Smartphone } from 'lucide-react';

const ZanoHowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Получаем планы / BIM / 3ds Max",
      description: "Работаем с любыми форматами"
    },
    {
      icon: Cog,
      title: "Собираем сцену в Unreal Engine 5",
      description: "Фотореалистичная графика"
    },
    {
      icon: Smartphone,
      title: "Готовое VR-приложение для отдела продаж",
      description: "Поддержка Meta Quest и ПК"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-zano-gray-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-zano-charcoal mb-16 fade-in-up">
          Как это работает
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center fade-in-up">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-orange rounded-full flex items-center justify-center hover-glow hover-scale transition-all">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zano-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-zano-charcoal mb-4">
                {step.title}
              </h3>
              
              <p className="text-zano-gray-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in-up">
          <p className="text-zano-gray-light">
            Поддержка Meta Quest и ПК
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZanoHowItWorks;