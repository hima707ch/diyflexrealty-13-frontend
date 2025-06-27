import React from 'react';
import images from '../assets/images';

const Features = () => {
  const features = [
    {
      id: 'Features_2',
      title: 'Interactive Learning',
      description: 'Engage with interactive content and real-time collaboration tools.',
      icon: '📚'
    },
    {
      id: 'Features_3',
      title: 'Expert Faculty',
      description: 'Learn from experienced educators and industry professionals.',
      icon: '👩‍🏫'
    },
    {
      id: 'Features_4',
      title: 'Modern Facilities',
      description: 'Access state-of-the-art facilities and learning resources.',
      icon: '🏫'
    }
  ];

  return (
    <section id="Features_1" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">Discover what makes our educational approach unique</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;