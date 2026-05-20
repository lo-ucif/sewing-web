import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Categories from '../components/home/Categories';
import AboutSection from '../components/home/AboutSection';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';

export const Home: React.FC = () => {
  useEffect(() => {
    // Ensure page scrolls to top when landing on Home
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="relative pt-[65px]">
      {/* Editorial Hero Banner */}
      <Hero />

      {/* Featured Portfolio Items */}
      <FeaturedProjects />

      {/* Services and Specializations Categories */}
      <Categories />

      {/* Story & Legacy Snippet */}
      <AboutSection />

      {/* Client Reviews */}
      <Testimonials />

      {/* Call to Action Grid */}
      <ContactSection />
    </div>
  );
};
export default Home;
