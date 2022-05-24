import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function ButtonsContent({ trocaPagina }) {
  return (
    <section className="botoes-content">
      <button onClick={trocaPagina} type="button" className="button-load button-css">Carregar Mais Pokemons</button>
    </section>
  );
}

ButtonsContent.propTypes = {
  trocaPagina: PropTypes.func,
};

ButtonsContent.defaultProps = {
  trocaPagina: PropTypes.func,
};

export default ButtonsContent;
