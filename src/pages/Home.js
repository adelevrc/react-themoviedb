import React from 'react'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 

import Popular from '../components/Popular'; 

const Home= () => {


    return(
        <StyledHome>
            <h1> Populaires  </h1>
            <Popular /> 
        </StyledHome>
    )
}

const StyledHome = styled(motion.div)`
display:flex; 
flex-direction:column; 
align-items:center;
`


export default Home; 