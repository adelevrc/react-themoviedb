import axios from 'axios'; 
import {popularMoviesURL} from '../api'; 

export const loadMovies = () => async (dispatch) => {
    const popularMovies = await axios.get(popularMoviesURL()); 
    dispatch({
        type:"FETCH_MOVIES", 
        payload: {
            popular: popularMovies.data.results,
        },
    });
};
