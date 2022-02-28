import React from 'react';
import '../styles/pokemonsContent.css';
import CreateCards from './CreateCards';

function PokemonsContent() {
  return (
    <section className="pokemons-content">
      <CreateCards />
    </section>
  );
}

export default PokemonsContent;
