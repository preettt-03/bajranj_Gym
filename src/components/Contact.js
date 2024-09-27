import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full p-3 border rounded-lg" placeholder="Email" />
          </div>
          <div className="mb-4">
            <textarea className="w-full p-3 border rounded-lg" rows="4" placeholder="Message"></textarea>
          </div>
          <button className="bg-yellow-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-yellow-600">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

