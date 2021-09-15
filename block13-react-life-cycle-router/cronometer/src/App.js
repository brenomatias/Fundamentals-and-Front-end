// this code came from: https://github.com/tryber/sd-014-b-live-lectures/tree/lecture/13.1/cronometer/src
import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends React.Component {
  constructor() { // incializar as variável
    super();

    this.state = { // estado incial para para aparecer ou nao o cronometro
      showCronometer: false,
    };
  }

  // passo depois da condição ternária de "Cronometer"
  toggleDisplayCronometer = () => { // função se de se exibe ou nao o valor
    this.setState((prevState) => ({ // modifica o estado de showCronometer
      showCronometer: !prevState.showCronometer, // modificar o estado com base no estado anterior (prevState)
    })); // o estado recebe a negaçao "!" do estado anterior, ou seja, showCronometer seu valor de esado
  } // se usa arrow function nao precisa do bind

  render() {
    const { showCronometer } = this.state; // acessar valor do estado definido
    // desconstruido
    return ( // tudo aqui pra baixo é JSX(nao e javaScript)
    // apenas expressões, por isso o uso do ternário
      <main className="App">
        <section className="App-header">
          { showCronometer ? <Cronometer /> : ''} 
        </section>

        <button
          type="button"
          onClick={ this.toggleDisplayCronometer } // recebe a função de remover o Cronometro
        >
          { showCronometer ? 'Desligar cronometro' : 'Ligar cronometro'}
        </button>
      </main>
    );
  }
}

export default App;
// Primeira parte: renderização condicional
// Processo de exibir ou nao o cronometro
// showCronometer: estado inicial definido (aparecer ou nao o component "Cronometer")
// { showCronometer ? <Cronometer /> : ''}  condicional. retorna '' (vazio ) se for falso
// operador ternário
// JSX apenas chama expressoes 
// {condiçao ? true : false}
// se showCronomer ? o que exibir se for true(o que exibir se for verdadeiro) e false(o que exibir se for falso)
// Passo após criar função toggleDisplayCronometer
// { showCronometer ? 'Desligar cronometro' : 'Ligar cronometro'}
// se showCronometer:true exibe 'Desligar cronometro'
// se showCronometer:false exibe 'Desligar cronometro'
