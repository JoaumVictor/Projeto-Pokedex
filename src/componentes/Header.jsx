import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header-content">
      <div>
        <img className="header-img" src="https://cdn.dribbble.com/users/1363206/screenshots/5497614/pokedex_dribbble-01_4x.jpg?compress=1&resize=1200x900&vertical=top" alt="" />
        <h1>Pokedex</h1>
      </div>
      <p>exemplo1</p>
      <p>exemplo2</p>
    </header>
  );
}

export default Header;
