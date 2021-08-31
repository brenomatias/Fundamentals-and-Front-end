import React from 'react';

class MovieList extends React.Component {
    render() {
        return (
         <div className="movieList">
         <p>Movies</p>
         {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        );
    }
}

export default MovieList;