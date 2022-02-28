import React from 'react';
import PropTypes from 'prop-types';

import '../styles/FilterContent.css';

function FilterContent({ inputNome, funcInputNome, funcFiltraNome }) {
  return (
    <div className="filtros-content">
      <div className="content-name">
        <h2>Filtrar por Nome</h2>
        <input onChange={funcInputNome} value={inputNome} className="filtra-nome" type="text" />
        <span className="search">
          <ion-icon onClick={funcFiltraNome} name="search-outline" />
        </span>
      </div>
      <div className="content-type">
        <h2>Filtrar por Tipo</h2>
        <input type="text" className="content-type" disabled placeholder="em desenvolvimento" />
      </div>
    </div>
  );
}

FilterContent.propTypes = {
  inputNome: PropTypes.string.isRequired,
  funcInputNome: PropTypes.func.isRequired,
  funcFiltraNome: PropTypes.func.isRequired,
};

export default FilterContent;
