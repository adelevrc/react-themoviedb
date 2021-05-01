import React from 'react'; 
import styled from 'styled-components'; 
import { motion } from 'framer-motion'; 

import Popular from '../components/Popular'; 
import TopRated from '../components/TopRated'; 

const Home= () => {


    return(
        <StyledHome>
            <Popular /> 
            <TopRated />
        </StyledHome>
    )
}

const StyledHome = styled(motion.div)`
display:flex; 
flex-direction:column; 
align-items:center;
`


export default Home; 