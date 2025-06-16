import React from 'react';

export default function VisionSection() {
  const items = [
    {
      title: 'الرؤية',
      content:
        'أن نكون الشريك الرائد في تقديم حلول التحول الرقمي، وتمكين الابتكار، ودعم النظم لتحقيق النجاح في عالم متسارع التطور.',
    },
    {
      title: 'القيمة',
      content:
        'تؤمن تكوين بالابتكار، التميز، الموثوقية، التعاون، التركيز على العميل، والرؤية لتحقيق نمو مستدام وشراكات طويلة الأمد.',
    },
    {
      title: 'الطموح',
      content:
        'طموح تكوين هو أن نبني ونصنع منتجات رقمية ذات قيمة عالية تعكس حجم التطور الرقمي في المملكة العربية السعودية.',
    },
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-4xl font-bold text-[#10024A]">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
