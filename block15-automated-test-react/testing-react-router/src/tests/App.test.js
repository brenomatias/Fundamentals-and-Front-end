import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa a aplicação meu portfolio', () => {
  test('se exibi o titulo da página', () => {
    renderWithRouter(<App />);             // incialmente essa parte utiliza apenas render(<App />)

    const title = screen.getByRole('heading', {
      level: 1,
      name: 'Página sobre mim',
     })

    expect(title).toBeInTheDocument();
  });

// level é "nivel" do component a ser testado. Essa informação e necessaria 
// para buscarmos o texto exato. Por ex: h1, tem level 1.
// name: '' é o que se espera buscar, o texto especifico
// screen.getByRole('role', {objeto de configuraçao(level, name)})


  test('se ao clicar no link `Projetos` renderiza a página de projetos', () => {
    const { history } = renderWithRouter(<App />);

    const linkProjects= screen.getByRole('link', { name: 'Projetos'}) // elemento para clicar

    userEvent.click(linkProjects); // chamar o evento de clique para teste

    const title = screen.getByRole('heading', {
      level: 1,    // se é h1 o nivel é 1
      name: 'Página de projetos',
     })

    expect(history.location.pathname).toBe('/projects')

    expect(title).toBeInTheDocument();
  });

// mesma ideia do teste acima. parei no minuto 33:13
  test('se ao clicar no link `deixe um comentário` renderiza a página de comentário', () => {
    const { history } = renderWithRouter(<App />);
    
    const linkComments= screen.getByRole('link', { name: 'Deixe um comentário'})

    userEvent.click(linkComments);

    const title = screen.getByRole('heading', {
      level: 1,
      name: 'Comente!!',
     })
    
    expect(history.location.pathname).toBe('/comments')

    expect(title).toBeInTheDocument();
  });




  test('se a rota `comments` exibe o input e o botão', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comments');

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
  });

  test('se a página `não encontrada` é exibida na tela quando não uma rota correspondente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/rota-que-nao-existe');

    const textNotFound = screen.getByRole('heading', {
      level: 1,
      name: 'Página não encontrada'
    })

    expect(textNotFound).toBeInTheDocument();

  });
})