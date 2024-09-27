import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Bajranj Gym</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Services</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </nav>
        <button className="bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-600">Join Now</button>
      </div>
    </header>
  );
}

export default Header;
