import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import InnovationSection from '../components/InnovationSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div className="font-arabic bg-background text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <InnovationSection />
      <FooterSection />
    </div>
  );
}