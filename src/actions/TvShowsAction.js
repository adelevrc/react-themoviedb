import axios from 'axios'; 
import {popularTvShowsURL, topRatedTvShowsURL } from '../api'; 

export const loadTvShows = () => async (dispatch) => {
    const popularTvShows = await axios.get(popularTvShowsURL()); 
    const topRatedTvShows = await axios.get(topRatedTvShowsURL());
    dispatch({
        type:"FETCH_TV_SHOWS", 
        payload: {
            popularTvShows: popularTvShows.data.results,
            topRatedTvShows: topRatedTvShows.data.results, 
        },
    });
};
