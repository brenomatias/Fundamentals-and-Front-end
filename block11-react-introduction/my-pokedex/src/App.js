import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
// em <Pokedex pokemons={pokemons} /> a func Pokedex está recebendo os dados de data.js como prop,
// dados que estao armazenados na const pokemons em data.js

