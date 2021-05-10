import React from 'react'; 
import { mediumBackdropPath } from '../utils'; 
import { useSelector } from 'react-redux'; 

import styled from 'styled-components'; 




const CardDetails = ({title, released,genres,backdrop, overview}) => {
    const {isLoading} = useSelector((state) => state.movieDetails)
    const imageURL = `${mediumBackdropPath}/${backdrop}`
    return(
        <>
        {!isLoading && (
            <StyledCardDetails> 
                <Background src={`${imageURL}`} alt={title} />
                <h1> {title} </h1> 
                <span> {released} </span>
                 
                {genres.map(genre => (
                    <h1> {genre.name} </h1>
                ))}
                <p> {overview} </p>
                <h2> Synopsis </h2>
            </StyledCardDetails>
        )}        
        </>
    )
}

const StyledCardDetails = styled.div`
    width:100%; 
    color:white;
`
const Background = styled.img`
    position:absolute;
    top: 0; 
    left: 0;
    z-index:-1;
    width:100%
`

export default CardDetails; 