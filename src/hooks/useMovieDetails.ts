import { useState, useEffect } from 'react';
import movieDB from '../api/MovieDB';
import { MovieCredits, MovieDetails, MovieFull } from '../interfaces';

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<MovieCredits>(`${movieId}/credits`);

        const [movieDetailsResponse, castResponse] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castResponse.data.cast,
        });

    };

    useEffect(() => {
        getMovieDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        ...state,
    };
};
