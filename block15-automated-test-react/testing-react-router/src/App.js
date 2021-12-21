import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Commnent from './components/Comment';

function App() {
  return (
      <main>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Sobre mimn</Link></li>
              <li><Link to='/projects'>Projetos</Link></li>
              <li><Link to='/comments'>Deixe um comentário</Link></li>
            </ul>
          </nav>
        </header>
        
        <Switch>
          <Route exact path='/'>
            <section>
              <h1>Página sobre mim</h1>
            </section>
          </Route>
          <Route path='/projects'>
            <section>
              <h1>Página de projetos</h1>
            </section>
          </Route>
          <Route path='/comments'>
            <Commnent />
          </Route>
          <Route>
            <section>
              <h1>Página não encontrada</h1>
            </section>
          </Route>
        </Switch>
      </main>
  );
}

export default App;