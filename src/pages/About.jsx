import React from 'react';

export const About = () => {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6 border-b-4 border-red-600 pb-2">
        Acerca de la Pokédex 2025
      </h1>
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        Este proyecto ha sido desarrollado como parte del curso de SPA 2025 y está impulsado por la API de datos de Pokémon más grande y confiable: la **PokéAPI**. Nuestro objetivo es proporcionar una interfaz moderna y rápida para consultar información esencial de todas las generaciones de Pokémon.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-red-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Misión
          </h2>
          <p className="text-gray-600">
            Nuestra misión es hacer que el acceso a la información de Pokémon sea tan fácil y emocionante como atraparlos por primera vez, proporcionando datos exactos y descripciones claras.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-red-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Tecnología Usada
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li><span className="font-semibold">React</span>: Para la interfaz de usuario dinámica.</li>
            <li><span className="font-semibold">Vite</span>: Como entorno de desarrollo rápido.</li>
            <li><span className="font-semibold">Tailwind CSS</span>: Para un diseño rápido y responsivo.</li>
            <li><span className="font-semibold">React Router DOM</span>: Para la navegación entre páginas.</li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-6 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Créditos
        </h2>
        <p className="text-gray-600 italic">
          Datos proporcionados por la <a href="https://pokeapi.co/" target="_blank" className="text-red-600 underline hover:text-red-800">PokéAPI</a>. Proyecto creado por [Tu Nombre] para SPA 2025.
        </p>
      </div>

    </div>
  );
};