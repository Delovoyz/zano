import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ZanoFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Что делать, если у нас нет BIM?",
      answer: "Мы можем работать с 2D планами и 3ds Max. Наша команда адаптирует любые доступные материалы для создания качественного VR-приложения."
    },
    {
      question: "Какие гарнитуры поддерживаются?",
      answer: "Meta Quest, Pico, ПК-версии. Мы обеспечиваем совместимость с основными VR-платформами для максимального охвата клиентов."
    },
    {
      question: "Можно ли расширить приложение после пилота?",
      answer: "Да, мы добавим новые планировки и функции. Пилот — это отправная точка для развития полноценного VR-решения для вашего проекта."
    },
    {
      question: "Сколько занимает разработка?",
      answer: "Обычно 2–4 недели. Точные сроки зависят от сложности планировки и требований к детализации интерьера."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zano-gray-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-zano-charcoal mb-16 fade-in-up">
          Частые вопросы
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-card overflow-hidden fade-in-up"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-zano-charcoal pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-zano-orange" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-zano-orange" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-zano-gray-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZanoFAQ;