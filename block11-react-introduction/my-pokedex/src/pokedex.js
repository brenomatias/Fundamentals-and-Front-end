import React from 'react';
import Pokemon from './pokemon'; // importa o componente 

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(funcPoke => <Pokemon key={funcPoke.id} pokemon={funcPoke} />)} 
            </div>
        );
    }
}

export default Pokedex;
// this.props.pokemons define uma propriedade para a classe Pokedex chamada pokemons
// 'pokemons' será usado para renderizar no app.js (ou seja, a func Pokedex recebe pokemons como prop)
// em <Pokemon key={pokemon.id} pokemon={pokemon} /> vai rolar um map (criar uma nova array)
// na func Pokemon criada em pokemon.js
// a func Pokemin está recebendo suas propriedades. sua propriedade deifinida e chamada 'pokemon
// funcPoke é 