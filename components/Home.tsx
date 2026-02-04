import React from 'react';
import { Hero } from './Hero';
import { CategoryShowcase } from './CategoryShowcase';
import { AICreativeAssistant } from './AICreativeAssistant';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <AICreativeAssistant />
      <Testimonials />
      <Contact />
    </>
  );
};