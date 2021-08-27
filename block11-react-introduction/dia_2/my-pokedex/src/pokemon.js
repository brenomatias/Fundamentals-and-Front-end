import React, { Component } from 'react'
import Pokemons from './data'

class Pokemon extends Component {
    render () {
       const {name, type, averageWeight, image} = this.props
        return (<span> {name} {type} {averageWeight} {image} </span>)
    }
}

export default Pokemon;