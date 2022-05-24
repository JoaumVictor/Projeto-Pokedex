import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from './HeaderStyled';
import './index.css';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header-content">
      <Container onClick={() => navigate('/')}>
        <img className="header-img" src="https://cdn.dribbble.com/users/1363206/screenshots/5497614/pokedex_dribbble-01_4x.jpg?compress=1&resize=1200x900&vertical=top" alt="" />
        <h1>Pokedex</h1>
      </Container>
      <p>
        Desenvolvido por:
        <a className="dev" rel="noreferrer" target="_blank" href="https://github.com/JoaumVictor">
          {' Victor Fausto'}
        </a>
      </p>
    </header>
  );
}

export default Header;
