
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          lalala
          <Header />
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// SPA - aplicaçao de pagina unica
// varias rotas que nao recarregam a página
// react router pra fazer roteamento do conteúdo
// "react-router-dom": "^5.3.0" package.json 
// conexão com o router, pode ser um problema as vezes