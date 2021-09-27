import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testa se a aplicação renderiza os componentes corretamente', () => {
  it('deveria exibir `Carregando...`na tela', () => {
    render(<App />)

    const loadingElement = screen.getByText('Carregando...')
    expect(loadingElement).toBeInTheDocument();
  })

  it('deveria exibir um jogo após o carregamento', async () => {
    render(<App />)

    const loadingElement = screen.getByText('Carregando...')
    await waitForElementToBeRemoved(loadingElement, { timeout: 2500})
    const titles = screen.getAllByRole('heading', {level: 3 })
    expect(titles[0].textContent).toBe('Minecraft')
  })

  it('deveria exibir as informações do jogo na tela de detalhes', async () => {
    render(<App />)

    const loadingElement = screen.getByText('Carregando...')
    await waitForElementToBeRemoved(loadingElement, { timeout: 2500})    
    
    const linkToDetails = screen.getAllByRole('link')
    fireEvent.click(linkToDetails[1])

    const loadingElement2 = screen.getByText('Carregando...')
    await waitForElementToBeRemoved(loadingElement2, { timeout: 2500})

    const relaseYear = screen.getByText(/2013/)
    expect(relaseYear).toBeInTheDocument()
    const sales = screen.getByText(/115.000.000/)
    expect(sales).toBeInTheDocument()
  })
})