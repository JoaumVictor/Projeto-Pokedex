import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import './index.scss';

export default function Pokemon() {
  const { pathname } = useLocation();
  const [pokemonData, setPokemonData] = useState({});
  // const [types, setTypes] = useState([]);

  const requestPokemonInfo = (pokemonId) => {
    axios(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(({ data }) => {
        setPokemonData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    requestPokemonInfo(pathname.split('/pokemon/')[1]);
  }, []);

  return (
    <>
      <Header />
      <div className="pokemon-container">
        { pokemonData && (
          <div className="pokemon-content-1">
            <img
              className="pokemon-content-1-image"
              src={pokemonData.sprites?.other['official-artwork'].front_default}
              alt="pokemon atual"
            />
            <div className="pokemon-content-1-info">
              <h2 className="capitalize">
                {pokemonData.name}
              </h2>
              <h2>
                {`Nº ${pokemonData.id}`}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
