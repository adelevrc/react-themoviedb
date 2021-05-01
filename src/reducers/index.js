import { combineReducers } from 'redux'; 
import moviesReducer from './moviesReducer'; 
import tvShowsReducer from './TvShowsReducer'; 
import movieDetailsReducer from './movieDetailsReducer'; 


const rootReducer = combineReducers ({
    movies: moviesReducer, 
    tvShows: tvShowsReducer,
    movieDetails: movieDetailsReducer,
})

export default rootReducer; 