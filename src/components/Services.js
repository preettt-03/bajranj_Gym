import React from 'react';

function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
            <p>Get one-on-one training with our certified trainers.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
            <p>Join our group classes for a motivating workout experience.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Nutrition Counseling</h3>
            <p>Receive personalized nutrition advice to complement your fitness journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
