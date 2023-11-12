import { useEffect, useState } from 'react';
import movieDB from '../api/MovieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const movies = resp.data.results;
        setNowPlayingMovies(movies);

        setIsLoading(false);
    };

    useEffect(() => {
        // Now Playing
        getMovies();
    }, []);

    return {
        nowPlayingMovies,
        isLoading,
    };
};
