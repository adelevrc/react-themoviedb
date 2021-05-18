import axios from 'axios';
import {movieCrewURL} from '../api';

export const loadMovieCredits = (id) => async (dispatch) => {

    const movieCredits = await axios.get(movieCrewURL(id));

    dispatch({
        type: "GET_MOVIE_CREDITS",
        payload: {
            credits: movieCredits.data,
        }
    })
}
