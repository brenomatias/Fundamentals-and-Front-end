
import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { category, movie } = this.props; 
    return (
      <div>
        <h1>{ category }</h1>
        <h2>{ movie } </h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    category: state.movie.selectedCategory.name,
    movie: state.movie.selectedMovie.title,
  }
}

export default connect(mapStateToProps)(Player);