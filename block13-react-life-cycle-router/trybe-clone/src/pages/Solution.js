import React, { Component } from 'react';

class Solution extends Component {
    render(){
        const { match: { params: { solutionID }}, allSolutions} = this.props;
        const currentSolution = allSolutions
        .find((mySolution) => mySolution.id === solutionID)
        return (
            <>
            <h1>{ currentSolution.name }</h1>
            <p>{`Retorno de ${currentSolution.id}`}</p>
            </>
        )
    }
}

export default Solution;
// find= retorna o primeiro elemento encontraado que bate