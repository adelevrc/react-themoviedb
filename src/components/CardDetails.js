import React from 'react';
import {largePosterSizePath, mediumBackdropPath} from '../utils/ImageSize';
import {useSelector} from 'react-redux';
import {CircularProgressBar} from '../utils/CircularProgressBar';
import styled from 'styled-components';


const CardDetails = ({title, released,genres,backdrop, overview, poster, runtime, tagline, voteAverage, cast, crew }) => {
    const {isLoading} = useSelector((state) => state.movieDetails)

    const backdropURL = `${mediumBackdropPath}/${backdrop}`;
    const posterURL = `${largePosterSizePath}${poster}`;

    const hoursInRuntime = Math.floor(runtime / 60);
    const minutesInRuntime = runtime % 60;
    const convertedTime = hoursInRuntime + "h" + minutesInRuntime;

    let voteAveragePercentage = voteAverage * 10;


    return(
        <>
        {!isLoading && (
            <div>
                <StyledImage>
                    <Poster src={posterURL}/>
                    <Background style={{ backgroundImage: `url(${ backdropURL })`,
                    }} />
                </StyledImage>
                <Content>
                    <div className="block-title-content">
                        <h1> {title} </h1>
                        <div className="subtitle">
                            <span> {released} </span>
                            <div className="round"/>
                            {genres.map(genre => (
                                <span> {genre.name}, </span>
                            ))}
                            <div className="round"/>
                            <p> {convertedTime}</p>
                        </div>
                    </div>

                    {CircularProgressBar(voteAveragePercentage)}

                    <p className="tagline"> {tagline} </p>
                    <h2> Synopsis </h2>
                    <p> {overview} </p>
                </Content>
            </div>
        )}        
        </>
    )
}

const StyledImage = styled.div`
    display:flex; 
    justify-content:flex-end; 
    background :linear-gradient(to right, rgba(3.14%, 1.96%, 3.14%, 1.00) 150px, rgba(3.14%, 1.96%, 3.14%, 0.84) 100%); 
`
const Poster = styled.img`
    height:70vh; 
    padding-left: 6rem
`
const Background = styled.div`
    z-index:-1;
    width:100%;
    height:70vh; 
    background-repeat: no-repeat;
    background :linear-gradient(to right, rgba(3.14%, 1.96%, 3.14%, 1.00) 150px, rgba(3.14%, 1.96%, 3.14%, 0.84) 100%); 
`
const Content = styled.div`
    color:#fff;
    top : 2rem; 
    left:30rem; 
    position:absolute; 
    margin-left:3rem; 
    display:flex; 
    flex-direction:column; 
    align-items:flex-start; 
    width:60%; 
`

export default CardDetails; 