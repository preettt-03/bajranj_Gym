import React from 'react';

function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          <div className="p-6 border rounded-lg shadow-lg">
            <p>"The trainers at Bajranj Gym are amazing! I've seen great results."</p>
            <h4 className="mt-4 font-bold">- Member 1</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <p>"The group classes are so much fun and motivating!"</p>
            <h4 className="mt-4 font-bold">- Member 2</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <p>"I love the community atmosphere here. Highly recommended!"</p>
            <h4 className="mt-4 font-bold">- Member 3</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
