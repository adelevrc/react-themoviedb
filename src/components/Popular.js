import React, { useEffect, useState } from 'react'; 
import { loadMovies } from '../actions/moviesAction'; 
import { loadTvShows } from '../actions/TvShowsAction'; 
import { useDispatch, useSelector } from 'react-redux'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 

import Movie from '../components/Movie'; 



const Popular = () => {
    const dispatch = useDispatch(); 
    useEffect(() => (
        dispatch(loadMovies())
        ),[dispatch]); 
    
    useEffect(() => (
        dispatch(loadTvShows())
        ),[dispatch]);
        
    const [moviesSelected, setMovieSelected] = useState(true); 
    const [tvShowsSelected, settvShowsSelected] = useState(false); 
    const {popular} = useSelector((state) => state.movies)
    const {popularTvShows} = useSelector((state) => state.tvShows)

    const ToggleHandler = () => {
        setMovieSelected(!moviesSelected); 
        settvShowsSelected(!tvShowsSelected); 
    }


    return (
        <div>
        <StyledPopular>
            <SelectorWrap> 
                <button onClick={ToggleHandler}> Films </button>
                <button onClick={ToggleHandler}> Séries </button>
            </SelectorWrap>

            { moviesSelected && 
            <div>
                <h1> Film </h1>
                <SliderPopular>
                    
                    {popular.map(movie => (
                        <Movie
                            title={movie.original_title}
                            released={movie.release_date}
                            id={movie.id}
                            poster={movie.poster_path}
                        />
                    ))}
                </SliderPopular>
            </div>
            }
            { tvShowsSelected && 
            <div>
                <h1> Séries </h1>
                <SliderPopular>
                    {popularTvShows.map(tvShow => (
                        <Movie
                            title={tvShow.original_title}
                            released={tvShow.release_date}
                            id={tvShow.id}
                            poster={tvShow.poster_path}
                        />
                    ))}
                    </SliderPopular>
            </div>
            }
        </StyledPopular>
        </div> 
    )
}

const SliderPopular = styled(motion.div)`
    display:flex; 
    height:45vh; 
    width:90vw; 
    overflow-y:hidden;  
    overflow-x:scroll;
    `; 

const StyledPopular = styled(motion.div)`
    display:flex; 
    flex-direction:column;
`; 

const SelectorWrap = styled(motion.div)`
    display:flex; 
    flex-direction:row; 
    justify-content:space-evenly;
    width:50vh; 
    z-index:3; 
`; 

  
export default Popular; 