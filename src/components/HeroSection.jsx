import React from 'react';
import bgImage from '../assets/ogghero.png';

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center text-center text-white py-20 px-4 md:px-10 min-h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-2xl mx-auto bg-black/50 p-6 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          ريادة التحول الرقمي المبتكر
        </h1>
        <p className="text-lg md:text-xl mb-8">
          تساهم تكوين في تطوير حلول رقمية بامتياز بصناعة الابتكار من خلال أحدث التقنيات، لتحول الأفكار الملهمة والرؤى الطموحة إلى منتجات مؤثرة تشكل مستقبل عالم متصل وحديث.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-opacity-90 transition"
        >
          تفاصيل أكثر
        </a>
      </div>
     </section>
  );
}