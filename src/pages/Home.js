import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { loadMovies } from '../actions/moviesAction'; 
import { loadTvShows } from '../actions/TvShowsAction'
import Movie from '../components/Movie'; 

import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 

const Home= () => {
    const dispatch = useDispatch(); 
    
    useEffect(() => (
    dispatch(loadMovies())
    ),[dispatch]); 

    useEffect(() => (
        dispatch(loadTvShows())
        ),[dispatch]); 

    // Get that data ! 

    const {popular, topRated, upcoming, nowPlaying} = useSelector((state) => state.movies)
    return(
        <StyledHome>
            <h1> Populaires  </h1>
            <SliderMovie>
                {popular.map(movie => (
                    <Movie
                        title={movie.original_title}
                        released={movie.release_date}
                        id={movie.id}
                        poster={movie.poster_path}
                    />
                ))}
            </SliderMovie>
        </StyledHome>
    )
}

const StyledHome = styled(motion.div)`
display:flex; 
flex-direction:column; 
align-items:center;
`

const SliderMovie = styled(motion.div)`
    display:flex; 
    width:90%; 
    height:40vh; 
    overflow-y:hidden;  
    overflow-x:scroll;
`; 
  

export default Home; 