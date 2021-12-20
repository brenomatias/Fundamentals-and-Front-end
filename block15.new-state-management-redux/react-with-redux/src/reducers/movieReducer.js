
import categories from "../data";

const INITIAL_STATE = {
    selectedCategory: 'Luanderson',
    selectedMovie: '14bis',
    categories: categories,
}

function movieReducer(state = INITIAL_STATE, action){
    if(action.type === 'SELECT_MOVIE'){
        return {
            ...state,
            selectedCategory: action.category,
            selectedMovie: action.movie,
        }
    }
    return state;
}

export default movieReducer;