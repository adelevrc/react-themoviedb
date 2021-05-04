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
    console.log(movie);

    return (
        <div>
            {movie.map(movieDetail=> (
                <CardDetails
                    title={movieDetail.original_title}
                    released={movieDetail.release_date}
                    id={movieDetail.id}
                    poster={movieDetail.poster_path}
                    key={movieDetail.id}
                    />
            ))}
        </div>
    )
}

export default Details; 