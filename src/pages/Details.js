import React from 'react';
import CardDetails from '../components/CardDetails'; 
import { useSelector } from 'react-redux';

const Details = () => {

    const {movie} = useSelector((state) => state.movieDetails);
    const {crew} = useSelector((state) => state.credits.credits);
    const {cast} = useSelector((state) => state.credits.credits);

    const retrieveDatafromCredits = async (credits) => {
        const crew = await credits
        const crewJob = await crew.map (y => y.job)
        const JobArray = []
        crew.forEach(element => JobArray.push(element.job))
        return crewJob
    }

    retrieveDatafromCredits(crew).then(r => console.log(r))

    return (
            <CardDetails
                key={movie.id}
                title={movie.original_title}
                released={movie.release_date}
                backdrop={movie.backdrop_path}
                poster={movie.poster_path}
                genres={movie.genres}
                overview={movie.overview}
                runtime={movie.runtime}
                tagline={movie.tagline}
                voteAverage={movie.vote_average}
                cast={cast}
                crew={crew}
            />
    )
}

export default Details; 