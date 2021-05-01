import axios from 'axios'; 
import {movieDetailsURL} from '../api'; 

export const loadMovieDetail = (id) => async (dispatch) => {
  
    const movieDetails = await axios.get(movieDetailsURL(id)); 

    dispatch({
        type: "GET_MOVIE_DETAILS", 
        payload: {
            movie: movieDetails.data,
        }
    })
}