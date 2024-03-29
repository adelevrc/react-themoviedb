import React from 'react';
import CardDetails from '../components/CardDetails'; 
import { useSelector } from 'react-redux';

const Details = () => {

    const {movie} = useSelector((state) => state.movieDetails);
    const {crew} = useSelector((state) => state.credits.credits);
    const {cast} = useSelector((state) => state.credits.credits);

    const retrieveDatafromCredits = async (credits) => {
        // je veux récupérer tous les crédits
        // je veux ensuite séparer le crew du cast pour ne récupérer que le crew
        // je veux comparer le job de chaque agent où le job dans être 'Producer'
        // je filtre ces différentes clefs pour les enregistrer dans un noouveau tableau
        // je les affiche à l'écran

        const crew = await credits

        const newCrew = crew.filter(person => person.job === 'Producer')
        return newCrew
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