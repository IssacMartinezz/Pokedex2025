import { HeroPanel } from "../components/HeroPanel";
import { PokeList } from "../components/Pokedex/PokeList";

export const Home = () => {
  return (
    <section>
      {

      }
      <HeroPanel 
        photoId="384" // Rayquaza, un Pokémon legendario y visualmente impactante
        title="¡Bienvenido a la Pokédex 2025!"
        description="Explora el vasto mundo Pokémon, descubre a tus criaturas favoritas y aprende todo sobre ellas. ¡Atrápalos a todos!"
      />
      <PokeList />
    </section>
  );
};