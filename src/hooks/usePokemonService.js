const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/";

export const usePokemonService = () => {
  
  const getPokemonList = async (page = 1, limit = 50) => {
    try {
      
      const offset = (page - 1) * limit;
      const url = `${POKEAPI_BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
      
      const response = await fetch(url);
      const data = await response.json();


      const list = data.results.map((p, index) => {
        const id = offset + index + 1;
        return {
          id: id,
          name: p.name,
          url: p.url,
          defaultImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
      return list;

    } catch (error) {
      console.error("Error al obtener la lista de Pokémon:", error);
      return [];
    }
  };

  const getPokemonSpeciesById = async (id) => {
    try {
      const url = `${POKEAPI_BASE_URL}pokemon-species/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      
      const flavorTextEntry = data.flavor_text_entries.find(
        (entry) => entry.language.name === 'es' || entry.language.name === 'en'
      );

      return {
        description: flavorTextEntry 
          ? flavorTextEntry.flavor_text.replace(/\s+/g, ' ')
          : 'Descripción no encontrada.'
      };

    } catch (error) {
      console.error(`Error al obtener datos de especie para ID ${id}:`, error);
      return { description: 'Error al cargar.' };
    }
  };

  return {
    getPokemonList,
    getPokemonSpeciesById,
  };
};