
import React from 'react'
import { connect } from 'react-redux';

import * as movieActions from '../actions/movieActions';

class Sidebar extends React.Component {

  render() {
    const { categories, dispararAcaoSelecionarFilme, test1, test2 } = this.props;
    return (
      <aside>
       <p> {test1} </p>
        {
          categories.map(category => ( // categories é recebida pelo Provider através da store em App.js
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                { 
                  category.movies.map(movie => (
                    <li key={movie.id}>
                      <button type='button' onClick={() => dispararAcaoSelecionarFilme(category, movie)}>
                        {movie.title} was released in {movie.released}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
}

function mapStateToProps(state){
  return {
    categories: state.movie.categories,
    test1: state.selectedCategory,
    test2: state.selectedMovie
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispararAcaoSelecionarFilme: (category, movie) => dispatch(movieActions.selectMovie(category, movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);