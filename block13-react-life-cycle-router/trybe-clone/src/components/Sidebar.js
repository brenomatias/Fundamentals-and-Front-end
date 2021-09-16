import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <h4>Curso</h4>
        <nav>
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lecture">Aulas ao vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </section>
    );
  }
}

export default Sidebar;

// The primary way to allow users to navigate around your application. <Link> will render a fully accessible anchor tag with the proper href.
// Link to=rota
// o link vai redirecionar a pagina no evento clique par a pagina definida
// ao clicar em um elemento do sidebar ele vai direcionar a renderizaçao
// para o conteudo que existe na pagina linkada
// o link to vai fazer conexão com o Route em Content.js 
// ou seja, em Link to criamos um caminho de conexão
// Link to cria o caminho e Route recebe para exibiro que esta na pagina