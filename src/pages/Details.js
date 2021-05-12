import React, {useEffect } from 'react'; 
import CardDetails from '../components/CardDetails'; 
import { loadMovieDetail } from '../actions/movieDetailAction'; 
import {useDispatch, useSelector } from 'react-redux'; 

const Details = () => {

    const dispatch = useDispatch(); 
    useEffect(() => (
        dispatch(loadMovieDetail())
        ),[dispatch]); 
    
    const {movie} = useSelector((state) => state.movieDetails); 
    return (
        <div>
            <CardDetails 
               title={movie.original_title}
               released={movie.release_date}
               backdrop={movie.backdrop_path}
               poster={movie.poster_path}
               key={movie.id}
               genres={movie.genres}
               overview={movie.overview}
               runtime={movie.runtime}
               tagline={movie.tagline}
               voteAverage={movie.vote_average}
            />
        </div>
    )
}

export default Details; 