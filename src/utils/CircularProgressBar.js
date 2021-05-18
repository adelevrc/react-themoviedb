import {Circle} from "rc-progress";
import React from "react";
import styled from "styled-components";

export const  CircularProgressBar = (voteAveragePercentage) => {

    const switchStrokeColor = () => {
        if (voteAveragePercentage >= 0 && voteAveragePercentage <= 35){
            return "#DB2360";
        } else if (voteAveragePercentage > 35 && voteAveragePercentage <= 65){
            return "#D2D530";
        } else {
            return "#1ECD78";
        }
    }

    const switchTrailColor = () => {
        if (voteAveragePercentage >= 0 && voteAveragePercentage <= 35){
            return "#571435";
        } else if (voteAveragePercentage > 35 && voteAveragePercentage <= 65){
            return "#423d0f";
        } else {
            return "#204529";
        }
    }

    return (
        <Container>
            <ProgressBar>
                <Circle percent={voteAveragePercentage} strokeWidth="7" trailWidth="7" strokeColor={switchStrokeColor()} trailColor={switchTrailColor()} style={{width:"4rem"}} />
                <PercentageParagraph> {voteAveragePercentage} % </PercentageParagraph>
            </ProgressBar>
            <Text> Note des utilisateurs </Text>
        </Container>


    )
}


const Container = styled.div`
    display:flex; 
    align-items:center; 
    width:10rem; 
  `

const Text = styled.p`
    width:2rem; 
    padding-left:1em; 
    font-weight:bold; 
`
const ProgressBar = styled.div`

    height:5rem; 
    display:flex;
    align-items:center; 
    justify-content:center;  
`

const PercentageParagraph = styled.p`
    position:absolute; 
    font-size:1.2rem; 
    font-weight:bold; 
    `