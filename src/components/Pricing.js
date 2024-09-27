import React from 'react';

function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pricing Cards */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-4xl font-bold mb-4">$29/month</p>
            <p>Access to gym facilities</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Standard Plan</h3>
            <p className="text-4xl font-bold mb-4">$49/month</p>
            <p>Includes group classes and gym access</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-4xl font-bold mb-4">$69/month</p>
            <p>All-inclusive access to gym, classes, and personal training</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
