// src/components/HeroSection.jsx

export default function HeroSection({ heading, subheading }) {
  return (
    <section className="text-center py-12 bg-white rounded-lg shadow mb-8">
      <h2 className="text-4xl font-bold mb-4">{heading}</h2>
      <p className="text-lg text-gray-600">{subheading}</p>
    </section>
  );
}
