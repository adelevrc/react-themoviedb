import React from 'react'; 
import {smallImageSizePath} from '../utils'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 


const Movie = ({title, released, id, poster}) => {

    const imageURL = `${smallImageSizePath}${poster}`; 
    console.log(imageURL);
    return (
        <Cards>
            <StyledCardsLine>
                <Card>
                    <img src={`${smallImageSizePath}${poster}`} alt={title}></img>
                    <h3> {title} </h3>
                    <p> {released} </p>
                </Card>
            </StyledCardsLine>
        </Cards>
    )
}



const StyledCardsLine = styled(motion.div)`
    display:inline-block;
`; 
const Cards = styled(motion.div)`
display:flex;
`

const Card = styled(motion.div)`
    display:flex; 
    flex-direction:column; 
    border-radius:10px;
    background:transparent; 
    margin: 1rem; 
    overflow:hidden;
    width:10rem; 
    padding-left:0.5rem; 
    img{
        height:30vh;
        object-fit:cover;
        border-radius:10px;
    }
`
export default Movie; 