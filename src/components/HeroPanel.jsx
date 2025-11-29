import React from 'react';

export const HeroPanel = ({ photoId, title, description }) => {
  const imageUrl = photoId 
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${photoId}.png` 
    : 'https://via.placeholder.com/150';

  return (
    <div 
      className="relative bg-cover bg-center h-80 flex items-center justify-center text-white p-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4">{title}</h1>
        <p className="text-lg text-gray-800 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};