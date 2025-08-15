import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ZanoContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-card">
              <div className="w-20 h-20 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-zano-charcoal mb-4">
                Спасибо!
              </h3>
              
              <p className="text-lg text-zano-gray-light">
                Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-zano-charcoal mb-16 fade-in-up">
          Запросить пилот
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-card fade-in-up">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-zano-charcoal font-medium mb-2">
                  Имя *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-zano-gray-light focus:border-zano-orange focus:ring-zano-orange"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-zano-charcoal font-medium mb-2">
                  Компания *
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="border-zano-gray-light focus:border-zano-orange focus:ring-zano-orange"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-zano-charcoal font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-zano-gray-light focus:border-zano-orange focus:ring-zano-orange"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-zano-charcoal font-medium mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-zano-gray-light focus:border-zano-orange focus:ring-zano-orange"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-zano-charcoal font-medium mb-2">
                Сообщение
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о вашем проекте..."
                className="border-zano-gray-light focus:border-zano-orange focus:ring-zano-orange"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-orange text-white font-semibold text-lg py-4 rounded-xl shadow-orange hover-scale transition-all"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ZanoContact;