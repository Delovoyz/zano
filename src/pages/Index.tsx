import { useEffect } from 'react';
import ZanoHeader from '@/components/ZanoHeader';
import ZanoHero from '@/components/ZanoHero';
import ZanoHowItWorks from '@/components/ZanoHowItWorks';
import ZanoWhatsIncluded from '@/components/ZanoWhatsIncluded';
import ZanoPricing from '@/components/ZanoPricing';
import ZanoFounder from '@/components/ZanoFounder';
import ZanoFAQ from '@/components/ZanoFAQ';
import ZanoContact from '@/components/ZanoContact';
import ZanoFooter from '@/components/ZanoFooter';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <ZanoHeader />
      <ZanoHero />
      <ZanoHowItWorks />
      <ZanoWhatsIncluded />
      <ZanoPricing />
      <ZanoFounder />
      <ZanoFAQ />
      <ZanoContact />
      <ZanoFooter />
      <ScrollAnimations />
    </div>
  );
};

export default Index;
