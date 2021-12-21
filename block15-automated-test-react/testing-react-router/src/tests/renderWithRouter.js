import { render } from '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemomryHistory } from 'history'


function renderWithRouter(component) { // abstraçao genérica para renderizar qualquer componente
    const customHistory = createMemomryHistory ()
    const selectorsRLT = render (
        <Router history={customHistory}>
            { component }
        </Router>
    );

    return { // retorna um objeto
        ...selectorsRLT, // spread para retornar tudo que tem dentro do objeto para ser possivel descontruir
        history: customHistory,
    }
}


// renderWithRouter(<QualquerComponente />)

// // retorno da função(objeto)
// // {
//     getByRole,
//     getByText
//     ...,
//     history,
// }

export default renderWithRouter;