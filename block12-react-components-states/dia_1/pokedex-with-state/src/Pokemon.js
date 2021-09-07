import React from 'react';
import './pokemon.css';

//este componente e responsavel pela construçao individual de cada pokemon

class Pokemon extends React.Component {
  render() {
    const { pokemon: {name, type, averageWeight, image}} = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
