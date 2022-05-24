import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import Container from './CreateCardsStyled';
import './index.css';
import './PokemonTypes.css';

function CreateCards({ pokeMap }) {
  const navigate = useNavigate();
  const [pokemonAtual, setaPokemon] = useState({});

  useEffect(() => {
    axios(pokeMap.url).then(({ data }) => {
      setaPokemon(data);
    });
  }, [pokeMap]);

  const redirect = () => { navigate(`/pokemon/${pokemonAtual.id}`); };

  return (
    Object.keys(pokemonAtual).length > 0 && (
      <Container
        onClick={redirect}
        key={pokemonAtual.id}
        className={`card-pokemon ${pokemonAtual.id}`}
      >
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
      </Container>
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
