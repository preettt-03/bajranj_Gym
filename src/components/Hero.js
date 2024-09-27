import React from 'react';

function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-black">Transform Your Body with Bajranj Gym</h1>
        <p className="text-xl mb-8 text-black">Achieve your fitness goals with our certified trainers and state-of-the-art equipment.</p>
        <button className="bg-yellow-500 px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-600">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
