import React, { Component } from 'react';

class Cronometer extends Component { // iniciar variáveis
  constructor(props) { // mais simples possivel 
    super(props);
    this.state = { seconds: 0 }; // define o estado incial
    // este estado definido "seconds" (seu valor) vai pra tela"
  }

  componentDidMount() { // primeira função a ser definida -> dispara sozinho
    // é chamado depois que o render() foi executado pela primeira vez
    console.log('Montou');
    const ONE_SECOND = 1000; // definição do valor do intervalo
    // segundo parametro de setInterval

    this.intervalID = setInterval(() => { // primeira função construida
        // define variável dentro de DidAmount
        // this para acessar setInterval fora de DidMount
        // função recebe dois parametros (funçao, de quanto em quanto tempo)
      console.log('Atualizou o estado');
      this.setState((prevState) => ({ // atualiza o estado
        // prevState = estado anterior de "seconds"
        seconds: prevState.seconds + 1, // vai acrescentando +1
      }));
    }, ONE_SECOND); 
  }

  componentDidUpdate(prevProps, prevState) { // segundo passo, depois de DidMount
    // atualiza o estado (acesso a prop anteriores, acessa estado anterior)
    console.log('Atualizou')
    const TIME_LIMIT = 10; // tempo maximo que vai o cronometro
    // const { seconds } = this.state;
    if (prevState.seconds === TIME_LIMIT) { // prevState acessa o estado anterior e compara
      alert('Acabou o tempo');
      this.setState({ seconds: 0 }); // define o valor do estado de seconds pra 0 se a condiçao é atingida
    }
  } // este component é executado toda vez que o estado muda

  componentWillUnmount() { // passso pos DidUpdate
      // metodo ser ser executado quando componente for desmontado
    clearInterval(this.intervalID); // parar intervalo (acessar o valor do ID do intervalo que é gerado em setInterval)
  } // limpar o intervalo

  render() {
    const { seconds } = this.state; // acessa o valor de seconds(valor do estado)
    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;
// Ciclo de vida
// Montagem:
// constructor ()
// render(); monta o DOM
// componentDidMount(); é chamado dps do render -> aqui vai req api
// Atualizaçoes:
// novas props
// mudança no estado
// render() é chamado de novo: atualizar DOM
// componentDidUpdate() é sempre chamado quando ha atualizações
// Desmontagem
// componentWillUnmount(); retirar do DOM
// utilizar estruturas que o react tem, DidMount, WillMount -> da controle ao React
// DidMount executa so uma vez
// Ordem de execução
// DidMount uma unica vez
// executa setInterval()
// componentDidUpdate
// volta pra setInterval dps DidUpdate e assim vai
// depois que chama render vai o DidUpdate
// componentDidUpdate -> setState so pode ser incluido dentro de condiçoes
// montou = renderizou