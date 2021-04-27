import axios from 'axios'; 
import {popularTvShowsURL} from '../api'; 

export const loadTvShows = () => async (dispatch) => {
    const popularTvShows = await axios.get(popularTvShowsURL()); 
    dispatch({
        type:"FETCH_TV_SHOWS", 
        payload: {
            popular: popularTvShows.data.results,
        },
    });
};
