import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Bajranj Gym</h3>
          <p className="mt-2">Your fitness journey starts here.</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Services</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </div>
        <div className="mb-4">
          <a href="#" className="mx-2 hover:text-yellow-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mx-2 hover:text-yellow-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 hover:text-yellow-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-sm">© 2024 Bajranj Gym. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
