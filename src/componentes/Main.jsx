import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CreateCards from './CreateCards';
import FilterContent from './FilterContent';
import '../styles/main.css';

function Main() {
  const [listaDePokemons, setListaDePokemons] = useState([]);
  const [inputNome, setInputNome] = useState('');
  const [filtraNome, setFiltraNome] = useState('');
  const [vazio, setVazio] = useState(false);
  const [mensagem, setMensagem] = useState(false);
  const [pages, setPages] = useState({
    filtro: 'https://pokeapi.co/api/v2/pokemon/',
    iniciaPagina: true,
    primeira: 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    segunda: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151',
    terceira: 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251',
    quarta: 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386',
    quinta: 'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493',
    sexta: 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649',
    setima: 'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721',
    oitava: 'https://pokeapi.co/api/v2/pokemon?limit=89&offset=809',
  });

  const carregaPokemons = async (pagina) => {
    axios(pagina).then(({ data }) => {
      setListaDePokemons(data.results);
    });
    setPages({
      iniciaPagina: false,
    });
    setMensagem(false);
  };

  useEffect(() => {
    carregaPokemons(pages.primeira);
    if (!vazio) {
      console.log('Utilize a pokedéx com sabedoria XD');
    }
  }, []);

  const funcInputNome = ({ target }) => {
    setInputNome(target.value);
  };

  const buscaVazia = () => {
    const teste = listaDePokemons.filter((alvo) => alvo.name.includes(filtraNome));
    if (teste.length === 0) {
      setVazio(false);
      setMensagem(true);
      return;
    }
    setVazio(true);
    setMensagem(false);
  };

  useEffect(() => {
    if (!pages.iniciaPagina) {
      buscaVazia();
    }
  }, [filtraNome]);

  const realizaFiltro = () => {
    const inputNumber = Number(inputNome);
    if (inputNome === '') {
      setFiltraNome('');
      return;
    }
    if (Number.isNaN(inputNumber)) {
      setFiltraNome(inputNome);
      return;
    }
    const funcFiltraNome = (id) => {
      axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(({ data }) => {
          setFiltraNome(data.name);
        });
    };
    funcFiltraNome(inputNumber);
  };

  const funcFiltraTipo = (e) => {
    const buscar = e.target.value;
    console.log(buscar);
  };

  const escolheGeracao = () => {
    axios(pages.segunda).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <main className="main-content">
      <FilterContent
        inputNome={inputNome}
        funcInputNome={funcInputNome}
        funcFiltraNome={realizaFiltro}
        funcFiltraTipo={funcFiltraTipo}
        escolheGeracao={escolheGeracao}
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
        { mensagem && (
        <div className="mensagem-vazio">
          <p>Mensagem de pokemons vazios</p>
        </div>
        )}
      </div>
    </main>
  );
}

export default Main;
