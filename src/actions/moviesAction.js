import axios from 'axios'; 
import {popularMoviesURL, topRatedMoviesURL, upcomingMoviesURL,nowPlayingMoviesURL} from '../api'; 

export const loadMovies = () => async (dispatch) => {
    const popularMovies = await axios.get(popularMoviesURL()); 
    const upcomingMovies = await axios.get(upcomingMoviesURL()); 
    const topRatedMovies = await axios.get(topRatedMoviesURL()); 
    const nowPlayingMovies = await axios.get(nowPlayingMoviesURL()); 

    dispatch({
        type:"FETCH_MOVIES", 
        payload: {
            popular: popularMovies.data.results,
            upcoming:upcomingMovies.data.results, 
            topRated: topRatedMovies.data.results, 
            nowPlaying: nowPlayingMovies.data.results
        },
    });
};
