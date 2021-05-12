import {Circle} from "rc-progress";
import React from "react";
import styled from "styled-components";

export const  CircularProgressBar = (voteAveragePercentage) => {

    const switchColorStrokeColor = () => {
        if (voteAveragePercentage >= 0 && voteAveragePercentage <= 35){
            return "#DB2360";
        } else if (voteAveragePercentage > 35 && voteAveragePercentage <= 65){
            return "#D2D530";
        } else {
            return "#1ECD78";
        }
    }

    const switchColorTrailColor = () => {
        if (voteAveragePercentage >= 0 && voteAveragePercentage <= 35){
            return "#571435";
        } else if (voteAveragePercentage > 35 && voteAveragePercentage <= 65){
            return "#423d0f";
        } else {
            return "#204529";
        }
    }

    return (
        <ProgressBar>
            <Circle percent={voteAveragePercentage} strokeWidth="7" trailWidth="7" strokeColor={switchColorStrokeColor()} trailColor={switchColorTrailColor()} style={{width:"5rem"}} />
            <PercentageParagraph> {voteAveragePercentage} % </PercentageParagraph>
        </ProgressBar>

    )
}

const ProgressBar = styled.div`
  d
    height:5rem; 
    display:flex;
    align-items:center; 
    justify-content:center;  
`

const PercentageParagraph = styled.p`
    position:absolute; 
    font-size:1.5rem; 
    `