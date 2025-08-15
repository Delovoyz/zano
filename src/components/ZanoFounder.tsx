import founderImage from '@/assets/founder-portrait.jpg';

const ZanoFounder = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <img 
                src={founderImage} 
                alt="Основатель ZANO" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-card hover:shadow-orange transition-all hover-scale"
              />
            </div>
            
            <div className="fade-in-up">
              <blockquote className="text-2xl md:text-3xl font-medium text-zano-charcoal leading-relaxed mb-6">
                "Мы меняем то, как застройщики продают недвижимость — от планировки к эмоциям клиента."
              </blockquote>
              
              <div className="border-l-4 border-zano-orange pl-6">
                <p className="text-lg text-zano-gray-light mb-2">
                  Виртуальная реальность позволяет клиентам почувствовать будущий дом ещё до начала строительства. Это революция в продажах недвижимости.
                </p>
                
                <div className="text-zano-charcoal font-semibold">
                  Основатель ZANO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZanoFounder;