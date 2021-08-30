// este componente representa um pokemon.
// note que aqui não é necessário importar o data.js

import React from 'react'; // JSX transform turns it into regular JavaScript:

class Pokemon extends React.Component { // component estilo class
    render() { // fator fundamental na construção de classe component
        const { name, type, averageWeight, image } = this.props.pokemon; // define a prop
        // estes valores sao relacionados ao data. O que queremos exibir dos dados
        //'pokemon' é o valor da prop que definimos que será usada em outro codigo. (nome da proprieda)

        return (  // template literals e .(dot) para acessar os dados
            <div className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p> 
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div> 
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;