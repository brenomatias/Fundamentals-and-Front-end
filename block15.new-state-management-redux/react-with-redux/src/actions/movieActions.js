
export function selectMovie(category, movie){
    return {
        type: 'SELECT_MOVIE',
        category: category,
        movie: movie
    }
}