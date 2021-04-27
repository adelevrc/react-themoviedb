import { combineReducers } from 'redux'; 
import moviesReducer from './moviesReducer'; 
import tvShowsReducer from './TvShowsReducer'; 


const rootReducer = combineReducers ({
    movies: moviesReducer, 
    tvShows: tvShowsReducer,
})

export default rootReducer; 