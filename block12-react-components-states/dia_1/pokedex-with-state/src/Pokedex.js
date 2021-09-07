import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';
//The JavaScript this keyword refers to the object it belongs to.

class Pokedex extends React.Component { 
  constructor(props) { // Typically, in React constructors are only used for two purposes:
    //Initializing local state by assigning an object to this.state.
    //Binding event handler methods to an instance.
    super(props); //  you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor
    this.state = {pokemonIndex: 0, filteredType: 'all'}; // inicia o estado dos objetos
  } // colocando index:0 será responsavel por exibir um pokemon por vez (i estado inicial sao todos pokemons)

  filterPokemons(filteredType) { // esta funçao será responsável por fazer o filtro
    this.setState({filteredType, pokemonIndex: 0}); // setState = This is the primary method you use to update the user interface
  } // essa função será usada para renderizar as mudanças ativadas pelo evento do usuário na interface

  nextPokemon(numberOfPokemons) { // essa é a função de inicio para passar os pokemons no clique
    this.setState(state => ({ // state = previousState
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    })); // esta atribuição será responsável por passar pelos pokemons da lista
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props;
    const {filteredType} = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const {pokemons} = this.props;

    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex]; // inicia um pokemon de cada vez (recebe o estado inicial)

    return ( // Pokemon é componente criado em Pokemon.js que vai receber como propriedade o estado inicial do index(pokemonIdex:0)
      <div className="pokedex">
        <Pokemon pokemon={pokemon} /> 
        <div className="pokedex-buttons-panel"> 
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button">
            All
          </Button>
          {pokemonTypes.map(type => ( // se tivesse usado so a funçao map normal aqui sem o filtro iria mostrar a lista toda
            <Button // esta funçao e responsavel por fazer um map no tipo selecionado, ou seja, vai exibir apenas pokemons do tipo selecionado
              key={type}
              onClick={() => this.filterPokemons(type)} // aqui o map vai receber dentro dele a funçao de filtro
              className="filter-button">  
            {type}
            </Button> // este {type} é responśavel por renderizar os tipos de pokemons na tela para serem filtrados
          ))} 
        </div>
        <Button
          className="pokedex-button" // os pokemons serão filtrados de acordo com o tipo aqui tambem ou em all pokemons
          onClick={() => this.nextPokemon(filteredPokemons.length)}>
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;


// as funções filterPokemons, nextPokemon e fetchFilteredPokemons sao as responsaveis por fazer a lista passar por 
// um pokemon de cada vez