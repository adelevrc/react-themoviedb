import { combineReducers } from 'redux'; 
import moviesReducer from './moviesReducer'; 
import tvShowsReducer from './TvShowsReducer'; 
import movieDetailsReducer from './movieDetailsReducer';
import movieCreditsReducer from "./movieCrewReducer";


const rootReducer = combineReducers ({
    movies: moviesReducer, 
    tvShows: tvShowsReducer,
    movieDetails: movieDetailsReducer,
    credits: movieCreditsReducer,
})

export default rootReducer; 