
import React, { Component } from 'react'

class Components extends Component {
    render(){ // função que faz renderizar o conteúdo na tela
        return ( 
        <div className="div"> 
        <span>breno</span> 
        <p>Começando os estudos do react</p>
        <div>Hello {this.props.toWhat}</div>;
        </div>)
    }
}

export default Components

// primeiro componente de classe react.


// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }