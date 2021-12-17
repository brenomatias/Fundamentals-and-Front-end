
// encapsula toda aplicação
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//BrowserRouter is a router implementation that uses the HTML5 history API to keep your UI in sync with the URL

import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render() {
    return ( // dizer para o BrowserRouter o que ele deve renderizar(qual a rota)
      <BrowserRouter>
        <div>
          Filhos do BrowserRouter
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
// "react-router-dom": "^5.3.0" package.json --> versao de navegador native
// conexão com o router, pode ser um problema as vezes
// BrowserRouter deve ficar acima e receber filhos
// pages = renderizados de acordo com a rota
