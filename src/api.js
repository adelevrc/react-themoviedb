const base_url = 'https://api.themoviedb.org/3/'; 
const API_KEY = '85ab3097ed17406d1f0a73c4321c4bca'; 

const popular_movies = `movie/popular?api_key=${API_KEY}&page=1`; 
const topRated_movies = `movie/top_rated?api_key=${API_KEY}&page=1`; 
const upcoming_movies = `movie/upcoming?api_key=${API_KEY}&page=1`; 
const nowPlaying_movies = `movie/now_playing?api_key=${API_KEY}&page=1`; 


 export const popularMoviesURL = () => `${base_url}${popular_movies}`; 
 export const topRatedMoviesURL = () => `${base_url}${topRated_movies}`; 
 export const upcomingMoviesURL = () =>  `${base_url}${upcoming_movies}`; 
 export const nowPlayingMoviesURL = () =>  `${base_url}${nowPlaying_movies}`; 


const popular_TV_shows = `tv/popular?api_key=${API_KEY}&page=1`


export const popularTvShowsURL = () => `${base_url}${popular_TV_shows}`; 
