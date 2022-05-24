import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button/Button';

export default function PokemonNotFound({ escolheGeracao }) {
  return (
    <div className="mensagem-vazio">
      <h2>Nenhum pokémon corresponde a sua pesquisa</h2>
      <br />
      <ul>
        <li>Procure por um pokémon de cada vez</li>
        <li>
          Tente procurar em
          {' '}
          <Button id="tudo" classe="but todos" value="Todos os pokémons" onClick={escolheGeracao} />
        </li>
      </ul>
    </div>
  );
}

PokemonNotFound.propTypes = {
  escolheGeracao: PropTypes.func.isRequired,
};
