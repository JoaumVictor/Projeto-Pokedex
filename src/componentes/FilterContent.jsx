import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/FilterContent.css';
import Button from './Button';

function FilterContent({
  inputNome, funcInputNome, funcFiltraNome, escolheGeracao,
}) {
  const [busca, setBusca] = useState('');
  const [carrega, setCarrega] = useState(false);
  const setaBusca = ({ target }) => {
    setBusca(target.id);
  };

  useEffect(() => {
    if (carrega) {
      escolheGeracao(busca);
    }
    setCarrega(true);
  }, [busca]);

  return (
    <div className="filtros-content">
      <div className="content-generations">
        <Button id="primeira" classe="but" value="1ª geração" onClick={setaBusca} />
        <Button id="segunda" classe="but" value="2ª geração" onClick={setaBusca} />
        <Button id="terceira" classe="but" value="3ª geração" onClick={setaBusca} />
        <Button id="quarta" classe="but" value="4ª geração" onClick={setaBusca} />
        <Button id="quinta" classe="but" value="5ª geração" onClick={setaBusca} />
        <Button id="sexta" classe="but" value="6ª geração" onClick={setaBusca} />
        <Button id="setima" classe="but" value="7ª geração" onClick={setaBusca} />
        <Button id="oitava" classe="but" value="8ª geração" onClick={setaBusca} />
      </div>
      <div className="content-name">
        <h2>Nome ou ID</h2>
        <input onChange={funcInputNome} value={inputNome} className="filtra-nome" type="text" />
        <span className="search">
          <ion-icon onClick={funcFiltraNome} name="search-outline" />
        </span>
      </div>
    </div>
  );
}

FilterContent.propTypes = {
  inputNome: PropTypes.string.isRequired,
  funcInputNome: PropTypes.func.isRequired,
  funcFiltraNome: PropTypes.func.isRequired,
  escolheGeracao: PropTypes.func.isRequired,
};

export default FilterContent;
