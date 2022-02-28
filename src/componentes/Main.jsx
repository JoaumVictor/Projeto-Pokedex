import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ButtonsContent from './ButtonsContent';
import CreateCards from './CreateCards';
import '../styles/main.css';
import FilterContent from './FilterContent';

function Main() {
  const [listaDePokemons, setListaDePokemons] = useState([]);
  const [inputNome, setInputNome] = useState('');
  const [filtraNome, setFiltraNome] = useState('');
  const [pages, setPages] = useState({
    inicial: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
    proxPag: '',
  });

  const carregaPokemons = () => {
    axios(pages.inicial).then(({ data }) => {
      setListaDePokemons(data.results);
      setPages({
        proxPag: data.next,
      });
    });
  };

  useEffect(() => {
    carregaPokemons();
  }, []);

  const carregaProxPokemons = () => {
    axios(pages.proxPag).then(({ data }) => {
      const listaNova = listaDePokemons.concat(data.results);
      setListaDePokemons(listaNova);
      pages.proxPag = data.next;
    });
  };

  const funcInputNome = ({ target }) => {
    setInputNome(target.value);
  };

  const realizaFiltro = () => {
    // if (inputNome === '') {
    //   setFiltraNome('');
    //   return;
    // }
    // console.log(typeof inputNome);
    // const teste = Number(inputNome);
    // console.log(typeof teste);
    // console.log(teste);
    // if (Number.isNaN(teste)) {
    //   console.log('Você digitou uma palavra');
    //   setFiltraNome(inputNome);
    //   return;
    // }
    // alert('Por favor, digite apenas letras!');
    setFiltraNome(inputNome);
  };

  return (
    <main className="main-content">
      <FilterContent
        inputNome={inputNome}
        funcInputNome={funcInputNome}
        funcFiltraNome={realizaFiltro}
      />
      <div className="pokemons-container">
        { listaDePokemons
          .filter((alvo) => alvo.name.includes(filtraNome))
          .map((alvo) => (
            <CreateCards
              key={alvo.name}
              pokeMap={alvo}
            />
          )) }
      </div>
      <ButtonsContent trocaPagina={carregaProxPokemons} />
    </main>
  );
}

export default Main;
