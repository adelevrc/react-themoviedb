import React, { useEffect, useState } from 'react'; 
import { loadMovies } from '../actions/moviesAction'; 
import { loadTvShows } from '../actions/TvShowsAction'; 
import { useDispatch, useSelector } from 'react-redux'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 
import {fadeIn } from '../animations'; 
import Card from './Card'; 

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
                <div className={`${moviesSelected ? 'selected-btn-background' : ''}`}>
                    <button className={`${moviesSelected ? 'selected-button' : ''}`} onClick={ToggleHandler}> 
                    <div className={`${moviesSelected ? 'green-font' : ''}`}>
                        Films
                    </div>
                    </button>
                </div>
                <div className={`${tvShowsSelected ? 'selected-btn-background' : ''}`}>
                    <button className={`${tvShowsSelected ? 'selected-button' : ''}`} onClick={ToggleHandler}> 
                    <div className={`${tvShowsSelected ? 'green-font' : ''}`}>
                        Séries 
                    </div>
                    </button>
                </div>
             
            </SelectorWrap>

            <h2> Populaires  </h2>

            { moviesSelected && 
            <div>
                <SliderPopular variants={fadeIn} initial="hidden" animate="show">
                    {popular.map(movie => (
                            <Card
                                title={movie.original_title}
                                released={movie.release_date}
                                id={movie.id}
                                poster={movie.poster_path}
                                key={movie.id}
                            />
                    ))}
                </SliderPopular>
            </div>
            }
            { tvShowsSelected && 
            <div>
                <SliderPopular variants={fadeIn} initial="hidden" animate="show">
                    {popularTvShows.map(tvShow => (

                        <Card
                            title={tvShow.original_title}
                            released={tvShow.release_date}
                            id={tvShow.id}
                            poster={tvShow.poster_path}
                            key={tvShow.id}
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
    justify-content:flex-start;
    width:50vh; 
    border: solid 1px rgba(3,37,65,1); ; 
    border-radius:30px; 
`; 

export default Popular; 