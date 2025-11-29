import React, { useEffect, useState } from 'react';
import { Card } from './Card'; 
import { Button } from '../Button';
import { usePokemonService } from '../../hooks/usePokemonService'; 

export const PokeList = () => {
  const { getPokemonList, getPokemonById, getPokemonSpeciesById } = usePokemonService();

  const [page, setPage] = useState(1);
  const [data, setData] = useState(null); 

  useEffect(() => {
    const loadData = async () => {

      const listResult = await getPokemonList(page, 50);
      
      const pokemonWithDetails = await Promise.all(
        listResult.map(async (pokemon) => {

          const speciesData = await getPokemonSpeciesById(pokemon.id);
          const description = speciesData.description; 
          
          return {
            ...pokemon,
            description, 
          };
        })
      );

      setData(pokemonWithDetails);
    };

    loadData();
  }, [page, getPokemonList, getPokemonSpeciesById]);

  if (!data) {
    return <div className="text-center p-8 text-xl font-semibold">Cargando la Pokédex...</div>;
  }

  return (
    <section className="flex flex-wrap gap-6 max-w-5xl mx-auto justify-center py-8">
      {data.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          defaultImgUrl={pokemon.defaultImgUrl}
          description={pokemon.description} 
        />
      ))}
    </section>
  );
};