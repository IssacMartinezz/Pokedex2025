import React from 'react';
import { Link } from 'react-router-dom'; 

export const Header = () => {
  return (
    <header className="bg-red-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          Pokédex <span className="text-white">2025</span>
        </div>
        <div>

          <Link to="/" className="text-white hover:text-gray-200 px-4 py-2 rounded transition duration-200">
            Inicio
          </Link>
          
          <Link to="/about" className="text-white hover:text-gray-200 px-4 py-2 rounded transition duration-200">
            Acerca de Nosotros
          </Link>
        </div>
      </nav>
    </header>
  );
};