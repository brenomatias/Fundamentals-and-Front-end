import { render } from '@testing-library/react';
import './App.css';
import pokemons from './data'; // importa os dados de data
import Pokemon from './pokemon' // importa o componente pokemon

function App() {
  return (
    pokemons.map(pokemon => ( // função map vai gerar outra matriz com os dados separados
      <div>
        <Pokemon name={pokemon.name} type={pokemon.type} image={pokemon.image} />
      </div>
    )))
}

export default App;
