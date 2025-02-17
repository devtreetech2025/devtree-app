// components/Services.js
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    { title: 'Brand Stores', description: 'We manage e-commerce stores for top tech brands.', imageUrl: '/service1.jpg' },
    { title: 'Our Brands', description: 'Direct access to the latest in consumer tech.', imageUrl: '/service2.jpg' },
    { title: 'B2B Partner', description: 'Tailored solutions for today’s fast-evolving business needs.', imageUrl: '/service3.jpg' },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
