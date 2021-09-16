import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Solutions extends Component {
  render() {
    const { allSolutions } = this.props; // para exibir os estados definidos em Content.js
    return (
      <section>
    <h1>Solutions</h1>
    <ul>
      {allSolutions.map((mySolution)=> ( // renderizar o conteudo no li
        <li key={ mySolution.id}>
          <Link 
             to={`/solutions/${mySolution.id}`} > {mySolution.name}
         </Link>
         </li>
      ))}
    </ul>
    </section>
    );
  }
}

export default Solutions;