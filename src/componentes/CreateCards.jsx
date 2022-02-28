import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import '../styles/createCards.css';
import '../styles/types.css';

function CreateCards({ pokeMap }) {
  const [pokemonAtual, setaPokemon] = useState({});

  useEffect(() => {
    axios(pokeMap.url).then(({ data }) => {
      setaPokemon(data);
    });
  }, [pokeMap]);

  return (
    Object.keys(pokemonAtual).length > 0 && (
    <div key={pokemonAtual.id} className={`card-pokemon ${pokemonAtual.id}`}>
      <div className="fundo-img">
        <img className="pokemon-img" src={pokemonAtual.sprites.front_default} alt={`Imagem do pokemon ${pokemonAtual.name}`} />
      </div>
      <div className="pokemon-info">
        <p className="pokemon-id">{`Nº ${pokemonAtual.id}`}</p>
        <p className="pokemon-names">{pokemonAtual.name}</p>
        <div className="separar">
          <div className="type-pokemon">
            {pokemonAtual.types
              .map((alvo) => <div key={uuidv4()} className={`${alvo.type.name} x`}>{alvo.type.name}</div>)}
          </div>
        </div>
      </div>
    </div>
    )
  );
}

CreateCards.propTypes = {
  pokeMap: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateCards;
