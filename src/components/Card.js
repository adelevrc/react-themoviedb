import React from 'react'; 
import {smallPosterSizePath} from '../utils/ImageSize';
import {useDispatch} from 'react-redux'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 
import {loadMovieDetail} from '../actions/movieDetailAction';
import {loadMovieCredits} from '../actions/movieCrewAction';
import { Link } from 'react-router-dom'; 


const Movie = ({title, released, id, poster}) => {
    const dispatch = useDispatch();
    const imageURL = `${smallPosterSizePath}${poster}`;

    const loadDetailsHandler = () => {
        dispatch(loadMovieDetail(id));
        dispatch(loadMovieCredits(id));
    }

    return (
     
            <div>
                <StyledCard>
                    <Link to={`movies/${id}`}>
                        <img src={`${imageURL}`} alt={title} onClick={loadDetailsHandler}></img>
                    </Link>
                    <h3> {title} </h3>
                    <p> {released} </p>
                </StyledCard>
            </div>
  
    )
}

const StyledCard = styled(motion.div)`
    display:flex; 
    flex-direction:column; 
    border-radius:10px;
    background:transparent; 
    margin: 0.5rem; 
    overflow:hidden;
    width:10rem; 
    img{
        height:30vh;
        object-fit:cover;
        border-radius:10px;
    }
`
export default Movie; 