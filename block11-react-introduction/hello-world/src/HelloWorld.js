// adicionando componentes ao react

// *** import React from 'react' // primeiro passo é importar o react

// *** class helloWorld extends React.Component { // lógica de estruturaçao react. Funciona a base de classes
// os componentes sao estruturados com base na logica do react
// }  * sem destruturação

import React, { Component } from 'react'

class elloWorld extends Component {
    render(){ // função que faz renderizar o conteúdo na tela
        return <span>helloWorld</span>
    }
}

export default HelloWorld // usado para exportar arquivo js